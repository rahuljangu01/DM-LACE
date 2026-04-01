import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Star, Award, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; 

const About = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 80]);
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
  };

  const values = [
    { icon: Zap, title: "Rapid Sampling", desc: "Physical samples delivered within 48-72 hours for approval." },
    { icon: ShieldCheck, title: "Quality Oath", desc: "Every roll manually checked. No thread-breaks, consistent zari-tone." },
    { icon: Star, title: "Exclusive Archive", desc: "Access to 1000+ unique patterns for signature designer look." }
  ];

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "1000+", label: "Designs Created" },
    { number: "500+", label: "Happy Clients" },
    { number: "100%", label: "Quality Assured" }
  ];

  return (
    <>
    <Helmet>
      <title>About DM Lace Surat | Our Legacy & Craftsmanship</title>
      <meta name="description" content="Discover the journey of DM Lace Surat. Established in 2021 by Mr. Kanaram, we focus on high-quality jobwork and boutique-style lace manufacturing in Surat." />
      <meta name="keywords" content="DM Lace history, Kanaram Surat, Lace factory Surat, Quality lace manufacturing, Surat textile heritage" />
      <meta property="og:title" content="About DM Lace | The Story Behind the Threads" />
      <meta property="og:description" content="Learn how we craft the new standard in lace manufacturing since 2021." />
    </Helmet>
    
    <div className="bg-[#030303] text-white pt-24 md:pt-32 pb-16 selection:bg-[#C5A059] selection:text-black font-sans overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-[1px] bg-[#C5A059]" />
            <span className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.3em]">Since 2021</span>
            <div className="w-10 h-[1px] bg-[#C5A059]" />
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            Crafting <span className="text-[#C5A059] italic font-serif">Luxury</span> <br/>Since 2021
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We started with a single mission: to bring boutique-level quality to Surat's massive textile industry. 
            Our focus is on precision, not just scale.
          </motion.p>

          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-black text-[#C5A059]">{stat.number}</p>
                <p className="text-[9px] text-gray-600 uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* --- STORY SECTION --- */}
      <section className="py-16 md:py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#C5A059]" />
              <span className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.25em]">Our Story</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
              Quality Over <br/> <span className="text-gray-600">Mass Production</span>
            </h2>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
              In just 5 years, <strong className="text-white">DM Lace Surat</strong> has transformed into a reliable manufacturing unit. 
              We realized that big factories often lose focus on the finer details—we chose the opposite path: 
              <strong className="text-[#C5A059]"> Jobwork Precision</strong>.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              With high-speed computerized multi-head machines, we specialize in high-density embroidery. 
              Whether it's a bridal order or bulk supply, our focus remains on thread density, zari shine, and dye-fastness.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-3">
                <Award className="text-[#C5A059]" size={20}/>
                <div><p className="text-xl font-black text-white">100+</p><p className="text-[8px] uppercase tracking-wider text-gray-500">Designs</p></div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-[#C5A059]" size={20}/>
                <div><p className="text-xl font-black text-white">100%</p><p className="text-[8px] uppercase tracking-wider text-gray-500">QC Check</p></div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl group">
              <img 
                src="/machine.jpg" 
                alt="Our Facility" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm font-bold uppercase tracking-wider">Our Manufacturing Unit</p>
                <p className="text-[#C5A059] text-xs mt-1">GIDC Industrial Area, Surat</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FOUNDER SECTION --- */}
      <section className="py-16 md:py-24 px-6 bg-[#050505] border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[3/4] overflow-hidden rounded-2xl"
          >
            <img 
              src="/founder.jpeg" 
              alt="Mr. Kanaram" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-[#C5A059] text-xs font-bold uppercase tracking-wider">Founder & Designer</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#C5A059]" />
              <span className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.25em]">The Visionary</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-2">
              Mr. Kanaram
            </h2>
            <p className="text-gray-500 text-lg font-serif italic mb-6">Founder & Designer</p>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed italic mb-6">
              "When I founded DM Lace, I wanted to create a brand where every client feels their design is our top priority. 
              I personally oversee the punching process of every new pattern to ensure it meets the global standards of luxury."
            </p>
            
            <div className="pt-4 border-t border-white/5">
              <p className="text-[#C5A059] text-xs font-bold uppercase tracking-wider">Crafting Tomorrow's Fashion Today</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#C5A059]" />
              <span className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.25em]">Why Choose Us</span>
              <div className="w-8 h-[1px] bg-[#C5A059]" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              Our <span className="text-[#C5A059] italic font-serif">Values</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {values.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="p-6 md:p-8 bg-[#050505] rounded-xl border border-white/5 hover:border-[#C5A059]/30 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-[#C5A059]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#C5A059]/20 transition-colors">
                  <item.icon className="text-[#C5A059]" size={22} />
                </div>
                <h3 className="text-base font-bold uppercase text-white mb-2 group-hover:text-[#C5A059] transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-16 md:py-20 px-6 border-t border-white/5">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Let's Create <span className="text-[#C5A059] italic font-serif">Together</span>
          </h2>
          <p className="text-gray-500 mb-8">
            Ready to bring your design vision to life? Contact us for custom orders.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A059] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all duration-300"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

    </div>
    </>
  );
};

export default About;