import React, { useState } from 'react';
import { ArrowLeft, Heart, Star, Minus, Plus, ShoppingBag, Truck, Shield, RotateCcw } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductDetailProps {
  product: any;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('details');
  const [isZoomed, setIsZoomed] = useState(false);
  const { dispatch } = useCart();

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const colors = ['Gold', 'Silver', 'Rose Gold', 'Platinum'];
  
  const images = [
    product.image,
    "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  const relatedProducts = [
    {
      id: 101,
      name: "Elegant Pearl Necklace",
      price: 185,
      image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8
    },
    {
      id: 102,
      name: "Diamond Stud Earrings",
      price: 245,
      image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9
    },
    {
      id: 103,
      name: "Gold Chain Bracelet",
      price: 165,
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7
    },
    {
      id: 104,
      name: "Silver Ring Set",
      price: 125,
      image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      comment: "Absolutely stunning piece! The quality is exceptional and it arrived beautifully packaged.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Emma L.",
      rating: 5,
      comment: "Love this jewelry! Perfect for both everyday wear and special occasions.",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Jessica R.",
      rating: 4,
      comment: "Beautiful craftsmanship. Exactly as described and fast shipping.",
      date: "3 weeks ago"
    }
  ];

  const addToCart = () => {
    if (!product.isAvailable) return;
    
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity,
        size: selectedSize,
        color: selectedColor
      }
    });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'details':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-[#F6D1C1] font-semibold mb-3">Product Details</h4>
              <ul className="text-[#F6D1C1]/80 space-y-2">
                <li>• Premium quality materials with expert craftsmanship</li>
                <li>• Hypoallergenic and nickel-free for sensitive skin</li>
                <li>• Ethically sourced and sustainably made</li>
                <li>• Comes with elegant gift packaging</li>
                <li>• Lifetime warranty on manufacturing defects</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#F6D1C1] font-semibold mb-3">Care Instructions</h4>
              <p className="text-[#F6D1C1]/80">
                Store in provided jewelry box. Clean gently with soft cloth. 
                Avoid contact with perfumes, lotions, and water to maintain luster.
              </p>
            </div>
          </div>
        );
      case 'shipping':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Truck className="w-8 h-8 text-[#F6D1C1] mx-auto mb-3" />
                <h4 className="text-[#F6D1C1] font-semibold mb-2">Free Shipping</h4>
                <p className="text-[#F6D1C1]/80 text-sm">On orders over $200</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-[#F6D1C1] mx-auto mb-3" />
                <h4 className="text-[#F6D1C1] font-semibold mb-2">Secure Packaging</h4>
                <p className="text-[#F6D1C1]/80 text-sm">Insured & tracked delivery</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-8 h-8 text-[#F6D1C1] mx-auto mb-3" />
                <h4 className="text-[#F6D1C1] font-semibold mb-2">Easy Returns</h4>
                <p className="text-[#F6D1C1]/80 text-sm">30-day return policy</p>
              </div>
            </div>
            <div>
              <h4 className="text-[#F6D1C1] font-semibold mb-3">Delivery Times</h4>
              <ul className="text-[#F6D1C1]/80 space-y-2">
                <li>• Standard Shipping: 5-7 business days</li>
                <li>• Express Shipping: 2-3 business days</li>
                <li>• International: 10-14 business days</li>
              </ul>
            </div>
          </div>
        );
      case 'reviews':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[#F6D1C1] font-semibold">{product.rating}</span>
                <span className="text-[#F6D1C1]/60">({product.reviews || 156} reviews)</span>
              </div>
            </div>
            
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-[#F6D1C1]/10 pb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[#F6D1C1] font-medium">{review.name}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-[#F6D1C1]/60 text-sm">{review.date}</span>
                  </div>
                  <p className="text-[#F6D1C1]/80">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1B2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#F6D1C1]/80 hover:text-[#F6D1C1] transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </button>

        {/* Product Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Product Images */}
          <div className="space-y-4">
            <div 
              className="aspect-square rounded-2xl overflow-hidden bg-[#F6D1C1]/5 cursor-zoom-in relative"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <img
                src={images[selectedImage]}
                alt={product.name}
                className={`w-full h-full object-cover transition-transform duration-300 ${
                  isZoomed ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index 
                      ? 'border-[#F6D1C1]' 
                      : 'border-[#F6D1C1]/20 hover:border-[#F6D1C1]/40'
                  }`}
                >
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                {product.isNew && (
                  <span className="bg-[#F6D1C1] text-[#0D1B2A] px-3 py-1 rounded-full text-sm font-bold">
                    NEW
                  </span>
                )}
                {product.isSale && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    SALE
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-[#F6D1C1] playfair leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-[#F6D1C1]">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-[#F6D1C1]/60 line-through text-xl">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating || 4.8)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[#F6D1C1]/80">{product.rating || 4.8}</span>
                <span className="text-[#F6D1C1]/60">({product.reviews || 156} reviews)</span>
              </div>
            </div>

            <p className="text-[#F6D1C1]/70 text-lg leading-relaxed">
              Crafted with the finest materials and attention to detail, this exquisite piece embodies 
              timeless elegance and modern sophistication. Perfect for both special occasions and 
              everyday luxury, it's designed to complement your unique style.
            </p>

            {/* Color Selection */}
            <div className="space-y-4">
              <h3 className="font-semibold text-[#F6D1C1] text-lg">Color</h3>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-3 border-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedColor === color
                        ? 'border-[#F6D1C1] bg-[#F6D1C1] text-[#0D1B2A]'
                        : 'border-[#F6D1C1]/30 text-[#F6D1C1] hover:border-[#F6D1C1]/60'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            {product.category !== 'Rings' && (
              <div className="space-y-4">
                <h3 className="font-semibold text-[#F6D1C1] text-lg">Size</h3>
                <div className="flex gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-3 border-2 rounded-lg font-medium transition-all duration-200 ${
                        selectedSize === size
                          ? 'border-[#F6D1C1] bg-[#F6D1C1] text-[#0D1B2A]'
                          : 'border-[#F6D1C1]/30 text-[#F6D1C1] hover:border-[#F6D1C1]/60'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-4">
              <h3 className="font-semibold text-[#F6D1C1] text-lg">Quantity</h3>
              <div className="flex items-center border-2 border-[#F6D1C1]/30 rounded-lg w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-[#F6D1C1] hover:bg-[#F6D1C1]/10 transition-colors duration-200"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="px-6 py-3 text-[#F6D1C1] font-medium min-w-[4rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-[#F6D1C1] hover:bg-[#F6D1C1]/10 transition-colors duration-200"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={addToCart}
                className="flex-1 bg-[#F6D1C1] text-[#0D1B2A] py-4 px-8 rounded-lg font-semibold hover:bg-[#0D1B2A] hover:text-[#F6D1C1] hover:border-2 hover:border-[#F6D1C1] transition-all duration-300 flex items-center justify-center gap-3 text-lg"
              >
                <ShoppingBag className="w-6 h-6" />
                Add to Cart
              </button>
              <button className="p-4 border-2 border-[#F6D1C1] text-[#F6D1C1] rounded-lg hover:bg-[#F6D1C1] hover:text-[#0D1B2A] transition-all duration-300">
                <Heart className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-20">
          <div className="border-b border-[#F6D1C1]/20 mb-8">
            <div className="flex gap-8">
              {[
                { id: 'details', label: 'Details' },
                { id: 'shipping', label: 'Shipping Info' },
                { id: 'reviews', label: 'Reviews' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 font-semibold transition-all duration-200 border-b-2 ${
                    activeTab === tab.id
                      ? 'text-[#F6D1C1] border-[#F6D1C1]'
                      : 'text-[#F6D1C1]/60 border-transparent hover:text-[#F6D1C1]/80'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="max-w-4xl">
            {renderTabContent()}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-3xl font-bold text-[#F6D1C1] playfair mb-8 text-center">
            You May Also Like
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-[#F6D1C1]/5">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="text-[#F6D1C1] font-medium mb-2 group-hover:text-[#F6D1C1]/80 transition-colors duration-300">
                    {relatedProduct.name}
                  </h3>
                  
                  <div className="flex items-center justify-center mb-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-[#F6D1C1]/80 text-sm ml-1">{relatedProduct.rating}</span>
                    </div>
                  </div>
                  
                  <span className="text-[#F6D1C1] font-semibold text-lg">
                    ${relatedProduct.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;