import { FormattedText } from '../components/FormattedText';
import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Wrench, 
  Clock, 
  Cog, 
  Plus, 
  Minus, 
  Layers, 
  Phone,
  MessageSquare
} from 'lucide-react';
import { ServiceItem } from '../types';
import { projectsData, siteConfig, weldingCapabilitiesData } from '../data/siteData';
import { CtaBanner } from '../components/CtaBanner';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onOpenQuote: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, onOpenQuote }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Filter relevant projects for this service (matched first, fallback to fill 3)
  const matchedProjects = projectsData.filter((p) => {
    if (service.id.includes('gate') && p.category === 'gates') return true;
    if (service.id.includes('grill') && p.category === 'grills') return true;
    if (service.id.includes('railing') && p.category === 'railings') return true;
    if (service.id.includes('staircase') && p.category === 'staircases') return true;
    if (service.id.includes('shed') && (p.category === 'car-parking-sheds' || p.category === 'ss-ms-structures')) return true;
    if ((service.id.includes('structural') || service.id.includes('event') || service.id.includes('welding')) && p.category === 'ss-ms-structures') return true;
    return false;
  });
  const relatedProjects = (matchedProjects.length >= 3
    ? matchedProjects
    : [...matchedProjects, ...projectsData.filter((p) => !matchedProjects.includes(p))]
  ).slice(0, 3);

  const seoTitle =
    service.slug === 'custom-welding-fabrication'
      ? 'Welding Shop in Bangalore Near Me | Home Service, Aluminium, Gas & Fiber Welding | SAM Fabrication'
      : service.slug === 'structural-steel-fabrication'
        ? 'Heavy Structural Steel Fabrication Company in Bangalore | PEB & I-Beam Works | SAM Fabrication'
        : service.slug === 'event-fabrication'
          ? 'Event Fabrication Vendors in Bangalore | Stage Truss, Booths & Arches | SAM Fabrication'
          : `${service.title} in Bangalore | SAM Fabrication Engineering Work`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: {
      '@id': 'https://samfabrication.in/#entity'
    },
    areaServed: {
      '@type': 'City',
      name: 'Bangalore'
    },
    description: service.fullDescription,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      }
    }))
  };

  return (
    <>
      <SeoHead
        title={seoTitle}
        description={service.shortDescription}
        canonical={`https://samfabrication.in/services/${service.slug}/`}
        schema={[serviceSchema, faqSchema]}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services/' },
          { label: service.title, href: `/services/${service.slug}/` }
        ]}
      />

      {/* 1. SERVICE HERO SECTION */}
      <section className="relative min-h-[440px] lg:min-h-[480px] flex items-center bg-[#0B0F15] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet={service.image} type="image/webp" />
            <img
              src={service.image.replace('.webp', '.jpg')}
              alt={service.imageAlt}
              className="w-full h-full object-cover object-center brightness-[0.7]"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              width="1200"
              height="750"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F15]/95 via-[#0B0F15]/85 to-transparent lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F15] via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
          <div className="max-w-2xl space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#D49B37] uppercase">
              FABRICATION SERVICES • BANGALORE
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading text-white tracking-tight leading-[1.15]">
              {service.title} <span className="gold-gradient-text">in Bangalore</span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
              {service.shortDescription}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenQuote}
                className="gold-shimmer-btn px-6 py-3 rounded-md text-xs font-bold text-gray-950 uppercase tracking-wider shadow-lg flex items-center justify-center cursor-pointer transition-all active:scale-95"
              >
                <span>Request {service.title} Quote</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20SAM%20Fabrication,%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-md bg-[#1FAF38] hover:bg-[#1C9D32] text-white text-xs font-bold uppercase tracking-wider flex items-center transition-all shadow-md"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IN-DEPTH TECHNICAL CONTENT & SPECIFICATIONS */}
      <section className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Content Area (8 Cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Detailed Overview */}
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#B77C26] uppercase">
                  ENGINEERING OVERVIEW
                </span>
                <h2 className="text-2xl font-bold font-serif-heading text-gray-950 mt-1 mb-4">
                  Precision Fabricated {service.title} Tailored for Bangalore Properties
                </h2>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Key Features */}
              <div className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-6 space-y-3">
                <h3 className="text-base font-bold font-serif-heading text-gray-950">
                  Key Engineering Features &amp; Capabilities
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#B77C26] mr-2 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials & Metallurgy */}
              <div>
                <h3 className="text-base font-bold font-serif-heading text-gray-950 mb-3">
                  Materials &amp; Protective Finishes Available
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.materials.map((mat, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full bg-[#FAF3E0] border border-[#D49B37]/60 text-xs font-semibold text-[#8E5B1C]"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specialized Welding Capabilities Hub (Shown on Welding Service Page) */}
              {service.slug === 'custom-welding-fabrication' && (
                <div className="space-y-4 pt-2">
                  <div className="rounded-xl bg-[#0B0F15] text-white p-5 border border-[#1E2735] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Open Now: Mon – Sat, 9:00 AM – 8:00 PM</span>
                      </div>
                      <h3 className="text-base font-bold font-serif-heading text-white">
                        Mobile Welding Van Dispatch Within 16+ km of Dasarahalli Main Road (560024)
                      </h3>
                      <p className="text-xs text-gray-300">
                        Workshop near Sobha Moonstone, Dasarahalli Main Road, Hebbal — direct doorstep welding across North, East, Central &amp; West Bangalore.
                      </p>
                    </div>
                    <a
                      href={`tel:${siteConfig.phoneClean}`}
                      className="shrink-0 px-4 py-2.5 rounded-md bg-[#D49B37] hover:bg-[#C28B2B] text-gray-950 text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 mr-1.5" />
                      <span>Call {siteConfig.phone}</span>
                    </a>
                  </div>

                  <h3 className="text-lg font-bold font-serif-heading text-gray-950">
                    Specialized Welding Capabilities: Home Service, Aluminium, Gas &amp; Fiber Laser
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {weldingCapabilitiesData.map((cap, idx) => (
                      <div key={idx} className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-5 space-y-2.5">
                        <span className="inline-block px-2.5 py-0.5 rounded bg-[#FAF3E0] border border-[#D49B37]/50 text-[10px] font-bold uppercase tracking-wider text-[#8E5B1C]">
                          {cap.badge}
                        </span>
                        <h4 className="text-sm font-bold font-serif-heading text-gray-950">{cap.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{cap.description}</p>
                        <ul className="space-y-1 pt-1 border-t border-gray-200/70">
                          {cap.highlights.map((hl, hIdx) => (
                            <li key={hIdx} className="flex items-start text-[11px] text-gray-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#B77C26] mr-1.5 shrink-0 mt-0.5" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Specifications Table */}
              <div>
                <h3 className="text-base font-bold font-serif-heading text-gray-950 mb-3">
                  Technical Specifications Summary
                </h3>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#F1F5F9] text-gray-900 border-b border-gray-200 font-semibold">
                      <tr>
                        <th className="py-2.5 px-4">Parameter</th>
                        <th className="py-2.5 px-4">Standard Specification</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-700">
                      {service.specs.map((spec, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="py-2.5 px-4 font-semibold text-gray-900">{spec.label}</td>
                          <td className="py-2.5 px-4">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Related Projects Showcase */}
              {relatedProjects.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold font-serif-heading text-gray-950">
                      Recent {service.title} Installations in Bangalore
                    </h3>
                    <a href="/our-work/" className="text-xs font-semibold text-[#B77C26] hover:text-[#8E5B1C]">
                      View Full Portfolio →
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {relatedProjects.map((p) => (
                      <div key={p.id} className="rounded-lg overflow-hidden border border-gray-200 bg-[#F8FAFC]">
                        <div className="h-32 w-full overflow-hidden bg-gray-100">
                          <picture>
                            <source srcSet={p.image} type="image/webp" />
                            <img
                              src={p.image.replace('.webp', '.jpg')}
                              alt={p.imageAlt}
                              className="w-full h-full object-cover"
                              width="600"
                              height="400"
                              loading="lazy"
                              decoding="async"
                            />
                          </picture>
                        </div>
                        <div className="p-2.5">
                          <h4 className="text-xs font-bold text-gray-950 truncate font-serif-heading">{p.title}</h4>
                          <span className="text-[10px] text-gray-500">{p.location}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Service FAQs */}
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <h3 className="text-base font-bold font-serif-heading text-gray-950">
                  Frequently Asked Questions About {service.title}
                </h3>
                <div className="space-y-2">
                  {service.faqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="w-full px-4 py-3 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-900 hover:text-[#B77C26] transition-colors"
                        >
                          <span>{faq.question}</span>
                          <span className="text-[#D49B37] ml-2 shrink-0">
                            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                          </span>
                        </button>
                        <div className={`px-4 pb-3 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100 ${isOpen ? 'block' : 'hidden'}`}>
                          <FormattedText text={faq.answer} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Sidebar Quick Inquiry Card (4 Cols) */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              
              <div className="bg-[#121820] text-white rounded-xl p-6 border border-[#222E3E] shadow-xl space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D49B37]">
                  Instant Bangalore Quotation
                </span>
                <h3 className="text-lg font-bold font-serif-heading leading-snug">
                  Get a Free Estimate for Your {service.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Book a free site measurement anywhere in Bangalore. Our engineers will visit your site with design catalogs and material samples.
                </p>

                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={onOpenQuote}
                    className="w-full gold-shimmer-btn py-3 rounded-md text-xs font-bold text-gray-950 uppercase tracking-wider shadow-md flex items-center justify-center cursor-pointer"
                  >
                    <span>Request Free Site Visit</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </button>

                  <a
                    href={`tel:${siteConfig.phoneClean}`}
                    className="w-full py-2.5 rounded-md border border-gray-700 hover:border-gray-400 text-xs font-semibold text-white uppercase tracking-wider flex items-center justify-center transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 mr-2 text-[#D49B37]" />
                    <span>Call {siteConfig.phone}</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-gray-800 text-[11px] text-gray-400 space-y-1.5">
                  <div className="flex items-center text-gray-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D49B37] mr-1.5 shrink-0" />
                    <span>100% Guaranteed Genuine Materials</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-3.5 h-3.5 text-[#D49B37] mr-1.5 shrink-0" />
                    <span>7 - 12 Days Delivery Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Other Services Navigation Box */}
              <div className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-5 space-y-3">
                <h4 className="text-xs font-bold text-gray-950 font-serif-heading uppercase tracking-wider border-l-2 border-[#D49B37] pl-2">
                  Related Fabrication Services
                </h4>
                <ul className="space-y-1.5 text-xs">
                  <li><a href="/services/gate-fabrication/" className="text-gray-700 hover:text-[#B77C26] transition-colors block py-0.5">• Gate Fabrication</a></li>
                  <li><a href="/services/window-grills/" className="text-gray-700 hover:text-[#B77C26] transition-colors block py-0.5">• Window Grills</a></li>
                  <li><a href="/services/ss-railings/" className="text-gray-700 hover:text-[#B77C26] transition-colors block py-0.5">• SS Railings</a></li>
                  <li><a href="/services/car-parking-sheds/" className="text-gray-700 hover:text-[#B77C26] transition-colors block py-0.5">• Car Parking Sheds</a></li>
                  <li><a href="/services/staircase-fabrication/" className="text-gray-700 hover:text-[#B77C26] transition-colors block py-0.5">• Staircase Fabrication</a></li>
                  <li><a href="/services/structural-steel-fabrication/" className="text-gray-700 hover:text-[#B77C26] transition-colors block py-0.5">• Heavy Structural Steel Fabrication</a></li>
                  <li><a href="/services/custom-welding-fabrication/" className="text-gray-700 hover:text-[#B77C26] transition-colors block py-0.5">• Welding Shop &amp; Home Service</a></li>
                  <li><a href="/services/event-fabrication/" className="text-gray-700 hover:text-[#B77C26] transition-colors block py-0.5">• Event Fabrication &amp; Trusses</a></li>
                  <li><a href="/fabrication-rates-bangalore/" className="text-[#8E5B1C] font-semibold hover:text-[#B77C26] transition-colors block py-0.5 pt-1 border-t border-gray-200 mt-1">• Bangalore Fabrication Rate Card →</a></li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. BOTTOM CTA BANNER */}
      <CtaBanner onOpenQuote={onOpenQuote} />
    </>
  );
};

