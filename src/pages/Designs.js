import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; 

const Designs = () => {
  const [activeCategory, setActiveCategory] = useState('All');

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
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="DM Lace Gallery | Explore Exclusive Archive" />
      <meta property="og:description" content="View our latest collection of premium designer laces and trims." />
    </Helmet>
    <div className="bg-[#030303] min-h-screen pt-24 md:pt-40 pb-16 px-4 md:px-6 selection:bg-[#C5A059] selection:text-black font-sans">
      
      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto text-center mb-10 md:mb-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <p className="font-syne text-[#C5A059] uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-2">Surat's Premium Collection</p>
          <h1 className="font-syne text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-8">
            Exclusive <span className="text-[#C5A059] italic font-serif lowercase font-light">Archive.</span>
          </h1>
        </motion.div>

        {/* --- TABS --- */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 border-b border-white/5 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative py-2 px-3 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors ${
                activeCategory === cat ? "text-[#C5A059]" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C5A059]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* --- GRID --- */}
      <div className="max-w-[1400px] mx-auto">
        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence mode='wait'>
            {filteredDesigns.map((design) => (
              <motion.div
                key={design.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative aspect-square overflow-hidden bg-zinc-900 border border-white/5 rounded-sm"
              >
                <img 
                  src={design.img} 
                  alt={design.category} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 pointer-events-none">
                   <p className="text-[7px] md:text-[9px] font-bold text-white/30 uppercase tracking-widest">
                     {design.category} #{design.id}
                   </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="mt-20 text-center border-t border-white/5 pt-10">
         <p className="text-gray-700 uppercase tracking-[0.5em] text-[8px] font-black">DM LACE SURAT • PRECISION JOBWORK</p>
      </div>
    </div>
  </>
  );
};

export default Designs;