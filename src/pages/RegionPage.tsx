import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CtaBanner } from '../components/CtaBanner';
import { StatCounters } from '../components/StatCounters';
import { RegionItem } from '../types';
import { regionsData, servicesData, siteConfig } from '../data/siteData';
import { MapPin, ArrowRight, ShieldCheck, CheckCircle2, Clock, Wrench, HelpCircle, ChevronRight, Phone } from 'lucide-react';

interface RegionPageProps {
  region: RegionItem;
  onOpenQuote: () => void;
}

export const RegionPage: React.FC<RegionPageProps> = ({ region, onOpenQuote }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Areas We Serve', href: '/areas-we-serve/' },
    { label: region.name }
  ];

  const otherRegions = regionsData.filter((r) => r.slug !== region.slug);



  return (
    <>
      <SeoHead
        title={`${region.name} Fabrication Works | Gates, Railings, Sheds | SAM Fabrication`}
        description={region.metaDescription}
        canonicalUrl={`https://samfabrication.in/areas-we-serve/${region.slug}/`}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* 1. HERO SECTION (Dark Charcoal with Photographic Texture) */}
      <section className="relative min-h-[420px] lg:min-h-[460px] flex items-center bg-[#0B0F15] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/images/hero-villa.webp" type="image/webp" />
            <img
              src="/images/hero-villa.jpg"
              alt={`${region.name} architectural metal and steel fabrication`}
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#D49B37]/15 text-[#D49B37] border border-[#D49B37]/30 uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              {region.name} Corridor
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading text-white tracking-tight leading-[1.15]">
              {region.name} Metal Fabrication,<br />
              <span className="gold-gradient-text">Gates & Structural Steel</span>
            </h1>

            <p className="text-xs sm:text-sm text-[#D49B37] font-semibold italic">
              {region.tagline}
            </p>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
              {region.overview}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="gold-shimmer-btn inline-flex items-center px-6 py-3 rounded-md text-xs font-bold text-gray-950 uppercase tracking-wider shadow-lg hover:shadow-[#D49B37]/30 transition-all cursor-pointer"
              >
                <span>Request On-Site Measurement</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </button>
              <a
                href={`tel:${siteConfig.phoneClean}`}
                className="inline-flex items-center px-5 py-3 rounded-md border border-gray-700 hover:border-[#D49B37] text-xs font-semibold text-gray-200 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D49B37] mr-2" />
                <span>Direct Call: {siteConfig.phone}</span>
              </a>
            </div>
          </div>

          {/* Script Accent Watermark */}
          <div className="hidden lg:block absolute right-16 bottom-14 text-right pointer-events-none select-none">
            <span className="font-script-accent text-5xl xl:text-6xl text-[#E5A83B] opacity-90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] block capitalize">
              {region.direction}<br />Bangalore
            </span>
          </div>
        </div>
      </section>

      {/* 2. LOCAL ENGINEERING DEMANDS (Clean White Section) */}
      <section className="bg-white text-gray-950 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#B77C26] uppercase block mb-2">
                ENGINEERING SPECIFICATIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-gray-950 mb-4">
                Tailored Fabrication Demands in {region.name}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                Every district in Bangalore presents distinct architectural nuances, wind exposures, and structural codes. In {region.name}, our engineering team designs and manufactures specifically to accommodate local plot geometries and climate factors:
              </p>

              <div className="space-y-3">
                {region.fabricationDemands.map((demand, index) => (
                  <div key={index} className="flex items-start gap-3 bg-[#F8FAFC] border border-gray-200 p-4 rounded-xl shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#B77C26] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-800 font-medium">{demand}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F8FAFC] border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold font-serif-heading text-gray-950 mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#B77C26]" />
                Recent Projects in {region.name}
              </h3>
              <p className="text-xs text-gray-600 mb-6">
                Verified fabrications delivered to private residences, commercial premises, and industrial campuses across this corridor:
              </p>

              <div className="space-y-3 mb-6">
                {region.prominentProjects.map((proj, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 bg-white border border-gray-200 p-3.5 rounded-lg shadow-sm">
                    <span className="w-5 h-5 rounded-full bg-[#D49B37]/15 text-[#B77C26] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="font-medium">{proj}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <a
                  href="/our-work/"
                  className="text-xs font-bold text-[#B77C26] hover:text-[#925C18] inline-flex items-center gap-1.5"
                >
                  Explore Complete Case Studies <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COVERED LOCALITIES GRID (Light Grey Section #F8FAFC) */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#B77C26] uppercase block mb-2">
              COVERAGE MATRIX
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-gray-950 mb-3">
              Localities We Actively Serve in {region.name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Prompt measurement response, workshop transport, and certified on-site welding installation available across these neighborhoods:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {region.localities.map((locality, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#D49B37] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#B77C26]" />
                      <h3 className="text-base font-bold text-gray-950 font-serif-heading">{locality}</h3>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Active Dispatch
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Full turnkey fabrication covering independent villas, apartments, gated townships, and commercial facilities in {locality}.
                  </p>
                </div>
                <button
                  onClick={onOpenQuote}
                  className="text-xs text-[#B77C26] hover:text-[#925C18] inline-flex items-center gap-1 font-bold cursor-pointer pt-2 border-t border-gray-100"
                >
                  Book Measurement in {locality} <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE SERVICES FOR THIS REGION (Dark Section for Architectural Contrast) */}
      <section className="bg-[#0B0F15] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1C2533]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#D49B37] uppercase block mb-2">
              WORKSHOP & ON-SITE SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-white mb-3">
              Fabrication Solutions Delivered to {region.name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Precision engineered using certified mild steel and stainless steel with anti-rust surface treatments:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.slice(0, 6).map((service) => (
              <div
                key={service.slug}
                className="bg-[#121820] border border-[#1E2735] rounded-xl p-6 hover:border-[#D49B37]/60 transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <h3 className="text-base font-bold font-serif-heading text-white mb-2">
                    {service.title} in {region.name}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#1E2735] flex items-center justify-between">
                  <a
                    href={`/services/${service.slug}/`}
                    className="text-xs font-bold text-[#D49B37] hover:underline inline-flex items-center gap-1"
                  >
                    View Specifications <ArrowRight className="w-3 h-3" />
                  </a>
                  <button
                    onClick={onOpenQuote}
                    className="text-xs text-gray-400 hover:text-white cursor-pointer"
                  >
                    Get Estimate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STAT COUNTERS STRIP */}
      <StatCounters />

      {/* 6. LOCAL REGIONAL FAQS (Crisp White Section) */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#B77C26] uppercase block mb-2">
              LOCAL QUESTIONS & ANSWERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-gray-950 mb-3">
              Frequently Asked Questions for {region.name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Answers regarding site visits, timelines, material grades, and compliance in {region.name}.
            </p>
          </div>

          <div className="space-y-4">
            {region.localFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-sm sm:text-base font-bold text-gray-950 mb-2 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#B77C26] shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OTHER SERVICE CORRIDORS (Clean Light Strip) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700">
              Other Bangalore Service Corridors:
            </h3>
            <a
              href="/areas-we-serve/"
              className="text-xs font-bold text-[#B77C26] hover:text-[#925C18] mt-2 sm:mt-0 inline-flex items-center gap-1"
            >
              View Full Bangalore Coverage Directory &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherRegions.map((other) => (
              <a
                key={other.slug}
                href={`/areas-we-serve/${other.slug}/`}
                className="bg-white border border-gray-200 hover:border-[#D49B37] p-4 rounded-xl flex items-center justify-between group transition-all shadow-sm hover:shadow-md"
              >
                <div>
                  <span className="text-[11px] font-semibold text-gray-500 capitalize">{other.direction} Zone</span>
                  <h4 className="text-sm font-bold font-serif-heading text-gray-950 group-hover:text-[#B77C26] transition-colors">
                    {other.name}
                  </h4>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#B77C26] transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA BANNER */}
      <CtaBanner onOpenQuote={onOpenQuote} />
    </>
  );
};
