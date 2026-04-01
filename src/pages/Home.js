import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; 
import { ArrowRight, Sparkles, Star, Crown, Gem, Palette } from 'lucide-react';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const staggerContainer = {  
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
  };

  const cardData = [
    { icon: Crown, title: "Bridal Zari", subtitle: "Wedding Collection", img: "/bridle.jpg" },
    { icon: Gem, title: "Cotton Lace", subtitle: "Schiffli Work", img: "/cotton.jpg" },
    { icon: Sparkles, title: "Sequin Work", subtitle: "Shimmer Effect", img: "/fancy.jpg" },
    { icon: Palette, title: "Gota Patti", subtitle: "Traditional Work", img: "/embo.jpg" }
  ];

  const whyChooseUs = [
    { title: "Premium Quality", desc: "100% quality checked before delivery" },
    { title: "Competitive Prices", desc: "Best rates for bulk orders" },
    { title: "Fast Delivery", desc: "Quick turnaround on all orders" },
    { title: "Custom Designs", desc: "OEM/ODM services available" }
  ];

  const products = [
    "Zari Borders", "Cotton Schiffli", "Sequence Work", 
    "Gota Patti", "Fancy Laces", "Designer Trims"
  ];

  const certifications = [
    "Best Quality Assurance", "Export Quality"
  ];

  return (
    <>
      <Helmet>
        <title>DM Lace Surat | Best Lace Manufacturer & Wholesale Supplier in India</title>
        <meta name="description" content="DM Lace Surat: Leading manufacturer of premium Zari borders, Cotton Schiffli laces, and Designer trims. Specialized in bulk supply and high-quality jobwork since 2021." />
        <meta name="keywords" content="Lace manufacturer Surat, Zari border wholesale, Cotton lace factory Surat, Jobwork lace Surat, DM Lace, Designer trims India, Embroidery lace wholesale" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DM Lace Surat | Premium Lace Manufacturing Studio" />
        <meta property="og:description" content="Explore our exclusive archive of designer laces and Zari borders. Quality meets precision in every stitch." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://dm-lace.vercel.app" />
      </Helmet>

    <div ref={containerRef} className="bg-[#030303] text-white overflow-hidden font-sans selection:bg-[#C5A059] selection:text-black">

      {/* ====== HERO SECTION ====== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#030303] via-[#040404] to-[#030303]" />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(197,160,89,0.03) 0%, transparent 60%)`
          }} />
        </div>

        <motion.div 
          animate={{ y: [0, -15, 0], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[15%] w-40 h-40 bg-[#C5A059]/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[25%] right-[15%] w-48 h-48 bg-[#C5A059]/4 rounded-full blur-3xl"
        />

        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Logo */}
            <motion.div 
              variants={fadeInUp} 
              className="mb-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/logo.png" 
                alt="DM Lace" 
                className="h-20 md:h-32 lg:h-40 w-auto mx-auto"
                draggable={false}
              />
            </motion.div>

            {/* Tagline & Badges */}
            <motion.div variants={fadeInUp} className="mb-6 space-y-3">
              <p className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.4em]">Est. 2021 • Surat, India</p>
              
              <div className="flex flex-wrap justify-center gap-2">
                {certifications.map((cert, i) => (
                  <span key={i} className="px-3 py-1 bg-[#C5A059]/10 rounded-full border border-[#C5A059]/20">
                    <span className="text-[#C5A059] text-[9px] font-bold uppercase tracking-wider">{cert}</span>
                  </span>
                ))}
              </div>
              
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C5A059]/10 rounded-full border border-[#C5A059]/20">
                <Star className="w-3 h-3 text-[#C5A059]" />
                <span className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.2em]">Premium Lace Manufacturer</span>
                <Star className="w-3 h-3 text-[#C5A059]" />
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={fadeInUp} className="font-sans text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95] mb-5">
              DM Lace <span className="text-[#C5A059]">Surat</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-gray-500 text-sm md:text-base max-w-lg mx-auto mb-8">
              Leading manufacturer of Zari borders, Cotton Schiffli, Sequence work & Designer trims since 2021
            </motion.p>

            {/* Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/designs" className="px-8 py-3 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white transition-colors duration-300 inline-flex items-center gap-2">
                View Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="px-8 py-3 border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-300 inline-flex items-center gap-2">
                Get Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2"
            >
              <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
                <motion.div 
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-1.5 bg-[#C5A059] rounded-full" 
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ====== ABOUT SECTION ====== */}
      <section className="py-20 md:py-28 px-4 relative bg-[#030303]">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-[1px] bg-[#C5A059]" />
                <span className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.25em]">About Us</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
                Premium <span className="text-[#C5A059] italic font-serif">Lace</span> Manufacturer
              </h2>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                DM Lace Surat is a leading manufacturer and exporter of high-quality lace and embroidery trims. 
                With our state-of-the-art facility in GIDC Pandesara, Surat, we specialize in producing 
                <strong className="text-white"> Zari borders, Cotton Schiffli, Sequence work, Gota Patti, and Designer trims</strong>.
              </p>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                We serve clients across India and internationally with premium quality products, 
                competitive pricing, and reliable delivery timelines.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {whyChooseUs.slice(0, 4).map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#C5A059] rounded-full mt-2"></div>
                    <div>
                      <p className="text-white text-xs font-bold uppercase">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/about" className="inline-flex items-center gap-2 text-[#C5A059] font-bold text-xs uppercase tracking-widest border-b border-[#C5A059] pb-1 hover:text-white hover:border-white transition-all">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-white/10">
                  <img src="/image1.jpg" alt="Lace Design" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[8px] uppercase tracking-wider text-white/70">Premium Laces</span>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-white/10 mt-8">
                  <img src="/machine.jpg" alt="Factory" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[8px] uppercase tracking-wider text-white/70">Our Facility</span>
                </div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -left-3 md:-left-6 bg-[#C5A059] p-4 md:p-6 rounded-lg"
              >
                <p className="text-black font-black text-3xl">5+</p>
                <p className="text-black/70 text-[9px] uppercase tracking-wider">Years of Excellence</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ====== CATEGORIES SECTION ====== */}
      <section className="py-20 md:py-28 px-4 bg-[#040404] relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.25em]">Our Collections</span>
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              Explore <span className="text-[#C5A059] italic font-serif">Categories</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {cardData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer"
              >
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="w-10 h-10 bg-[#C5A059] rounded-full flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold uppercase text-white mb-1">{item.title}</h3>
                  <p className="text-[9px] text-gray-400 uppercase tracking-wider">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link to="/designs" className="inline-flex items-center gap-2 px-8 py-3 border border-[#C5A059] text-[#C5A059] font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#C5A059] hover:text-black transition-all duration-300">
              View All Designs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ====== WHY CHOOSE US ====== */}
      <section className="py-16 md:py-24 px-4 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#C5A059]" />
              <span className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.25em]">Why Choose Us</span>
              <div className="w-8 h-[1px] bg-[#C5A059]" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              The <span className="text-[#C5A059] italic font-serif">DM Lace</span> Advantage
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-[#030303] rounded-xl border border-white/5 hover:border-[#C5A059]/30 transition-all"
              >
                <div className="w-10 h-10 bg-[#C5A059]/10 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-5 h-5 text-[#C5A059]" />
                </div>
                <h3 className="text-sm font-bold uppercase text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PRODUCTS SECTION ====== */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#C5A059]" />
              <span className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.25em]">Our Products</span>
              <div className="w-8 h-[1px] bg-[#C5A059]" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
              What We <span className="text-[#C5A059] italic font-serif">Offer</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-500 max-w-xl mx-auto">
              We manufacture and supply a wide range of premium lace products
            </motion.p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-[#050505] border border-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white hover:border-[#C5A059]/50 transition-all cursor-pointer"
              >
                {product}
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-10"
          >
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white transition-all duration-300">
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="py-24 md:py-32 px-4 relative overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 " />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 mb-6">
              <Crown className="w-10 h-10 text-[#C5A059]" />
            </div>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            Ready to <span className="text-[#C5A059] italic font-serif">Transform</span> <br/>Your Designs?
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Contact us for bulk orders, jobwork, and custom designs. 
            Get premium quality lace at competitive prices with fast delivery.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <Link to="/contact" className="group px-10 py-4 bg-[#C5A059] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all duration-300 inline-flex items-center gap-3">
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="https://wa.me/919904630621" className="group px-10 py-4 border border-green-500/40 text-green-400 font-bold text-sm uppercase tracking-widest rounded-full hover:bg-green-500 hover:text-black transition-all duration-300 inline-flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span>WhatsApp Us</span>
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#C5A059] rounded-full"></div>
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#C5A059] rounded-full"></div>
              <span>Best Prices</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#C5A059] rounded-full"></div>
              <span>Pan India Shipping</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ====== CONTACT CTA ====== */}
      <section className="py-16 md:py-20 px-4 bg-[#050505] border-y border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Ready to <span className="text-[#C5A059] italic font-serif">Start</span> Your Project?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 mb-8 max-w-lg mx-auto">
            Contact us today for free consultation and competitive quotes on bulk orders.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+919904630621" className="px-8 py-3 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white transition-all duration-300">
              Call Now: +91 99046 30621
            </a>
            <a href="https://wa.me/919904630621" className="px-8 py-3 border border-green-500/40 text-green-400 font-bold text-xs uppercase tracking-widest rounded-full hover:bg-green-500 hover:text-black transition-all duration-300">
              WhatsApp Us
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="bg-[#030303] text-white pt-12 pb-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="text-center md:text-left">
              <img src="/logo.png" alt="DM Lace" className="h-12 w-auto mb-3" />
              <p className="text-gray-500 text-xs mb-4">Premium Lace Manufacturer since 2021</p>
              <p className="text-gray-600 text-[10px]">GIDC Industrial Area, Pandesara<br/>Surat, Gujarat, India - 395021</p>
            </div>
            
            <div className="text-center">
              <p className="text-white text-xs font-bold uppercase tracking-wider mb-4">Quick Links</p>
              <div className="flex flex-col gap-2 text-xs">
                <Link to="/" className="text-gray-500 hover:text-[#C5A059] transition-colors">Home</Link>
                <Link to="/designs" className="text-gray-500 hover:text-[#C5A059] transition-colors">Our Designs</Link>
                <Link to="/about" className="text-gray-500 hover:text-[#C5A059] transition-colors">About Us</Link>
                <Link to="/contact" className="text-gray-500 hover:text-[#C5A059] transition-colors">Contact Us</Link>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-white text-xs font-bold uppercase tracking-wider mb-4">Contact Us</p>
              <p className="text-gray-500 text-xs mb-2">+91 99046 30621</p>
              <p className="text-gray-500 text-xs mb-2">sales@dmlacesurat.com</p>
              <div className="flex justify-center md:justify-end gap-4 mt-4">
                <a href="https://wa.me/919904630621" className="text-green-500 hover:text-green-400">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
                <a href="mailto:sales@dmlacesurat.com" className="text-[#C5A059] hover:text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-gray-600 text-[9px] uppercase tracking-widest">© 2021 DM LACE SURAT. ALL RIGHTS RESERVED.</p>
            <p className="text-gray-600 text-[9px]">Made with ❤️ in Surat, Gujarat, India</p>
          </div>
        </div>
      </footer>

    </div>
    </>
  );
};

export default Home;