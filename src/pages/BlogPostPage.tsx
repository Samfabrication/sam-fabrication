import { FormattedText } from '../components/FormattedText';
import React from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  CheckCircle2, 
  Phone,
  MessageSquare,
  Bookmark
} from 'lucide-react';
import { BlogPostItem } from '../types';
import { blogPostsData, siteConfig } from '../data/siteData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';

interface BlogPostPageProps {
  post: BlogPostItem;
  onOpenQuote: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onOpenQuote }) => {
  const relatedPosts = blogPostsData
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://samfabrication.in${post.image}`,
    datePublished: '2024-05-10T08:00:00+05:30',
    dateModified: '2026-10-30T12:00:00+05:30',
    author: {
      '@type': 'Organization',
      name: post.author.name,
      url: 'https://samfabrication.in/about-us/'
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: 'https://samfabrication.in/images/sam-logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://samfabrication.in/blog/${post.slug}/`
    }
  };

  return (
    <>
      <SeoHead
        title={`${post.title} | SAM Fabrication Guide`}
        description={post.excerpt}
        canonical={`https://samfabrication.in/blog/${post.slug}/`}
        ogType="article"
        ogImage={`https://samfabrication.in${post.image}`}
        schema={articleSchema}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog/' },
          { label: post.title, href: `/blog/${post.slug}/` }
        ]}
      />

      {/* ARTICLE WRAPPER */}
      <article className="bg-[#F8FAFC] py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Article Header Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-10 shadow-sm space-y-4">
            
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded bg-[#FAF0D7] text-[#B77C26] font-bold text-xs tracking-wider uppercase">
                {post.category}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif-heading text-gray-950 leading-tight">
              {post.title}
            </h1>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-1 pb-4 border-b border-gray-100">
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#D49B37]" />
                <span>{post.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1.5">
                <User className="w-3.5 h-3.5 text-[#D49B37]" />
                <span>{post.author.name}</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D49B37]" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-xl overflow-hidden bg-gray-100 shadow-md">
              <picture>
                <source srcSet={post.image} type="image/webp" />
                <img
                  src={post.image.replace('.webp', '.jpg')}
                  alt={post.imageAlt}
                  className="w-full h-auto max-h-[480px] object-cover"
                  width="1200"
                  height="800"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                />
              </picture>
            </div>

            {/* Main Content Body */}
            <div className="pt-6 prose prose-slate max-w-none text-xs sm:text-sm text-gray-700 leading-relaxed space-y-5">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('### ')) {
                  const lines = paragraph.split('\n');
                  const headingLine = lines[0].replace('### ', '').trim();
                  const bodyLines = lines.slice(1).join('\n').trim();

                  return (
                    <React.Fragment key={index}>
                      <h2 className="text-lg sm:text-xl font-bold font-serif-heading text-gray-950 mt-6 mb-2 border-l-3 border-[#D49B37] pl-3">
                        {headingLine}
                      </h2>
                      {bodyLines && (
                        <p className="leading-relaxed">
                          <FormattedText text={bodyLines} />
                        </p>
                      )}
                    </React.Fragment>
                  );
                }

                if (paragraph.startsWith('| ')) {
                  // Render markdown table
                  const rows = paragraph.trim().split('\n');
                  const headers = rows[0].split('|').map(s => s.trim()).filter(Boolean);
                  const dataRows = rows.slice(2).map(r => r.split('|').map(s => s.trim()).filter(Boolean));

                  return (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-x-auto my-4">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-[#F1F5F9] font-bold text-gray-900 border-b border-gray-200">
                          <tr>
                            {headers.map((h, i) => (
                              <th key={i} className="py-2.5 px-3">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {dataRows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-gray-50">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="py-2.5 px-3">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }

                return (
                  <p key={index} className="leading-relaxed">
                    <FormattedText text={paragraph} />
                  </p>
                );
              })}
            </div>

            {/* IN-ARTICLE CTA BOX */}
            <div className="mt-8 p-6 rounded-xl bg-[#0B0F15] text-white border border-[#222E3E] space-y-3">
              <span className="text-[10px] font-bold tracking-wider text-[#D49B37] uppercase">
                Expert Fabrication Consultation
              </span>
              <h3 className="text-base sm:text-lg font-bold font-serif-heading">
                Planning a Fabrication Project for Your Bangalore Property?
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Get advice from SAM Fabrication’s experienced engineers. We provide free site visits, 3D CAD design options, and transparent quotations anywhere in Bangalore.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={onOpenQuote}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-md gold-shimmer-btn text-xs font-bold text-gray-950 uppercase tracking-wider flex items-center justify-center cursor-pointer shadow-md"
                >
                  Request a Free Quote
                </button>
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-md border border-gray-700 text-xs font-semibold text-white uppercase tracking-wider flex items-center justify-center hover:border-gray-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 mr-2 text-[#D49B37]" />
                  Call {siteConfig.phone}
                </a>
              </div>
            </div>

            {/* Author Biography Card */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#FAF0D7] border border-[#D49B37] flex items-center justify-center text-[#B77C26] shrink-0 font-bold font-serif-heading text-base">
                SF
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-950 font-serif-heading">{post.author.name}</h4>
                <p className="text-[11px] text-gray-500">{post.author.role} • SAM Fabrication Engineering Work, Bangalore</p>
              </div>
            </div>

          </div>

          {/* Related Articles Carousel / Grid */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-serif-heading text-gray-950">
              Related Articles &amp; Design Ideas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPosts.map((r) => (
                <a
                  key={r.id}
                  href={`/blog/${r.slug}/`}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all group block hover:-translate-y-1"
                >
                  <div className="h-32 w-full overflow-hidden bg-gray-100">
                    <picture>
                      <source srcSet={r.image} type="image/webp" />
                      <img
                        src={r.image.replace('.webp', '.jpg')}
                        alt={r.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        width="600"
                        height="400"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="p-3">
                    <span className="text-[10px] text-[#B77C26] font-bold uppercase tracking-wide block mb-1">
                      {r.category}
                    </span>
                    <h4 className="text-xs font-bold font-serif-heading text-gray-900 group-hover:text-[#B77C26] transition-colors line-clamp-2">
                      {r.title}
                    </h4>
                    <span className="text-[10px] text-gray-400 mt-2 block">{r.date}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </article>
    </>
  );
};

