import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const BrandingBadge = () => {
  return (
    <motion.a
      href="https://rahuljangu.netlify.app/" // Yahan apni portfolio link dalo
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-6 right-24 z-[100] hidden md:flex items-center gap-3 bg-[#111111] border border-white/10 px-4 py-2 rounded-full shadow-2xl backdrop-blur-md group"
    >
      {/* Logo Circle (Jaisa screenshot mein hai) */}
      <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-white/5 overflow-hidden">
        <span className="text-[10px] font-black text-white uppercase tracking-tighter">RJ</span>
      </div>

      {/* Text Section */}
      <div className="flex items-center gap-2">
        <span className="text-gray-400 text-xs font-medium">Built by</span>
        <span className="text-white text-xs font-bold group-hover:text-[#D7B56D] transition-colors">
          Rahul Jangu
        </span>
        <ExternalLink size={12} className="text-gray-600 group-hover:text-white transition-colors" />
      </div>
    </motion.a>
  );
};

export default BrandingBadge;