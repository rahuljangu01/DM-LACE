import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider, Helmet } from 'react-helmet-async'; // SEO
import { Analytics } from '@vercel/analytics/react'; // Vercel Analytics
import { SpeedInsights } from "@vercel/speed-insights/react"; // Speed Insights
import ReactGA from 'react-ga4'; // Google Analytics

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BrandingBadge from './components/BrandingBadge';

// Pages
import Home from './pages/Home';
import Designs from './pages/Designs';
import About from './pages/About';
import Contact from './pages/Contact';

// 1. INITIALIZE GOOGLE ANALYTICS (Aapki ID)
ReactGA.initialize("G-65LG9VVWHB");

// 2. SCROLL TO TOP UTILITY
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// 3. CONDITIONAL FOOTER LOGIC (Sirf Home aur Contact par dikhega)
const ConditionalFooter = () => {
  const location = useLocation();
  const showFooterPaths = ['/', '/contact'];
  return showFooterPaths.includes(location.pathname) ? <Footer /> : null;
};

// 4. MAIN CONTENT WRAPPER
function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Page view tracking for Google Analytics
    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname + location.search 
    });
  }, [location]);

  return (
    <div className="bg-[#030303] min-h-screen font-sans selection:bg-[#C5A059] selection:text-black bg-grain relative">
      
      {/* Global SEO Meta Tags */}
      <Helmet>
        <title>DM Lace Surat | Premium Lace Manufacturer & Bulk Supplier</title>
        <meta name="description" content="DM Lace Surat: Leading manufacturer of Zari borders, Cotton laces, and Designer trims since 2021. High-quality jobwork and wholesale supply in Surat." />
        <meta name="keywords" content="Lace manufacturer Surat, Zari border wholesale, Cotton lace factory, DM Lace, Jobwork Surat" />
      </Helmet>

      {/* Tracking Tools */}
      <Analytics />
      <SpeedInsights />

      <ScrollToTop />
      <Navbar />
      
      <main>
        <AnimatePresence mode="wait">
          {/* Transition key enables smooth page fading */}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/designs" element={<Designs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-all 404 handling */}
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </main>

      <ConditionalFooter />
      
      {/* Your Agency/Portfolio Badge */}
      <BrandingBadge />
      
    </div>
  );
}

// 5. ROOT APP COMPONENT WITH PROVIDERS
function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;