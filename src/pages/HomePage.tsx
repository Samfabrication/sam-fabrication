import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Cog, 
  Building2, 
  Flame, 
  Layers, 
  Home as HomeIcon, 
  Briefcase, 
  ArrowRight, 
  Play, 
  MapPin, 
  CheckCircle2,
  Phone,
  Star,
  Clock,
  Calculator,
  Wrench,
  ChevronDown,
  HelpCircle,
  IndianRupee
} from 'lucide-react';
import { 
  siteConfig, 
  servicesData, 
  projectsData, 
  clientReviewsData, 
  fabricationRatesData, 
  homeFaqsData 
} from '../data/siteData';
import { CtaBanner } from '../components/CtaBanner';
import { SeoHead } from '../components/SeoHead';
import { GoogleMapEmbed } from '../components/GoogleMapEmbed';

interface HomePageProps {
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuote }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // 6 Services for homepage matching mockup
  const homeServices = servicesData.slice(0, 6);
  // 6 Recent projects matching mockup
  const homeProjects = projectsData.slice(0, 6);

  // FAQ Schema for HomePage - LocalBusiness and WebSite are already supplied in @graph by prerender.mjs
  const homeFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqsData.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer
      }
    }))
  };

  return (
    <>
      <SeoHead
        title="Fabrication Works in Bangalore | Metal Fabricator, Gates, Grills & Welding | SAM Fabrication"
        description="Leading metal fabrication works in Bangalore near Dasarahalli & Hebbal. Custom MS gates, window safety grills, SS railings, sheds & on-site welding. Call +91 94533 44824."
        canonical="https://samfabrication.in/"
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[620px] lg:min-h-[720px] flex items-center bg-[#0B0F15] overflow-hidden">
        
        {/* Background Architectural Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/images/hero-home.webp" type="image/webp" />
            <img
              src="/images/hero-home.jpg"
              alt="Modern luxury villa with architectural steel structure and wooden pergola in Bangalore"
              className="w-full h-full object-cover object-center brightness-[0.78]"
              fetchPriority="high"
              width="1376"
              height="768"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F15]/95 via-[#0B0F15]/80 to-transparent lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F15] via-transparent to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-2xl space-y-6">
            
            {/* Small tracking kicker */}
            <div className="inline-flex items-center space-x-2">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#D49B37] uppercase">
                STRONGER SPACES • BUILT WITH PRECISION
              </span>
            </div>

            {/* Main Headline - Primary Target Query */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif-heading text-white tracking-tight leading-[1.12]">
                Fabrication Works in <span className="gold-gradient-text">Bangalore</span>
              </h1>
              <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D49B37]">
                SAM Fabrication Engineering Work
              </p>
            </div>

            {/* Subheadline - Natural Keyword Integration */}
            <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed max-w-xl">
              Leading metal fabricator in Bangalore near Dasarahalli &amp; Hebbal. Custom MS gates, window safety grills, SS railings, car parking sheds, heavy structural steelwork and on-site welding services across Bengaluru.
            </p>

            {/* 3 Feature Badges Row */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center space-x-2 bg-black/50 border border-gray-700/60 px-3.5 py-1.5 rounded-full text-xs text-gray-200 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-[#D49B37]" />
                <span>Durable Structures</span>
              </div>
              <div className="flex items-center space-x-2 bg-black/50 border border-gray-700/60 px-3.5 py-1.5 rounded-full text-xs text-gray-200 backdrop-blur-sm">
                <Cog className="w-4 h-4 text-[#D49B37]" />
                <span>Precision Fabrication</span>
              </div>
              <div className="flex items-center space-x-2 bg-black/50 border border-gray-700/60 px-3.5 py-1.5 rounded-full text-xs text-gray-200 backdrop-blur-sm">
                <Building2 className="w-4 h-4 text-[#D49B37]" />
                <span>Residential, Commercial &amp; Industrial</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="gold-shimmer-btn px-7 py-3.5 rounded-md text-xs font-bold text-gray-950 uppercase tracking-wider shadow-lg flex items-center justify-center cursor-pointer transition-all active:scale-95"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              
              <a
                href="/our-work/"
                className="px-6 py-3.5 rounded-md border border-gray-500 hover:border-white text-xs font-semibold text-white uppercase tracking-wider flex items-center justify-center transition-all bg-black/40 hover:bg-black/60 backdrop-blur-sm"
              >
                <span>Our Work</span>
                <Play className="w-3.5 h-3.5 ml-2 fill-current text-[#D49B37]" />
              </a>
            </div>

          </div>

          {/* Script Accent on right */}
          <div className="hidden lg:block absolute right-12 bottom-12 text-right pointer-events-none select-none">
            <span className="font-script-accent text-5xl xl:text-6xl text-[#E5A83B] opacity-90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] block leading-tight">
              Build<br />Fabricate<br />Strengthen
            </span>
          </div>

        </div>
      </section>

      {/* 2. FIVE FEATURE CARDS ROW (Overlapping Floating Cards) */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          
          <div className="bg-white rounded-lg p-5 text-gray-900 shadow-xl border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="w-11 h-11 rounded-full bg-[#FAF3E0] flex items-center justify-center text-[#B77C26] mb-3">
              <Flame className="w-5 h-5" />
            </div>
            <h2 className="text-xs font-bold tracking-wider uppercase text-gray-950 font-serif-heading">WELDING</h2>
            <p className="text-[11px] text-gray-600 mt-1 leading-snug">High quality welding for all structures</p>
          </div>

          <div className="bg-white rounded-lg p-5 text-gray-900 shadow-xl border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="w-11 h-11 rounded-full bg-[#FAF3E0] flex items-center justify-center text-[#B77C26] mb-3">
              <Layers className="w-5 h-5" />
            </div>
            <h2 className="text-xs font-bold tracking-wider uppercase text-gray-950 font-serif-heading">FABRICATION WORKS</h2>
            <p className="text-[11px] text-gray-600 mt-1 leading-snug">Custom steel fabrication as per your needs</p>
          </div>

          <div className="bg-white rounded-lg p-5 text-gray-900 shadow-xl border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="w-11 h-11 rounded-full bg-[#FAF3E0] flex items-center justify-center text-[#B77C26] mb-3">
              <Building2 className="w-5 h-5" />
            </div>
            <h2 className="text-xs font-bold tracking-wider uppercase text-gray-950 font-serif-heading">FOR BUILDINGS</h2>
            <p className="text-[11px] text-gray-600 mt-1 leading-snug">Residential &amp; commercial projects</p>
          </div>

          <div className="bg-white rounded-lg p-5 text-gray-900 shadow-xl border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="w-11 h-11 rounded-full bg-[#FAF3E0] flex items-center justify-center text-[#B77C26] mb-3">
              <HomeIcon className="w-5 h-5" />
            </div>
            <h2 className="text-xs font-bold tracking-wider uppercase text-gray-950 font-serif-heading">FOR HOUSES</h2>
            <p className="text-[11px] text-gray-600 mt-1 leading-snug">Gates, grills, railings, frames and more</p>
          </div>

          <div className="col-span-2 md:col-span-1 bg-white rounded-lg p-5 text-gray-900 shadow-xl border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="w-11 h-11 rounded-full bg-[#FAF3E0] flex items-center justify-center text-[#B77C26] mb-3">
              <Briefcase className="w-5 h-5" />
            </div>
            <h2 className="text-xs font-bold tracking-wider uppercase text-gray-950 font-serif-heading">FOR OFFICES</h2>
            <p className="text-[11px] text-gray-600 mt-1 leading-snug">Modern and strong fabrication solutions</p>
          </div>

        </div>
      </section>

      {/* 3. ABOUT US SECTION */}
      <section className="bg-[#0B0F15] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1E2735]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: 3D Metal Logo Mounted on Wall */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="relative rounded-lg overflow-hidden border border-[#222E3E] shadow-2xl group w-full max-w-sm">
                <picture>
                  <source srcSet="/images/sam-3d-logo.webp" type="image/webp" />
                  <img
                    src="/images/sam-3d-logo.jpg"
                    alt="SAM Fabrication 3D metallic architectural wall emblem with spotlight illumination"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    width="900"
                    height="750"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>

            {/* Middle Col: About Content & Stats */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#D49B37] uppercase">
                ABOUT US
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-white leading-tight">
                Reliable Metal Fabrication &amp; Engineering for a Stronger Tomorrow
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                SAM Fabrication Engineering Work specializes in precision welding and steel fabrication solutions for buildings, houses, offices and industrial spaces across Bangalore. From our Dasarahalli workshop near Hebbal, we focus on certified metal grades, timely delivery, and exact architectural alignment.
              </p>

              {/* 3 Stat Numbers */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#1C2533]">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#D49B37] font-serif-heading">
                    {siteConfig.stats.projectsCompleted}
                  </div>
                  <div className="text-[11px] text-gray-400 font-medium">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#D49B37] font-serif-heading">
                    {siteConfig.stats.yearsExperience}
                  </div>
                  <div className="text-[11px] text-gray-400 font-medium">Years of Experience</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#D49B37] font-serif-heading">
                    {siteConfig.stats.qualityCommitment}
                  </div>
                  <div className="text-[11px] text-gray-400 font-medium">Customer Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Col: Staircase Architectural Photo */}
            <div className="lg:col-span-3 hidden lg:flex items-center justify-center">
              <div className="rounded-lg overflow-hidden border border-[#222E3E] shadow-xl w-full">
                <picture>
                  <source srcSet="/images/about-staircase.webp" type="image/webp" />
                  <img
                    src="/images/about-staircase.jpg"
                    alt="Modern architectural steel staircase with warm step lighting and horizontal safety railings"
                    className="w-full h-64 object-cover"
                    width="1000"
                    height="800"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES SECTION */}
      <section className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#B77C26] uppercase">
                OUR SERVICES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-gray-950 mt-1">
                Complete Metal Fabrication Solutions
              </h2>
            </div>
            <a
              href="/services/"
              className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 hover:border-gray-800 text-xs font-semibold text-gray-800 hover:text-black transition-colors"
            >
              <span>View All 11 Services</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>

          {/* Grid of 6 Service Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {homeServices.map((service) => (
              <a
                key={service.id}
                href={`/services/${service.slug}/`}
                className="group block bg-[#F8FAFC] rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="h-28 w-full overflow-hidden bg-gray-100">
                  <picture>
                    <source srcSet={service.image} type="image/webp" />
                    <img
                      src={service.image.replace('.webp', '.jpg')}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      width="1200"
                      height="750"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-900 font-serif-heading group-hover:text-[#B77C26] transition-colors truncate">
                    {service.title}
                  </span>
                  <div className="w-6 h-6 rounded-full border border-[#D49B37] flex items-center justify-center text-[#B77C26] group-hover:bg-[#D49B37] group-hover:text-white transition-colors shrink-0 ml-1">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* 4b. BANGALORE FABRICATION RATES & PRICE ESTIMATION */}
      <section className="bg-[#F8FAFC] text-gray-900 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-[0.2em] text-[#B77C26] uppercase">
                <IndianRupee className="w-3.5 h-3.5 text-[#B77C26]" />
                <span>BANGALORE PRICE ESTIMATES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-gray-950 mt-1">
                Fabrication Works in Bangalore Price List
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-2xl leading-relaxed">
                Standard fabrication rates in Bangalore based on material grade (Tata, Jindal, APL Apollo), steel gauge, and custom design. Transparent pricing with no hidden charges.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/fabrication-rates-bangalore/"
                className="inline-flex items-center px-4 py-2.5 rounded-md bg-[#FAF3E0] border border-[#D49B37]/60 text-xs font-bold text-[#8E5B1C] hover:bg-[#D49B37] hover:text-white transition-all shadow-sm"
              >
                <Calculator className="w-3.5 h-3.5 mr-1.5" />
                <span>Interactive Cost Calculator</span>
              </a>
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center px-4 py-2.5 rounded-md bg-gray-950 text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
              >
                <span>Get Exact Site Quote</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#D49B37]" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {fabricationRatesData.slice(0, 6).map((rate, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md hover:border-[#D49B37]/80 transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-bold font-serif-heading text-gray-950">
                      {rate.category}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gray-100 text-gray-700 shrink-0">
                      {rate.unitBasis}
                    </span>
                  </div>
                  <div className="mt-3 py-2 px-3 rounded-lg bg-[#FAF3E0]/70 border border-[#D49B37]/30">
                    <span className="text-xs text-gray-600 block">Indicative Rate:</span>
                    <span className="text-base font-extrabold text-[#B77C26] font-serif-heading">
                      {rate.indicativeRate}
                    </span>
                  </div>
                  <div className="mt-3 space-y-1.5 text-xs text-gray-600">
                    <p>
                      <strong className="text-gray-900 font-medium">Material:</strong> {rate.materialGrade}
                    </p>
                    <p>
                      <strong className="text-gray-900 font-medium">Includes:</strong> {rate.includes}
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href={`/services/${rate.serviceSlug}/`}
                    className="text-xs font-bold text-[#8E5B1C] hover:text-[#B77C26] inline-flex items-center"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </a>
                  <button
                    onClick={onOpenQuote}
                    className="text-xs font-semibold text-gray-700 hover:text-black cursor-pointer"
                  >
                    Request Quote &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="leading-relaxed">
              <strong>Need an MS fabrication rate per kg in Bangalore?</strong> Structural steelwork ranges between ₹95 to ₹135/kg. We provide free doorstep laser measurements and custom design consultations across Bangalore.
            </p>
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-[#B77C26] text-white font-bold text-xs hover:bg-[#8E5B1C] transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5" />
              <span>Call {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. OUR WORK / RECENT PROJECTS SECTION */}
      <section className="bg-[#0B0F15] text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-[#1C2533]">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#D49B37] uppercase">
                OUR WORK
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-white mt-1">
                Recent Projects
              </h2>
            </div>
            <a
              href="/our-work/"
              className="inline-flex items-center px-4 py-2 rounded-full border border-gray-700 hover:border-gray-400 text-xs font-semibold text-gray-300 hover:text-white transition-colors"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#D49B37]" />
            </a>
          </div>

          {/* Grid of 6 Projects */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {homeProjects.map((p) => (
              <a
                key={p.id}
                href={`/our-work/${p.slug}/`}
                className="group block rounded-lg overflow-hidden border border-[#1E2735] bg-[#121820] shadow-lg hover:border-[#D49B37]/60 transition-all hover:-translate-y-1"
              >
                <div className="h-32 sm:h-36 w-full overflow-hidden relative">
                  <picture>
                    <source srcSet={p.image} type="image/webp" />
                    <img
                      src={p.image.replace('.webp', '.jpg')}
                      alt={p.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      width="1200"
                      height="750"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                    <span className="text-[10px] text-white font-medium truncate">{p.location}</span>
                  </div>
                </div>
                <div className="p-2.5">
                  <h3 className="text-xs font-semibold text-white truncate font-serif-heading">{p.title}</h3>
                  <div className="text-[10px] text-gray-400 flex items-center justify-between mt-1">
                    <span>{p.location}</span>
                    <ArrowRight className="w-3 h-3 text-[#D49B37] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* 5b. BANGALORE WELDING HUB, RATES & CLIENT REVIEWS STRIP */}
      <section className="bg-[#F8FAFC] text-gray-900 py-14 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto space-y-10">

          {/* 3 Quick-Intent Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <a
              href="/services/custom-welding-fabrication/"
              className="bg-white rounded-xl border border-gray-200 hover:border-[#D49B37] p-6 shadow-sm transition-all group block space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  <Clock className="w-3 h-3 mr-1" /> Open Mon–Sat 9 AM–8 PM
                </span>
                <Wrench className="w-5 h-5 text-[#B77C26]" />
              </div>
              <h3 className="text-base font-bold font-serif-heading text-gray-950 group-hover:text-[#B77C26] transition-colors">
                Welding Shop &amp; Home Service (16 km+)
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Doorstep welding repairs from Dasarahalli Main Road (560024), plus Aluminium TIG, Gas Oxy-Acetylene, and Fiber Laser welding. Call {siteConfig.phone}.
              </p>
              <span className="inline-flex items-center text-xs font-bold text-[#8E5B1C]">
                Explore Welding Services <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </span>
            </a>

            <a
              href="/fabrication-rates-bangalore/"
              className="bg-white rounded-xl border border-gray-200 hover:border-[#D49B37] p-6 shadow-sm transition-all group block space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8E5B1C] bg-[#FAF3E0] border border-[#D49B37]/40 px-2.5 py-0.5 rounded-full">
                  Per Sq.Ft &amp; Per Kg Guide
                </span>
                <Calculator className="w-5 h-5 text-[#B77C26]" />
              </div>
              <h3 className="text-base font-bold font-serif-heading text-gray-950 group-hover:text-[#B77C26] transition-colors">
                Fabrication Work Rate in Bangalore
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Check 2026 rates for MS gates (₹350–₹680/sq.ft), grills (₹180–₹320/sq.ft), SS 304 railings &amp; structural steel (₹95–₹135/kg) with interactive estimator.
              </p>
              <span className="inline-flex items-center text-xs font-bold text-[#8E5B1C]">
                Open Rate Card &amp; Calculator <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </span>
            </a>

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-700 bg-gray-100 border border-gray-200 px-2.5 py-0.5 rounded-full">
                  Commercial &amp; Exhibition
                </span>
                <Building2 className="w-5 h-5 text-[#B77C26]" />
              </div>
              <h3 className="text-base font-bold font-serif-heading text-gray-950">
                Heavy Steel &amp; Event Fabrication Vendors
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Industrial PEB sheds, crane girders &amp; mezzanines, plus modular stage trusses, corporate arches, and exhibition booths for Bangalore venues.
              </p>
              <div className="flex flex-wrap gap-3 pt-0.5 text-xs font-bold text-[#8E5B1C]">
                <a href="/services/structural-steel-fabrication/" className="hover:underline inline-flex items-center">
                  Heavy Fabrication <ArrowRight className="w-3 h-3 ml-1" />
                </a>
                <a href="/services/event-fabrication/" className="hover:underline inline-flex items-center">
                  Event Trusses <ArrowRight className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Client Reviews Strip */}
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#B77C26] uppercase">
                  BANGALORE CLIENT REVIEWS
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-serif-heading text-gray-950 mt-0.5">
                  What Bangalore Property Owners Say About Us
                </h2>
              </div>
              <a
                href="/why-choose-us/"
                className="text-xs font-bold text-[#8E5B1C] hover:text-[#B77C26] inline-flex items-center"
              >
                <span>View All Reviews &amp; Quality Standards</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {clientReviewsData.slice(0, 3).map((review, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center space-x-1 text-[#D49B37] mb-2">
                      {[...Array(5)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed italic">"{review.text}"</p>
                  </div>
                  <div className="pt-3 border-t border-gray-100">
                    <div className="text-xs font-bold text-gray-950 font-serif-heading">{review.name}</div>
                    <div className="text-[11px] text-gray-500">{review.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. BANGALORE LOCAL SERVICE AREAS SECTION */}
      <section className="bg-[#121820] text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-[#1E2735]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#D49B37] uppercase">
              LOCAL BANGALORE COVERAGE
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif-heading text-white mt-1">
              Fabrication Works Across Greater Bangalore
            </h2>
            <p className="text-xs text-gray-400 mt-2">
              We provide rapid on-site measurement, free consultation, and turnkey fabrication across key Bangalore residential and commercial corridors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: 'Hebbal', url: '/locations/hebbal/', area: 'North Bangalore' },
              { name: 'Yelahanka', url: '/locations/yelahanka/', area: 'North-East' },
              { name: 'Manyata Tech Park', url: '/locations/manyata-tech-park/', area: 'ORR North' },
              { name: 'Whitefield', url: '/locations/whitefield/', area: 'East Bangalore' },
              { name: 'Electronic City', url: '/locations/electronic-city/', area: 'South Bangalore' },
              { name: 'HSR Layout', url: '/locations/hsr-layout/', area: 'South-East' },
            ].map((loc) => (
              <a
                key={loc.name}
                href={loc.url}
                className="p-3 rounded-lg bg-[#0B0F15] border border-[#222E3E] hover:border-[#D49B37] transition-all text-center group block"
              >
                <MapPin className="w-4 h-4 text-[#D49B37] mx-auto mb-1.5 group-hover:scale-110 transition-transform" />
                <span className="block text-xs font-bold text-white group-hover:text-[#D49B37] transition-colors">{loc.name}</span>
                <span className="block text-[10px] text-gray-500 mt-0.5">{loc.area}</span>
              </a>
            ))}
          </div>

          <div className="mt-8">
            <GoogleMapEmbed
              variant="dark"
              compact
              title="Visit SAM Fabrication Workshop or Book Doorstep Site Inspection"
              subtitle="Operating from Dasarahalli Main Road near Sobha Moonstone (560024) — dispatching mobile welding & laser measurement teams across Bangalore within 16–25 km."
            />
          </div>
        </div>
      </section>

      {/* 6b. FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-1.5 text-[11px] font-bold tracking-[0.2em] text-[#B77C26] uppercase">
              <HelpCircle className="w-3.5 h-3.5 text-[#B77C26]" />
              <span>COMMONLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-gray-950 mt-1">
              Bangalore Fabrication &amp; Welding FAQs
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-xl mx-auto leading-relaxed">
              Clear answers regarding pricing, materials, on-site welding service coverage, and installation timelines in Bangalore.
            </p>
          </div>

          <div className="space-y-3.5">
            {homeFaqsData.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm transition-all duration-200 hover:border-[#D49B37]/60"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none transition-colors hover:bg-gray-50/80"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold font-serif-heading text-gray-900">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-[#FAF3E0] text-[#B77C26] rotate-180' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center bg-[#FAF3E0]/50 rounded-xl p-5 border border-[#D49B37]/30">
            <h3 className="text-sm font-bold font-serif-heading text-gray-900">
              Have a specific fabrication question or custom drawing?
            </h3>
            <p className="text-xs text-gray-600 mt-1">
              Share your requirements with our fabrication engineers for instant technical guidance and free estimates.
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${siteConfig.phoneClean}`}
                className="inline-flex items-center px-4 py-2 rounded-md bg-[#B77C26] hover:bg-[#8E5B1C] text-xs font-bold text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5" />
                <span>Call {siteConfig.phone}</span>
              </a>
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center px-4 py-2 rounded-md border border-gray-300 hover:border-gray-800 text-xs font-bold text-gray-800 transition-colors bg-white cursor-pointer"
              >
                <span>Book Free Site Visit</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA BANNER (Split Gold & Dark) */}
      <CtaBanner onOpenQuote={onOpenQuote} />
    </>
  );
};
