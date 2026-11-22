import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const registry = JSON.parse(fs.readFileSync(path.join(root, "SEO_CONTENT_REGISTRY.json"), "utf8"));
const footer = fs.readFileSync(path.join(root, "src/components/Footer.tsx"), "utf8");
const serviceAndLocationPages = registry.pages.filter((page) =>
  page.category === "services" || page.category === "locations"
);
const footerDestinations = new Set(
  [...footer.matchAll(/href="([^"]+)"/g)].map((match) => match[1])
);
const missingFooterLinks = serviceAndLocationPages.filter((page) => !footerDestinations.has(page.url));

if (missingFooterLinks.length) {
  console.error("Sitemap service/locality routes missing from footer:");
  missingFooterLinks.forEach((page) => console.error(`  ${page.url} (${page.category})`));
  process.exitCode = 1;
} else {
  console.log(`Footer coverage passed: all ${serviceAndLocationPages.length} sitemap service/locality routes are linked.`);
}

function canonicalize(value) {
  if (Array.isArray(value)) return `[${value.map(canonicalize).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonicalize(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

function entityIdentity(entity) {
  if (entity["@id"]) return `${entity["@type"]}|${entity["@id"]}`;
  const lastBreadcrumb = entity.itemListElement?.at?.(-1)?.item;
  const stableName = entity.name || entity.headline || entity.serviceType || entity.url || lastBreadcrumb;
  return stableName ? `${entity["@type"]}|${stableName}` : `${entity["@type"]}|${canonicalize(entity)}`;
}

function flattenEntities(value, output = []) {
  if (Array.isArray(value)) {
    value.forEach((entry) => flattenEntities(entry, output));
  } else if (value && typeof value === "object") {
    if (Array.isArray(value["@graph"])) {
      value["@graph"].forEach((entry) => flattenEntities(entry, output));
    } else if (value["@type"]) {
      output.push(value);
    }
  }
  return output;
}

const prerenderedPages = registry.pages.filter((page) => page.url !== "404.html");
const duplicateFindings = [];
for (const page of prerenderedPages) {
  const filePath = page.url === "/"
    ? path.join(root, "dist/index.html")
    : path.join(root, "dist", page.url, "index.html");
  if (!fs.existsSync(filePath)) {
    duplicateFindings.push(`${page.url}: prerendered HTML not found`);
    continue;
  }

  const html = fs.readFileSync(filePath, "utf8");
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
    if (seen.has(key)) duplicateFindings.push(`${page.url}: duplicate ${entity["@type"]} entity (${key})`);
    seen.add(key);
  }
}

// Comprehensive BreadcrumbList & Navigation Hierarchy Verification
const breadcrumbPages = registry.pages.filter((page) =>
  page.category === "services" ||
  page.url === "/fabrication-rates-bangalore/" ||
  page.category === "locations"
);

const missingBreadcrumbs = [];
const hierarchyErrors = [];
const clusterNavigationErrors = [];

for (const page of breadcrumbPages) {
  const filePath = page.url === "/"
    ? path.join(root, "dist/index.html")
    : path.join(root, "dist", page.url, "index.html");

  if (!fs.existsSync(filePath)) {
    missingBreadcrumbs.push(`${page.url}: prerendered HTML not found`);
    continue;
  }

  const html = fs.readFileSync(filePath, "utf8");
  const scripts = [...html.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  const breadcrumbEntities = [];
  for (const [, raw] of scripts) {
    try {
      flattenEntities(JSON.parse(raw), []).forEach((entity) => {
        if (entity["@type"] === "BreadcrumbList") breadcrumbEntities.push(entity);
      });
    } catch {}
  }

  if (breadcrumbEntities.length !== 1) {
    missingBreadcrumbs.push(`${page.url}: expected 1 BreadcrumbList, found ${breadcrumbEntities.length}`);
    continue;
  }

  const breadcrumb = breadcrumbEntities[0];
  const items = breadcrumb.itemListElement || [];

  // Hierarchy validation
  if (page.url === "/services/") {
    if (items.length !== 2) {
      hierarchyErrors.push(`${page.url}: expected 2 breadcrumb items, found ${items.length}`);
    } else {
      if (items[0].position !== 1 || items[0].item !== "https://samfabrication.in/") {
        hierarchyErrors.push(`${page.url}: item 1 should be Home (https://samfabrication.in/)`);
      }
      if (items[1].position !== 2 || items[1].item !== "https://samfabrication.in/services/") {
        hierarchyErrors.push(`${page.url}: item 2 should be Services (https://samfabrication.in/services/)`);
      }
    }
  } else if (page.category === "services" || page.url === "/fabrication-rates-bangalore/") {
    if (items.length !== 3) {
      hierarchyErrors.push(`${page.url}: expected 3 breadcrumb items, found ${items.length}`);
    } else {
      if (items[0].position !== 1 || items[0].item !== "https://samfabrication.in/") {
        hierarchyErrors.push(`${page.url}: item 1 should be Home (https://samfabrication.in/)`);
      }
      if (items[1].position !== 2 || items[1].item !== "https://samfabrication.in/services/") {
        hierarchyErrors.push(`${page.url}: item 2 should be Services (https://samfabrication.in/services/)`);
      }
      const expectedUrl = `https://samfabrication.in${page.url}`;
      if (items[2].position !== 3 || items[2].item !== expectedUrl) {
        hierarchyErrors.push(`${page.url}: item 3 should be ${expectedUrl}, got ${items[2].item}`);
      }
      if (!items[2].name || items[2].name.trim().length === 0) {
        hierarchyErrors.push(`${page.url}: item 3 name is missing or empty`);
      }
    }

    // Service-cluster navigation verification
    if (page.url.startsWith("/services/") && page.url !== "/services/") {
      const parentLink = html.includes('href="/services/"') || html.includes("href=\"/services/\"");
      if (!parentLink) {
        clusterNavigationErrors.push(`${page.url}: missing link to parent /services/ capabilities hub`);
      }
      const clusterLinks = [...html.matchAll(/href="(\/services\/[^"\/]+\/)"/g)].map((m) => m[1]);
      const uniqueClusterLinks = new Set(clusterLinks);
      if (uniqueClusterLinks.size < 4) {
        clusterNavigationErrors.push(`${page.url}: found only ${uniqueClusterLinks.size} related service cluster links`);
      }
    }
  } else if (page.category === "locations") {
    if (items.length !== 3) {
      hierarchyErrors.push(`${page.url}: expected 3 breadcrumb items, found ${items.length}`);
    } else {
      if (items[0].position !== 1 || items[0].item !== "https://samfabrication.in/") {
        hierarchyErrors.push(`${page.url}: item 1 should be Home (https://samfabrication.in/)`);
      }
      if (items[1].position !== 2 || items[1].item !== "https://samfabrication.in/areas-we-serve/") {
        hierarchyErrors.push(`${page.url}: item 2 should be Areas We Serve (https://samfabrication.in/areas-we-serve/)`);
      }
      const expectedUrl = `https://samfabrication.in${page.url}`;
      if (items[2].position !== 3 || items[2].item !== expectedUrl) {
        hierarchyErrors.push(`${page.url}: item 3 should be ${expectedUrl}, got ${items[2].item}`);
      }
    }
  }
}

