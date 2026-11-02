import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { QuoteModal } from './components/QuoteModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { OurWorkPage } from './pages/OurWorkPage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { LocationPage } from './pages/LocationPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AreasWeServeIndexPage } from './pages/AreasWeServeIndexPage';
import { RegionPage } from './pages/RegionPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AdminSeoPage } from './pages/AdminSeoPage';

// Data
import { servicesData, blogPostsData, locationsData, regionsData, projectsData } from './data/siteData';

interface AppProps {
  initialPath?: string;
}

export const App: React.FC<AppProps> = ({ initialPath }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (initialPath) return initialPath;
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [defaultQuoteService, setDefaultQuoteService] = useState('Gate Fabrication');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Handle browser popstate (back / forward buttons)
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);

    // Global link click interceptor for internal routing
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      // If external link, anchor hash, or mailto/tel, ignore
      if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
        return;
      }

      // Intercept internal routing
      e.preventDefault();
      window.history.pushState({}, '', href);
      setCurrentPath(href);
      window.scrollTo(0, 0);
    };

    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const openQuoteModalWithService = (serviceName?: string) => {
    if (serviceName) setDefaultQuoteService(serviceName);
    setQuoteModalOpen(true);
  };

  // Route Resolver
  const renderRoute = () => {
    // Normalize path with trailing slash if not root
    let path = currentPath;
    if (path !== '/' && !path.endsWith('/')) {
      path = `${path}/`;
    }

    // 1. Root / Home
    if (path === '/' || path === '') {
      return <HomePage onOpenQuote={() => openQuoteModalWithService()} />;
    }

    // 2. About Us
    if (path === '/about-us/') {
      return <AboutPage onOpenQuote={() => openQuoteModalWithService()} />;
    }

    // 3. Services Hub
    if (path === '/services/') {
      return <ServicesIndexPage onOpenQuote={() => openQuoteModalWithService()} />;
    }

    // 4. Individual Service Pages
    if (path.startsWith('/services/')) {
      const slug = path.replace('/services/', '').replace('/', '');
      const service = servicesData.find((s) => s.slug === slug);
      if (service) {
        return <ServiceDetailPage service={service} onOpenQuote={() => openQuoteModalWithService(service.title)} />;
      }
    }

    // 5. Our Work / Portfolio Hub
    if (path === '/our-work/') {
      return <OurWorkPage onOpenQuote={() => openQuoteModalWithService()} />;
    }

    // 5b. Individual Project Detail / Case Study
    if (path.startsWith('/our-work/')) {
      const slug = path.replace('/our-work/', '').replace('/', '');
      const project = projectsData.find((p) => p.slug === slug);
      if (project) {
        return <ProjectDetailPage project={project} onOpenQuote={() => openQuoteModalWithService(project.title)} />;
      }
    }

    // 6. Why Choose Us
    if (path === '/why-choose-us/') {
      return <WhyChooseUsPage onOpenQuote={() => openQuoteModalWithService()} />;
    }

    // 7. Blog Hub
    if (path === '/blog/') {
      return <BlogIndexPage />;
    }

    // 8. Individual Blog Articles
    if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '').replace('/', '');
      const post = blogPostsData.find((p) => p.slug === slug);
      if (post) {
        return <BlogPostPage post={post} onOpenQuote={() => openQuoteModalWithService()} />;
      }
    }

    // 9. Bangalore Regional Hubs (/areas-we-serve/)
    if (path === '/areas-we-serve/') {
      return <AreasWeServeIndexPage onOpenQuote={() => openQuoteModalWithService()} />;
    }

    if (path.startsWith('/areas-we-serve/')) {
      const slug = path.replace('/areas-we-serve/', '').replace('/', '');
      const region = regionsData.find((r) => r.slug === slug);
      if (region) {
        return <RegionPage region={region} onOpenQuote={() => openQuoteModalWithService()} />;
      }
    }

    // 10. Bangalore Specific Locality Pages (/locations/:slug/)
    if (path.startsWith('/locations/')) {
      const slug = path.replace('/locations/', '').replace('/', '');
      const loc = locationsData.find((l) => l.slug === slug);
      if (loc) {
        return <LocationPage location={loc} onOpenQuote={() => openQuoteModalWithService()} />;
      }
    }

    // 11. Admin SEO Operations Suite (/admin/seo/)
    if (path === '/admin/seo/' || path === '/admin/seo') {
      return <AdminSeoPage />;
    }

    // 12. Contact Us
    if (path === '/contact-us/') {
      return <ContactPage />;
    }

    // 13. Legal Pages
    if (path === '/privacy-policy/') {
      return <LegalPage type="privacy" />;
    }
    if (path === '/terms-and-conditions/') {
      return <LegalPage type="terms" />;
    }

    // 14. Fallback 404
    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F15] text-[#F3F4F6]">
      {/* Global Header */}
      <Header currentPath={currentPath} onOpenQuote={() => openQuoteModalWithService()} />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderRoute()}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Sticky Action Bar for Mobile */}
      <MobileActionBar currentPath={currentPath} />

      {/* Interactive Quotation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultService={defaultQuoteService}
      />
    </div>
  );
};

export default App;

