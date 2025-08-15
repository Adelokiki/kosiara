import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D1B2A] border-t-2 border-[#F6D1C1]/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#F6D1C1] playfair">About Kosiara</h3>
            <p className="text-[#F6D1C1]/80 leading-relaxed">
              Curating timeless fashion pieces that celebrate individuality and elegance. 
              We believe in quality craftsmanship and sustainable luxury that transcends seasons.
            </p>
            <div className="flex space-x-4">
              <button className="text-[#F6D1C1]/60 hover:text-[#F6D1C1] transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </button>
              <button className="text-[#F6D1C1]/60 hover:text-[#F6D1C1] transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </button>
              <button className="text-[#F6D1C1]/60 hover:text-[#F6D1C1] transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-[#F6D1C1] playfair">Quick Links</h4>
            <div className="space-y-3">
              {[
                'Size Guide',
                'Shipping & Returns',
                'Care Instructions',
                'Privacy Policy',
                'Terms of Service',
                'About Us'
              ].map((link) => (
                <button
                  key={link}
                  className="block text-[#F6D1C1]/80 hover:text-[#F6D1C1] transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-[#F6D1C1] playfair">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[#F6D1C1]/80">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>hello@kosiara.com</span>
              </div>
              <div className="flex items-center gap-4 text-[#F6D1C1]/80">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4 text-[#F6D1C1]/80">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-[#F6D1C1]/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#F6D1C1]/60">
              © 2025 Kosiara. All rights reserved.
            </p>
            <div className="flex gap-8 text-[#F6D1C1]/60">
              <button className="hover:text-[#F6D1C1] transition-colors duration-300">
                Terms
              </button>
              <button className="hover:text-[#F6D1C1] transition-colors duration-300">
                Privacy
              </button>
              <button className="hover:text-[#F6D1C1] transition-colors duration-300">
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;