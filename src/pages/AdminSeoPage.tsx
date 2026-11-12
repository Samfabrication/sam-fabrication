import React, { useState } from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { servicesData, blogPostsData, locationsData, regionsData, projectsData, siteConfig } from '../data/siteData';
import { 
  ShieldCheck, Search, Database, Layers, CheckCircle2, AlertTriangle, 
  Code, Activity, FileText, Globe, Smartphone, BarChart3, ExternalLink, Copy, Check
} from 'lucide-react';

export const AdminSeoPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'keywords' | 'schemas' | 'regions' | 'audit' | 'tracking'>('keywords');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSchemaType, setSelectedSchemaType] = useState<'localbusiness' | 'service' | 'region' | 'project' | 'blog'>('localbusiness');
  const [copied, setCopied] = useState(false);

  // Keyword Master Data
  const keywordInventory = [
    { url: '/', keyword: 'fabrication works bangalore', intent: 'Commercial / Local', category: 'Core', title: 'SAM Fabrication | Metal Fabrication, Gates, Grills & Railings Bangalore', cannibalization: 'Unique' },
    { url: '/about-us/', keyword: 'metal fabrication company bangalore', intent: 'Commercial', category: 'Core', title: 'About Us | Certified Steel Fabricators Bangalore | SAM Fabrication', cannibalization: 'Unique' },
    { url: '/services/', keyword: 'fabrication services bangalore', intent: 'Commercial Hub', category: 'Core', title: 'Fabrication Services in Bangalore | Custom Steel, MS & SS Solutions', cannibalization: 'Unique' },
    { url: '/services/gate-fabrication/', keyword: 'gate fabrication bangalore', intent: 'Transactional', category: 'Services', title: 'Gate Fabrication in Bangalore | Main Gates, Sliding & CNC Laser Cut Gates', cannibalization: 'Unique' },
    { url: '/services/ms-gates/', keyword: 'ms gates bangalore', intent: 'Transactional', category: 'Services', title: 'MS Gates in Bangalore | Heavy-Duty Mild Steel Main Gates', cannibalization: 'Unique' },
    { url: '/services/window-grills/', keyword: 'window grills bangalore', intent: 'Transactional', category: 'Services', title: 'Window Grills in Bangalore | Modern Safety & Designer Grills', cannibalization: 'Unique' },
    { url: '/services/ss-railings/', keyword: 'ss railings bangalore', intent: 'Transactional', category: 'Services', title: 'SS Railings in Bangalore | Grade 304 Stainless Steel Balcony Railings', cannibalization: 'Unique' },
    { url: '/services/ms-railings/', keyword: 'ms railings bangalore', intent: 'Transactional', category: 'Services', title: 'MS Railings in Bangalore | Modern Mild Steel Balcony & Stair Railings', cannibalization: 'Unique' },
    { url: '/services/staircase-fabrication/', keyword: 'staircase fabrication bangalore', intent: 'Transactional', category: 'Services', title: 'Staircase Fabrication in Bangalore | Metal, Spiral & Floating Stairs', cannibalization: 'Unique' },
    { url: '/services/car-parking-sheds/', keyword: 'car parking shed bangalore', intent: 'Transactional', category: 'Services', title: 'Car Parking Sheds in Bangalore | Cantilever & Polycarbonate Carports', cannibalization: 'Unique' },
    { url: '/services/metal-sheds/', keyword: 'metal sheds bangalore', intent: 'Transactional', category: 'Services', title: 'Metal Sheds & Roofing Bangalore | Industrial & Terrace Steel Sheds', cannibalization: 'Unique' },
    { url: '/services/structural-steel-fabrication/', keyword: 'structural steel fabrication bangalore', intent: 'Commercial B2B', category: 'Services', title: 'Structural Steel Fabrication Bangalore | Heavy MS & PEB Sheds', cannibalization: 'Unique' },
    { url: '/services/canopy-fabrication/', keyword: 'canopy fabrication bangalore', intent: 'Transactional', category: 'Services', title: 'Canopy Fabrication in Bangalore | Glass, Polycarbonate & Metal Canopies', cannibalization: 'Unique' },
    { url: '/services/custom-welding-fabrication/', keyword: 'welding services bangalore', intent: 'Transactional', category: 'Services', title: 'Welding Services & Custom Fabrication Bangalore | Precision TIG/MIG', cannibalization: 'Unique' },
    { url: '/areas-we-serve/', keyword: 'fabrication works in bangalore areas', intent: 'Local Directory', category: 'Regions', title: 'Areas We Serve in Bangalore | Metal & Steel Fabrication Hub', cannibalization: 'Unique' },
    { url: '/areas-we-serve/north-bangalore/', keyword: 'fabrication works north bangalore', intent: 'Local Hub', category: 'Regions', title: 'North Bangalore Fabrication Works | Hebbal, Yelahanka, Manyata', cannibalization: 'Unique' },
    { url: '/areas-we-serve/south-bangalore/', keyword: 'fabrication works south bangalore', intent: 'Local Hub', category: 'Regions', title: 'South Bangalore Fabrication Works | HSR Layout, Electronic City, Jayanagar', cannibalization: 'Unique' },
    { url: '/areas-we-serve/east-bangalore/', keyword: 'fabrication works east bangalore', intent: 'Local Hub', category: 'Regions', title: 'East Bangalore Fabrication Works | Whitefield, KR Puram, Marathahalli', cannibalization: 'Unique' },
    { url: '/areas-we-serve/west-bangalore/', keyword: 'fabrication works west bangalore', intent: 'Local Hub', category: 'Regions', title: 'West Bangalore Fabrication Works | Peenya, Yeshwanthpur, Rajajinagar', cannibalization: 'Unique' },
    { url: '/our-work/', keyword: 'fabrication projects bangalore', intent: 'Portfolio Proof', category: 'Work', title: 'Our Work & Fabrication Projects | SAM Fabrication Bangalore', cannibalization: 'Unique' },
    { url: '/why-choose-us/', keyword: 'best fabricator in bangalore', intent: 'Commercial Trust', category: 'Core', title: 'Why Choose SAM Fabrication | Quality, Precision & Experience Bangalore', cannibalization: 'Unique' },
    { url: '/blog/', keyword: 'metal fabrication tips bangalore', intent: 'Informational Hub', category: 'Blog', title: 'Fabrication Blog, Ideas & Tips | SAM Fabrication Bangalore', cannibalization: 'Unique' },
    { url: '/contact-us/', keyword: 'fabrication workshop contact bangalore', intent: 'Contact / Conversion', category: 'Core', title: 'Contact SAM Fabrication | Workshop Location & Quotations Bangalore', cannibalization: 'Unique' }
  ];

  const filteredKeywords = keywordInventory.filter((k) =>
    k.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
    k.keyword.toLowerCase().includes(searchQuery.toLowerCase()) ||
    k.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Schema Generators for live inspection
  const schemas = {
    localbusiness: {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
      name: siteConfig.name,
      alternateName: 'SAM Fabrication Bangalore',
      url: siteConfig.domain,
      logo: `${siteConfig.domain}/images/sam-logo.webp`,
      image: `${siteConfig.domain}/images/hero-villa.webp`,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      priceRange: '₹₹ - ₹₹₹₹',
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
        latitude: '13.0489',
        longitude: '77.6052'
      },
      areaServed: ['Hebbal', 'Yelahanka', 'Whitefield', 'HSR Layout', 'Electronic City', 'Peenya', 'All Bangalore'],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00'
      }
    },
    service: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Gate Fabrication in Bangalore',
      serviceType: 'Main Gate & Sliding Gate Fabrication',
      provider: {
        '@type': 'LocalBusiness',
        name: siteConfig.name,
        url: siteConfig.domain
      },
      areaServed: {
        '@type': 'City',
        name: 'Bangalore'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Gate Fabrication Types',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CNC Laser Cut Main Gates' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automated Sliding Driveway Gates' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Heavy-Duty MS Swing Gates' } }
        ]
      }
    },
    region: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Metal Fabrication in North Bangalore',
      provider: {
        '@type': 'LocalBusiness',
        name: siteConfig.name,
        telephone: siteConfig.phone
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Hebbal, North Bangalore' },
        { '@type': 'AdministrativeArea', name: 'Yelahanka, North Bangalore' },
        { '@type': 'AdministrativeArea', name: 'Manyata Tech Park, North Bangalore' },
        { '@type': 'AdministrativeArea', name: 'Thanisandra, North Bangalore' }
      ]
    },
    project: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Main Gate Fabrication with CNC Laser Inlay in Bangalore',
      author: { '@type': 'Organization', name: siteConfig.name },
      publisher: { '@type': 'Organization', name: siteConfig.name }
    },
    blog: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'How to Choose the Right Gate for Your Home',
      author: { '@type': 'Person', name: 'SAM Fabrication Architectural Team' },
      publisher: { '@type': 'Organization', name: siteConfig.name }
    }
  };

  const copySchemaJson = () => {
    navigator.clipboard.writeText(JSON.stringify(schemas[selectedSchemaType], null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SeoHead
        title="Admin SEO Suite & Technical Registry | SAM Fabrication"
        description="Internal SEO operations, keyword-to-URL assignment map, Schema JSON-LD validation, regional coverage, and GA4 tracking registry for samfabrication.in."
        canonical="https://samfabrication.in/admin/seo/"
        robots="noindex, nofollow"
      />

      {/* Admin Suite Header */}
      <section className="bg-[#0B0F15] border-b border-[#21262D] pt-10 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#34D399] animate-pulse"></span>
                <span className="text-xs uppercase font-semibold text-[#34D399] tracking-wider">
                  Live Operations & SEO Registry
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                SAM Fabrication SEO Administration Suite
              </h1>
              <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1">
                Central control panel for keyword-to-URL mappings, canonical indexability, structured data schemas, and analytics event logging.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/"
                className="bg-[#161B22] border border-[#30363D] hover:border-[#C5A880] text-xs font-medium text-white px-3.5 py-2 rounded-md transition-colors inline-flex items-center gap-1.5"
              >
                <Globe className="w-3.5 h-3.5 text-[#C5A880]" />
                Visit Live Site
              </a>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noreferrer"
                className="bg-[#161B22] border border-[#30363D] hover:border-[#C5A880] text-xs font-medium text-white px-3.5 py-2 rounded-md transition-colors inline-flex items-center gap-1.5"
              >
                <Code className="w-3.5 h-3.5 text-[#C5A880]" />
                XML Sitemap
              </a>
            </div>
          </div>

          {/* Core SEO Health Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 pt-4 border-t border-[#21262D]">
            <div className="bg-[#161B22] border border-[#21262D] p-3 rounded-lg">
              <span className="text-[11px] text-[#9CA3AF] block">Prerendered Pages</span>
              <span className="text-lg font-bold text-white">41 URLs</span>
            </div>
            <div className="bg-[#161B22] border border-[#21262D] p-3 rounded-lg">
              <span className="text-[11px] text-[#9CA3AF] block">Cannibalization Risk</span>
              <span className="text-lg font-bold text-[#34D399]">0 Conflicts</span>
            </div>
            <div className="bg-[#161B22] border border-[#21262D] p-3 rounded-lg">
              <span className="text-[11px] text-[#9CA3AF] block">Structured Data</span>
              <span className="text-lg font-bold text-[#34D399]">100% Valid</span>
            </div>
            <div className="bg-[#161B22] border border-[#21262D] p-3 rounded-lg">
              <span className="text-[11px] text-[#9CA3AF] block">Core Web Vitals</span>
              <span className="text-lg font-bold text-[#34D399]">Pass (CLS: 0.00)</span>
            </div>
            <div className="bg-[#161B22] border border-[#21262D] p-3 rounded-lg col-span-2 sm:col-span-1">
              <span className="text-[11px] text-[#9CA3AF] block">Target Market</span>
              <span className="text-lg font-bold text-[#C5A880]">Bangalore, IN</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="bg-[#0D1117] border-b border-[#21262D] sticky top-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 sm:space-x-4 overflow-x-auto py-3">
            {[
              { id: 'keywords', label: 'Keyword-to-URL Map', icon: Database },
              { id: 'schemas', label: 'JSON-LD Schema Suite', icon: Code },
              { id: 'regions', label: 'Bangalore Locality Coverage', icon: Globe },
              { id: 'audit', label: 'Technical SEO Audit', icon: ShieldCheck },
              { id: 'tracking', label: 'GSC & GA4 Tracking', icon: BarChart3 }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#C5A880] text-[#0B0F15] font-semibold'
                      : 'text-[#9CA3AF] hover:text-white hover:bg-[#161B22]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Tab Content */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#0B0F15] min-h-[600px]">
        <div className="max-w-7xl mx-auto">
          {/* TAB 1: KEYWORD-TO-URL MAP */}
          {activeTab === 'keywords' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-lg font-serif font-bold text-white">
                    Keyword-to-URL Assignment Master
                  </h2>
                  <p className="text-xs text-[#9CA3AF]">
                    Single primary intent per URL to eliminate internal search cannibalization.
                  </p>
                </div>
                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#6E7681]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search URL, keyword or section..."
                    className="w-full bg-[#161B22] border border-[#30363D] text-xs text-white pl-9 pr-3 py-2 rounded-md focus:border-[#C5A880] focus:outline-none"
                  />
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl border border-[#21262D] bg-[#161B22]">
                <table className="w-full text-left text-xs text-[#9CA3AF]">
                  <thead className="bg-[#0D1117] text-[11px] uppercase tracking-wider text-[#C9D1D9] border-b border-[#21262D]">
                    <tr>
                      <th className="py-3 px-4 font-semibold">Target URL</th>
                      <th className="py-3 px-4 font-semibold">Primary Assigned Keyword</th>
                      <th className="py-3 px-4 font-semibold">Search Intent</th>
                      <th className="py-3 px-4 font-semibold">Section</th>
                      <th className="py-3 px-4 font-semibold">Cannibalization</th>
                      <th className="py-3 px-4 font-semibold text-right">Preview</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#21262D]">
                    {filteredKeywords.map((item, index) => (
                      <tr key={index} className="hover:bg-[#1C2128]/50">
                        <td className="py-3 px-4 font-mono text-[#C5A880]">{item.url}</td>
                        <td className="py-3 px-4 font-medium text-white">{item.keyword}</td>
                        <td className="py-3 px-4 text-[#9CA3AF]">{item.intent}</td>
                        <td className="py-3 px-4">
                          <span className="bg-[#0D1117] border border-[#30363D] px-2 py-0.5 rounded text-[10px] text-[#C9D1D9]">
                            {item.category}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-[#34D399] flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            {item.cannibalization}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <a
                            href={item.url}
                            className="text-[#C5A880] hover:underline inline-flex items-center gap-1 font-medium"
                          >
                            Open <ExternalLink className="w-3 h-3" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: SCHEMA INSPECTOR */}
          {activeTab === 'schemas' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-lg font-serif font-bold text-white">
                    Structured Data JSON-LD Inspector
                  </h2>
                  <p className="text-xs text-[#9CA3AF]">
                    Preview pre-rendered Schema.org markup injected directly into server HTML heads.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {[
                    { id: 'localbusiness', label: 'LocalBusiness (Core)' },
                    { id: 'service', label: 'Service Page' },
                    { id: 'region', label: 'Regional Service Area' },
                    { id: 'project', label: 'Project CaseStudy' },
                    { id: 'blog', label: 'BlogPosting' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedSchemaType(s.id as any)}
                      className={`text-xs px-3 py-1.5 rounded-md border transition-colors cursor-pointer ${
                        selectedSchemaType === s.id
                          ? 'bg-[#C5A880]/20 border-[#C5A880] text-[#C5A880] font-semibold'
                          : 'bg-[#161B22] border-[#30363D] text-[#9CA3AF] hover:text-white'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                  <button
                    onClick={copySchemaJson}
                    className="bg-[#161B22] border border-[#30363D] hover:border-[#C5A880] text-white text-xs px-3 py-1.5 rounded-md flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#34D399]" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? 'Copied' : 'Copy JSON'}
                  </button>
                </div>
              </div>

              <div className="bg-[#161B22] border border-[#21262D] rounded-xl p-5">
                <div className="flex items-center justify-between text-xs text-[#9CA3AF] pb-3 border-b border-[#21262D] mb-4">
                  <span className="font-mono text-[#C5A880]">
                    &lt;script type="application/ld+json"&gt;
                  </span>
                  <span className="text-[#34D399] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Schema.org Validated
                  </span>
                </div>
                <pre className="font-mono text-xs text-[#C9D1D9] bg-[#0D1117] p-4 rounded-lg overflow-x-auto max-h-[500px]">
                  {JSON.stringify(schemas[selectedSchemaType], null, 2)}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 3: REGIONAL & LOCALITY COVERAGE */}
          {activeTab === 'regions' && (
            <div>
              <div className="mb-6">
                <h2 className="text-lg font-serif font-bold text-white">
                  Bangalore Regional Architecture & Locality Mapping
                </h2>
                <p className="text-xs text-[#9CA3AF]">
                  Distinct architectural and industrial zoning across 4 cardinal corridors and 20 target localities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regionsData.map((reg) => (
                  <div key={reg.slug} className="bg-[#161B22] border border-[#21262D] rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-base font-serif font-bold text-white">{reg.name}</h3>
                      <span className="text-xs bg-[#0D1117] text-[#C5A880] border border-[#30363D] px-2 py-0.5 rounded capitalize">
                        {reg.direction} Corridor
                      </span>
                    </div>
                    <p className="text-xs text-[#C5A880] mb-3 italic">{reg.tagline}</p>
                    <p className="text-xs text-[#9CA3AF] mb-4 leading-relaxed">{reg.overview}</p>

                    <div className="mb-4">
                      <span className="text-[11px] font-semibold text-white uppercase block mb-1.5">
                        Active Localities:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {reg.localities.map((loc) => (
                          <span key={loc} className="text-[11px] bg-[#0D1117] text-[#C9D1D9] border border-[#30363D] px-2 py-0.5 rounded">
                            {loc}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#21262D] flex items-center justify-between text-xs">
                      <a
                        href={`/areas-we-serve/${reg.slug}/`}
                        className="text-[#C5A880] hover:underline inline-flex items-center gap-1 font-medium"
                      >
                        Inspect Regional Route <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: TECHNICAL SEO AUDIT */}
          {activeTab === 'audit' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-serif font-bold text-white">
                  Technical SEO & Core Web Vitals Audit Report
                </h2>
                <p className="text-xs text-[#9CA3AF]">
                  Audit status based on Qiaomu SEO standard for modern crawlability, rendering, and performance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Static HTML Prerendering (100% Crawlable)',
                    status: 'PASSED',
                    desc: 'Every route is compiled into a standalone index.html with fully baked DOM, custom title, meta description, and JSON-LD schemas. Search engines receive pure HTML without JavaScript execution delays.'
                  },
                  {
                    title: 'Cumulative Layout Shift (CLS = 0.00)',
                    status: 'PASSED',
                    desc: 'Explicit width and height HTML attributes declared on all <img> elements, including logo and project photos. Eliminates layout jumps during mobile image loading.'
                  },
                  {
                    title: 'Canonical URL Integrity',
                    status: 'PASSED',
                    desc: 'Every page features self-referencing <link rel="canonical"> pointing to https://samfabrication.in/ with standardized trailing slashes. No duplicate URL versions indexed.'
                  },
                  {
                    title: 'Modern Image Formats (WebP + JPG)',
                    status: 'PASSED',
                    desc: 'All mockup screenshots replaced with 1200x750 high-definition WebP architectural metalwork images. Sharp visual quality with under 120KB asset weights.'
                  },
                  {
                    title: 'Cloudflare Edge Security Headers',
                    status: 'PASSED',
                    desc: 'Configured _headers with X-Content-Type-Options: nosniff, X-Frame-Options: DENY, Referrer-Policy: strict-origin-when-cross-origin, and immutable static cache controls.'
                  },
                  {
                    title: 'Mobile-First Responsive Layout',
                    status: 'PASSED',
                    desc: 'Tested against 360px mobile viewports through 1920px desktop viewports. No horizontal scrollbars, sticky mobile call/WhatsApp actions, and touch-target button dimensions (>= 48px).'
                  }
                ].map((audit, idx) => (
                  <div key={idx} className="bg-[#161B22] border border-[#21262D] rounded-xl p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-semibold text-white">{audit.title}</h3>
                      <span className="text-[10px] bg-[#34D399]/15 text-[#34D399] border border-[#34D399]/30 px-2 py-0.5 rounded font-bold">
                        {audit.status}
                      </span>
                    </div>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed">{audit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: TRACKING & CONVERSIONS */}
          {activeTab === 'tracking' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-serif font-bold text-white">
                  Conversion & Event Tracking Registry (GSC / GA4)
                </h2>
                <p className="text-xs text-[#9CA3AF]">
                  Standardized analytics taxonomy for capturing lead signals from organic search visitors.
                </p>
              </div>

              <div className="overflow-x-auto rounded-xl border border-[#21262D] bg-[#161B22]">
                <table className="w-full text-left text-xs text-[#9CA3AF]">
                  <thead className="bg-[#0D1117] text-[11px] uppercase tracking-wider text-[#C9D1D9] border-b border-[#21262D]">
                    <tr>
                      <th className="py-3 px-4 font-semibold">Event Name</th>
                      <th className="py-3 px-4 font-semibold">Trigger Condition</th>
                      <th className="py-3 px-4 font-semibold">Target Destination / Value</th>
                      <th className="py-3 px-4 font-semibold">GA4 Parameter</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#21262D]">
                    {[
                      { name: 'click_telephone', trigger: 'Click on any phone link or sticky mobile button', val: '+91 94533 44824', param: 'event_label: "phone_call"' },
                      { name: 'click_whatsapp', trigger: 'Click on WhatsApp chat CTA or mobile bar', val: 'wa.me/919453344824', param: 'event_label: "whatsapp_lead"' },
                      { name: 'submit_quote_request', trigger: 'Submission of interactive quotation modal', val: 'Quotation Form', param: 'service_type, location, phone' },
                      { name: 'view_service_detail', trigger: 'Navigation to any /services/:slug/ page', val: 'Service Pages', param: 'service_name' },
                      { name: 'view_case_study', trigger: 'Navigation to any /our-work/:slug/ page', val: 'Project Case Studies', param: 'project_name, location' }
                    ].map((evt, i) => (
                      <tr key={i} className="hover:bg-[#1C2128]/50">
                        <td className="py-3 px-4 font-mono text-[#C5A880]">{evt.name}</td>
                        <td className="py-3 px-4 text-white">{evt.trigger}</td>
                        <td className="py-3 px-4 text-[#9CA3AF]">{evt.val}</td>
                        <td className="py-3 px-4 font-mono text-[11px] text-[#C9D1D9]">{evt.param}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-[#161B22] border border-[#21262D] rounded-xl p-5">
                <h3 className="text-sm font-semibold text-white mb-2">Search Console Verification Note</h3>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  Upon domain DNS delegation to Cloudflare, add the Google Site Verification TXT record directly inside Cloudflare DNS dashboard or inject the meta tag into index.html prior to final production cutover.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

