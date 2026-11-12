import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const escapeAttr = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

async function prerender() {
  console.log('🚀 Starting Static SEO Prerender Pipeline for SAM Fabrication...');

  // 1. Read SEO Content Registry
  const registryRaw = fs.readFileSync(path.join(rootDir, 'SEO_CONTENT_REGISTRY.json'), 'utf-8');
  const registry = JSON.parse(registryRaw);

  // 2. Read compiled index.html template from dist (strip prior prerender artifacts if re-run)
  const templatePath = path.join(rootDir, 'dist/index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('❌ dist/index.html not found! Run "vite build" first.');
    process.exit(1);
  }
  const baseHtml = fs
    .readFileSync(templatePath, 'utf-8')
    .replace(/<!-- PRERENDER_SEO_START -->[\s\S]*?<!-- PRERENDER_SEO_END -->\s*/g, '')
    .replace(/<!-- OpenGraph Metadata -->[\s\S]*?<\/script>\s*/g, '')
    .replace(/<div id="root">[\s\S]*?(?=<script\b)/, '<div id="root"></div>\n    ');

  // 3. Create Vite SSR Instance
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  const { App } = await vite.ssrLoadModule('/src/App.tsx');
  const { siteConfig, servicesData, projectsData, regionsData } = await vite.ssrLoadModule('/src/data/siteData.ts');

  const sitemapUrls = [];

  for (const page of registry.pages) {
    console.log(`Prerendering route: ${page.url} (${page.title})`);

    // Render React App with initialPath
    const appHtml = renderToString(React.createElement(App, { initialPath: page.url }));

    // Prepare JSON-LD Schema for this route
    let pageSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': 'https://samfabrication.in/#entity',
          name: siteConfig.name,
          url: 'https://samfabrication.in',
          telephone: siteConfig.phoneClean,
          email: siteConfig.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Dasarahalli Main Road, Near Sobha Moonstone',
            addressLocality: 'Bangalore',
            addressRegion: 'Karnataka',
            postalCode: '560024',
            addressCountry: 'IN'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 13.0489,
            longitude: 77.6052
          },
          openingHours: 'Mo-Sa 09:00-20:00',
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              opens: '09:00',
              closes: '20:00'
            }
          ],
          priceRange: '₹₹',
          areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: 13.0489,
              longitude: 77.6052
            },
            geoRadius: '25000'
          }
        },
        {
          '@type': 'WebSite',
          '@id': 'https://samfabrication.in/#website',
          url: 'https://samfabrication.in',
          name: siteConfig.name,
          publisher: { '@id': 'https://samfabrication.in/#entity' }
        }
      ]
    };

    let ogImage = 'https://samfabrication.in/images/hero-home.jpg';
    if (page.category === 'services' && page.url !== '/services/' && page.url !== '/fabrication-rates-bangalore/') {
      const slug = page.url.replace('/services/', '').replace('/', '');
      const s = servicesData.find(item => item.slug === slug);
      if (s) {
        if (s.image) {
          ogImage = `https://samfabrication.in${s.image.replace('.webp', '.jpg')}`;
        }
        pageSchema['@graph'].push({
          '@type': 'Service',
          serviceType: s.title,
          provider: { '@id': 'https://samfabrication.in/#entity' },
          areaServed: { '@type': 'City', name: 'Bangalore' },
          description: s.fullDescription
        });
        if (s.faqs && s.faqs.length > 0) {
          pageSchema['@graph'].push({
            '@type': 'FAQPage',
            mainEntity: s.faqs.map(f => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.answer
              }
            }))
          });
        }
      }
    }

    if (page.category === 'regions' && page.url !== '/areas-we-serve/') {
      const slug = page.url.replace('/areas-we-serve/', '').replace('/', '');
      const reg = regionsData.find(r => r.slug === slug);
      if (reg) {
        pageSchema['@graph'].push({
          '@type': 'Service',
          serviceType: `Metal Fabrication in ${reg.name}`,
          provider: { '@id': 'https://samfabrication.in/#entity' },
          areaServed: reg.localities.map(loc => ({
            '@type': 'AdministrativeArea',
            name: `${loc}, ${reg.name}, Bangalore`
          })),
          description: reg.metaDescription
        });
      }
    }

    if (page.category === 'projects') {
      const slug = page.url.replace('/our-work/', '').replace('/', '');
      const proj = projectsData.find(p => p.slug === slug);
      if (proj) {
        if (proj.image) {
          ogImage = `https://samfabrication.in${proj.image.replace('.webp', '.jpg')}`;
        }
        pageSchema['@graph'].push({
          '@type': 'Article',
          headline: proj.title,
          description: proj.description,
          image: ogImage,
          author: { '@id': 'https://samfabrication.in/#entity' },
          publisher: { '@id': 'https://samfabrication.in/#entity' }
        });
      }
    }

    // Replace Head Elements
    let finalHtml = baseHtml;
    const safeTitle = escapeAttr(page.title);
    const safeDescription = escapeAttr(page.description);
    const robotsDirective =
      page.category === 'admin'
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1';

    // Title
    finalHtml = finalHtml.replace(/<title>.*?<\/title>/, `<title>${safeTitle}</title>`);
    
    // Meta Description
    finalHtml = finalHtml.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/,
      `<meta name="description" content="${safeDescription}" />`
    );

    // Canonical
    finalHtml = finalHtml.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/,
      `<link rel="canonical" href="https://samfabrication.in${page.url}" />`
    );

    // OpenGraph, Robots & Twitter Tags
    const ogTags = `
    <!-- PRERENDER_SEO_START -->
    <meta name="robots" content="${robotsDirective}" />
    <!-- OpenGraph Metadata -->
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeDescription}" />
    <meta property="og:url" content="https://samfabrication.in${page.url}" />
    <meta property="og:type" content="${page.category === 'blog' && page.url !== '/blog/' ? 'article' : 'website'}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:site_name" content="${escapeAttr(siteConfig.name)}" />
    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${safeTitle}" />
    <meta name="twitter:description" content="${safeDescription}" />
    <meta name="twitter:image" content="${ogImage}" />
    <!-- Structured Data JSON-LD -->
    <script type="application/ld+json">
      ${JSON.stringify(pageSchema)}
    </script>
    <!-- PRERENDER_SEO_END -->
    `;

    finalHtml = finalHtml.replace('</head>', `${ogTags}\n  </head>`);

    // Inject prerendered App DOM
    finalHtml = finalHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Determine output file path
    let outputPath;
    if (page.url === '/' || page.url === '') {
      outputPath = path.join(rootDir, 'dist/index.html');
    } else {
      const routeDir = path.join(rootDir, 'dist', page.url);
      fs.mkdirSync(routeDir, { recursive: true });
      outputPath = path.join(routeDir, 'index.html');
    }

    fs.writeFileSync(outputPath, finalHtml, 'utf-8');

    // Add indexable routes to sitemap list (exclude admin)
    if (page.category !== 'admin') {
      sitemapUrls.push({
        loc: `https://samfabrication.in${page.url}`,
        priority: page.url === '/' ? '1.0' : page.category === 'services' ? '0.9' : page.category === 'locations' ? '0.85' : '0.8',
        changefreq: page.url === '/' ? 'weekly' : page.category === 'blog' ? 'weekly' : 'monthly'
      });
    }
  }

  // Also Prerender Custom 404 Page
  console.log('Prerendering route: 404.html');
  const notFoundHtml = renderToString(React.createElement(App, { initialPath: '/404' }));
  let final404 = baseHtml.replace('<div id="root"></div>', `<div id="root">${notFoundHtml}</div>`);
  final404 = final404.replace(/<title>.*?<\/title>/, `<title>Page Not Found (404) | ${escapeAttr(siteConfig.name)}</title>`);
  final404 = final404.replace('</head>', `    <meta name="robots" content="noindex, nofollow" />\n  </head>`);
  fs.writeFileSync(path.join(rootDir, 'dist/404.html'), final404, 'utf-8');

  // Generate XML Sitemap
  console.log('Generating sitemap.xml...');
  const today = new Date().toISOString().split('T')[0];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(rootDir, 'dist/sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.join(rootDir, 'public/sitemap.xml'), sitemapXml, 'utf-8');

  await vite.close();
  console.log(`\n🎉 Prerendering Complete! ${sitemapUrls.length} pages generated with 100% pre-rendered HTML & sitemap.`);
}

prerender().catch((err) => {
  console.error('Prerender error:', err);
  process.exit(1);
});

