import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; 
import { Sparkles, ArrowRight } from 'lucide-react';

const Designs = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 300], [0, 50]);
  const headerOpacity = useTransform(scrollY, [0, 200], [1, 0.3]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
  };

  const designData = useMemo(() => [
    { id: 1, category: "Cotton", img: "/cotton1.jpg" },
    { id: 2, category: "Cotton", img: "/cotton2.jpg" },
    { id: 3, category: "Cotton", img: "/cotton3.jpg" },
    { id: 4, category: "Cotton", img: "/cotton4.jpg" },
    { id: 5, category: "Zari", img: "/zari1.jpg" },
    { id: 6, category: "Zari", img: "/zari2.jpg" },
    { id: 7, category: "Zari", img: "/zari3.jpg" },
    { id: 8, category: "Zari", img: "/zari4.jpg" },
    { id: 9, category: "Sequence", img: "/seq1.jpg" },
    { id: 10, category: "Sequence", img: "/seq2.webp" },
    { id: 11, category: "Sequence", img: "/seq3.webp" },
    { id: 12, category: "Gota Patti", img: "/gota1.jpg" },
    { id: 13, category: "Gota Patti", img: "/gota2.jpg" },
    { id: 14, category: "Gota Patti", img: "/gota3.jpg" },
    { id: 15, category: "Gota Patti", img: "/gota4.jpg" },
    { id: 16, category: "Fancy", img: "/fancy1.jpg" },
    { id: 17, category: "Fancy", img: "/fancy2.jpg" },
    { id: 18, category: "Fancy", img: "/fancy3.jpg" },
    { id: 19, category: "Fancy", img: "/fancy4.jpg" },
  ], []);

  const categories = ["All", "Cotton", "Zari", "Sequence", "Gota Patti", "Fancy"];

  const filteredDesigns = activeCategory === 'All' 
    ? designData 
    : designData.filter(item => item.category === activeCategory);

  return (
    <>
    <Helmet>
      <title>Lace Design Gallery | Zari, Cotton & Sequence Borders - DM Lace</title>
      <meta name="description" content="Explore our exclusive archive of designer laces. Wholesale collection of Bridal Zari borders, Cotton Schiffli, Gota Patti, and Sequence trims from Surat." />
      <meta name="keywords" content="Lace designs catalog, Zari border photos, Cotton lace gallery, Embroidery patterns Surat, Latest lace trends 2024" />
      <meta property="og:title" content="DM Lace Gallery | Explore Exclusive Archive" />
      <meta property="og:description" content="View our latest collection of premium designer laces and trims." />
    </Helmet>
    
    <div className="bg-[#030303] min-h-screen pt-24 md:pt-36 pb-16 px-4 md:px-6 selection:bg-[#C5A059] selection:text-black font-sans">
      
      {/* --- HEADER --- */}
      <motion.div 
        style={{ y: headerY, opacity: headerOpacity }}
        className="max-w-7xl mx-auto text-center mb-12 md:mb-16"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] md:text-xs mb-3 flex justify-center items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> Our Collection <Sparkles className="w-3.5 h-3.5" />
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight mb-6">
            Exclusive <span className="text-[#C5A059] italic font-serif">Designs</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            Explore our premium collection of handcrafted laces and trims
          </p>
        </motion.div>

        {/* --- CATEGORY TABS --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-2 md:gap-3 mt-10"
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              variants={fadeInUp}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-[#C5A059] text-black' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* --- IMAGE GRID --- */}
      <div className="max-w-6xl mx-auto">
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence mode='popLayout'>
            {filteredDesigns.map((design, i) => (
              <motion.div
                key={design.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.03, y: -8 }}
                className="relative aspect-[4/5] overflow-hidden rounded-lg cursor-pointer group"
              >
                <motion.img 
                  src={design.img} 
                  alt={design.category} 
                  loading="lazy"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-white text-xs font-bold uppercase tracking-wider">{design.category}</p>
                  <p className="text-[#C5A059] text-[10px] mt-1">View Details</p>
                </div>

                <motion.div 
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#C5A059]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 45 }}
                >
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredDesigns.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 text-lg">No designs found in this category</p>
          </motion.div>
        )}
      </div>

      {/* --- CTA SECTION --- */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mt-20 pt-12 border-t border-white/5"
      >
        <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-4">
          Can't Find What You Need?
        </h3>
        <p className="text-gray-500 mb-8">
          Contact us for custom designs and bulk orders
        </p>
        <Link 
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white transition-all duration-300"
        >
          Get Custom Quote
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

      {/* --- FOOTER LINE --- */}
      <div className="mt-16 text-center">
        <p className="text-gray-700 uppercase tracking-[0.3em] text-[8px] font-bold">DM LACE SURAT • EST. 2021</p>
      </div>
    </div>
  </>
  );
};

export default Designs;