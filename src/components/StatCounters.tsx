import React from 'react';
import { Building2, Cog, Users, Gem } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export const StatCounters: React.FC = () => {
  const stats = [
    {
      value: siteConfig.stats.projectsCompleted,
      label: 'Projects Completed',
      icon: Building2
    },
    {
      value: siteConfig.stats.yearsExperience,
      label: 'Years of Experience',
      icon: Cog
    },
    {
      value: siteConfig.stats.happyClients,
      label: 'Happy Clients',
      icon: Users
    },
    {
      value: siteConfig.stats.qualityCommitment,
      label: 'Quality Commitment',
      icon: Gem
    }
  ];

  return (
    <div className="bg-[#070A0E] border-y border-[#1C2533] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="flex items-center space-x-4 justify-center sm:justify-start">
                <div className="w-12 h-12 rounded-lg bg-[#141C26] border border-[#233042] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-[#D49B37]" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-serif-heading">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

