import React, { useState } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: any;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCart();

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

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
        size: selectedSize
      }
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-[#0D1B2A] border-2 border-[#F6D1C1]/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-[#F6D1C1] playfair">Product Details</h2>
            <button
              onClick={onClose}
              className="text-[#F6D1C1]/60 hover:text-[#F6D1C1] transition-colors duration-300"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  {product.isNew && (
                    <span className="bg-[#F6D1C1] text-[#0D1B2A] px-3 py-1 rounded-full text-sm font-semibold">
                      NEW
                    </span>
                  )}
                  {product.isSale && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      SALE
                    </span>
                  )}
                  {!product.isAvailable && (
                    <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      SOLD OUT
                    </span>
                  )}
                </div>
                
                <h3 className="text-3xl font-semibold text-[#F6D1C1] playfair mb-4">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-bold text-[#F6D1C1]">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-[#F6D1C1]/50 line-through text-xl">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-[#F6D1C1]/80 leading-relaxed">
                Crafted with premium materials and attention to detail, this piece embodies 
                timeless elegance and modern sophistication. Perfect for creating effortless 
                style that transitions seamlessly from day to evening.
              </p>

              {/* Size Selection */}
              <div>
                <h4 className="text-[#F6D1C1] font-semibold mb-4">Size</h4>
                <div className="flex gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      disabled={!product.isAvailable}
                      className={`px-4 py-3 border-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedSize === size
                          ? 'border-[#F6D1C1] bg-[#F6D1C1] text-[#0D1B2A]'
                          : 'border-[#F6D1C1]/30 text-[#F6D1C1] hover:border-[#F6D1C1]/60'
                      } ${!product.isAvailable ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h4 className="text-[#F6D1C1] font-semibold mb-4">Quantity</h4>
                <div className="flex items-center border-2 border-[#F6D1C1]/30 rounded-lg w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={!product.isAvailable}
                    className="p-3 text-[#F6D1C1] hover:bg-[#F6D1C1]/10 transition-colors duration-300 disabled:opacity-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 py-3 text-[#F6D1C1] font-medium min-w-[4rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={!product.isAvailable}
                    className="p-3 text-[#F6D1C1] hover:bg-[#F6D1C1]/10 transition-colors duration-300 disabled:opacity-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={addToCart}
                disabled={!product.isAvailable}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                  product.isAvailable
                    ? 'bg-[#F6D1C1] text-[#0D1B2A] hover:bg-[#F6D1C1]/90'
                    : 'bg-gray-500 text-white cursor-not-allowed'
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                {product.isAvailable ? 'Add to Cart' : 'Sold Out'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;