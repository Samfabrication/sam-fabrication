import React, { useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Filter,
  Grid,
  Shield,
  Layers,
  Sparkles,
  X
} from 'lucide-react';
import { projectsData, clientReviewsData, siteConfig } from '../data/siteData';
import { StatCounters } from '../components/StatCounters';
import { CtaBanner } from '../components/CtaBanner';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';
import { ProjectItem } from '../types';

interface OurWorkPageProps {
  onOpenQuote: () => void;
}

export const OurWorkPage: React.FC<OurWorkPageProps> = ({ onOpenQuote }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeReviewIndex, setActiveReviewIndex] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'gates', label: 'Gates' },
    { id: 'grills', label: 'Grills' },
    { id: 'railings', label: 'Railings' },
    { id: 'staircases', label: 'Staircases' },
    { id: 'car-parking-sheds', label: 'Car Parking Sheds' },
    { id: 'ss-ms-structures', label: 'SS & MS Structures' },
    { id: 'other', label: 'Other Works' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  const currentReview = clientReviewsData[activeReviewIndex];

  const handlePrevReview = () => {
    setActiveReviewIndex((prev) => (prev === 0 ? clientReviewsData.length - 1 : prev - 1));
  };

  const handleNextReview = () => {
    setActiveReviewIndex((prev) => (prev === clientReviewsData.length - 1 ? 0 : prev + 1));
  };

  const ourWorkSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Our Work | Real Fabrication Projects in Bangalore',
    url: 'https://samfabrication.in/our-work/',
    description: 'Browse real completed fabrication projects across Bangalore: modern main gates, balcony railings, car parking sheds, staircases, and steel structures.',
    publisher: {
      '@id': 'https://samfabrication.in/#entity'
    }
  };

  return (
    <>
      <SeoHead
        title="Our Work | Real Fabrication Projects in Bangalore | SAM Fabrication"
        description="Browse real completed fabrication projects across Bangalore: modern main gates, balcony railings, car parking sheds, staircases, and steel structures."
        canonical="https://samfabrication.in/our-work/"
        schema={ourWorkSchema}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Our Work', href: '/our-work/' }
        ]}
      />

      {/* 1. HERO SECTION (Pixel-Accurate to Mockup) */}
      <section className="relative min-h-[440px] lg:min-h-[480px] flex items-center bg-[#0B0F15] overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/images/hero-work.webp" type="image/webp" />
            <img
              src="/images/hero-work.jpg"
              alt="Architectural steel structure with warm recessed lighting and horizontal steel railings"
              className="w-full h-full object-cover object-center brightness-[0.75]"
              fetchPriority="high"
              width="1376"
              height="580"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F15]/95 via-[#0B0F15]/80 to-transparent lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F15] via-transparent to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
          <div className="max-w-2xl space-y-4">
            
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#D49B37] uppercase">
              OUR WORK
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading text-white tracking-tight leading-[1.15]">
              Real Projects.<br />
              Stronger Spaces.
            </h1>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-lg">
              Explore our latest fabrication work for residential, commercial and industrial projects. Every project reflects our commitment to quality, precision and customer satisfaction.
            </p>

          </div>

          {/* Script Accent on right */}
          <div className="hidden lg:block absolute right-16 bottom-14 text-right pointer-events-none select-none">
            <span className="font-script-accent text-5xl xl:text-6xl text-[#E5A83B] opacity-90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] block">
              Built<br />With<br />Precision
            </span>
          </div>

        </div>
      </section>

      {/* 2. FILTER TABS & PROJECT GALLERY (Pixel-Accurate 3-Column Grid) */}
      <section className="bg-white text-gray-900 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Filter Pills Bar */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {filterTabs.map((tab) => {
              const active = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-md text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    active
                      ? 'bg-[#D49B37] text-gray-950 font-bold shadow-md'
                      : 'bg-[#F1F5F9] text-gray-700 hover:bg-[#E2E8F0]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* 12 Projects Grid (3 cols x 4 rows on desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <a
                key={project.id}
                href={`/our-work/${project.slug}/`}
                className="group block bg-[#F8FAFC] border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="h-52 w-full overflow-hidden bg-gray-100 relative">
                  <picture>
                    <source srcSet={project.image} type="image/webp" />
                    <img
                      src={project.image.replace('.webp', '.jpg')}
                      alt={project.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      width="1200"
                      height="750"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold tracking-wide">
                      {project.projectType}
                    </span>
                  </div>
                </div>

                {/* Card Info Row */}
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-gray-950 font-serif-heading group-hover:text-[#B77C26] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-500 flex items-center mt-0.5">
                      <MapPin className="w-3 h-3 text-[#D49B37] mr-1 shrink-0" />
                      {project.projectType} • {project.location}
                    </p>
                  </div>
                  
                  <div className="w-8 h-8 rounded-full border border-[#D49B37] flex items-center justify-center text-[#B77C26] group-hover:bg-[#D49B37] group-hover:text-white transition-colors shrink-0 ml-2">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* 3. STAT COUNTERS STRIP */}
      <StatCounters />

      {/* 4. CLIENT FEEDBACK SECTION (Pixel-Accurate to Mockup: Balcony Photo + Review Card) */}
      <section className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Balcony Photo */}
            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                <picture>
                  <source srcSet="/images/feedback-balcony.webp" type="image/webp" />
                  <img
                    src="/images/feedback-balcony.jpg"
                    alt="Modern stainless steel and mild steel balcony railing installed on residential villa in Hebbal Bangalore"
                    className="w-full h-80 object-cover"
                    width="1200"
                    height="750"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>

            {/* Right Testimonial Card */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#B77C26] uppercase">
                CLIENT FEEDBACK
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-gray-950">
                What Our Clients Say
              </h2>

              <div className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-6 relative">
                {/* 5 Gold Stars */}
                <div className="flex items-center space-x-1 mb-3 text-[#D49B37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <blockquote className="text-sm sm:text-base text-gray-800 italic leading-relaxed">
                  "{currentReview.text}"
                </blockquote>

                <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-gray-950 font-serif-heading">{currentReview.name}</h3>
                    <p className="text-xs text-gray-500">{currentReview.role}</p>
                  </div>

                  {/* Nav Arrows */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handlePrevReview}
                      className="w-8 h-8 rounded-full border border-gray-300 hover:border-gray-800 flex items-center justify-center text-gray-700 hover:text-black transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNextReview}
                      className="w-8 h-8 rounded-full border border-gray-300 hover:border-gray-800 flex items-center justify-center text-gray-700 hover:text-black transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <CtaBanner onOpenQuote={onOpenQuote} />

      {/* Project Detail Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#121820] border border-[#222E3E] rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 bg-[#0B0F15] border-b border-[#1E2735]">
              <div>
                <span className="text-[10px] text-[#D49B37] uppercase font-bold tracking-wider">{selectedProject.projectType} • {selectedProject.location}</span>
                <h3 className="text-lg font-bold text-white font-serif-heading">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto space-y-4">
              <div className="h-72 w-full rounded-lg overflow-hidden bg-black">
                <picture>
                  <source srcSet={selectedProject.image} type="image/webp" />
                  <img
                    src={selectedProject.image.replace('.webp', '.jpg')}
                    alt={selectedProject.imageAlt}
                    className="w-full h-full object-cover"
                    width="1200"
                    height="750"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {selectedProject.description}
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenQuote();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-md gold-shimmer-btn text-xs font-bold text-gray-950 uppercase tracking-wider flex items-center justify-center cursor-pointer shadow-md"
                >
                  Request Similar Project Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

