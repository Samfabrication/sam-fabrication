import { FormattedText } from '../components/FormattedText';
import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Wrench, 
  Ruler, 
  Clock, 
  Layers, 
  Lightbulb, 
  Tag, 
  Headphones, 
  ArrowRight, 
  Plus, 
  Minus,
  CheckCircle2,
  Building2,
  Cog,
  Users,
  Gem,
  Star,
  Phone,
  MapPin
} from 'lucide-react';
import { siteConfig, advantagesData, faqsData, clientReviewsData } from '../data/siteData';
import { ProcessSteps } from '../components/ProcessSteps';
import { CtaBanner } from '../components/CtaBanner';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';

interface WhyChooseUsPageProps {
  onOpenQuote: () => void;
}

const iconMap = {
  ShieldCheck,
  Wrench,
  Ruler,
  Clock,
  Layers,
  Lightbulb,
  Tag,
  Headphones
};

export const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({ onOpenQuote }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whyChooseUsSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Why Choose Us | SAM Fabrication Engineering Work',
    url: 'https://samfabrication.in/why-choose-us/',
    description: 'Discover why SAM Fabrication is Bangalore trusted choice: high-grade materials, precision engineering, transparent pricing, and timely project delivery.',
    publisher: {
      '@id': 'https://samfabrication.in/#entity'
    }
  };

  return (
    <>
      <SeoHead
        title="Best Fabricators in Bangalore Reviews & Quality Standards | SAM Fabrication"
        description="Read verified Bangalore customer reviews and engineering guarantees for SAM Fabrication: MS/SS gates, grills, sheds, welding & heavy structural steel. Open Mon–Sat 9 AM–8 PM."
        canonical="https://samfabrication.in/why-choose-us/"
        schema={whyChooseUsSchema}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Why Us', href: '/why-choose-us/' }
        ]}
      />

      {/* 1. HERO SECTION (Pixel-Accurate to Mockup) */}
      <section className="relative min-h-[460px] lg:min-h-[520px] flex items-center bg-[#0B0F15] overflow-hidden">
        
        {/* Background Architectural Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/images/hero-why-us.webp" type="image/webp" />
            <img
              src="/images/hero-why-us.jpg"
              alt="Contemporary architectural building with precision engineered metal balcony railings"
              className="w-full h-full object-cover object-center brightness-[0.75]"
              fetchPriority="high"
              width="1376"
              height="650"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F15]/95 via-[#0B0F15]/85 to-transparent lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F15] via-transparent to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="max-w-2xl space-y-5">
            
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#D49B37] uppercase">
              WHY CHOOSE US
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading text-white tracking-tight leading-[1.15]">
              More Than Fabrication.<br />
              A Stronger Tomorrow.
            </h1>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-lg">
              At SAM Fabrication, we combine engineering expertise, premium materials and skilled craftsmanship to deliver safe, durable and aesthetically stunning fabrication solutions.
            </p>

            {/* 4 Feature Badges (Pills) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3">
              {[
                { title: 'QUALITY WORKMANSHIP', icon: ShieldCheck },
                { title: 'CUSTOM DESIGNS', icon: Cog },
                { title: 'DURABLE STRUCTURES', icon: Layers },
                { title: 'CUSTOMER SATISFACTION', icon: Users },
              ].map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center p-2.5 rounded-lg bg-black/40 border border-gray-700/60 backdrop-blur-sm">
                    <Icon className="w-4 h-4 text-[#D49B37] mb-1" />
                    <span className="text-[9px] font-bold tracking-wider text-gray-200 uppercase">{badge.title}</span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Script Accent on right */}
          <div className="hidden lg:block absolute right-16 bottom-16 text-right pointer-events-none select-none">
            <span className="font-script-accent text-5xl xl:text-6xl text-[#E5A83B] opacity-90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] block">
              Built<br />With<br />Trust
            </span>
          </div>

        </div>
      </section>

      {/* 2. OUR ADVANTAGES / 8 REASONS (White Background) */}
      <section className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#B77C26] uppercase">
              OUR ADVANTAGES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-gray-950 mt-1">
              Why SAM Fabrication Stands Out
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              We focus on quality, precision and customer satisfaction in every project. Here's what makes us the preferred choice for residential, commercial and industrial fabrication work.
            </p>
          </div>

          {/* 8 Cards Grid (2 rows x 4 cols) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {advantagesData.map((adv) => {
              const Icon = iconMap[adv.icon as keyof typeof iconMap] || ShieldCheck;
              return (
                <div
                  key={adv.id}
                  className="bg-[#F8FAFC] border border-gray-200 rounded-lg p-5 transition-all hover:shadow-md hover:border-[#D49B37]/60 group hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FAF3E0] border border-[#E5C36B] flex items-center justify-center text-[#B77C26] mb-3.5 group-hover:bg-[#D49B37] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-950 font-serif-heading mb-1.5">
                    {adv.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. OUR EXPERTISE / EXPERIENCE YOU CAN RELY ON (Dark Section with 4 Stats) */}
      <section className="bg-[#0B0F15] text-white py-16 px-4 sm:px-6 lg:px-8 border-y border-[#1E2735]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#D49B37] uppercase">
                OUR EXPERTISE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-white leading-tight">
                Experience You Can Rely On
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                With years of experience in the fabrication industry, we have successfully delivered a wide range of projects for homes, offices, commercial buildings and industrial spaces. Our expertise helps us understand your requirements and provide the best possible solution with precision and care.
              </p>
              <div className="pt-2">
                <a
                  href="/our-work/"
                  className="inline-flex items-center px-6 py-3 rounded-md bg-[#D49B37] hover:bg-[#C28B2B] text-gray-950 text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </a>
              </div>
            </div>

            {/* Middle Image */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="rounded-lg overflow-hidden border border-[#222E3E] shadow-2xl">
                <picture>
                  <source srcSet="/images/why-us-staircase.webp" type="image/webp" />
                  <img
                    src="/images/why-us-staircase.jpg"
                    alt="Precision welded steel staircase with illuminated steps and stainless steel handrail"
                    className="w-full h-64 object-cover"
                    width="1000"
                    height="700"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>

            {/* Right 4 Stat Counter Boxes */}
            <div className="lg:col-span-3 space-y-3">
              {[
                { val: siteConfig.stats.projectsCompleted, lbl: 'Projects Completed', icon: Building2 },
                { val: siteConfig.stats.yearsExperience, lbl: 'Years of Experience', icon: Cog },
                { val: siteConfig.stats.happyClients, lbl: 'Happy Clients', icon: Users },
                { val: siteConfig.stats.qualityCommitment, lbl: 'Quality Commitment', icon: Gem },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="flex items-center space-x-3.5 p-3 rounded-lg bg-[#121820] border border-[#222E3E]">
                    <div className="w-9 h-9 rounded-md bg-[#1B2533] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#D49B37]" />
                    </div>
                    <div>
                      <div className="text-xl font-bold font-serif-heading text-white">{s.val}</div>
                      <div className="text-[10px] text-gray-400 font-medium">{s.lbl}</div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 4. OUR PROCESS (5-Step Interactive Component) */}
      <ProcessSteps />

      {/* 4b. VERIFIED CLIENT REVIEWS & WORKSHOP CONTACT CARD */}
      <section className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#B77C26] uppercase">
                BANGALORE FABRICATOR REVIEWS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-gray-950 mt-1">
                Verified Client Feedback Across Bangalore
              </h2>
            </div>
            <a
              href="/fabrication-rates-bangalore/"
              className="text-xs font-bold text-[#8E5B1C] hover:text-[#B77C26] inline-flex items-center"
            >
              <span>Check Transparent Bangalore Rate Card</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {clientReviewsData.map((review, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-5 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center space-x-1 text-[#D49B37] mb-2">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed italic">"{review.text}"</p>
                </div>
                <div className="pt-3 border-t border-gray-200/80">
                  <div className="text-xs font-bold text-gray-950 font-serif-heading">{review.name}</div>
                  <div className="text-[11px] text-gray-500">{review.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-[#0B0F15] text-white p-6 border border-[#1E2735] flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="space-y-1.5">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#D49B37]">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
              <p className="text-xs text-gray-300">
                Open Now: Mon – Sat, 9:00 AM – 8:00 PM • Direct Workshop &amp; 16 km Home Welding Dispatch across Bangalore
              </p>
            </div>
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="shrink-0 px-5 py-2.5 rounded-md bg-[#D49B37] hover:bg-[#C28B2B] text-gray-950 text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5" />
              <span>Call {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. SPLIT COMMITMENT & FAQ SECTION (Pixel-Accurate to Mockup) */}
      <section className="bg-[#F8FAFC] py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Card: Our Commitment */}
            <div className="lg:col-span-5 relative rounded-xl overflow-hidden bg-[#0B0F15] text-white p-7 shadow-xl border border-gray-800 flex flex-col justify-between min-h-[360px]">
              {/* Background Carport Image */}
              <div className="absolute inset-0 z-0 opacity-25">
                <picture>
                  <source srcSet="/images/commitment-carport.webp" type="image/webp" />
                  <img
                    src="/images/commitment-carport.jpg"
                    alt="Heavy-duty structural metal car parking shed with dark steel frame"
                    className="w-full h-full object-cover"
                    width="1000"
                    height="650"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <div className="relative z-10 space-y-3">
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#D49B37] uppercase">
                  OUR COMMITMENT
                </span>
                <h3 className="text-2xl font-bold font-serif-heading text-white leading-tight">
                  Built on Trust, Driven by Quality
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  We believe in building long-term relationships with our clients by maintaining the highest standards of quality, safety and customer service in every project we undertake.
                </p>
              </div>

              <div className="relative z-10 pt-6">
                <button
                  onClick={onOpenQuote}
                  className="w-full sm:w-auto px-6 py-3 rounded-md bg-[#D49B37] hover:bg-[#C28B2B] text-gray-950 text-xs font-bold uppercase tracking-wider flex items-center justify-center transition-all shadow-md cursor-pointer"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </button>
              </div>
            </div>

            {/* Right Side: Accordion FAQs */}
            <div className="lg:col-span-7 space-y-3">
              <h3 className="text-xl font-bold font-serif-heading text-gray-950 mb-4">
                Frequently Asked Questions
              </h3>

              <div className="space-y-2.5">
                {faqsData.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full px-4 py-3.5 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-900 hover:text-[#B77C26] transition-colors"
                      >
                        <span>{faq.question}</span>
                        <span className="text-[#D49B37] ml-2 shrink-0">
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </span>
                      </button>
                      <div className={`px-4 pb-4 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100 ${isOpen ? 'block' : 'hidden'}`}>
                        <FormattedText text={faq.answer} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER */}
      <CtaBanner onOpenQuote={onOpenQuote} />
    </>
  );
};

