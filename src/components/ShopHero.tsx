import React from 'react';
import { ChevronRight } from 'lucide-react';

const ShopHero: React.FC = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop" 
          alt="Luxury Jewelry Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0D1B2A]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/50 via-transparent to-[#0D1B2A]/80"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="relative z-10 flex items-center gap-2 mb-8">
          <button className="text-[#F6D1C1]/70 hover:text-[#F6D1C1] transition-colors duration-300 text-sm">
            Home
          </button>
          <ChevronRight className="w-4 h-4 text-[#F6D1C1]/50" />
          <span className="text-[#F6D1C1] text-sm font-medium">Shop</span>
        </nav>

        {/* Page Title */}
        <div className="relative z-10 text-center py-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F6D1C1] playfair mb-4">
            Shop
          </h1>
          <p className="text-[#F6D1C1]/70 text-lg max-w-2xl mx-auto">
            Discover our curated collection of luxury fashion pieces
          </p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-[#F6D1C1]/20 rounded-full animate-pulse z-10"></div>
      <div className="absolute bottom-32 right-16 w-6 h-6 bg-[#F6D1C1]/30 rounded-full animate-bounce z-10"></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-[#F6D1C1]/40 rounded-full animate-ping z-10"></div>
    </section>
  );
};

export default ShopHero;