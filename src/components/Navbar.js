import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Designs', path: '/designs' },
    { name: 'The Legacy', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative">
        
        {/* LOGO AREA */}
        <div className="relative w-24 md:w-40 h-10 flex items-center">
          <Link to="/" className="absolute top-[-5px] md:top-[-10px] left-0 z-[120]">
            <img 
              src="/logo.png" 
              alt="DM Lace" 
              className="h-12 md:h-24 w-auto object-contain drop-shadow-lg" 
            />
          </Link>
        </div>

        {/* DESKTOP MENU (Remains same) */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className={`text-[10px] font-bold uppercase tracking-[0.2em] transition ${location.pathname === link.path ? 'text-yellow-500' : 'text-gray-400 hover:text-white'}`}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden sm:flex bg-white text-black px-5 py-2 rounded-full font-bold text-[9px] uppercase tracking-widest hover:bg-yellow-500 transition-all">
            GET QUOTE
          </Link>
          
          <button className="lg:hidden text-white z-[130] p-1" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE OVERLAY MENU (CHOTA & SLEEK) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[110] lg:hidden flex flex-col items-center justify-center"
          >
            {/* Minimal Links Container */}
            <div className="flex flex-col items-center gap-6 w-full px-10">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.name}
                  className="w-full text-center"
                >
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="group py-2 inline-flex items-center gap-3"
                  >
                    <span className={`text-lg font-syne font-bold uppercase tracking-[0.2em] transition-colors ${location.pathname === link.path ? 'text-yellow-500' : 'text-white/70 group-hover:text-white'}`}>
                      {link.name}
                    </span>
                    <ArrowRight className="text-yellow-600 opacity-0 group-hover:opacity-100 transition-all" size={14} />
                  </Link>
                </motion.div>
              ))}

              {/* Minimalist Separator Line */}
              <div className="w-12 h-[1px] bg-white/10 my-4" />

              {/* Small Sleek Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full max-w-[200px]"
              >
                <Link 
                  to="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="block w-full border border-yellow-600/50 text-yellow-500 text-center py-3 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-yellow-600 hover:text-black transition-all"
                >
                  Get a Quote
                </Link>
              </motion.div>

              {/* Tiny Footer Text */}
              <p className="text-gray-600 text-[8px] font-bold uppercase tracking-[0.3em] mt-6">
                Surat • Established 2021
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;