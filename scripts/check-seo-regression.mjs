import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const registry = JSON.parse(fs.readFileSync(path.join(root, "SEO_CONTENT_REGISTRY.json"), "utf8"));
const homePageSource = fs.readFileSync(path.join(root, "src/pages/HomePage.tsx"), "utf8");
const footerSource = fs.readFileSync(path.join(root, "src/components/Footer.tsx"), "utf8");

let failures = [];

function assert(condition, message) {
  if (!condition) {
    failures.push(message);
    console.error(`❌ FAIL: ${message}`);
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

function cleanHtmlText(htmlSnippet) {
  return htmlSnippet
    .replace(/<[^>]+>|<!--.*?-->/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

console.log("🔒 Running SEO Regression Lock Verification...\n");

// ==========================================
// 1. HOMEPAGE PROVEN METADATA LOCK
// ==========================================
const EXPECTED_HOME_TITLE = "Fabrication Works in Bangalore | Metal Fabricator, Gates, Grills & Welding | SAM Fabrication";
const EXPECTED_HOME_DESC = "Leading metal fabrication works in Bangalore near Dasarahalli & Hebbal. Custom MS gates, window safety grills, SS railings, sheds & on-site welding. Call +91 94533 44824.";
const EXPECTED_HOME_H1 = "Fabrication Works in Bangalore";

const homeRegistry = registry.pages.find((p) => p.url === "/");
assert(homeRegistry !== undefined, "Homepage entry exists in SEO_CONTENT_REGISTRY.json");
if (homeRegistry) {
  assert(homeRegistry.title === EXPECTED_HOME_TITLE, `Homepage registry title is locked to: "${EXPECTED_HOME_TITLE}"`);
  assert(homeRegistry.description === EXPECTED_HOME_DESC, `Homepage registry description is locked to: "${EXPECTED_HOME_DESC}"`);
  assert(homeRegistry.h1 === EXPECTED_HOME_H1, `Homepage registry h1 is locked to: "${EXPECTED_HOME_H1}"`);
}

assert(homePageSource.includes(EXPECTED_HOME_TITLE), "HomePage.tsx SeoHead title matches locked proven title");
assert(homePageSource.includes(EXPECTED_HOME_DESC), "HomePage.tsx SeoHead description matches locked proven description");

const distHomePath = path.join(root, "dist/index.html");
if (fs.existsSync(distHomePath)) {
  const distHomeHtml = fs.readFileSync(distHomePath, "utf8");
  const titleMatch = distHomeHtml.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  const titleText = titleMatch ? cleanHtmlText(titleMatch[1]) : "";
  assert(titleText === EXPECTED_HOME_TITLE, `Prerendered dist/index.html contains locked <title> (found: "${titleText}")`);

  const descMatch = distHomeHtml.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  const descText = descMatch ? cleanHtmlText(descMatch[1]) : "";
  assert(descText === EXPECTED_HOME_DESC, `Prerendered dist/index.html contains locked meta description`);

  const h1Match = distHomeHtml.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
  const h1Text = h1Match ? cleanHtmlText(h1Match[1]) : "";
  assert(h1Text === EXPECTED_HOME_H1, `Prerendered dist/index.html contains locked H1 (found: "${h1Text}")`);
} else {
  assert(false, "Prerendered dist/index.html exists (run build first)");
}

// ==========================================
// 2. WELDING-PAGE METADATA LOCK
// ==========================================
const EXPECTED_WELD_URL = "/services/custom-welding-fabrication/";
const EXPECTED_WELD_TITLE = "Best Welding Shop in Bangalore | Welding Services & Home Welding | SAM Fabrication";
const EXPECTED_WELD_H1 = "Best Welding Shop & Welding Services in Bangalore";

const weldRegistry = registry.pages.find((p) => p.url === EXPECTED_WELD_URL);
assert(weldRegistry !== undefined, "Welding page entry exists in SEO_CONTENT_REGISTRY.json");
if (weldRegistry) {
  assert(weldRegistry.title === EXPECTED_WELD_TITLE, `Welding registry title matches: "${EXPECTED_WELD_TITLE}"`);
  assert(weldRegistry.h1 === EXPECTED_WELD_H1, `Welding registry h1 matches: "${EXPECTED_WELD_H1}"`);
  assert(weldRegistry.primaryKeyword === "best welding shop in bangalore", "Welding primary keyword locked");
}

const distWeldPath = path.join(root, "dist", EXPECTED_WELD_URL, "index.html");
if (fs.existsSync(distWeldPath)) {
  const distWeldHtml = fs.readFileSync(distWeldPath, "utf8");
  const weldTitleMatch = distWeldHtml.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  const weldTitleText = weldTitleMatch ? cleanHtmlText(weldTitleMatch[1]) : "";
  assert(weldTitleText === EXPECTED_WELD_TITLE, `Prerendered welding page contains locked <title> (found: "${weldTitleText}")`);

  const weldH1Match = distWeldHtml.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
  const weldH1Text = weldH1Match ? cleanHtmlText(weldH1Match[1]) : "";
  assert(weldH1Text === EXPECTED_WELD_H1, `Prerendered welding page contains locked H1 (found: "${weldH1Text}")`);

  assert(distWeldHtml.includes(`https://samfabrication.in${EXPECTED_WELD_URL}`), "Prerendered welding page has correct canonical");
} else {
  assert(false, "Prerendered welding HTML exists");
}

// ==========================================
// 3. FOOTER LINKS VERIFICATION
// ==========================================
assert(
  footerSource.includes('href="/services/custom-welding-fabrication/"') &&
  footerSource.includes("Welding Services in Bangalore"),
  "Footer contains link to welding service with anchor 'Welding Services in Bangalore'"
);

const serviceAndLocationPages = registry.pages.filter(
  (p) => p.category === "services" || p.category === "locations"
);
for (const p of serviceAndLocationPages) {
  assert(footerSource.includes(`href="${p.url}"`), `Footer includes link to ${p.url}`);
}

// ==========================================
// 4. LOCALITY-PAGE URLS & METADATA INVARIANT LOCK
// ==========================================
const EXPECTED_LOCALITY_URLS = [
  "/locations/hebbal/",
  "/locations/yelahanka/",
  "/locations/manyata-tech-park/",
  "/locations/whitefield/",
  "/locations/electronic-city/",
  "/locations/hsr-layout/",
  "/locations/sarjapur-road/",
  "/locations/indiranagar/",
  "/locations/devanahalli/",
  "/locations/peenya/",
  "/locations/jayanagar/",
  "/locations/jp-nagar/",
  "/locations/marathahalli/",
  "/locations/rajajinagar/",
  "/locations/btm-layout/",
  "/locations/kr-puram/",
  "/locations/thanisandra/",
  "/locations/yeshwanthpur/",
  "/locations/koramangala/",
  "/locations/bellandur/",
  "/locations/banashankari/",
  "/locations/kengeri/"
];

assert(
  EXPECTED_LOCALITY_URLS.length === 22,
  `All 22 designated locality pages monitored in regression suite`
);

for (const locUrl of EXPECTED_LOCALITY_URLS) {
  const locEntry = registry.pages.find((p) => p.url === locUrl);
  assert(locEntry !== undefined, `Locality route ${locUrl} exists in registry`);
  
  if (locEntry) {
    assert(Boolean(locEntry.title && locEntry.title.length > 10), `Locality ${locUrl} has substantial title`);
    assert(Boolean(locEntry.h1 && locEntry.h1.length > 5), `Locality ${locUrl} has defined H1`);
    assert(locEntry.schemaType === "LocalBusiness" || locEntry.schemaType === "Service", `Locality ${locUrl} has valid schema`);
  }

  const distLocPath = path.join(root, "dist", locUrl, "index.html");
  assert(fs.existsSync(distLocPath), `Prerendered HTML file exists for ${locUrl}`);
  if (fs.existsSync(distLocPath)) {
    const locHtml = fs.readFileSync(distLocPath, "utf8");
    assert(locHtml.includes(`rel="canonical" href="https://samfabrication.in${locUrl}"`), `Canonical URL correct in ${locUrl}`);
    const h1Count = (locHtml.match(/<h1\b[^>]*>/gi) || []).length;
    assert(h1Count === 1, `Exactly 1 H1 tag in ${locUrl} (found ${h1Count})`);
  }
}

console.log("\n==========================================");
if (failures.length > 0) {
  console.error(`🚨 REGRESSION TEST FAILED: ${failures.length} checks failed.`);
  process.exit(1);
} else {
  console.log(`🎉 ALL REGRESSION TESTS PASSED! All SEO invariants and locks are verified.`);
}
