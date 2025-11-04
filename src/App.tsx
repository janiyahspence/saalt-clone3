import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AllPropertiesPage } from './pages/AllPropertiesPage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { EventsPage } from './pages/EventsPage';
import { GalleryPage } from './pages/GalleryPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { OffersPage } from './pages/OffersPage';
import { CareersPage } from './pages/CareersPage';
import { PatliputraSaaltPage } from './pages/PatliputraSaaltPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { FAQPage } from './pages/FAQPage';
import { SitemapPage } from './pages/SitemapPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PressMediaPage } from './pages/PressMediaPage';
import { CorporateServicesPage } from './pages/CorporateServicesPage';
import { PilgrimageTourismPage } from './pages/PilgrimageTourismPage';
import { GuestServicesPage } from './pages/GuestServicesPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/properties" element={<AllPropertiesPage />} />
            <Route path="/properties/:id" element={<PropertyDetailPage />} />
            <Route path="/property/patliputra-saalt" element={<PatliputraSaaltPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-conditions" element={<TermsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/press-media" element={<PressMediaPage />} />
            <Route path="/corporate-services" element={<CorporateServicesPage />} />
            <Route path="/pilgrimage-tourism" element={<PilgrimageTourismPage />} />
            <Route path="/guest-services" element={<GuestServicesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
