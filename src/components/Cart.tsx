import React from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-end z-50">
      <div className="bg-[#0D1B2A] border-l-2 border-[#F6D1C1]/20 h-full w-full max-w-lg overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-[#F6D1C1] playfair">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="text-[#F6D1C1]/60 hover:text-[#F6D1C1] transition-colors duration-300"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {state.items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-16 h-16 text-[#F6D1C1]/30 mx-auto mb-6" />
              <p className="text-[#F6D1C1]/60 mb-8 text-lg">Your cart is empty</p>
              <button
                onClick={onClose}
                className="bg-[#F6D1C1] text-[#0D1B2A] px-8 py-3 rounded-lg font-semibold hover:bg-[#F6D1C1]/90 transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-6 mb-8">
                {state.items.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex gap-4 bg-[#F6D1C1]/5 rounded-xl p-4 border border-[#F6D1C1]/10"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="text-[#F6D1C1] font-medium mb-1">
                        {item.name}
                      </h3>
                      {item.size && (
                        <p className="text-[#F6D1C1]/60 text-sm mb-3">
                          Size: {item.size}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <span className="text-[#F6D1C1] font-semibold">
                          ${item.price}
                        </span>
                        
                        <div className="flex items-center gap-3">
                          <div className="flex items-center border border-[#F6D1C1]/30 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 text-[#F6D1C1] hover:bg-[#F6D1C1]/10 transition-colors duration-300"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 py-2 text-[#F6D1C1] text-sm min-w-[2.5rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 text-[#F6D1C1] hover:bg-[#F6D1C1]/10 transition-colors duration-300"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-[#F6D1C1]/60 hover:text-red-400 transition-colors duration-300"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="border-t-2 border-[#F6D1C1]/20 pt-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[#F6D1C1] font-semibold text-lg">Total:</span>
                  <span className="text-[#F6D1C1] font-bold text-2xl playfair">
                    ${state.total.toFixed(2)}
                  </span>
                </div>
                
                <button className="w-full bg-[#F6D1C1] text-[#0D1B2A] py-4 rounded-lg font-semibold hover:bg-[#F6D1C1]/90 transition-all duration-300 mb-4">
                  Proceed to Checkout
                </button>
                
                <button
                  onClick={onClose}
                  className="w-full border-2 border-[#F6D1C1]/30 text-[#F6D1C1] py-4 rounded-lg font-semibold hover:border-[#F6D1C1]/60 hover:bg-[#F6D1C1]/5 transition-all duration-300"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;