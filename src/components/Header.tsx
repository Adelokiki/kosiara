import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();

  return (
    <header className="bg-[#0D1B2A] py-6 px-4 sm:px-6 lg:px-8 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => onNavigate('home')}
              className="text-2xl font-medium text-[#F6D1C1] playfair hover:text-[#F6D1C1]/80 transition-colors duration-300"
            >
              Kosiara
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <button 
              onClick={() => onNavigate('home')}
              className={`hover:text-[#F6D1C1]/80 transition-colors duration-300 font-medium ${
                currentPage === 'home' ? 'text-[#F6D1C1]' : 'text-[#F6D1C1]/70'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('shop')}
              className={`hover:text-[#F6D1C1]/80 transition-colors duration-300 font-medium ${
                currentPage === 'shop' ? 'text-[#F6D1C1]' : 'text-[#F6D1C1]/70'
              }`}
            >
              Shop
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className={`hover:text-[#F6D1C1]/80 transition-colors duration-300 font-medium ${
                currentPage === 'about' ? 'text-[#F6D1C1]' : 'text-[#F6D1C1]/70'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className={`hover:text-[#F6D1C1]/80 transition-colors duration-300 font-medium ${
                currentPage === 'contact' ? 'text-[#F6D1C1]' : 'text-[#F6D1C1]/70'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={onCartClick}
              className="relative text-[#F6D1C1] hover:text-[#F6D1C1]/80 transition-colors duration-300"
            >
              <ShoppingBag className="w-6 h-6" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#F6D1C1] text-[#0D1B2A] text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#F6D1C1] hover:text-[#F6D1C1]/80 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-[#F6D1C1]/20">
            <div className="pt-6 space-y-4">
              <button 
                onClick={() => {
                  onNavigate('home');
                  setIsMenuOpen(false);
                }}
                className={`block hover:text-[#F6D1C1]/80 transition-colors duration-300 font-medium ${
                  currentPage === 'home' ? 'text-[#F6D1C1]' : 'text-[#F6D1C1]/70'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => {
                  onNavigate('shop');
                  setIsMenuOpen(false);
                }}
                className={`block hover:text-[#F6D1C1]/80 transition-colors duration-300 font-medium ${
                  currentPage === 'shop' ? 'text-[#F6D1C1]' : 'text-[#F6D1C1]/70'
                }`}
              >
                Shop
              </button>
              <button 
                onClick={() => {
                  onNavigate('about');
                  setIsMenuOpen(false);
                }}
                className={`block hover:text-[#F6D1C1]/80 transition-colors duration-300 font-medium ${
                  currentPage === 'about' ? 'text-[#F6D1C1]' : 'text-[#F6D1C1]/70'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => {
                  onNavigate('contact');
                  setIsMenuOpen(false);
                }}
                className={`block hover:text-[#F6D1C1]/80 transition-colors duration-300 font-medium ${
                  currentPage === 'contact' ? 'text-[#F6D1C1]' : 'text-[#F6D1C1]/70'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;