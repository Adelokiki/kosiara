import React from 'react';

interface HeroBannerProps {
  onShopNow: () => void;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ onShopNow }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/hero/luxury-jewelry-hero.jpg" 
          alt="Luxury Jewelry Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0D1B2A] bg-opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-[#F6D1C1] mb-6 leading-tight">
          Discover Your
          <br />
          Natural Radiance
        </h1>
        <p className="text-[#F6D1C1] text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Elevate your beauty routine with our curated collection of luxury skincare and cosmetics, 
          crafted for the modern woman who values elegance and quality.
        </p>
        <button 
          onClick={onShopNow}
          className="bg-transparent border-2 border-[#F6D1C1] text-[#F6D1C1] px-8 py-4 text-lg font-medium hover:bg-[#F6D1C1] hover:text-[#0D1B2A] transition-all duration-300 transform hover:scale-105"
        >
          Shop Now
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-[#F6D1C1] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#F6D1C1] rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;