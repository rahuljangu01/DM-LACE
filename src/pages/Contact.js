import React from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Globe } from 'lucide-react';

const Contact = () => {
  const fadeInUp = {
    initial: { y: 40, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
    viewport: { once: true }
  };

  return (
    <div className="bg-[#030303] text-[#F4F4F4] pt-24 md:pt-32 pb-12 md:pb-16 selection:bg-[#C5A059] selection:text-black font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* --- 1. EDITORIAL HEADER --- */}
        <section className="mb-12 md:mb-24">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <p className="font-syne text-[#C5A059] uppercase tracking-[0.3em] md:tracking-[0.6em] text-[8px] md:text-[10px] mb-4">Whole India Supply • Bulk Orders</p>
            <h1 className="font-syne text-[14vw] sm:text-[12vw] md:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter">
              Start a <br /> <span className="text-[#C5A059] italic font-serif lowercase font-light">Conversation.</span>
            </h1>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* --- 2. CONTACT CHANNELS (Left Side) --- */}
          <div className="lg:col-span-5 space-y-10 md:space-y-16">
            
            {/* Direct Connect */}
            <motion.div {...fadeInUp}>
              <h3 className="font-syne text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-6 md:mb-8 border-l border-[#C5A059] pl-4">Direct Contact</h3>
              <div className="space-y-6">
                <a href="tel:+919904630621" className="group block">
                  <p className="text-[10px] font-black uppercase text-gray-600 mb-1 group-hover:text-[#C5A059] transition-colors">Bulk Sales Enquiry</p>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-syne font-bold tracking-tighter group-hover:pl-2 transition-all">+91 9904630621</p>
                </a>
                <a href="mailto:sales@dmlacesurat.com" className="group block">
                  <p className="text-[10px] font-black uppercase text-gray-600 mb-1 group-hover:text-[#C5A059] transition-colors">Official Correspondence</p>
                  <p className="text-lg md:text-xl font-serif italic text-gray-400 group-hover:text-white transition-colors">sales@dmlacesurat.com</p>
                </a>
              </div>
            </motion.div>

            {/* Locations */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h3 className="font-syne text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-6 md:mb-8 border-l border-[#C5A059] pl-4">Our Location</h3>
              <div className="grid grid-cols-1 gap-10">
                <div>
                  <p className="text-[10px] font-black uppercase text-[#C5A059] mb-3 tracking-widest">The Factory</p>
                  <p className="text-sm md:text-base font-light leading-relaxed text-gray-400">
                    Plot No. 124, GIDC Industrial Estate,<br/>
                    Pandesara, Surat - 395021.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Fast Track WhatsApp */}
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
               <a 
                 href="https://wa.me/919904630621" 
                 target="_blank" 
                 rel="noreferrer" 
                 className="inline-flex items-center gap-4 md:gap-6 bg-green-600/5 border border-green-600/20 text-green-500 px-6 md:px-10 py-4 md:py-5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-green-600 hover:text-white transition-all duration-500 group"
               >
                 <MessageCircle size={18} className="group-hover:scale-125 transition-transform" /> 
                 Fast Track on WhatsApp
               </a>
            </motion.div>
          </div>

          {/* --- 3. MINIMALIST ENQUIRY PANEL (Right Side) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 bg-[#080808] p-6 sm:p-10 md:p-16 rounded-3xl md:rounded-[3rem] border border-white/5 relative"
          >
            <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none hidden md:block">
              <Globe size={300} strokeWidth={1} />
            </div>

            <h2 className="font-syne text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-8 md:mb-12">Enquiry <span className="text-[#C5A059]">Form</span></h2>
            
            <form className="space-y-8 md:space-y-12 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="group border-b border-white/10 focus-within:border-[#C5A059] transition-all pb-3">
                  <label className="text-[9px] uppercase tracking-widest text-gray-600 block mb-2 font-black">Name</label>
                  <input type="text" className="bg-transparent w-full outline-none text-base md:text-xl font-serif italic text-white placeholder:text-zinc-800" placeholder="Name" />
                </div>
                <div className="group border-b border-white/10 focus-within:border-[#C5A059] transition-all pb-3">
                  <label className="text-[9px] uppercase tracking-widest text-gray-600 block mb-2 font-black">Company</label>
                  <input type="text" className="bg-transparent w-full outline-none text-base md:text-xl font-serif italic text-white placeholder:text-zinc-800" placeholder="Your Fashion Label"  />
                </div>
              </div>

              <div className="group border-b border-white/10 focus-within:border-[#C5A059] transition-all pb-3">
                  <label className="text-[9px] uppercase tracking-widest text-gray-600 block mb-2 font-black">Message</label>
                  <input type="text" className="bg-transparent w-full outline-none text-base md:text-xl font-serif italic text-white placeholder:text-zinc-800" placeholder="Lace width, thread type, estimated quantity..." />
                </div>

              
              <button className="group flex items-center gap-4 md:gap-8 font-syne font-black uppercase text-[10px] md:text-[11px] tracking-[0.2em] md:tracking-[0.4em] text-[#C5A059] hover:text-white transition-all duration-500">
                Submit Brief 
                <div className="flex items-center">
                  <div className="w-12 md:w-16 h-[1px] bg-[#C5A059] group-hover:w-24 md:group-hover:w-32 transition-all duration-700" />
                  <Send size={14} className="ml-[-10px] opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </button>
            </form>
          </motion.div>

        </div>

        {/* --- 4. THE INDUSTRIAL HUB INDICATOR --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 md:mt-32 pt-12 md:pt-20 border-t border-white/5 text-center"
        >
          <p className="font-syne text-[8px] md:text-[10px] tracking-[0.5em] md:tracking-[0.8em] font-black uppercase text-gray-700 mb-4">Manufacturing Hub</p>
          <h4 className="font-serif italic text-xl md:text-3xl text-gray-500">Based in Surat. Shipping Nationwide.</h4>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;