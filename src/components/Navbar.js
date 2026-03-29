import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll logic for Navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Designs', path: '/designs' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-[150] transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md py-3 border-b border-white/5 shadow-2xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        
        {/* LOGO AREA */}
        <div className="relative w-32 md:w-48 h-10 flex items-center">
          <Link to="/" className="z-[200]">
            <img src="/logo.png" alt="DM Lace" className="h-14 md:h-32 w-auto object-contain drop-shadow-lg" />
          </Link>
        </div>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${location.pathname === link.path ? 'text-yellow-500' : 'text-gray-400 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* TOGGLE BUTTON */}
        <div className="flex items-center gap-4 relative z-[200]">
          <Link to="/contact" className="hidden sm:flex bg-white text-black px-6 py-2 rounded-full font-black text-[9px] uppercase tracking-widest hover:bg-yellow-500 transition-all">
            GET QUOTE
          </Link>
          <button 
            className="lg:hidden text-white bg-white/5 p-2 rounded-xl border border-white/10 hover:bg-white/10 transition-all" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* --- COMPACT MOBILE DROPDOWN (Right Corner) --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-16 right-6 w-64 bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] lg:hidden p-6 z-[180] overflow-hidden"
            >
              {/* Background Glow inside menu */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-600/10 blur-3xl rounded-full" />

              <div className="flex flex-col gap-4 relative z-10">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between group py-2"
                  >
                    <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${location.pathname === link.path ? 'text-yellow-500' : 'text-gray-400 group-hover:text-white'}`}>
                      {link.name}
                    </span>
                    <ArrowRight size={14} className={`transition-all duration-300 ${location.pathname === link.path ? 'text-yellow-500 translate-x-0 opacity-100' : 'text-gray-700 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                  </Link>
                ))}

                <div className="h-[1px] bg-white/5 my-2" />

                <Link 
                  to="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="bg-yellow-600 text-black text-center py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all active:scale-95 shadow-lg shadow-yellow-600/10"
                >
                  Request Quote
                </Link>
                
                <p className="text-center text-[8px] text-gray-700 font-bold uppercase tracking-widest mt-2">
                  Established 2021
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Background Overlay (Optional: If you want to close menu when clicking outside) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[140] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;