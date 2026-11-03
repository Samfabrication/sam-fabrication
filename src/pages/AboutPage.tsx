import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Award, 
  CheckCircle2, 
  Building2, 
  Cog, 
  Users, 
  Gem,
  ArrowRight,
  Flame,
  Wrench,
  Clock
} from 'lucide-react';
import { siteConfig } from '../data/siteData';
import { StatCounters } from '../components/StatCounters';
import { CtaBanner } from '../components/CtaBanner';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';

interface AboutPageProps {
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote }) => {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About SAM Fabrication Engineering Work Bangalore',
    url: 'https://samfabrication.in/about-us/',
    description: 'Learn about SAM Fabrication Engineering Work, Bangalore premier steel & metal fabricator delivering custom structural, residential and commercial solutions.',
    mainEntity: {
      '@id': 'https://samfabrication.in/#entity'
    }
  };

  return (
    <>
      <SeoHead
        title="About Us | SAM Fabrication Engineering Work Bangalore"
        description="Learn about SAM Fabrication Engineering Work, Bangalore's premier steel & metal fabricator delivering custom structural, residential and commercial solutions."
        canonical="https://samfabrication.in/about-us/"
        schema={aboutSchema}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about-us/' }
        ]}
      />

      {/* 1. HERO SECTION (Matching Mobile Screen 2 & Premium Desktop Aesthetic) */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center bg-[#0B0F15] overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/images/hero-home.webp" type="image/webp" />
            <img
              src="/images/hero-home.jpg"
              alt="Architectural metal fabrication work and residential steel structures by SAM Fabrication Engineering Work in Bangalore"
              className="w-full h-full object-cover object-center brightness-[0.7]"
              fetchPriority="high"
              loading="eager"
              decoding="sync"
              width="1376"
              height="768"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F15]/95 via-[#0B0F15]/85 to-transparent lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F15] via-transparent to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="max-w-2xl space-y-5">
            
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#D49B37] uppercase">
              ABOUT US
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading text-white tracking-tight leading-[1.15]">
              Built with Experience.<br />
              <span className="gold-gradient-text">Driven by Quality.</span>
            </h1>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
              SAM Fabrication is a trusted name in steel fabrication, gates, grills, railings and structural works, delivering custom solutions for residential, commercial and industrial projects across Bangalore.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="gold-shimmer-btn px-6 py-3 rounded-md text-xs font-bold text-gray-950 uppercase tracking-wider shadow-lg flex items-center justify-center cursor-pointer transition-all active:scale-95"
              >
                <span>Request Free Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

          </div>

          <div className="hidden lg:block absolute right-16 bottom-16 text-right pointer-events-none select-none">
            <span className="font-script-accent text-5xl xl:text-6xl text-[#E5A83B] opacity-90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] block">
              Built<br />With<br />Pride
            </span>
          </div>

        </div>
      </section>

      {/* 2. STAT COUNTERS STRIP */}
      <StatCounters />

      {/* 3. MISSION & CORE VALUES SECTION */}
      <section className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image: Luxury Balcony Railings */}
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                <picture>
                  <source srcSet="/images/feedback-balcony.webp" type="image/webp" />
                  <img
                    src="/images/feedback-balcony.jpg"
                    alt="Precision-engineered modern balcony railing fabricated and installed by SAM Fabrication"
                    className="w-full h-80 object-cover"
                    width="1200"
                    height="750"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>

            {/* Right: Mission & Vision */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#B77C26] uppercase">
                  OUR PURPOSE
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-gray-950 mt-1">
                  Engineering Safety, Longevity and Aesthetic Distinction
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
                  Founded with a vision to eliminate the frustration of poorly finished, rust-prone metalwork, SAM Fabrication combines certified welding techniques, computerized laser-cutting technology, and rigorous anti-rust surface treatments to deliver architectural structures that endure for generations.
                </p>
              </div>

              {/* Mission Card (Matching Mobile Screen 2) */}
              <div className="p-5 rounded-lg bg-[#FAF0D7]/50 border border-[#E5C36B]/60 space-y-2">
                <div className="flex items-center space-x-2 text-[#B77C26]">
                  <Target className="w-5 h-5 shrink-0" />
                  <h3 className="text-sm font-bold font-serif-heading text-gray-950">Our Mission</h3>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed pl-7">
                  To deliver high-quality, durable and aesthetically stunning fabrication solutions that enhance spaces and exceed customer expectations through craftsmanship, transparent pricing, and punctual execution.
                </p>
              </div>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-lg border border-gray-200 bg-[#F8FAFC]">
                  <Flame className="w-5 h-5 text-[#B77C26] mb-2" />
                  <h4 className="text-xs font-bold text-gray-950 font-serif-heading">Certified Welding</h4>
                  <p className="text-[11px] text-gray-500 mt-1">TIG, MIG &amp; Arc procedures adhering to structural safety codes.</p>
                </div>
                <div className="p-3.5 rounded-lg border border-gray-200 bg-[#F8FAFC]">
                  <ShieldCheck className="w-5 h-5 text-[#B77C26] mb-2" />
                  <h4 className="text-xs font-bold text-gray-950 font-serif-heading">Rust Immunity</h4>
                  <p className="text-[11px] text-gray-500 mt-1">Dual-coat zinc phosphate primers &amp; electrostatic powder coating.</p>
                </div>
                <div className="p-3.5 rounded-lg border border-gray-200 bg-[#F8FAFC]">
                  <Clock className="w-5 h-5 text-[#B77C26] mb-2" />
                  <h4 className="text-xs font-bold text-gray-950 font-serif-heading">On-Time Handover</h4>
                  <p className="text-[11px] text-gray-500 mt-1">Committed project milestone delivery with zero excuses.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. WORKSHOP & TECHNICAL RIGOR SECTION */}
      <section className="bg-[#0B0F15] text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-[#1C2533]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#D49B37] uppercase">
              WORKSHOP STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-white mt-1">
              Precision Machinery &amp; Material Quality
            </h2>
            <p className="text-xs text-gray-400 mt-2">
              We never cut corners on raw material grade, weld penetration, or surface finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#121820] border border-[#222E3E] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#1D2736] flex items-center justify-center text-[#D49B37]">
                <Gem className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold font-serif-heading text-white">Genuine Steel Alloys</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                We source certified Tata, Jindal, and SAIL mild steel sections, alongside authenticated AISI 304 and 316 Grade stainless steel coils and tubes.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#121820] border border-[#222E3E] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#1D2736] flex items-center justify-center text-[#D49B37]">
                <Cog className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold font-serif-heading text-white">High-Precision Laser Cutting</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Our CNC fiber laser cutting machinery achieves sub-millimeter edge precision, creating razor-sharp geometric and organic jali patterns for modern gates.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#121820] border border-[#222E3E] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#1D2736] flex items-center justify-center text-[#D49B37]">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold font-serif-heading text-white">Turnkey On-Site Installation</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Our technicians bring mobile generator power and heavy-duty drilling rigs to ensure solid mechanical anchoring directly into RCC concrete footings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <CtaBanner onOpenQuote={onOpenQuote} />
    </>
  );
};

