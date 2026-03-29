import React from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, Zap, Star, Award } from 'lucide-react';

const About = () => {
  // Animation Variants
  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  };

  return (
    <div className="bg-[#030303] text-[#F4F4F4] pt-24 pb-16 selection:bg-[#C5A059] selection:text-black font-sans overflow-hidden">
      
      {/* --- 1. REFINED HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 md:pt-32 md:pb-20">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-[#C5A059] font-syne font-bold text-[10px] tracking-[0.4em] uppercase">
                Since 2021 • 5 Years of Quality
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-syne text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight uppercase tracking-tight max-w-4xl"
          >
            Crafting the <span className="text-[#C5A059] font-serif italic lowercase font-normal">new standard</span> in lace manufacturing.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 max-w-2xl"
          >
            <p className="text-gray-400 text-sm md:text-lg font-light font-serif italic leading-relaxed border-l-2 border-[#C5A059]/30 pl-6">
                "We started DM Lace with a single mission: to bring boutique-level quality 
                to Surat’s massive textile industry. Our focus is on precision, not just scale."
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. THE STORY (Jobwork Focus) --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-t border-white/5">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full h-[300px] md:h-[500px] overflow-hidden rounded-2xl border border-white/10 relative group"
          >
            <img src="/machine.jpg" className="w-full h-full object-cover transition-all duration-700" alt="Machine" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
          </motion.div>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
          <motion.h2 {...fadeInUp} className="font-syne text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-tight">
            Quality Over <br /> <span className="text-gray-700">Mass Production.</span>
          </motion.h2>
          <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
            <p>In just 5 years, <strong>DM Lace Surat</strong> has transformed into a reliable manufacturing unit. We realized that big factories often lose focus on the finer details—we chose the opposite path: <strong>Jobwork Precision</strong>.</p>
            <p>With high-speed computerized multi-head machines, we specialize in high-density embroidery. Whether it's a bridal order or bulk supply, our focus remains on thread density, zari shine, and dye-fastness.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
            <div className="flex items-center gap-3">
              <Award className="text-[#C5A059]" size={20}/>
              <div><p className="font-syne text-xl font-black text-white">100+</p><p className="text-[7px] uppercase tracking-widest text-gray-500 font-bold">Designs</p></div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#C5A059]" size={20}/>
              <div><p className="font-syne text-xl font-black text-white">100%</p><p className="text-[7px] uppercase tracking-widest text-gray-500 font-bold">QC Check</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. FOUNDER'S SPOTLIGHT (Fixed Overlap) --- */}
      <section className="bg-zinc-900/30 py-20 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Section: Added padding to avoid logo overlap */}
          <div className="lg:pl-24 space-y-8 order-2 lg:order-1">
            <motion.div {...fadeInUp}>
              <h4 className="text-[#C5A059] font-syne font-bold uppercase tracking-[0.4em] text-[9px] mb-2">The Visionary</h4>
              <h2 className="font-syne text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white">
                Mr. Kanaram
              </h2>
              <p className="text-gray-500 font-serif italic text-lg md:text-xl">Founder & Designer</p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-4 text-gray-300 text-sm md:text-base italic font-serif leading-relaxed">
              <p>"When I founded DM Lace, I wanted to create a brand where every client feels their design is our top priority. I personally oversee the punching process of every new pattern to ensure it meets the global standards of luxury."</p>
              <div className="pt-4 border-t border-white/5 w-fit">
                 <p className="text-[#C5A059] font-syne font-black uppercase text-[10px] tracking-[0.2em]">Crafting Tomorrow's Fashion Today</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-xs aspect-[3/4] bg-zinc-800 rounded-3xl overflow-hidden border border-[#C5A059]/20 shadow-2xl">
                <img src="/founder.jpeg" className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-700" alt="Mr. Kanaram" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] to-transparent opacity-40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 4. VALUES GRID --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-zinc-900/40 rounded-2xl border border-white/5 group hover:border-[#C5A059]/20 transition-all">
            <Zap className="text-[#C5A059] mb-4" size={24} />
            <h3 className="font-syne text-sm font-bold uppercase mb-2">Rapid Sampling</h3>
            <p className="text-gray-500 text-xs leading-relaxed">Physical samples of your custom concepts delivered within 48-72 hours for approval.</p>
          </div>
          <div className="p-8 bg-zinc-900/40 rounded-2xl border border-white/5 group hover:border-[#C5A059]/20 transition-all">
            <ShieldCheck className="text-[#C5A059] mb-4" size={24} />
            <h3 className="font-syne text-sm font-bold uppercase mb-2">Quality Oath</h3>
            <p className="text-gray-500 text-xs leading-relaxed">Every roll is manually checked. We ensure no thread-breaks and a consistent zari-tone.</p>
          </div>
          <div className="p-8 bg-zinc-900/40 rounded-2xl border border-white/5 group hover:border-[#C5A059]/20 transition-all">
            <Star className="text-[#C5A059] mb-4" size={24} />
            <h3 className="font-syne text-sm font-bold uppercase mb-2">Exclusive Archive</h3>
            <p className="text-gray-500 text-xs leading-relaxed">Access to 1000+ unique patterns that give your garments a signature designer look.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;