import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Wrench, 
  Clock, 
  Cog 
} from 'lucide-react';
import { servicesData, siteConfig } from '../data/siteData';
import { CtaBanner } from '../components/CtaBanner';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';

interface ServicesIndexPageProps {
  onOpenQuote: () => void;
}

export const ServicesIndexPage: React.FC<ServicesIndexPageProps> = ({ onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'gates', label: 'Gates' },
    { id: 'grills', label: 'Window Grills' },
    { id: 'railings', label: 'Railings' },
    { id: 'sheds', label: 'Sheds & Canopies' },
    { id: 'structural', label: 'Structural Steel' },
    { id: 'custom', label: 'Custom Welding' },
  ];

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Fabrication Services in Bangalore | SAM Fabrication Engineering Work',
    url: 'https://samfabrication.in/services/',
    description: 'Explore expert fabrication services in Bangalore: custom gates, safety window grills, SS/MS railings, structural sheds, and architectural steel work.',
    publisher: {
      '@id': 'https://samfabrication.in/#entity'
    }
  };

  return (
    <>
      <SeoHead
        title="Fabrication Services in Bangalore | Complete Metal & Steel Solutions"
        description="Explore expert fabrication services in Bangalore: custom gates, safety window grills, SS/MS railings, structural sheds, and architectural steel work."
        canonical="https://samfabrication.in/services/"
        schema={servicesSchema}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services/' }
        ]}
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[420px] lg:min-h-[460px] flex items-center bg-[#0B0F15] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/images/hero-home.webp" type="image/webp" />
            <img
              src="/images/hero-home.jpg"
              alt="Complete architectural metal and steel fabrication services in Bangalore"
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
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#D49B37] uppercase">
              OUR SERVICES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading text-white tracking-tight leading-[1.15]">
              Complete Fabrication<br />
              <span className="gold-gradient-text">Solutions in Bangalore</span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
              We provide a wide range of residential, commercial and industrial fabrication services engineered for maximum durability, aesthetic beauty, and structural safety.
            </p>
          </div>

          <div className="hidden lg:block absolute right-16 bottom-14 text-right pointer-events-none select-none">
            <span className="font-script-accent text-5xl xl:text-6xl text-[#E5A83B] opacity-90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] block">
              Precision<br />Metalwork
            </span>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-md text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  active
                    ? 'bg-[#D49B37] text-gray-950 font-bold shadow-sm'
                    : 'bg-[#F1F5F9] text-gray-700 hover:bg-[#E2E8F0]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. ALL 11 SERVICES GRID */}
      <section className="bg-[#F8FAFC] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Image */}
                  <a href={`/services/${service.slug}/`} className="h-52 w-full overflow-hidden bg-gray-100 block relative">
                    <picture>
                      <source srcSet={service.image} type="image/webp" />
                      <img
                        src={service.image.replace('.webp', '.jpg')}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        width="1200"
                        height="750"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded bg-[#0B0F15]/80 backdrop-blur-md text-[#D49B37] text-[10px] font-bold tracking-wider uppercase">
                        {service.category.toUpperCase()}
                      </span>
                    </div>
                  </a>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <h2 className="text-lg font-bold font-serif-heading text-gray-950 group-hover:text-[#B77C26] transition-colors">
                      <a href={`/services/${service.slug}/`}>
                        {service.title}
                      </a>
                    </h2>

                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>

                    {/* Features Snippet */}
                    <ul className="space-y-1.5 pt-2 border-t border-gray-100">
                      {service.features.slice(0, 2).map((feat, i) => (
                        <li key={i} className="flex items-start text-[11px] text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B77C26] mr-1.5 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <a
                    href={`/services/${service.slug}/`}
                    className="w-full py-2.5 rounded-lg border border-gray-300 hover:border-[#D49B37] hover:bg-[#FAF3E0] text-xs font-bold text-gray-900 hover:text-[#B77C26] flex items-center justify-center transition-colors"
                  >
                    <span>View Specifications &amp; Designs</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TURNKEY FABRICATION STANDARDS */}
      <section className="bg-[#0B0F15] text-white py-14 px-4 sm:px-6 lg:px-8 border-t border-[#1C2533]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#D49B37] uppercase">
              QUALITY ASSURANCE
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif-heading text-white mt-1">
              What You Receive with Every SAM Fabrication Service
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-[#121820] border border-[#222E3E]">
              <ShieldCheck className="w-6 h-6 text-[#D49B37] mb-2" />
              <h3 className="text-xs font-bold text-white font-serif-heading">Free On-Site Measurement</h3>
              <p className="text-[11px] text-gray-400 mt-1">Our engineers inspect site clearances and take laser measurements anywhere in Bangalore.</p>
            </div>
            <div className="p-4 rounded-lg bg-[#121820] border border-[#222E3E]">
              <Cog className="w-6 h-6 text-[#D49B37] mb-2" />
              <h3 className="text-xs font-bold text-white font-serif-heading">Custom CAD Design</h3>
              <p className="text-[11px] text-gray-400 mt-1">We prepare 2D/3D fabrication drawings for approval before cutting metal.</p>
            </div>
            <div className="p-4 rounded-lg bg-[#121820] border border-[#222E3E]">
              <Wrench className="w-6 h-6 text-[#D49B37] mb-2" />
              <h3 className="text-xs font-bold text-white font-serif-heading">Certified Welders</h3>
              <p className="text-[11px] text-gray-400 mt-1">Precision TIG and MIG welding ensures full penetration and seamless grinding.</p>
            </div>
            <div className="p-4 rounded-lg bg-[#121820] border border-[#222E3E]">
              <Clock className="w-6 h-6 text-[#D49B37] mb-2" />
              <h3 className="text-xs font-bold text-white font-serif-heading">Milestone Tracking</h3>
              <p className="text-[11px] text-gray-400 mt-1">Progress updates with photos during workshop fabrication and prompt site installation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <CtaBanner onOpenQuote={onOpenQuote} />
    </>
  );
};

