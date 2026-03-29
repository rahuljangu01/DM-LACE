import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; 

const Home = () => {
  return (
    <>
     <Helmet>
        <title>DM Lace Surat | Best Lace Manufacturer & Wholesale Supplier in India</title>
        <meta name="description" content="DM Lace Surat: Leading manufacturer of premium Zari borders, Cotton Schiffli laces, and Designer trims. Specialized in bulk supply and high-quality jobwork since 2021." />
        <meta name="keywords" content="Lace manufacturer Surat, Zari border wholesale, Cotton lace factory Surat, Jobwork lace Surat, DM Lace, Designer trims India, Embroidery lace wholesale" />
        
        {/* Open Graph / Facebook / WhatsApp sharing tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DM Lace Surat | Premium Lace Manufacturing Studio" />
        <meta property="og:description" content="Explore our exclusive archive of designer laces and Zari borders. Quality meets precision in every stitch." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://dm-lace.vercel.app" />
      </Helmet>
    <div className="bg-[#030303] text-white">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <img src="/bg.jpg" className="w-full h-full object-cover opacity-30" alt="bg" />
        </div>

        <div className="relative z-10 text-center">
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            src="/logo.png" className="h-32 md:h-64 mx-auto mb-8 object-contain"
          />
          <h1 className="font-syne text-3xl md:text-7xl font-black uppercase leading-tight tracking-tight">
            The Art of <br /> <span className="text-[#C5A059] italic font-serif lowercase font-light">Threadwork.</span>
          </h1>
          <p className="mt-6 text-[10px] md:text-xs tracking-[0.4em] text-gray-500 font-bold uppercase">
            Surat's lace manufacturer • EST 2021
          </p>
        </div>
      </section>

      {/* ABOUT SECTION - Stacked on Mobile */}
      <section className="py-20 md:py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-[#C5A059] italic font-serif text-xl md:text-2xl italic">The Craft</span>
            <h2 className="font-syne text-4xl md:text-6xl font-black uppercase leading-tight mt-4 mb-6 tracking-tight">
              PRECISION <br /> <span className="text-gray-700 italic font-serif lowercase font-light">meets</span> <br /> QUALITY.
            </h2>
            <p className="text-gray-400 font-light text-sm md:text-lg leading-relaxed mb-8">
              DM Lace Surat operates as a focused manufacturing unit. We specialize in high-density Jobwork and boutique-style production.
            </p>
            <Link to="/about" className="text-yellow-500 font-bold uppercase text-xs tracking-widest border-b border-yellow-500 pb-1">
              Our Legacy →
            </Link>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <img src="/image1.jpg" className="h-48 md:h-80 w-full object-cover rounded-lg" alt="Lace 1" />
            <img src="/image2.jpg" className="h-48 md:h-80 w-full object-cover rounded-lg mt-8" alt="Lace 2" />
          </div>
        </div>
      </section>

      {/* COLLECTION - Horizontal scroll on mobile or grid */}
     <section className="bg-[#080808] py-16 md:py-32 border-y border-white/5">
  {/* Header Section: Mobile pe font size chota kiya gaya hai */}
  <div className="text-center mb-10 md:mb-20 px-6">
    <h2 className="font-syne text-3xl md:text-7xl font-black uppercase tracking-tight leading-tight">
      The <span className="text-[#C5A059] italic font-serif lowercase font-light">Collections</span>
    </h2>
    <p className="text-gray-600 text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] mt-3 md:mt-4 font-bold uppercase">
      Wholesale & Export Quality
    </p>
  </div>

  {/* Grid Section: Mobile (grid-cols-2), Desktop (md:grid-cols-4) */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 px-3 md:px-4">
    {[
      { name: "Bridal Zari", img: "/bridle.jpg" },
      { name: "Cotton Schiffli", img: "/cotton.jpg" },
      { name: "Metallic Sequins", img: "/fancy.jpg" },
      { name: "Designer Trims", img: "/embo.jpg" }
    ].map((item, i) => (
      <Link key={i} to="/designs" className="relative group overflow-hidden aspect-[3/4] rounded-sm border border-white/5">
        {/* Image */}
        <img 
          src={item.img} 
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-110" 
          alt={item.name} 
        />
        
        {/* Overlay: Mobile par thoda zyada dark rakha hai taaki text dikhe */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/30 md:group-hover:bg-black/10 transition-all"></div>
        
        {/* Text Content */}
        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 right-4">
          <h3 className="font-serif italic text-lg md:text-3xl text-white leading-tight">
            {item.name}
          </h3>
          {/* Mobile par "Explore" text hamesha dikhega (opacity-100), desktop par hover par (md:opacity-0 md:group-hover:opacity-100) */}
          <p className="text-[7px] md:text-[9px] uppercase tracking-widest text-[#C5A059] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all mt-1 md:mt-2 font-bold">
            Explore Portfolio
          </p>
        </div>
      </Link>
    ))}
  </div>
</section>
    </div>
    </>
  );
};
export default Home;