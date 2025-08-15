import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
}

interface FeaturedProductsProps {
  onProductClick: (product: Product, mode?: 'modal' | 'page') => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onProductClick }) => {
  const featuredProducts: Product[] = [
    {
      id: 1,
      name: "Gold Layered Chain Necklace",
      price: 245,
      originalPrice: 295,
      image: "/src/assets/Pearl Pendant Necklace.png",
      badge: "BESTSELLER",
      rating: 4.9,
      reviews: 234
    },
    {
      id: 2,
      name: "Crystal Drop Earrings",
      price: 185,
      image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      badge: "NEW",
      rating: 4.8,
      reviews: 156
    },
    {
      id: 3,
      name: "Beaded Waist Chain",
      price: 95,
      image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 89
    },
    {
      id: 4,
      name: "Gold Stacking Bangles Set",
      price: 225,
      originalPrice: 285,
      image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      badge: "SALE",
      rating: 4.9,
      reviews: 312
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#0D1B2A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#F6D1C1] mb-4">
            Featured Products
          </h2>
          <p className="text-[#F6D1C1] opacity-80 text-lg max-w-2xl mx-auto">
            Discover our most loved beauty essentials, carefully selected for their exceptional quality and results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => onProductClick(product, 'page')}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                {product.badge && (
                  <div className={`absolute top-4 left-4 z-10 px-3 py-1 text-xs font-medium rounded-full ${
                    product.badge === 'SALE' ? 'bg-red-500 text-white' :
                    product.badge === 'NEW' ? 'bg-green-500 text-white' :
                    'bg-[#F6D1C1] text-[#0D1B2A]'
                  }`}>
                    {product.badge}
                  </div>
                )}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-[#F6D1C1] text-[#0D1B2A] p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ShoppingBag size={20} />
                  </button>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="font-medium text-[#F6D1C1] text-lg mb-2 group-hover:text-opacity-80 transition-colors duration-300">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-center mb-2">
                  <div className="flex items-center">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span className="text-[#F6D1C1] text-sm ml-1">{product.rating}</span>
                    <span className="text-[#F6D1C1] opacity-60 text-sm ml-1">({product.reviews})</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-[#F6D1C1] font-semibold text-lg">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-[#F6D1C1] opacity-50 line-through text-sm">${product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;