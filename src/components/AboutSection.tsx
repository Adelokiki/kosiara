import React from 'react';
import { Award, Users, Star } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D1B2A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#F6D1C1] mb-6">
                About Kosiara
              </h2>
              <p className="text-[#F6D1C1]/80 text-lg leading-relaxed mb-6">
                Founded on the belief that beauty should celebrate cultural diversity and personal expression, 
                Kosiara curates an exquisite collection of jewelry from traditional waistbeads to modern statement pieces. 
                Our commitment to quality craftsmanship and inclusive beauty has made us a trusted name in contemporary jewelry.
              </p>
              <p className="text-[#F6D1C1]/70 leading-relaxed">
                From delicate earrings to bold bangles, elegant necklaces to meaningful waistbeads, 
                every piece tells a story. We believe that jewelry should reflect your unique style 
                and heritage, empowering you to express your authentic self with confidence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Award className="w-8 h-8 text-[#F6D1C1]" />
                </div>
                <div className="text-2xl font-bold text-[#F6D1C1] playfair mb-1">100%</div>
                <div className="text-[#F6D1C1]/70 text-sm">Authentic</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Users className="w-8 h-8 text-[#F6D1C1]" />
                </div>
                <div className="text-2xl font-bold text-[#F6D1C1] playfair mb-1">50K+</div>
                <div className="text-[#F6D1C1]/70 text-sm">Customers</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Star className="w-8 h-8 text-[#F6D1C1]" />
                </div>
                <div className="text-2xl font-bold text-[#F6D1C1] playfair mb-1">5.0</div>
                <div className="text-[#F6D1C1]/70 text-sm">Rating</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/src/assets/images/about/about-jewelry-craftsmanship.jpg"
                alt="Luxury Jewelry Collection"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#F6D1C1]/30 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#F6D1C1]/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;