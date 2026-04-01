import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Send, MessageCircle, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; 

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', company: '', message: '' });
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 300], [0, 40]);
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
  };

  const contactInfo = [
    { icon: Phone, label: "Call Us", value: "+91 99046 30621", sub: "Bulk Sales Enquiry", href: "tel:+919904630621" },
    { icon: Mail, label: "Email", value: "sales@dmlacesurat.com", sub: "Official Correspondence", href: "mailto:sales@dmlacesurat.com" },
    { icon: MapPin, label: "Factory", value: "GIDC Pandesara, Surat", sub: "Gujarat, India", href: "#" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Name: ${formData.name}\nCompany: ${formData.company}\nMessage: ${formData.message}`;
    const waUrl = `https://wa.me/919904630621?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <>
    <Helmet>
      <title>Contact DM Lace Surat | Factory Location & Bulk Enquiries</title>
      <meta name="description" content="Get in touch with DM Lace Surat for bulk orders and jobwork. Visit our factory in GIDC Pandesara or contact us directly." />
      <meta name="keywords" content="Contact DM Lace, Surat lace factory address, Bulk lace enquiry, Wholesale lace supplier contact, GIDC Pandesara textile" />
      <meta property="og:title" content="Contact DM Lace Surat | Scale Your Production" />
      <meta property="og:description" content="Reach out to us for direct factory pricing and custom lace orders." />
    </Helmet>
    
    <div className="bg-[#030303] text-white pt-24 md:pt-32 pb-16 selection:bg-[#C5A059] selection:text-black font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <section className="mb-16 md:mb-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-[#C5A059]" />
              <span className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.3em]">Get In Touch</span>
              <div className="w-10 h-[1px] bg-[#C5A059]" />
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">
              Contact <span className="text-[#C5A059] italic font-serif">Us</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-gray-500 text-base max-w-xl mx-auto">
              Have a question or need a quote? We'd love to hear from you.
            </motion.p>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* --- CONTACT INFO --- */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((item, i) => (
              <motion.a 
                key={i}
                variants={fadeInUp}
                href={item.href}
                className="block p-6 bg-[#050505] rounded-xl border border-white/5 hover:border-[#C5A059]/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C5A059]/10 rounded-full flex items-center justify-center group-hover:bg-[#C5A059]/20 transition-colors">
                    <item.icon className="text-[#C5A059]" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-white text-lg font-bold">{item.value}</p>
                    <p className="text-gray-600 text-xs mt-1">{item.sub}</p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* WhatsApp Button */}
            <motion.div variants={fadeInUp}>
              <a 
                href="https://wa.me/919904630621"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600/10 border border-green-600/30 text-green-500 py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Location */}
            <motion.div variants={fadeInUp} className="p-6 bg-[#050505] rounded-xl border border-white/5">
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-3">Factory Address</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Plot No. 124, GIDC Industrial Estate,<br/>
                Pandesara, Surat - 395021<br/>
                <span className="text-[#C5A059]">Gujarat, India</span>
              </p>
            </motion.div>
          </motion.div>

          {/* --- ENQUIRY FORM --- */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#050505] p-8 md:p-10 rounded-2xl border border-white/5"
          >
            <h2 className="text-2xl font-black uppercase tracking-tight mb-8">
              Send <span className="text-[#C5A059]">Enquiry</span>
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="group border-b border-white/10 focus-within:border-[#C5A059] transition-all pb-3">
                  <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-2 font-bold">Your Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-transparent w-full outline-none text-white placeholder:text-gray-700"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div className="group border-b border-white/10 focus-within:border-[#C5A059] transition-all pb-3">
                  <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-2 font-bold">Company / Brand</label>
                  <input 
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="bg-transparent w-full outline-none text-white placeholder:text-gray-700"
                    placeholder="Your brand name"
                  />
                </div>
                
                <div className="group border-b border-white/10 focus-within:border-[#C5A059] transition-all pb-3">
                  <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-2 font-bold">Message</label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={3}
                    className="bg-transparent w-full outline-none text-white placeholder:text-gray-700 resize-none"
                    placeholder="Tell us about your requirements..."
                    required
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#C5A059] text-black font-bold text-sm uppercase tracking-widest py-4 rounded-full hover:bg-white transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                Submit Enquiry
              </button>
            </form>
          </motion.div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-white/5 text-center"
        >
          <p className="text-gray-600 text-sm">Based in Surat, Gujarat • Shipping All Over India</p>
        </motion.div>

      </div>
    </div>
  </>
  );
};

export default Contact;