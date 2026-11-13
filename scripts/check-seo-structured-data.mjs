import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const registry = JSON.parse(fs.readFileSync(path.join(root, 'SEO_CONTENT_REGISTRY.json'), 'utf8'));
const footer = fs.readFileSync(path.join(root, 'src/components/Footer.tsx'), 'utf8');
const serviceAndLocationPages = registry.pages.filter((page) =>
  page.category === 'services' || page.category === 'locations'
);
const footerDestinations = new Set(
  [...footer.matchAll(/href="([^"]+)"/g)].map((match) => match[1])
);
const missingFooterLinks = serviceAndLocationPages.filter((page) => !footerDestinations.has(page.url));

if (missingFooterLinks.length) {
  console.error('Sitemap service/locality routes missing from footer:');
  missingFooterLinks.forEach((page) => console.error(`  ${page.url} (${page.category})`));
  process.exitCode = 1;
} else {
  console.log(`Footer coverage passed: all ${serviceAndLocationPages.length} sitemap service/locality routes are linked.`);
}

function canonicalize(value) {
  if (Array.isArray(value)) return `[${value.map(canonicalize).join(',')}]`;
  if (value && typeof value === 'object') {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonicalize(value[key])}`).join(',')}}`;
  }
  return JSON.stringify(value);
}

function entityIdentity(entity) {
  if (entity['@id']) return `${entity['@type']}|${entity['@id']}`;
  const lastBreadcrumb = entity.itemListElement?.at?.(-1)?.item;
  const stableName = entity.name || entity.headline || entity.serviceType || entity.url || lastBreadcrumb;
  return stableName ? `${entity['@type']}|${stableName}` : `${entity['@type']}|${canonicalize(entity)}`;
}

function flattenEntities(value, output = []) {
  if (Array.isArray(value)) {
    value.forEach((entry) => flattenEntities(entry, output));
  } else if (value && typeof value === 'object') {
    if (Array.isArray(value['@graph'])) {
      value['@graph'].forEach((entry) => flattenEntities(entry, output));
    } else if (value['@type']) {
      output.push(value);
    }
  }
  return output;
}

const prerenderedPages = registry.pages.filter((page) => page.url !== '404.html');
const duplicateFindings = [];
for (const page of prerenderedPages) {
  const filePath = page.url === '/'
    ? path.join(root, 'dist/index.html')
    : path.join(root, 'dist', page.url, 'index.html');
  if (!fs.existsSync(filePath)) {
    duplicateFindings.push(`${page.url}: prerendered HTML not found`);
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf8');
  const scripts = [...html.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  const entities = [];
  for (const [, rawJson] of scripts) {
    try {
      flattenEntities(JSON.parse(rawJson), entities);
    } catch (error) {
      duplicateFindings.push(`${page.url}: invalid JSON-LD (${error.message})`);
    }
  }

  const seen = new Set();
  for (const entity of entities) {
    const key = entityIdentity(entity);
    if (seen.has(key)) duplicateFindings.push(`${page.url}: duplicate ${entity['@type']} entity (${key})`);
    seen.add(key);
  }
}

const breadcrumbPages = registry.pages.filter((page) =>
  (page.category === 'services' && page.url !== '/services/') ||
  page.url === '/fabrication-rates-bangalore/' ||
  page.category === 'locations'
);
const missingBreadcrumbs = [];
for (const page of breadcrumbPages) {
  const filePath = path.join(root, 'dist', page.url, 'index.html');
  if (!fs.existsSync(filePath)) {
    missingBreadcrumbs.push(`${page.url}: prerendered HTML not found`);
    continue;
  }
  const html = fs.readFileSync(filePath, 'utf8');
  const breadcrumbCount = [...html.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
    .filter(([, raw]) => {
      try { return flattenEntities(JSON.parse(raw), []).some((entity) => entity['@type'] === 'BreadcrumbList'); }
      catch { return false; }
    }).length;
  if (breadcrumbCount !== 1) missingBreadcrumbs.push(`${page.url}: expected one BreadcrumbList, found ${breadcrumbCount}`);
}

if (missingBreadcrumbs.length) {
  console.error('Breadcrumb structured-data checks failed:');
  missingBreadcrumbs.forEach((finding) => console.error(`  ${finding}`));
  process.exitCode = 1;
} else {
  console.log(`Breadcrumb check passed: one BreadcrumbList is present on all ${breadcrumbPages.length} service, rate-card, and locality pages.`);
}

if (duplicateFindings.length) {
  console.error('Prerendered JSON-LD checks failed:');
  duplicateFindings.forEach((finding) => console.error(`  ${finding}`));
  process.exitCode = 1;
} else {
  console.log(`JSON-LD check passed: no duplicate entities across ${prerenderedPages.length} prerendered routes.`);
}
