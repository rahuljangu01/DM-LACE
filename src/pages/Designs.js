import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Designs = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Your Real Image Data
  const designData = [
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
  ];

  const categories = ["All", "Cotton", "Zari", "Sequence", "Gota Patti", "Fancy"];

  const filteredDesigns = activeCategory === 'All' 
    ? designData 
    : designData.filter(item => item.category === activeCategory);

  return (
    <div className="bg-[#030303] min-h-screen pt-32 md:pt-48 pb-16 px-4 md:px-6 selection:bg-[#C5A059] selection:text-black font-sans">
      
      {/* --- 1. HEADER SECTION --- */}
      <div className="max-w-7xl mx-auto text-center mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-syne text-[#C5A059] uppercase tracking-[0.4em] text-[9px] md:text-[11px] mb-4">
            Surat's Finest Embroidery Collection
          </p>
          <h1 className="font-syne text-4xl sm:text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-8 md:mb-12">
            Exclusive <span className="text-[#C5A059] italic font-serif lowercase font-light leading-none">Archive.</span>
          </h1>
        </motion.div>

        {/* --- 2. CATEGORY SELECTOR (Responsive Tabs) --- */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-8 border-b border-white/5 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative py-2 px-3 md:px-4 text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat ? "text-[#C5A059]" : "text-gray-500 hover:text-white"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeTab" 
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C5A059]"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* --- 3. THE GRID (Fixed 2 Columns on Mobile, 4 on Desktop) --- */}
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredDesigns.map((design) => (
              <motion.div
                key={design.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square overflow-hidden bg-zinc-900 border border-white/5 group cursor-pointer rounded-sm shadow-xl"
              >
                {/* Image stays original color and fits square */}
                <img 
                  src={design.img} 
                  alt={design.category} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
                
                {/* Mini Label - Responsive text size */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                   <p className="inline-block bg-[#C5A059] text-black text-[7px] md:text-[9px] font-black px-2 py-0.5 uppercase tracking-widest rounded-full">
                     {design.category} #{design.id}09
                   </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* --- 4. FOOTER TEXT (Compact) --- */}
      <div className="mt-24 text-center border-t border-white/5 pt-12">
         <p className="text-gray-600 uppercase tracking-[0.6em] text-[8px] md:text-[10px] font-black">
           Jobwork Precision • Direct Factory Pricing
         </p>
      </div>

    </div>
  );
};

export default Designs;