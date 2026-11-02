import React from 'react';
import { MessageSquare, FileText, Cog, Wrench, CheckCircle, ChevronRight } from 'lucide-react';
import { processStepsData } from '../data/siteData';

const iconMap = {
  MessageSquare,
  FileText,
  Cog,
  Wrench,
  CheckCircle
};

export const ProcessSteps: React.FC = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#B77C26] uppercase">
            OUR PROCESS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-gray-950 mt-1">
            A Simple &amp; Transparent Process
          </h2>
        </div>

        {/* Steps Grid / Chain */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {processStepsData.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap] || Cog;
            const isLast = index === processStepsData.length - 1;

            return (
              <div key={step.step} className="flex flex-col items-center text-center relative group">
                
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-[#FAF3E0] border-2 border-[#D49B37] flex items-center justify-center text-[#B77C26] group-hover:bg-[#D49B37] group-hover:text-white transition-all shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Step Title */}
                <h3 className="text-sm font-bold text-gray-950 mt-4 mb-1.5 font-serif-heading">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-gray-600 leading-relaxed max-w-[200px]">
                  {step.description}
                </p>

                {/* Arrow connector between steps on desktop */}
                {!isLast && (
                  <div className="hidden md:block absolute top-8 -right-3 text-[#D49B37]">
                    <ChevronRight className="w-5 h-5 text-gray-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

