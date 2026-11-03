import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CtaBanner } from '../components/CtaBanner';
import { StatCounters } from '../components/StatCounters';
import { regionsData, servicesData, siteConfig } from '../data/siteData';
import { MapPin, ArrowRight, ShieldCheck, Clock, CheckCircle2, Building, Wrench, ChevronRight, Phone } from 'lucide-react';

interface AreasWeServeIndexPageProps {
  onOpenQuote: () => void;
}

export const AreasWeServeIndexPage: React.FC<AreasWeServeIndexPageProps> = ({ onOpenQuote }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Areas We Serve', href: '/areas-we-serve/' }
  ];

  return (
    <>
      <SeoHead
        title="Areas We Serve in Bangalore | Metal & Steel Fabrication Hub | SAM Fabrication"
        description="Comprehensive metal and structural fabrication coverage across North, South, East, and West Bangalore. Quick on-site measurement and certified installation in Hebbal, Whitefield, HSR, Peenya & beyond."
        canonical="https://samfabrication.in/areas-we-serve/"
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* 1. HERO SECTION (Dark Charcoal Background with Photographic Overlay) */}
      <section className="relative min-h-[420px] lg:min-h-[460px] flex items-center bg-[#0B0F15] overflow-hidden">
        {/* Background Photo */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/images/hero-home.webp" type="image/webp" />
            <img
              src="/images/hero-home.jpg"
              alt="Bangalore-wide architectural metal and steel fabrication works"
              className="w-full h-full object-cover object-center brightness-[0.65]"
              fetchPriority="high"
              width="1376"
              height="768"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F15]/95 via-[#0B0F15]/85 to-transparent lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F15] via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
          <div className="max-w-2xl space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#D49B37] uppercase">
              BANGALORE-WIDE FABRICATION SERVICES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading text-white tracking-tight leading-[1.15]">
              Engineering Stronger Spaces<br />
              <span className="gold-gradient-text">Across Every Bangalore Corridor</span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
              From high-end residential villa communities in North and East Bangalore to intensive industrial manufacturing belts in West and South Bangalore, SAM Fabrication Engineering Work provides dependable turnkey metal fabrication, precision gate welding, and structural steelwork across all major zones.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="gold-shimmer-btn inline-flex items-center px-6 py-3 rounded-md text-xs font-bold text-gray-950 uppercase tracking-wider shadow-lg hover:shadow-[#D49B37]/30 transition-all cursor-pointer"
              >
                <span>Book Free Site Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </button>
              <a
                href={`tel:${siteConfig.phoneClean}`}
                className="inline-flex items-center px-5 py-3 rounded-md border border-gray-700 hover:border-[#D49B37] text-xs font-semibold text-gray-200 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D49B37] mr-2" />
                <span>Call: {siteConfig.phone}</span>
              </a>
            </div>
          </div>

          {/* Script Accent Watermark */}
          <div className="hidden lg:block absolute right-16 bottom-14 text-right pointer-events-none select-none">
            <span className="font-script-accent text-5xl xl:text-6xl text-[#E5A83B] opacity-90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] block">
              Bangalore<br />Wide
            </span>
          </div>
        </div>
      </section>

      {/* 2. REGIONAL CORRIDORS GRID (Clean White / Light Grey UI Section) */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#B77C26] uppercase block mb-2">
              REGIONAL SERVICE ZONES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-heading text-gray-950 mb-4">
              Explore Our Regional Fabrication Corridors
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Select your region to inspect localized architectural solutions, typical engineering specifications, covered neighborhoods, and recent project case studies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regionsData.map((region) => (
              <div
                key={region.slug}
                className="bg-white border border-gray-200 hover:border-[#D49B37] rounded-xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F59E0B]/10 text-[#B45309] border border-[#F59E0B]/30 capitalize">
                      <MapPin className="w-3.5 h-3.5 text-[#B77C26]" />
                      {region.direction} Zone
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Active Dispatch
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-gray-950 group-hover:text-[#B77C26] transition-colors mb-2">
                    {region.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B77C26] font-semibold mb-3 italic">
                    {region.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {region.overview}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                      Key Localities Covered:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {region.localities.map((loc) => (
                        <span
                          key={loc}
                          className="text-xs bg-[#F1F5F9] text-gray-800 border border-gray-200 px-2.5 py-1 rounded font-medium"
                        >
                          {loc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href={`/areas-we-serve/${region.slug}/`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#B77C26] group-hover:text-[#925C18] transition-colors"
                  >
                    View {region.name} Coverage Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <button
                    onClick={onOpenQuote}
                    className="text-xs font-medium text-gray-600 hover:text-black underline cursor-pointer"
                  >
                    Get Local Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMPREHENSIVE LOCALITY MATRIX (Crisp White UI Table Section) */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#B77C26] uppercase block mb-2">
              LOCAL RELEVANCE DIRECTORY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-gray-950 mb-3">
              Bangalore Locality Coverage Matrix
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Authentic on-site service dispatch, architectural alignment, and certified fabrication across Bangalore’s major residential, tech, and industrial hubs.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm text-gray-600">
              <thead className="bg-[#F8FAFC] text-xs uppercase tracking-wider text-gray-900 border-b border-gray-200">
                <tr>
                  <th className="py-4 px-6 font-bold">Locality / Hub</th>
                  <th className="py-4 px-6 font-bold">Corridor</th>
                  <th className="py-4 px-6 font-bold">Typical Applications</th>
                  <th className="py-4 px-6 font-bold">Service Speed</th>
                  <th className="py-4 px-6 font-bold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { loc: 'Hebbal', corridor: 'North Bangalore', app: 'Modern Villa Main Gates, Balcony Railings, Terrace Sheds', speed: 'Same-day consultation', link: '/locations/hebbal/' },
                  { loc: 'Yelahanka', corridor: 'North Bangalore', app: 'Automated Sliding Gates, Duplex Staircases, Carports', speed: 'Same-day consultation', link: '/locations/yelahanka/' },
                  { loc: 'Manyata Tech Park', corridor: 'North Bangalore', app: 'Commercial Canopies, Mezzanine Floors, SS Glass Railings', speed: '24-hour turnaround', link: '/locations/manyata-tech-park/' },
                  { loc: 'Jakkur', corridor: 'North Bangalore', app: 'Luxury Gated Villa CNC Gates, Modern Pergolas', speed: 'Same-day consultation', link: '/areas-we-serve/north-bangalore/' },
                  { loc: 'Thanisandra & Hennur', corridor: 'North Bangalore', app: 'Floating Metal Staircases, Safety Window Grills', speed: 'Same-day consultation', link: '/areas-we-serve/north-bangalore/' },
                  { loc: 'RT Nagar', corridor: 'North Bangalore', app: 'Apartment Security Grills, Compound Wall Railings', speed: 'Same-day consultation', link: '/areas-we-serve/north-bangalore/' },
                  { loc: 'Whitefield', corridor: 'East Bangalore', app: 'High-End CNC Gates, SS Glass Handrails, Villa Pergolas', speed: 'Next-day inspection', link: '/locations/whitefield/' },
                  { loc: 'KR Puram & Brookefield', corridor: 'East Bangalore', app: 'Residential Balcony Railings, Multi-Vehicle Car Sheds', speed: 'Next-day inspection', link: '/areas-we-serve/east-bangalore/' },
                  { loc: 'Marathahalli & Mahadevapura', corridor: 'East Bangalore', app: 'Commercial Entrance Canopies, Architectural Partitions', speed: 'Next-day inspection', link: '/areas-we-serve/east-bangalore/' },
                  { loc: 'HSR Layout', corridor: 'South Bangalore', app: 'Matte Black Railings, Terrace Gazebos, Motorized Gates', speed: 'Same-day consultation', link: '/locations/hsr-layout/' },
                  { loc: 'Sarjapur Road', corridor: 'South Bangalore', app: 'Villa Entrance Porticos, Wood & Steel Pergolas', speed: 'Next-day inspection', link: '/areas-we-serve/south-bangalore/' },
                  { loc: 'Electronic City', corridor: 'South Bangalore', app: 'PEB Industrial Warehouse Sheds, Fire Escape Towers', speed: 'Priority industrial response', link: '/locations/electronic-city/' },
                  { loc: 'JP Nagar & Jayanagar', corridor: 'South Bangalore', app: 'Bespoke Traditional & Modern Gates, Internal Staircases', speed: 'Same-day consultation', link: '/areas-we-serve/south-bangalore/' },
                  { loc: 'BTM Layout', corridor: 'South Bangalore', app: 'Space-Saving Bi-Fold Gates, Terrace Enclosures', speed: 'Same-day consultation', link: '/areas-we-serve/south-bangalore/' },
                  { loc: 'Peenya Industrial Area', corridor: 'West Bangalore', app: 'Heavy Structural Steel Framing, Warehouse PEB Sheds', speed: 'Industrial priority dispatch', link: '/areas-we-serve/west-bangalore/' },
                  { loc: 'Yeshwanthpur', corridor: 'West Bangalore', app: 'Mezzanine Platforms, Heavy Logistics Roll-Up Gates', speed: 'Same-day consultation', link: '/areas-we-serve/west-bangalore/' },
                  { loc: 'Rajajinagar', corridor: 'West Bangalore', app: 'Commercial Security Grills, Steel Balconies & Gates', speed: 'Same-day consultation', link: '/areas-we-serve/west-bangalore/' }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                    <td className="py-4 px-6 font-bold text-gray-950 flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#D49B37]" />
                      {row.loc}
                    </td>
                    <td className="py-4 px-6 text-gray-800 font-medium">{row.corridor}</td>
                    <td className="py-4 px-6 text-gray-600">{row.app}</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        <Clock className="w-3 h-3" />
                        {row.speed}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href={row.link}
                        className="text-xs font-bold text-[#B77C26] hover:text-[#925C18] inline-flex items-center gap-1"
                      >
                        Explore <ArrowRight className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. TRUST & LOCAL DELIVERY FACTORS (Dark Section for Architectural Contrast) */}
      <section className="bg-[#0B0F15] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1C2533]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#D49B37] uppercase block mb-2">
              WHY SAM FABRICATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-white mb-3">
              On-Site Precision Across Bangalore
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Combining rapid mobile response with high-standard workshop engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#121820] border border-[#1E2735] rounded-xl p-6 sm:p-8 shadow-lg hover:border-[#D49B37]/60 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#D49B37]/15 flex items-center justify-center text-[#D49B37] mb-5 border border-[#D49B37]/30">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif-heading text-white mb-2">
                Mobile Measurement Teams
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Equipped with laser rangefinders and sample material swatches, our site engineers visit your Bangalore location directly to record millimeter-accurate site dimensions.
              </p>
            </div>

            <div className="bg-[#121820] border border-[#1E2735] rounded-xl p-6 sm:p-8 shadow-lg hover:border-[#D49B37]/60 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#D49B37]/15 flex items-center justify-center text-[#D49B37] mb-5 border border-[#D49B37]/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif-heading text-white mb-2">
                Monsoon Anti-Rust Proofing
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Bangalore’s prolonged monsoons require genuine zinc-phosphate epoxy primers, TIG-purged stainless welding, and high-build polyurethane coatings that prevent premature corrosion.
              </p>
            </div>

            <div className="bg-[#121820] border border-[#1E2735] rounded-xl p-6 sm:p-8 shadow-lg hover:border-[#D49B37]/60 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#D49B37]/15 flex items-center justify-center text-[#D49B37] mb-5 border border-[#D49B37]/30">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif-heading text-white mb-2">
                Local RWA & NBC Compliance
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Every balcony railing height, gate open-area ratio, and shed foundation conforms strictly with National Building Code specifications and local residential society mandates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STAT COUNTERS STRIP */}
      <StatCounters />

      {/* 6. FABRICATION SERVICES CROSS-LINK (Clean White Section) */}
      <section className="bg-white text-gray-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#B77C26] uppercase mb-2 block">
                FABRICATION CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-gray-950">
                Available Across All Bangalore Locations
              </h2>
            </div>
            <a
              href="/services/"
              className="mt-4 md:mt-0 text-xs sm:text-sm font-bold text-[#B77C26] hover:text-[#925C18] inline-flex items-center gap-1"
            >
              View Full Service Portfolio <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {servicesData.slice(0, 6).map((service) => (
              <a
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="bg-[#F8FAFC] border border-gray-200 hover:border-[#D49B37] p-4 rounded-xl text-center transition-all group hover:shadow-md hover:-translate-y-1 block"
              >
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#B77C26] group-hover:bg-[#D49B37] group-hover:text-gray-950 group-hover:border-[#D49B37] transition-colors shadow-sm">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold text-gray-950 group-hover:text-[#B77C26] transition-colors">
                  {service.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <CtaBanner onOpenQuote={onOpenQuote} />
    </>
  );
};
