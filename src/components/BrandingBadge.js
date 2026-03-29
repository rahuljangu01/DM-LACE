import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const BrandingBadge = () => {
  return (
    <motion.a
      href="https://rahuljangu.netlify.app/" // Yahan apni portfolio link dalo
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      // Mobile pe left mein dikhega, Desktop pe right mein (bottom-6 left-6 md:left-auto md:right-24)
      className="fixed bottom-6 left-6 md:left-auto md:right-24 z-[200] flex items-center gap-3 bg-[#111111]/80 border border-white/10 px-3 py-2 md:px-4 md:py-2 rounded-full shadow-2xl backdrop-blur-md group transition-all"
    >
      {/* Logo Circle */}
      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-white/5 overflow-hidden">
        <span className="text-[8px] md:text-[10px] font-black text-white uppercase tracking-tighter">RJ</span>
      </div>

      {/* Text Section */}
      <div className="flex items-center gap-2">
        <span className="text-gray-400 text-[9px] md:text-xs font-medium whitespace-nowrap">Built by</span>
        <span className="text-white text-[9px] md:text-xs font-bold group-hover:text-[#D7B56D] transition-colors whitespace-nowrap">
          Rahul Jangu
        </span>
        <ExternalLink size={10} className="text-gray-600 group-hover:text-white transition-colors hidden sm:block" />
      </div>
    </motion.a>
  );
};

export default BrandingBadge;