import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CtaBanner } from '../components/CtaBanner';
import { ProjectItem } from '../types';
import { projectsData, siteConfig } from '../data/siteData';
import { MapPin, ArrowRight, ShieldCheck, CheckCircle2, Wrench, Building2, Calendar, Layers, ChevronRight, Phone } from 'lucide-react';

interface ProjectDetailPageProps {
  project: ProjectItem;
  onOpenQuote: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, onOpenQuote }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Our Work', href: '/our-work/' },
    { label: project.title, href: `/our-work/${project.slug}/` }
  ];

  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id && (p.category === project.category || p.projectType === project.projectType))
    .slice(0, 3);

  const fallbackProjects = relatedProjects.length > 0 ? relatedProjects : projectsData.filter((p) => p.id !== project.id).slice(0, 3);

  // Schema for CreativeWork / CaseStudy
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${project.title} – ${project.projectType} in ${project.location}`,
    description: project.description,
    image: `https://samfabrication.in${project.image}`,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.domain
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: 'https://samfabrication.in/images/sam-logo.webp'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://samfabrication.in/our-work/${project.slug}/`
    }
  };

  return (
    <>
      <SeoHead
        title={`${project.title} (${project.location}) | Case Study | SAM Fabrication`}
        description={`${project.description} Custom fabrication case study in ${project.location}, Bangalore by SAM Fabrication.`}
        canonical={`https://samfabrication.in/our-work/${project.slug}/`}
        schema={projectSchema}
        ogImage={`https://samfabrication.in${project.image}`}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* 1. HERO SECTION (Dark Charcoal Background) */}
      <section className="relative min-h-[380px] lg:min-h-[420px] flex items-center bg-[#0B0F15] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/images/hero-work.webp" type="image/webp" />
            <img
              src="/images/hero-work.jpg"
              alt="Fabrication Case Study Showcase"
              className="w-full h-full object-cover object-center brightness-[0.65]"
              fetchPriority="high"
              width="1376"
              height="580"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F15]/95 via-[#0B0F15]/85 to-transparent lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F15] via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18 w-full">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#D49B37]/15 text-[#D49B37] border border-[#D49B37]/30">
                <MapPin className="w-3.5 h-3.5" />
                {project.location}, Bangalore
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[#161D26] text-gray-300 border border-[#2B384A]">
                <Building2 className="w-3 h-3 text-[#D49B37]" />
                {project.projectType}
              </span>
              <span className="text-xs text-gray-400">Category: {project.categoryLabel}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading text-white tracking-tight leading-[1.15]">
              {project.title}
            </h1>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="gold-shimmer-btn inline-flex items-center px-6 py-3 rounded-md text-xs font-bold text-gray-950 uppercase tracking-wider shadow-lg hover:shadow-[#D49B37]/30 transition-all cursor-pointer"
              >
                <span>Inquire About Similar Fabrication</span>
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
        </div>
      </section>

      {/* 2. PROJECT SHOWCASE & SPECS GRID (Clean Light UI #F8FAFC) */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Primary Visual */}
            <div className="lg:col-span-7">
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white">
                <picture>
                  <source srcSet={project.image} type="image/webp" />
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width={1000}
                    height={800}
                    className="w-full h-auto object-cover max-h-[550px]"
                    fetchPriority="high"
                  />
                </picture>
                <div className="p-4 bg-white border-t border-gray-100 text-xs text-gray-500 flex items-center justify-between">
                  <span>Photo: Authentic fabrication installation in {project.location}</span>
                  <span className="text-[#B77C26] font-bold">SAM Fabrication Engineering Work</span>
                </div>
              </div>
            </div>

            {/* Specifications Card */}
            <div className="lg:col-span-5 bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#B77C26] uppercase block mb-2">
                ENGINEERING SPECIFICATIONS
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif-heading text-gray-950 mb-6">
                Project Parameters
              </h2>

              <div className="divide-y divide-gray-100">
                <div className="py-3 flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-500">Location</span>
                  <span className="text-gray-950 font-bold">{project.location}, Bangalore</span>
                </div>
                <div className="py-3 flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-500">Project Type</span>
                  <span className="text-gray-950 font-medium">{project.projectType}</span>
                </div>
                <div className="py-3 flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-500">Category</span>
                  <span className="text-[#B77C26] font-bold">{project.categoryLabel}</span>
                </div>
                {project.specs?.map((spec, i) => (
                  <div key={i} className="py-3 flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-500">{spec.label}</span>
                    <span className="text-gray-950 font-medium text-right max-w-[60%]">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <button
                  onClick={onOpenQuote}
                  className="w-full gold-shimmer-btn py-3 rounded-md text-xs font-bold text-gray-950 uppercase tracking-wider text-center cursor-pointer shadow-md"
                >
                  Request Quotation for Your Site
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CASE STUDY DEEP DIVE (Crisp White Section) */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* 1. Client Requirement */}
          {project.clientRequirement && (
            <div className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold font-serif-heading text-gray-950 mb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#D49B37]/15 text-[#B77C26] text-xs flex items-center justify-center font-bold border border-[#D49B37]/30">
                  01
                </span>
                Client Requirement & Site Context
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {project.clientRequirement}
              </p>
            </div>
          )}

          {/* 2. Materials Used */}
          {project.materialsUsed && project.materialsUsed.length > 0 && (
            <div className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold font-serif-heading text-gray-950 mb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#D49B37]/15 text-[#B77C26] text-xs flex items-center justify-center font-bold border border-[#D49B37]/30">
                  02
                </span>
                Materials & Structural Components
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {project.materialsUsed.map((mat, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-white border border-gray-200 p-3.5 rounded-lg text-xs sm:text-sm text-gray-800 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#B77C26] shrink-0 mt-0.5" />
                    <span className="font-medium">{mat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Fabrication Solution */}
          {project.fabricationSolution && (
            <div className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold font-serif-heading text-gray-950 mb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#D49B37]/15 text-[#B77C26] text-xs flex items-center justify-center font-bold border border-[#D49B37]/30">
                  03
                </span>
                Engineering & Workshop Fabrication Solution
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {project.fabricationSolution}
              </p>
            </div>
          )}

          {/* 4. Installation Details */}
          {project.installationDetails && (
            <div className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold font-serif-heading text-gray-950 mb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#D49B37]/15 text-[#B77C26] text-xs flex items-center justify-center font-bold border border-[#D49B37]/30">
                  04
                </span>
                On-Site Rigging, Installation & Handover
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {project.installationDetails}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 4. RELATED PROJECTS (Dark Section for Architectural Contrast) */}
      <section className="bg-[#0B0F15] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1C2533]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#D49B37] uppercase mb-2 block">
                MORE CASE STUDIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-white">
                Related Fabrication Work
              </h2>
            </div>
            <a
              href="/our-work/"
              className="mt-4 sm:mt-0 text-xs sm:text-sm font-bold text-[#D49B37] hover:underline inline-flex items-center gap-1"
            >
              Browse All Projects <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fallbackProjects.map((rel) => (
              <a
                key={rel.id}
                href={`/our-work/${rel.slug}/`}
                className="bg-[#121820] border border-[#1E2735] hover:border-[#D49B37]/60 rounded-xl overflow-hidden group transition-all flex flex-col justify-between shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="h-48 overflow-hidden bg-[#0B0F15]">
                    <img
                      src={rel.image}
                      alt={rel.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                      <span className="text-[#D49B37] font-semibold">{rel.categoryLabel}</span>
                      <span>•</span>
                      <span>{rel.location}</span>
                    </div>
                    <h3 className="text-base font-bold font-serif-heading text-white group-hover:text-[#D49B37] transition-colors mb-2">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                      {rel.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-[#1E2735] flex items-center justify-between text-xs text-[#D49B37] font-bold mt-4">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <CtaBanner onOpenQuote={onOpenQuote} />
    </>
  );
};
