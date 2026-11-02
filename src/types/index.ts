export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'gates' | 'grills' | 'railings' | 'sheds' | 'structural' | 'custom';
  image: string;
  imageAlt: string;
  features: string[];
  materials: string[];
  specs: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: 'gates' | 'grills' | 'railings' | 'staircases' | 'car-parking-sheds' | 'ss-ms-structures' | 'other';
  categoryLabel: string;
  location: string;
  projectType: 'Residential Project' | 'Commercial Project' | 'Industrial Project';
  image: string;
  imageAlt: string;
  description: string;
  clientRequirement?: string;
  materialsUsed?: string[];
  fabricationSolution?: string;
  installationDetails?: string;
  specs?: { label: string; value: string }[];
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categorySlug: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  isFeatured?: boolean;
  author: {
    name: string;
    role: string;
  };
  tableOfContents?: { title: string; id: string }[];
}

export interface LocationItem {
  slug: string;
  name: string;
  subRegion: string;
  description: string;
  highlights: string[];
  commonProjects: string[];
  nearbyLandmarks: string[];
}

export interface RegionItem {
  slug: string;
  name: string;
  direction: 'north' | 'south' | 'east' | 'west';
  tagline: string;
  metaDescription: string;
  overview: string;
  localities: string[];
  prominentProjects: string[];
  fabricationDemands: string[];
  localFaqs: { question: string; answer: string }[];
}
