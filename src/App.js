import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BrandingBadge from './components/BrandingBadge';

// Pages
import Home from './pages/Home';
import Designs from './pages/Designs';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to Top Utility
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// Footer Logic: Sirf Home aur Contact par dikhega
const ConditionalFooter = () => {
  const location = useLocation();
  const showFooterPaths = ['/', '/contact'];
  return showFooterPaths.includes(location.pathname) ? <Footer /> : null;
};

function AppContent() {
  const location = useLocation();

  return (
    <div className="bg-[#030303] min-h-screen font-sans selection:bg-[#C5A059] selection:text-black bg-grain">
      <ScrollToTop />
      <Navbar />
      
      <main>
        <AnimatePresence mode="wait">
          {/* Key aur Location zaroori hai smooth transition ke liye */}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/designs" element={<Designs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </main>

      <ConditionalFooter />
      
      {/* Aapka Portfolio Badge */}
      <BrandingBadge />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;