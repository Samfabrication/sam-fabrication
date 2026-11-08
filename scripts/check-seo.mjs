import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

export async function runSeoChecks() {
  console.log('🔍 Running Automated SEO & Prerender Verification Pipeline...\n');

  const registryPath = path.join(rootDir, 'SEO_CONTENT_REGISTRY.json');
  if (!fs.existsSync(registryPath)) {
    console.error('❌ SEO_CONTENT_REGISTRY.json not found!');
    process.exit(1);
  }

  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf-8'));
  const pages = registry.pages;
  console.log(`📋 Total routes in registry to verify: ${pages.length}\n`);

  if (pages.length !== 51) {
    console.error(`❌ Expected exactly 51 routes, found ${pages.length}.`);
    process.exit(1);
  }

  const titles = new Map();
  const descriptions = new Map();
  const canonicals = new Map();
  const issues = [];
  let passedCount = 0;

  for (const page of pages) {
    const routeUrl = page.url;
    let filePath;

    if (routeUrl === '/' || routeUrl === '') {
      filePath = path.join(rootDir, 'dist/index.html');
    } else {
      filePath = path.join(rootDir, 'dist', routeUrl, 'index.html');
    }

    // 1. Check file existence (Prerendering verification)
    if (!fs.existsSync(filePath)) {
      issues.push({
        url: routeUrl,
        type: 'PRERENDER_MISSING',
        message: `Prerendered HTML file not found at: ${filePath}`
      });
      continue;
    }

    const html = fs.readFileSync(filePath, 'utf-8');

    // 2. Check that prerendered content actually exists inside #root
    const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/div>/);
    if (!rootMatch || rootMatch[1].trim().length < 50) {
      issues.push({
        url: routeUrl,
        type: 'EMPTY_PRERENDER',
        message: 'Prerendered HTML root element is empty or too short'
      });
    }

    // 3. Check Title: exists, not empty, unique
    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : null;
    if (!title) {
      issues.push({
        url: routeUrl,
        type: 'MISSING_TITLE',
        message: 'Missing or empty <title> tag'
      });
    } else if (titles.has(title)) {
      issues.push({
        url: routeUrl,
        type: 'DUPLICATE_TITLE',
        message: `Duplicate title with "${titles.get(title)}": "${title}"`
      });
    } else {
      titles.set(title, routeUrl);
    }

    // 4. Check Meta Description: exists, not empty, unique
    const descMatch =
      html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i) ||
      html.match(/<meta\s+content=["'](.*?)["']\s+name=["']description["']/i);
    const desc = descMatch ? descMatch[1].trim() : null;
    if (!desc) {
      issues.push({
        url: routeUrl,
        type: 'MISSING_DESCRIPTION',
        message: 'Missing or empty <meta name="description"> tag'
      });
    } else if (descriptions.has(desc)) {
      issues.push({
        url: routeUrl,
        type: 'DUPLICATE_DESCRIPTION',
        message: `Duplicate description with "${descriptions.get(desc)}": "${desc.substring(0, 60)}..."`
      });
    } else {
      descriptions.set(desc, routeUrl);
    }

    // 5. Check H1 count: exactly one H1 per page
    const h1Matches = html.match(/<h1[\s>]/gi) || [];
    if (h1Matches.length === 0) {
      issues.push({
        url: routeUrl,
        type: 'MISSING_H1',
        message: 'Page has no <h1> tag'
      });
    } else if (h1Matches.length > 1) {
      issues.push({
        url: routeUrl,
        type: 'MULTIPLE_H1',
        message: `Page has ${h1Matches.length} <h1> tags (strictly 1 required)`
      });
    }

    // 6. Check Canonical URL: exists, matches expected URL, unique
    const canonMatch =
      html.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i) ||
      html.match(/<link\s+href=["'](.*?)["']\s+rel=["']canonical["']/i);
    const canon = canonMatch ? canonMatch[1].trim() : null;
    const expectedCanon = `https://samfabrication.in${routeUrl}`;

    if (!canon) {
      issues.push({
        url: routeUrl,
        type: 'MISSING_CANONICAL',
        message: 'Missing <link rel="canonical">'
      });
    } else if (canon !== expectedCanon) {
      issues.push({
        url: routeUrl,
        type: 'CANONICAL_MISMATCH',
        message: `Canonical mismatch: expected "${expectedCanon}", got "${canon}"`
      });
    } else if (canonicals.has(canon)) {
      issues.push({
        url: routeUrl,
        type: 'DUPLICATE_CANONICAL',
        message: `Duplicate canonical with "${canonicals.get(canon)}": "${canon}"`
      });
    } else {
      canonicals.set(canon, routeUrl);
    }

    passedCount++;
  }

  // Verify every homepage service-card link points to an existing service route.
  const homepage = fs.readFileSync(path.join(rootDir, 'dist/index.html'), 'utf-8');
  const serviceRoutes = pages.filter((page) => page.url.startsWith('/services/') && page.url !== '/services/');
  const missingHomepageLinks = serviceRoutes.filter((page) => !homepage.includes(`href=\"${page.url}\"`));
  console.log(`🔗 Homepage service links: ${serviceRoutes.length - missingHomepageLinks.length}/${serviceRoutes.length}`);
  if (missingHomepageLinks.length > 0) {
    for (const page of missingHomepageLinks) {
      issues.push({
        url: '/',
        type: 'MISSING_HOME_SERVICE_LINK',
        message: `Homepage is missing a crawlable service link to ${page.url}`
      });
    }
  }

  // Also check 404.html prerender
  const notFoundPath = path.join(rootDir, 'dist/404.html');
  if (!fs.existsSync(notFoundPath)) {
    issues.push({
      url: '/404.html',
      type: 'PRERENDER_MISSING',
      message: '404.html was not generated in dist/'
    });
  }

  // Summary Report
  console.log('------------------------------------------------------------');
  console.log(`📊 SEO Validation Results:`);
  console.log(`   • Verified Routes: ${pages.length}`);
  console.log(`   • Unique Titles: ${titles.size}/${pages.length}`);
  console.log(`   • Unique Descriptions: ${descriptions.size}/${pages.length}`);
  console.log(`   • Verified Canonicals: ${canonicals.size}/${pages.length}`);
  console.log(`   • Total Issues Detected: ${issues.length}`);
  console.log('------------------------------------------------------------\n');

  if (issues.length > 0) {
    console.error('❌ SEO VALIDATION FAILED! Found the following issues:');
    for (const issue of issues) {
      console.error(`  [${issue.type}] ${issue.url}: ${issue.message}`);
    }
    process.exit(1);
  }

  console.log('✅ ALL 51 ROUTES PASSED VALIDATION!');
  console.log('   ✓ 100% Unique <title> tags');
  console.log('   ✓ 100% Unique <meta name="description"> tags');
  console.log('   ✓ Exactly 1 <h1> tag per route');
  console.log('   ✓ 100% Valid, matching canonical URLs');
  console.log('   ✓ Successful static HTML prerender with populated root DOM');
}

runSeoChecks().catch((err) => {
  console.error('Validation script error:', err);
  process.exit(1);
});