if (missingBreadcrumbs.length) {
  console.error("Breadcrumb structured-data checks failed:");
  missingBreadcrumbs.forEach((finding) => console.error(`  ${finding}`));
  process.exitCode = 1;
} else {
  console.log(`Breadcrumb check passed: one BreadcrumbList is present on all ${breadcrumbPages.length} service, rate-card, and locality pages.`);
}

if (hierarchyErrors.length) {
  console.error("Breadcrumb hierarchy checks failed:");
  hierarchyErrors.forEach((err) => console.error(`  ${err}`));
  process.exitCode = 1;
} else {
  console.log(`Hierarchy check passed: all service and locality pages match the expected navigation hierarchy.`);
}

if (clusterNavigationErrors.length) {
  console.error("Service-cluster navigation checks failed:");
  clusterNavigationErrors.forEach((err) => console.error(`  ${err}`));
  process.exitCode = 1;
} else {
  console.log(`Service-cluster navigation check passed: all service pages contain parent and contextual cluster links.`);
}

if (duplicateFindings.length) {
  console.error("Prerendered JSON-LD checks failed:");
  duplicateFindings.forEach((finding) => console.error(`  ${finding}`));
  process.exitCode = 1;
} else {
  console.log(`JSON-LD check passed: no duplicate entities across ${prerenderedPages.length} prerendered routes.`);
}
