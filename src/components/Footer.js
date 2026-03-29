import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] text-[#F4F4F4] pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Grid: Mobile(1 col), Tablet(2 cols), Desktop(4 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4 md:space-y-6">
            <img src="/logo.png" alt="DM Lace" className="h-16 md:h-20 w-auto object-contain brightness-110" />
            <p className="text-gray-500 font-light text-xs md:text-sm leading-relaxed max-w-xs">
              Crafting stories in every thread. Since 1995, DM Lace Surat has been the 
              gold standard for luxury textile trimmings.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#!" className="text-[#D7B56D] hover:text-white transition-colors duration-300">
                <InstagramIcon />
              </a>
              <a href="#!" className="text-[#D7B56D] hover:text-white transition-colors duration-300">
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Studio Links (Mobile pe 2nd column banega) */}
          <div className="sm:pl-10 lg:pl-0">
            <h3 className="font-serif italic text-[#D7B56D] text-lg md:text-xl mb-4 md:mb-8">Studio</h3>
            <ul className="space-y-3 md:space-y-4 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/designs" className="hover:text-white transition-colors">Archive</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">The Legacy</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Specialties */}
          <div>
            <h3 className="font-serif italic text-[#D7B56D] text-lg md:text-xl mb-4 md:mb-8">Specialties</h3>
            <ul className="space-y-2 md:space-y-3 text-gray-500 font-light text-xs md:text-sm">
              <li className="hover:text-white transition-colors cursor-default">Bridal Zari Borders</li>
              <li className="hover:text-white transition-colors cursor-default">Cotton Eyelet Laces</li>
              <li className="hover:text-white transition-colors cursor-default">Metallic Sequences</li>
              <li className="hover:text-white transition-colors cursor-default">Bespoke Jobwork</li>
            </ul>
          </div>

          {/* Column 4: Reach Us */}
          <div>
            <h3 className="font-serif italic text-[#D7B56D] text-lg md:text-xl mb-4 md:mb-8">Reach Us</h3>
            <div className="space-y-4 md:space-y-6 text-xs md:text-sm font-light text-gray-500">
              <div className="flex gap-3">
                <MapPin size={16} className="text-[#D7B56D] flex-shrink-0" />
                <p className="leading-relaxed">GIDC Industrial Area, Pandesara, Surat, Gujarat.</p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-[#D7B56D] flex-shrink-0" />
                <p>+91 99046 30621</p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={16} className="text-[#D7B56D] flex-shrink-0" />
                <p className="break-all">sales@dmlacesurat.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Fixed responsive behavior */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-600 text-[8px] md:text-[10px] uppercase tracking-widest font-bold">
            © {currentYear} DM LACE SURAT. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 md:gap-8 text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-gray-600">
             <Link to="/contact" className="hover:text-[#D7B56D] transition">PRIVACY POLICY</Link>
             <Link to="/contact" className="hover:text-[#D7B56D] transition">TERMS OF SALE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;