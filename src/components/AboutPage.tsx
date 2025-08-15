import React, { useEffect, useState } from 'react';
import { Heart, Award, Leaf, Sparkles, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onShopNow: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onShopNow }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate images every 4 seconds
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(imageInterval);
  }, []);

  const images = [
    {
      src: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      alt: "Luxury necklace display"
    },
    {
      src: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      alt: "Elegant jewelry pieces"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D1B2A]">
      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Luxury Jewelry Craftsmanship"
            className={`w-full h-full object-cover transition-all duration-[3000ms] ${
              isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
            }`}
          />
          <div className="absolute inset-0 bg-[#0D1B2A] bg-opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0D1B2A]/30"></div>
        </div>
        
        <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-[2000ms] delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-[#F6D1C1] mb-6 leading-tight">
            Our Story
          </h1>
          <p className="text-[#F6D1C1]/90 text-xl md:text-2xl font-light tracking-wide">
            Where Beauty Meets Elegance
          </p>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#F6D1C1]/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-6 h-6 bg-[#F6D1C1]/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-[#F6D1C1]/40 rounded-full animate-ping"></div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="space-y-8 text-[#F6D1C1]/80 text-lg leading-relaxed">
            <p className="text-xl md:text-2xl font-light">
              Founded with love and a vision for timeless beauty, we believe every piece of jewelry 
              should be a work of art that tells your unique story.
            </p>
            
            <p>
              At Kosiara, we understand that jewelry is more than mere adornment—it's an expression 
              of your inner radiance, a celebration of life's precious moments, and a testament to 
              your individual style. Each piece in our collection is carefully curated to embody 
              the perfect harmony between traditional craftsmanship and contemporary elegance.
            </p>
            
            <p>
              Our journey began with a simple yet profound belief: that every woman deserves to feel 
              extraordinary. From delicate waistbeads that honor cultural heritage to statement necklaces 
              that command attention, we create jewelry that empowers you to embrace your authentic self 
              with confidence and grace.
            </p>
          </div>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className={`relative transition-all duration-1500 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      currentImageIndex === index 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-110'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full h-full object-cover transition-all duration-[6000ms] ${
                        currentImageIndex === index 
                          ? 'scale-100 group-hover:scale-105' 
                          : 'scale-110'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/20 to-transparent"></div>
                  </div>
                ))}
                
                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentImageIndex === index 
                          ? 'bg-[#F6D1C1] scale-125' 
                          : 'bg-[#F6D1C1]/40 hover:bg-[#F6D1C1]/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-[#F6D1C1]/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#F6D1C1]/10 rounded-full animate-bounce"></div>
              <div className="absolute top-1/4 -left-4 w-8 h-8 bg-[#F6D1C1]/20 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute top-3/4 -right-2 w-6 h-6 bg-[#F6D1C1]/15 rounded-full animate-ping"></div>
            </div>

            {/* Text */}
            <div className={`space-y-8 transition-all duration-1500 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
              <div>
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#F6D1C1] mb-6">
                  Our Founder's Vision
                </h2>
                <p className="text-[#F6D1C1]/80 text-lg leading-relaxed mb-6">
                  "I founded Kosiara with a dream to create jewelry that celebrates the diverse beauty 
                  of women everywhere. Growing up surrounded by the rich traditions of African jewelry-making, 
                  I learned that each piece carries deep meaning and cultural significance."
                </p>
                <p className="text-[#F6D1C1]/70 leading-relaxed mb-6">
                  Our mission extends beyond creating beautiful jewelry. We're committed to honoring 
                  traditional craftsmanship while embracing modern design sensibilities. Every piece 
                  is ethically sourced and crafted with the utmost attention to detail.
                </p>
                <p className="text-[#F6D1C1]/70 leading-relaxed">
                  We believe that jewelry should be accessible to all women, which is why our collection 
                  ranges from everyday essentials to statement pieces, ensuring there's something special 
                  for every occasion and budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F6D1C1]/5">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#F6D1C1] mb-4">
              Our Values
            </h2>
            <p className="text-[#F6D1C1]/70 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: Award,
                title: "Quality",
                description: "Premium materials and expert craftsmanship in every piece",
                delay: "delay-[800ms]"
              },
              {
                icon: Sparkles,
                title: "Luxury",
                description: "Elegant designs that make you feel extraordinary",
                delay: "delay-[900ms]"
              },
              {
                icon: Heart,
                title: "Care",
                description: "Thoughtful service and attention to every detail",
                delay: "delay-[1000ms]"
              },
              {
                icon: Leaf,
                title: "Sustainability",
                description: "Ethically sourced materials and responsible practices",
                delay: "delay-[1100ms]"
              }
            ].map((value, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-1000 ${value.delay} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                <div className="mb-6 relative">
                  <div className="w-20 h-20 bg-[#F6D1C1]/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-[#F6D1C1]/20 transition-all duration-300 group-hover:scale-110">
                    <value.icon className="w-10 h-10 text-[#F6D1C1] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 border-2 border-[#F6D1C1]/20 rounded-full mx-auto animate-pulse"></div>
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-[#F6D1C1] mb-4 group-hover:text-[#F6D1C1]/80 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-[#F6D1C1]/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-[1200ms] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#F6D1C1] mb-6">
            Ready to Find Your Perfect Piece?
          </h2>
          <p className="text-[#F6D1C1]/80 text-lg mb-12 max-w-2xl mx-auto">
            Explore our carefully curated collection of jewelry that celebrates your unique beauty and style.
          </p>
          
          <button 
            onClick={onShopNow}
            className="group bg-[#F6D1C1] text-[#0D1B2A] px-12 py-4 text-lg font-semibold hover:bg-[#0D1B2A] hover:text-[#F6D1C1] hover:border-2 hover:border-[#F6D1C1] transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto rounded-lg"
          >
            Discover Our Collection
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
