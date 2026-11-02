import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  ChevronRight, 
  Mail, 
  CheckCircle2 
} from 'lucide-react';
import { blogPostsData } from '../data/siteData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';
import { BlogPostItem } from '../types';

export const BlogIndexPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const [subEmail, setSubEmail] = useState<string>('');

  const featuredPost = blogPostsData.find((p) => p.isFeatured) || blogPostsData[0];
  const regularPosts = blogPostsData.filter((p) => !p.isFeatured);

  const categories = [
    { id: 'all', label: 'All Posts', count: 18 },
    { id: 'gates', label: 'Gates', count: 12 },
    { id: 'grills', label: 'Grills', count: 10 },
    { id: 'railings', label: 'Railings', count: 8 },
    { id: 'staircases', label: 'Staircases', count: 6 },
    { id: 'car-parking-sheds', label: 'Car Parking Sheds', count: 5 },
    { id: 'ms-structures', label: 'MS Structures', count: 4 },
    { id: 'design-ideas', label: 'Design Ideas', count: 7 },
    { id: 'maintenance-tips', label: 'Maintenance Tips', count: 4 },
  ];

  const recentPosts = blogPostsData.slice(1, 5);

  const filteredPosts = regularPosts.filter((post) => {
    const matchesCat = selectedCategory === 'all' || post.categorySlug === selectedCategory;
    const matchesQuery = !searchQuery.trim() || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subEmail.trim()) {
      setSubscribed(true);
    }
  };

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'SAM Fabrication Blog | Ideas, Tips & Inspiration for Stronger Spaces',
    url: 'https://samfabrication.in/blog/',
    description: 'Explore expert tips, design ideas, material guides and the latest trends in steel fabrication, gates, grills, railings and more.',
    publisher: {
      '@id': 'https://samfabrication.in/#entity'
    }
  };

  return (
    <>
      <SeoHead
        title="Fabrication Ideas, Tips & Inspiration | SAM Fabrication Blog"
        description="Expert advice, material guides, and design trends for gates, grills, railings, and structural steel fabrication in Bangalore."
        canonical="https://samfabrication.in/blog/"
        schema={blogSchema}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog/' }
        ]}
      />

      {/* 1. HERO SECTION (Pixel-Accurate to Mockup) */}
      <section className="relative min-h-[440px] lg:min-h-[480px] flex items-center bg-[#0B0F15] overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/images/hero-blog.webp" type="image/webp" />
            <img
              src="/images/hero-blog.jpg"
              alt="Outdoor steel pergola terrace with ambient lighting and fabricated metal railings"
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
              OUR BLOG
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading text-white tracking-tight leading-[1.15]">
              Ideas, Tips &amp; Inspiration<br />
              for <span className="gold-gradient-text">Stronger Spaces</span>
            </h1>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-lg">
              Explore expert tips, design ideas, material guides and the latest trends in steel fabrication, gates, grills, railings and more.
            </p>

          </div>

          {/* Script Accent on right */}
          <div className="hidden lg:block absolute right-16 bottom-14 text-right pointer-events-none select-none">
            <span className="font-script-accent text-5xl xl:text-6xl text-[#E5A83B] opacity-90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] block">
              Build<br />Better<br />Spaces
            </span>
          </div>

        </div>
      </section>

      {/* 2. CATEGORY PILLS BAR */}
      <section className="bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
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

      {/* 3. MAIN CONTENT: Split Left Content + Right Sidebar (Pixel-Accurate to Mockup) */}
      <section className="bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT MAIN CONTENT (8 Cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* FEATURED POST CARD (Wide Card) */}
              {selectedCategory === 'all' && !searchQuery && (
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all group">
                  <div className="grid grid-cols-1 md:grid-cols-12 items-center">
                    
                    {/* Featured Text */}
                    <div className="md:col-span-7 p-6 sm:p-8 space-y-3.5">
                      <span className="inline-block px-3 py-1 rounded bg-[#FAF0D7] text-[#B77C26] font-bold text-[10px] tracking-wider uppercase">
                        FEATURED POST
                      </span>

                      <h2 className="text-xl sm:text-2xl font-bold font-serif-heading text-gray-950 group-hover:text-[#B77C26] transition-colors leading-snug">
                        <a href={`/blog/${featuredPost.slug}/`}>
                          {featuredPost.title}
                        </a>
                      </h2>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1 text-[#D49B37]" /> {featuredPost.date}</span>
                        <span>•</span>
                        <span className="flex items-center"><User className="w-3.5 h-3.5 mr-1 text-[#D49B37]" /> SAM Fabrication</span>
                        <span>•</span>
                        <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1 text-[#D49B37]" /> {featuredPost.readTime}</span>
                      </div>

                      <p className="text-xs text-gray-600 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>

                      <div className="pt-2">
                        <a
                          href={`/blog/${featuredPost.slug}/`}
                          className="inline-flex items-center px-5 py-2.5 rounded-md bg-[#D49B37] hover:bg-[#C28B2B] text-gray-950 text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                        >
                          <span>Read Full Article</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                        </a>
                      </div>
                    </div>

                    {/* Featured Image */}
                    <div className="md:col-span-5 h-64 md:h-full min-h-[240px] bg-gray-100 overflow-hidden">
                      <picture>
                        <source srcSet={featuredPost.image} type="image/webp" />
                        <img
                          src={featuredPost.image.replace('.webp', '.jpg')}
                          alt={featuredPost.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          width="1200"
                          height="800"
                          loading="lazy"
                          decoding="async"
                        />
                      </picture>
                    </div>

                  </div>
                </div>
              )}

              {/* GRID OF 6 BLOG POSTS (2 cols x 3 rows) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group hover:-translate-y-1"
                  >
                    <a href={`/blog/${post.slug}/`} className="h-48 w-full overflow-hidden bg-gray-100 block">
                      <picture>
                        <source srcSet={post.image} type="image/webp" />
                        <img
                          src={post.image.replace('.webp', '.jpg')}
                          alt={post.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          width="1000"
                          height="650"
                          loading="lazy"
                          decoding="async"
                        />
                      </picture>
                    </a>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        {/* Meta */}
                        <div className="flex items-center space-x-3 text-[11px] text-gray-500 mb-2">
                          <span className="flex items-center"><Calendar className="w-3 h-3 mr-1 text-[#D49B37]" /> {post.date}</span>
                          <span>•</span>
                          <span className="flex items-center"><Clock className="w-3 h-3 mr-1 text-[#D49B37]" /> {post.readTime}</span>
                        </div>

                        <h3 className="text-sm sm:text-base font-bold font-serif-heading text-gray-950 group-hover:text-[#B77C26] transition-colors line-clamp-2">
                          <a href={`/blog/${post.slug}/`}>
                            {post.title}
                          </a>
                        </h3>

                        <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-gray-100">
                        <a
                          href={`/blog/${post.slug}/`}
                          className="inline-flex items-center text-xs font-bold text-[#B77C26] hover:text-[#8E5B1C] transition-colors"
                        >
                          <span>Read More</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

            </div>

            {/* RIGHT SIDEBAR (4 Cols) */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* Search Box Widget */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-3.5 pr-11 py-2.5 rounded-lg border border-gray-300 text-xs text-gray-900 focus:outline-none focus:border-[#D49B37]"
                  />
                  <button
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#D49B37] hover:bg-[#C28B2B] text-gray-950 rounded-md flex items-center justify-center transition-colors"
                    aria-label="Search articles"
                  >
                    <Search className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Recent Posts Widget */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm space-y-4">
                <h3 className="text-sm font-bold text-gray-950 font-serif-heading uppercase tracking-wider border-l-2 border-[#D49B37] pl-2.5">
                  Recent Posts
                </h3>

                <div className="space-y-3.5">
                  {recentPosts.map((r) => (
                    <a
                      key={r.id}
                      href={`/blog/${r.slug}/`}
                      className="flex items-center space-x-3 group"
                    >
                      <div className="w-16 h-14 rounded-md overflow-hidden bg-gray-100 shrink-0">
                        <picture>
                          <source srcSet={r.image} type="image/webp" />
                          <img
                            src={r.image.replace('.webp', '.jpg')}
                            alt={r.imageAlt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            width="200"
                            height="150"
                            loading="lazy"
                            decoding="async"
                          />
                        </picture>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-gray-900 group-hover:text-[#B77C26] transition-colors line-clamp-2 leading-snug">
                          {r.title}
                        </h4>
                        <span className="text-[10px] text-gray-400 mt-0.5 block">{r.date}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Popular Categories Widget */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm space-y-4">
                <h3 className="text-sm font-bold text-gray-950 font-serif-heading uppercase tracking-wider border-l-2 border-[#D49B37] pl-2.5">
                  Popular Categories
                </h3>

                <div className="space-y-1 text-xs">
                  {categories.filter(c => c.id !== 'all').map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className="w-full flex items-center justify-between py-2 px-2.5 rounded hover:bg-gray-50 text-gray-700 hover:text-black transition-colors cursor-pointer text-left"
                    >
                      <span className="font-medium">{cat.label}</span>
                      <div className="flex items-center text-gray-400 text-[11px]">
                        <span>{cat.count} Articles</span>
                        <ChevronRight className="w-3.5 h-3.5 ml-1 text-gray-400" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>

      {/* 4. STAY UPDATED / NEWSLETTER BANNER (Pixel-Accurate to Mockup) */}
      <section className="bg-[#0B0F15] text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-[#1C2533]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-[#141C26] border border-[#233042] flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-[#D49B37]" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#D49B37] uppercase">
                STAY UPDATED
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-serif-heading text-white">
                Get Latest Design Ideas &amp; Tips
              </h3>
              <p className="text-xs text-gray-400 max-w-md">
                Subscribe to our blog and receive the latest updates on fabrication designs, material guides and expert tips directly in your inbox.
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto">
            {subscribed ? (
              <div className="flex items-center space-x-2 text-green-400 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center space-x-2 w-full max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={subEmail}
                  onChange={(e) => setSubEmail(e.target.value)}
                  className="px-4 py-2.5 rounded-md bg-[#161D26] border border-[#283648] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D49B37] w-full sm:w-64"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-md bg-[#D49B37] hover:bg-[#C28B2B] text-gray-950 font-bold text-xs uppercase tracking-wider shrink-0 transition-all shadow-md cursor-pointer"
                >
                  Subscribe →
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  );
};

