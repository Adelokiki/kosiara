import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isAvailable: boolean;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductGridProps {
  onProductClick: (product: Product, mode?: 'modal' | 'page') => void;
  selectedCategory: string;
  showAvailable: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  onProductClick, 
  selectedCategory, 
  showAvailable 
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const products: Product[] = [
    {
      id: 1,
      name: "Pearl Pendant Necklace",
      price: 195.99,
      originalPrice: 245.99,
      image: "/images/products/necklace-1.jpg",
      category: "Necklaces",
      isAvailable: true,
      isSale: true
    },
    {
      id: 2,
      name: "Diamond Solitaire Ring",
      price: 485.99,
      image: "/images/products/rings-1.jpg",
      category: "Rings",
      isAvailable: true,
      isNew: true
    },
    {
      id: 3,
      name: "Hoop Earrings - Gold",
      price: 125.99,
      image: "/images/products/earrings-1.jpg",
      category: "Earrings",
      isAvailable: false
    },
    {
      id: 4,
      name: "Charm Bangle Bracelet",
      price: 145.99,
      image: "/images/products/bangles-1.jpg",
      category: "Bangles",
      isAvailable: true
    },
    {
      id: 5,
      name: "Chandelier Earrings",
      price: 165.99,
      originalPrice: 215.99,
      image: "/images/products/earrings-2.jpg",
      category: "Earrings",
      isAvailable: true,
      isSale: true
    },
    {
      id: 6,
      name: "Layered Chain Necklace",
      price: 225.99,
      image: "/images/products/necklace-2.jpg",
      category: "Necklaces",
      isAvailable: true,
      isNew: true
    },
    {
      id: 7,
      name: "Vintage Band Ring",
      price: 285.99,
      image: "/images/products/rings-2.jpg",
      category: "Rings",
      isAvailable: true
    },
    {
      id: 8,
      name: "Colorful Waist Beads",
      price: 65.99,
      image: "/images/products/waistbeads-1.jpg",
      category: "Waistbeads",
      isAvailable: false
    },
    {
      id: 9,
      name: "Tassel Earrings",
      price: 85.99,
      image: "/images/products/earrings-3.jpg",
      category: "Earrings",
      isAvailable: true
    },
    {
      id: 10,
      name: "Statement Choker Necklace",
      price: 155.99,
      originalPrice: 195.99,
      image: "/images/products/necklace-3.jpg",
      category: "Necklaces",
      isAvailable: true,
      isSale: true
    },
    {
      id: 11,
      name: "Stackable Ring Set",
      price: 195.99,
      image: "/images/products/rings-3.jpg",
      category: "Rings",
      isAvailable: true
    },
    {
      id: 12,
      name: "Traditional Waist Chain",
      price: 125.99,
      image: "/images/products/waistbeads-2.jpg",
      category: "Waistbeads",
      isAvailable: true,
      isNew: true
    },
    {
      id: 13,
      name: "Rose Gold Bangles",
      price: 175.99,
      image: "/images/products/bangles-2.jpg",
      category: "Bangles",
      isAvailable: true
    },
    {
      id: 14,
      name: "Feather Earrings",
      price: 95.99,
      image: "/images/products/earrings-4.jpg",
      category: "Earrings",
      isAvailable: true,
      isNew: true
    },
    {
      id: 15,
      name: "Gemstone Waist Beads",
      price: 85.99,
      originalPrice: 115.99,
      image: "/images/products/waistbeads-3.jpg",
      category: "Waistbeads",
      isAvailable: true,
      isSale: true
    }
  ];

  // Filter products
  let filteredProducts = products;
  
  if (selectedCategory !== 'All') {
    filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
  }
  
  if (showAvailable) {
    filteredProducts = filteredProducts.filter(product => product.isAvailable);
  }

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Results Count */}
        <div className="mb-8">
          <p className="text-[#F6D1C1]/70">
            Showing {paginatedProducts.length} of {filteredProducts.length} products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {paginatedProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onProductClick(product, 'page')}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-4 border-2 border-transparent group-hover:border-[#F6D1C1] transition-all duration-300 bg-[#F6D1C1]/5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-[#F6D1C1] text-[#0D1B2A] px-3 py-1 rounded-full text-xs font-bold">
                      NEW
                    </span>
                  )}
                  {product.isSale && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      SALE
                    </span>
                  )}
                  {!product.isAvailable && (
                    <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      SOLD OUT
                    </span>
                  )}
                </div>

                {/* Quick Add Button */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-[#F6D1C1] text-[#0D1B2A] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#F6D1C1]/90 transition-colors duration-300">
                    Quick View
                  </button>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-[#F6D1C1] font-medium mb-2 text-lg group-hover:text-[#F6D1C1]/80 transition-colors duration-300">
                  {product.name}
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[#F6D1C1] font-bold text-lg">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-[#F6D1C1]/50 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mb-16">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-12 h-12 rounded-full font-medium transition-all duration-300 ${
                  currentPage === page
                    ? 'bg-[#F6D1C1] text-[#0D1B2A]'
                    : 'text-[#F6D1C1] hover:bg-[#F6D1C1]/10 border-2 border-[#F6D1C1]/30 hover:border-[#F6D1C1]/60'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}

        {/* Load More Button Alternative */}
        <div className="text-center">
          <button className="border-2 border-[#F6D1C1] text-[#F6D1C1] px-12 py-4 rounded-full font-semibold hover:bg-[#F6D1C1] hover:text-[#0D1B2A] transition-all duration-300 tracking-wide">
            LOAD MORE PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;