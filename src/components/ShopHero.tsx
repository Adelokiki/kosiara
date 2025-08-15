import React from 'react';
import { ChevronRight } from 'lucide-react';

const ShopHero: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 mb-8">
          <button className="text-[#F6D1C1]/70 hover:text-[#F6D1C1] transition-colors duration-300 text-sm">
            Home
          </button>
          <ChevronRight className="w-4 h-4 text-[#F6D1C1]/50" />
          <span className="text-[#F6D1C1] text-sm font-medium">Shop</span>
        </nav>

        {/* Page Title */}
        <div className="text-center py-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F6D1C1] playfair mb-4">
            Shop
          </h1>
          <p className="text-[#F6D1C1]/70 text-lg max-w-2xl mx-auto">
            Discover our curated collection of luxury fashion pieces
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShopHero;