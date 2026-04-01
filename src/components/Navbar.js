import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles, Quote } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Designs', path: '/designs' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-[200] transition-all duration-300 ${
          scrolled 
            ? 'bg-black/90 backdrop-blur-md border-b border-white/10' 
            : 'bg-gradient-to-b from-black/90 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-20 md:h-24">
            
            {/* LOGO */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
            >
              <Link to="/" className="flex items-center gap-2">
                <motion.img 
                  src="/logo.png" 
                  alt="DM Lace" 
                  className={`h-16 md:h-20 lg:h-24 w-auto transition-all duration-300 ${
                    scrolled ? 'h-14 md:h-16' : ''
                  }`}
                  draggable={false}
                />
                {scrolled && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="hidden md:block text-[#C5A059] text-xs font-bold uppercase tracking-wider"
                  >
                    Est. 2021
                  </motion.span>
                )}
              </Link>
            </motion.div>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={link.path}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="relative px-5 py-3 group"
                  >
                    <motion.span 
                      className={`text-[11px] font-bold uppercase tracking-[0.2em] ${
                        location.pathname === link.path 
                          ? 'text-[#C5A059]' 
                          : 'text-gray-400'
                      }`}
                      animate={{
                        color: hoveredLink === link.name ? '#ffffff' : undefined
                      }}
                    >
                      {link.name}
                    </motion.span>
                    
                    {/* Animated underline - enhanced */}
                    <motion.div
                      className="absolute bottom-1 left-1/2 h-[2px] bg-[#C5A059]"
                      initial={{ width: 0, x: "-50%" }}
                      animate={{ 
                        width: location.pathname === link.path ? '70%' : 
                               hoveredLink === link.name ? '40%' : '0%'
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                    
                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-[#C5A059]/5 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredLink === link.name ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA & MOBILE TOGGLE */}
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:block"
              >
                <Link 
                  to="/contact" 
                  className="group relative flex items-center gap-2 bg-[#C5A059] text-black px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest overflow-hidden"
                >
                  <motion.span 
                    className="relative z-10 flex items-center gap-2"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Quote size={12} />
                    Get Quote
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>

              {/* Animated mobile toggle button */}
              <motion.button 
                whileTap={{ scale: 0.9 }}
                className="lg:hidden relative flex items-center justify-center w-10 h-10 bg-white/10 rounded-xl border border-white/20 overflow-hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <motion.div
                  className="absolute inset-0 bg-[#C5A059]/20"
                  initial={{ scale: 0 }}
                  whileTap={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <X size={20} className="text-white relative z-10" />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Menu size={20} className="text-white relative z-10" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[150] lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#0A0A0A]/95 backdrop-blur-2xl border-l border-white/10 z-[160] lg:hidden"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-between items-center mb-10">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/" onClick={() => setIsOpen(false)}>
                      <img src="/logo.png" alt="DM Lace" className="h-12" />
                    </Link>
                  </motion.div>
                  <motion.button 
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)} 
                    className="p-2 rounded-full bg-white/5"
                  >
                    <X size={24} className="text-gray-400" />
                  </motion.button>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      transition={{ delay: i * 0.08, type: "spring", stiffness: 300 }}
                    >
                      <Link 
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`group flex items-center justify-between p-4 rounded-xl transition-all ${
                          location.pathname === link.path 
                            ? 'bg-[#C5A059]/20 text-[#C5A059]' 
                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <motion.span 
                          className="text-sm font-bold uppercase tracking-wider"
                          whileHover={{ x: 5 }}
                        >
                          {link.name}
                        </motion.span>
                        <motion.div
                          whileHover={{ x: 5, scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <ArrowRight size={16} className={`${location.pathname === link.path ? 'text-[#C5A059]' : 'text-gray-600 group-hover:text-[#C5A059]'}`} />
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-6 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link 
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="group relative block w-full bg-[#C5A059] text-black text-center py-4 rounded-xl font-bold uppercase text-xs overflow-hidden"
                    >
                      <motion.span className="relative z-10">Request Quote</motion.span>
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-[10px] text-gray-600"
                  >
                    Est. 2021 • Surat, India
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;