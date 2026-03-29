import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react'; // Vercel Analytics
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

// 1. INITIALIZE GOOGLE ANALYTICS
ReactGA.initialize("G-65LG9VVWHB");

// 2. SCROLL TO TOP UTILITY
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// 3. CONDITIONAL FOOTER LOGIC (Sirf Home aur Contact par)
const ConditionalFooter = () => {
  const location = useLocation();
  const showFooterPaths = ['/', '/contact'];
  return showFooterPaths.includes(location.pathname) ? <Footer /> : null;
};

// 4. MAIN CONTENT WRAPPER (To handle Analytics & Transitions)
function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Har baar jab page badlega, Google ko data jayega
    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname + location.search 
    });
  }, [location]);

  return (
    <div className="bg-[#030303] min-h-screen font-sans selection:bg-[#C5A059] selection:text-black bg-grain relative">
      
      {/* Vercel Analytics for speed & visitor count */}
      <Analytics />

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
            {/* 404 handling */}
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

// 5. ROOT APP COMPONENT
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;