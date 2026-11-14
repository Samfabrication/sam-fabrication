import React, { useState } from 'react';
import { 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  Building2 
} from 'lucide-react';
import { LocationItem } from '../types';
import { siteConfig, servicesData, projectsData } from '../data/siteData';
import { CtaBanner } from '../components/CtaBanner';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';

interface LocationPageProps {
  location: LocationItem;
  onOpenQuote: () => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({ location, onOpenQuote }) => {
  const localServices = servicesData.slice(0, 6);
  const featuredProject = location.featuredProjectSlug
    ? projectsData.find((p) => p.slug === location.featuredProjectSlug)
    : projectsData.find((p) => p.location.toLowerCase().includes(location.name.toLowerCase()));

  return (
    <>
      <SeoHead
        title={`Fabrication Works in ${location.name}, Bangalore | SAM Fabrication`}
        description={`Trusted fabrication and welding works in ${location.name}, Bangalore. Custom gates, safety window grills, balcony railings, and car parking sheds with on-site installation.`}
        canonical={`https://samfabrication.in/locations/${location.slug}/`}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Areas We Serve', href: '/areas-we-serve/' },
          { label: location.name, href: `/locations/${location.slug}/` }
        ]}
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[420px] lg:min-h-[460px] flex items-center bg-[#0B0F15] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/images/hero-home.webp" type="image/webp" />
            <img
              src="/images/hero-home.jpg"
              alt={`Fabrication works in ${location.name} Bangalore`}
              className="w-full h-full object-cover object-center brightness-[0.7]"
              fetchPriority="high"
              width="682"
              height="360"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F15]/95 via-[#0B0F15]/85 to-transparent lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F15] via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center space-x-2 text-[#D49B37] text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>{location.subRegion} • BANGALORE SERVICE COVERAGE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading text-white tracking-tight leading-[1.15]">
              Fabrication Works in <span className="gold-gradient-text">{location.name}</span>
            </h1>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
              {location.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenQuote}
                className="gold-shimmer-btn px-6 py-3 rounded-md text-xs font-bold text-gray-950 uppercase tracking-wider shadow-lg flex items-center justify-center cursor-pointer transition-all active:scale-95"
              >
                <span>Book Site Inspection in {location.name}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20SAM%20Fabrication,%20I%20need%20fabrication%20work%20in%20${encodeURIComponent(location.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-md bg-[#1FAF38] hover:bg-[#1C9D32] text-white text-xs font-bold uppercase tracking-wider flex items-center transition-all shadow-md"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOCAL CONTEXT & SERVICES */}
      <section className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#B77C26] uppercase">
                HYPER-LOCAL FABRICATION
              </span>
              <h2 className="text-2xl font-bold font-serif-heading text-gray-950">
                Custom Metal &amp; Steel Fabrication in {location.name}
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                As part of our specialized{' '}
                <a href="/" className="text-[#B77C26] hover:underline font-semibold">
                  fabrication works in Bangalore
                </a>
                , SAM Fabrication Engineering Work regularly executes residential, commercial, and industrial projects throughout {location.name}. Whether you are constructing a private villa, upgrading apartment balcony safety grills, or installing a weather-resistant car parking shed, our engineers deliver prompt on-site measurement and seamless installation.
              </p>

              <div className="bg-[#FAF3E0]/70 border border-[#D49B37]/50 rounded-xl p-5 space-y-2 mt-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#8E5B1C]">
                  Service Highlights for {location.name}:
                </h3>
                <ul className="space-y-1.5 text-xs text-gray-800">
                  {location.highlights.map((h, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-[#B77C26] mr-2 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0B0F15] text-white rounded-xl p-6 border border-[#222E3E] space-y-4">
              <h3 className="text-sm font-bold font-serif-heading text-white uppercase tracking-wider border-l-2 border-[#D49B37] pl-2.5">
                Popular Project Types in {location.name}
              </h3>
              <ul className="space-y-2 text-xs text-gray-300">
                {location.commonProjects.map((p, i) => (
                  <li key={i} className="flex items-center py-1 border-b border-gray-800">
                    <ArrowRight className="w-3.5 h-3.5 text-[#D49B37] mr-2 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <span className="text-[10px] text-gray-400 block mb-1">Serving near landmarks:</span>
                <p className="text-xs text-[#D49B37] font-semibold">
                  {location.nearbyLandmarks.join(' • ')}
                </p>
              </div>
            </div>
          </div>

          {/* Featured Real Project Showcase */}
          {featuredProject && (
            <div className="bg-[#0B0F15] text-white rounded-2xl p-6 sm:p-8 border border-[#222E3E] shadow-xl">
              <div className="flex items-center space-x-2 text-[#D49B37] text-xs font-bold uppercase tracking-wider mb-4">
                <CheckCircle2 className="w-4 h-4 text-[#D49B37]" />
                <span>Verified Project Case Study • {location.name}</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 h-56 sm:h-64 rounded-xl overflow-hidden bg-gray-900 border border-gray-800">
                  <picture>
                    <source srcSet={featuredProject.image} type="image/webp" />
                    <img
                      src={featuredProject.image.replace('.webp', '.jpg')}
                      alt={featuredProject.imageAlt}
                      className="w-full h-full object-cover"
                      width="600"
                      height="400"
                      loading="lazy"
                    />
                  </picture>
                </div>

                <div className="lg:col-span-7 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-white">
                    {featuredProject.title} in {location.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {featuredProject.description}
                  </p>
                  <div className="p-3.5 bg-[#141B26] rounded-lg border border-gray-800 text-xs text-gray-400 space-y-1">
                    <span className="font-semibold text-gray-300 block">Engineering Solution &amp; Scope:</span>
                    <p className="line-clamp-3">{featuredProject.clientRequirement}</p>
                  </div>
                  <div className="pt-2">
                    <a
                      href={`/our-work/${featuredProject.slug}/`}
                      className="inline-flex items-center text-xs font-bold text-[#D49B37] hover:text-[#E5B55D] uppercase tracking-wider transition-colors group"
                    >
                      <span>View Full Case Study &amp; Specifications</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Local Services Grid */}
          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold font-serif-heading text-gray-950 mb-6 text-center">
              Our Core Services Available in {location.name}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {localServices.map((s) => (
                <a
                  key={s.id}
                  href={`/services/${s.slug}/`}
                  className="p-3 bg-[#F8FAFC] border border-gray-200 rounded-lg hover:border-[#D49B37] text-center transition-all group block"
                >
                  <div className="h-20 w-full rounded overflow-hidden mb-2 bg-gray-100">
                    <picture>
                      <source srcSet={s.image} type="image/webp" />
                      <img
                        src={s.image.replace('.webp', '.jpg')}
                        alt={s.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        width="300"
                        height="200"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <span className="text-xs font-bold text-gray-950 group-hover:text-[#B77C26] transition-colors block truncate font-serif-heading">
                    {s.title}
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. BOTTOM CTA BANNER */}
      <CtaBanner onOpenQuote={onOpenQuote} />
    </>
  );
};

