import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CtaBanner } from '../components/CtaBanner';
import { StatCounters } from '../components/StatCounters';
import { GoogleMapEmbed } from '../components/GoogleMapEmbed';
import { regionsData, servicesData, siteConfig } from '../data/siteData';
import { MapPin, ArrowRight, ShieldCheck, Clock, CheckCircle2, Building, Wrench, ChevronRight, Phone } from 'lucide-react';

interface AreasWeServeIndexPageProps {
  onOpenQuote: () => void;
}

export const AreasWeServeIndexPage: React.FC<AreasWeServeIndexPageProps> = ({ onOpenQuote }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Areas We Serve' }
  ];

  return (
    <>
      <SeoHead
        title="Areas We Serve in Bangalore | Metal & Steel Fabrication Hub | SAM Fabrication"
        description="Comprehensive metal and structural fabrication coverage across North, South, East, and West Bangalore. Quick on-site measurement and certified installation in Hebbal, Whitefield, HSR, Peenya & beyond."
        canonicalUrl="https://samfabrication.in/areas-we-serve/"
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* 1. HERO SECTION (Dark Charcoal Background with Photographic Overlay) */}
      <section className="relative min-h-[420px] lg:min-h-[460px] flex items-center bg-[#0B0F15] overflow-hidden">
        {/* Background Photo */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/images/hero-villa.webp" type="image/webp" />
            <img
              src="/images/hero-villa.jpg"
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

      {/* 2b. DEDICATED BANGALORE LOCALITY HUBS & CASE STUDIES */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#B77C26] uppercase block mb-2">
              DEDICATED LOCALITY HUBS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-heading text-gray-950 mb-4">
              Bangalore Locality Fabrication Hubs
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Explore specialized fabrication engineering, local architectural standards, and verified project case studies across Bangalore's premier residential, commercial, and industrial corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sarjapur Road */}
            <div className="bg-[#F8FAFC] border border-gray-200 hover:border-[#D49B37] rounded-xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F59E0B]/10 text-[#B45309] border border-[#F59E0B]/30">
                    <MapPin className="w-3.5 h-3.5 text-[#B77C26]" />
                    South-East Villa Corridor
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Active Coverage
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-gray-950 group-hover:text-[#B77C26] transition-colors mb-2">
                  Sarjapur Road &amp; Carmelaram
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  Specialized architectural metalwork for gated villa layouts and private residences along the Sarjapur-Carmelaram corridor.
                </p>
                <div className="bg-white rounded-lg p-3.5 border border-gray-200 mb-4 text-xs text-gray-700 space-y-1.5">
                  <span className="font-bold text-gray-900 block text-[11px] uppercase tracking-wider text-[#B77C26]">
                    Specialized Fabrication Scope:
                  </span>
                  <p className="leading-relaxed">
                    Cantilever villa car parking sheds with UV polycarbonate roofing, custom SS 304 &amp; 12mm toughened glass balcony safety railings, and terrace canopies.
                  </p>
                </div>
                <div className="text-xs text-gray-500 mb-6">
                  <span className="font-semibold text-gray-800">Featured Case Study: </span>
                  <a
                    href="/our-work/canopy-structure-sarjapur-villa/"
                    className="text-[#B77C26] hover:underline font-medium inline-flex items-center gap-1"
                  >
                    Architectural Entrance Canopy in Sarjapur Villa &rarr;
                  </a>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                <a
                  href="/locations/sarjapur-road/"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#B77C26] group-hover:text-[#925C18] transition-colors"
                >
                  View Sarjapur Road Hub
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <button
                  onClick={onOpenQuote}
                  className="text-xs font-medium text-gray-600 hover:text-black underline cursor-pointer"
                >
                  Get Site Quote
                </button>
              </div>
            </div>

            {/* Indiranagar */}
            <div className="bg-[#F8FAFC] border border-gray-200 hover:border-[#D49B37] rounded-xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F59E0B]/10 text-[#B45309] border border-[#F59E0B]/30">
                    <MapPin className="w-3.5 h-3.5 text-[#B77C26]" />
                    Central-East Lifestyle Hub
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Active Coverage
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-gray-950 group-hover:text-[#B77C26] transition-colors mb-2">
                  Indiranagar &amp; Central East
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  Bespoke architectural steelwork for luxury bungalows, rooftop penthouses, and boutique commercial spaces.
                </p>
                <div className="bg-white rounded-lg p-3.5 border border-gray-200 mb-4 text-xs text-gray-700 space-y-1.5">
                  <span className="font-bold text-gray-900 block text-[11px] uppercase tracking-wider text-[#B77C26]">
                    Specialized Fabrication Scope:
                  </span>
                  <p className="leading-relaxed">
                    Steel &amp; aluminium rooftop terrace pergolas with shade louvers, architectural space-saving spiral &amp; floating staircases for duplexes, and laser-cut privacy screens.
                  </p>
                </div>
                <div className="text-xs text-gray-500 mb-6">
                  <span className="font-semibold text-gray-800">Featured Case Study: </span>
                  <a
                    href="/our-work/terrace-pergola-indiranagar-penthouse/"
                    className="text-[#B77C26] hover:underline font-medium inline-flex items-center gap-1"
                  >
                    Rooftop Terrace Pergola in Indiranagar Penthouse &rarr;
                  </a>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                <a
                  href="/locations/indiranagar/"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#B77C26] group-hover:text-[#925C18] transition-colors"
                >
                  View Indiranagar Hub
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <button
                  onClick={onOpenQuote}
                  className="text-xs font-medium text-gray-600 hover:text-black underline cursor-pointer"
                >
                  Get Site Quote
                </button>
              </div>
            </div>

            {/* Devanahalli */}
            <div className="bg-[#F8FAFC] border border-gray-200 hover:border-[#D49B37] rounded-xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F59E0B]/10 text-[#B45309] border border-[#F59E0B]/30">
                    <MapPin className="w-3.5 h-3.5 text-[#B77C26]" />
                    North Airport Belt &amp; Estates
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Active Coverage
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-gray-950 group-hover:text-[#B77C26] transition-colors mb-2">
                  Devanahalli &amp; Airport Belt
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  Heavy-duty steel fabrication engineered for airport-corridor estates, gated villa layouts, and logistics facilities.
                </p>
                <div className="bg-white rounded-lg p-3.5 border border-gray-200 mb-4 text-xs text-gray-700 space-y-1.5">
                  <span className="font-bold text-gray-900 block text-[11px] uppercase tracking-wider text-[#B77C26]">
                    Specialized Fabrication Scope:
                  </span>
                  <p className="leading-relaxed">
                    Motorized wide sliding estate gates, galvanized perimeter security fencing, agricultural sheds, and warehouse steel roofing.
                  </p>
                </div>
                <div className="text-xs text-gray-500 mb-6">
                  <span className="font-semibold text-gray-800">Featured Case Study: </span>
                  <a
                    href="/our-work/sliding-gate-devanahalli-estate/"
                    className="text-[#B77C26] hover:underline font-medium inline-flex items-center gap-1"
                  >
                    Automated Sliding Estate Gate in Devanahalli &rarr;
                  </a>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                <a
                  href="/locations/devanahalli/"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#B77C26] group-hover:text-[#925C18] transition-colors"
                >
                  View Devanahalli Hub
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <button
                  onClick={onOpenQuote}
                  className="text-xs font-medium text-gray-600 hover:text-black underline cursor-pointer"
                >
                  Get Site Quote
                </button>
              </div>
            </div>

            {/* Peenya Industrial Area */}
            <div className="bg-[#F8FAFC] border border-gray-200 hover:border-[#D49B37] rounded-xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F59E0B]/10 text-[#B45309] border border-[#F59E0B]/30">
                    <MapPin className="w-3.5 h-3.5 text-[#B77C26]" />
                    West Bangalore Industrial Zone
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Workshop Adjacency
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-gray-950 group-hover:text-[#B77C26] transition-colors mb-2">
                  Peenya Industrial Area
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  Industrial structural steel fabrication for South Asia's largest industrial cluster, located right beside our Dasarahalli workshop.
                </p>
                <div className="bg-white rounded-lg p-3.5 border border-gray-200 mb-4 text-xs text-gray-700 space-y-1.5">
                  <span className="font-bold text-gray-900 block text-[11px] uppercase tracking-wider text-[#B77C26]">
                    Specialized Fabrication Scope:
                  </span>
                  <p className="leading-relaxed">
                    Heavy IS 2062 I-beam structural steel, PEB factory roofing sheds, warehouse mezzanine storage floors, and heavy sliding factory gates.
                  </p>
                </div>
                <div className="text-xs text-gray-500 mb-6">
                  <span className="font-semibold text-gray-800">Featured Case Study: </span>
                  <a
                    href="/our-work/industrial-fabrication-nelamangala-plant/"
                    className="text-[#B77C26] hover:underline font-medium inline-flex items-center gap-1"
                  >
                    Industrial Plant Fabrication in Nelamangala &rarr;
                  </a>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                <a
                  href="/locations/peenya/"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#B77C26] group-hover:text-[#925C18] transition-colors"
                >
                  View Peenya Industrial Hub
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <button
                  onClick={onOpenQuote}
                  className="text-xs font-medium text-gray-600 hover:text-black underline cursor-pointer"
                >
                  Get Site Quote
                </button>
              </div>
            </div>
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
                  { loc: 'Thanisandra & Hennur', corridor: 'North Bangalore', app: 'Floating Metal Staircases, Safety Window Grills', speed: 'Same-day consultation', link: '/locations/thanisandra/' },
                  { loc: 'RT Nagar', corridor: 'North Bangalore', app: 'Apartment Security Grills, Compound Wall Railings', speed: 'Same-day consultation', link: '/areas-we-serve/north-bangalore/' },
                  { loc: 'Whitefield', corridor: 'East Bangalore', app: 'High-End CNC Gates, SS Glass Handrails, Villa Pergolas', speed: 'Next-day inspection', link: '/locations/whitefield/' },
                  { loc: 'KR Puram & Brookefield', corridor: 'East Bangalore', app: 'Residential Balcony Railings, Multi-Vehicle Car Sheds', speed: 'Next-day inspection', link: '/locations/kr-puram/' },
                  { loc: 'Marathahalli & Mahadevapura', corridor: 'East Bangalore', app: 'Commercial Entrance Canopies, Architectural Partitions', speed: 'Next-day inspection', link: '/locations/marathahalli/' },
                  { loc: 'HSR Layout', corridor: 'South Bangalore', app: 'Matte Black Railings, Terrace Gazebos, Motorized Gates', speed: 'Same-day consultation', link: '/locations/hsr-layout/' },
                  { loc: 'Sarjapur Road', corridor: 'South Bangalore', app: 'Villa Entrance Porticos, Wood & Steel Pergolas, Car Sheds', speed: 'Next-day inspection', link: '/locations/sarjapur-road/' },
                  { loc: 'Indiranagar', corridor: 'Central-East Bangalore', app: 'Rooftop Pergolas, Spiral Staircases, Laser-Cut Grills', speed: 'Same-day consultation', link: '/locations/indiranagar/' },
                  { loc: 'Electronic City', corridor: 'South Bangalore', app: 'PEB Industrial Warehouse Sheds, Fire Escape Towers', speed: 'Priority industrial response', link: '/locations/electronic-city/' },
                  { loc: 'Jayanagar', corridor: 'South Bangalore', app: 'Bespoke Traditional & Modern Gates, Balcony Railings, Terrace Sit-Outs', speed: 'Same-day consultation', link: '/locations/jayanagar/' },
                  { loc: 'JP Nagar', corridor: 'South Bangalore', app: 'Internal & External MS Staircases, Balcony Grills, Cantilever Car Sheds', speed: 'Same-day consultation', link: '/locations/jp-nagar/' },
                  { loc: 'BTM Layout', corridor: 'South Bangalore', app: 'Space-Saving Bi-Fold Gates, Terrace Enclosures', speed: 'Same-day consultation', link: '/locations/btm-layout/' },
                  { loc: 'Peenya Industrial Area', corridor: 'West Bangalore', app: 'Heavy Structural Steel Framing, Warehouse PEB Sheds, Mezzanines', speed: 'Industrial priority dispatch', link: '/locations/peenya/' },
                  { loc: 'Devanahalli', corridor: 'North Bangalore Airport Belt', app: 'Automated Sliding Estate Gates, Perimeter Fencing, Sheds', speed: 'Same-day consultation', link: '/locations/devanahalli/' },
                  { loc: 'Yeshwanthpur', corridor: 'West Bangalore', app: 'Mezzanine Platforms, Heavy Logistics Roll-Up Gates', speed: 'Same-day consultation', link: '/locations/yeshwanthpur/' },
                  { loc: 'Rajajinagar', corridor: 'West Bangalore', app: 'Commercial Security Grills, Steel Balconies & Gates', speed: 'Same-day consultation', link: '/locations/rajajinagar/' }
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

          {/* Rapid 16 km - 25 km Dispatch Callout */}
          <div className="mt-10 rounded-xl bg-[#121820] border border-[#D49B37]/40 p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <span className="inline-block px-2.5 py-0.5 rounded bg-[#D49B37]/20 text-[#D49B37] text-[10px] font-bold uppercase tracking-wider">
                16 KM – 25 KM RAPID MOBILE WELDING &amp; MEASUREMENT ZONE
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-serif-heading text-white">
                Centered at {siteConfig.address}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Need a welding shop near you open now (Mon – Sat, 9:00 AM – 8:00 PM)? Our mobile home welding van and fabrication supervisors dispatch directly within 16 km for gate hinge repairs, window grills, Aluminium TIG, Gas brazing, and commercial steel projects across Bangalore.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={`tel:${siteConfig.phoneClean}`}
                className="px-5 py-2.5 rounded-md bg-[#D49B37] hover:bg-[#C28B2B] text-gray-950 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Call {siteConfig.phone}
              </a>
              <a
                href="/services/custom-welding-fabrication/"
                className="px-5 py-2.5 rounded-md border border-gray-600 hover:border-[#D49B37] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Welding Home Service
              </a>
            </div>
          </div>

          {/* Interactive Workshop Dispatch Map */}
          <div className="mt-8">
            <GoogleMapEmbed
              variant="dark"
              compact
              title="Central Workshop Hub & Bangalore Service Radius"
              subtitle="Located on Dasarahalli Main Road near Sobha Moonstone (560024) for 60–90 minute North Bangalore arrival and full Greater Bangalore coverage."
            />
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
