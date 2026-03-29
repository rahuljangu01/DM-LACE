import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Designs from './pages/Designs';
import About from './pages/About';
import Contact from './pages/Contact';

// Utility: Naye page par jaane par screen upar scroll ho jaye
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- FOOTER LOGIC COMPONENT ---
// Ye component decide karega ki footer dikhana hai ya nahi
const ConditionalFooter = () => {
  const location = useLocation();
  
  // Jin pages par footer chahiye unka path yahan dalo
  const showFooterPaths = ['/', '/contact'];
  
  if (showFooterPaths.includes(location.pathname)) {
    return <Footer />;
  }
  
  return null; // Baki pages par kuch nahi dikhega
};

function App() {
  return (
    <Router>
      <div className="bg-[#0A0A0A] min-h-screen font-sans selection:bg-[#D7B56D] selection:text-black bg-grain">
        
        <ScrollToTop />
        
        <Navbar />

        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/designs" element={<Designs />} />
              <Route path="/about" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </main>

        {/* --- AB FOOTER SIRF HOME AUR CONTACT PAR HI DIKHEGA --- */}
        <ConditionalFooter />

      </div>
    </Router>
  );
}

export default App;