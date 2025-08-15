import React, { useState } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import FeaturedProducts from './components/FeaturedProducts';
import AboutSection from './components/AboutSection';
import Newsletter from './components/Newsletter';
import ShopHero from './components/ShopHero';
import FilterSection from './components/FilterSection';
import ProductModal from './components/ProductModal';
import ProductDetail from './components/ProductDetail';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Cart from './components/Cart';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'modal' | 'page'>('modal');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAvailable, setShowAvailable] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleProductClick = (product: any, mode: 'modal' | 'page' = 'page') => {
    setSelectedProduct(product);
    setViewMode(mode);
  };

  const handleCloseProduct = () => {
    setSelectedProduct(null);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0D1B2A]">
        {selectedProduct && viewMode === 'page' ? (
          <ProductDetail 
            product={selectedProduct} 
            onBack={handleCloseProduct}
          />
        ) : (
          <>
            <Header 
              onCartClick={() => setIsCartOpen(true)} 
              currentPage={currentPage}
              onNavigate={setCurrentPage}
            />
            
            {currentPage === 'home' && (
              <>
                <HeroBanner onShopNow={() => setCurrentPage('shop')} />
                <FeaturedProducts onProductClick={handleProductClick} />
                <AboutSection />
                <Newsletter />
              </>
            )}
            
            {currentPage === 'shop' && (
              <>
                <ShopHero />
                <FilterSection 
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  showAvailable={showAvailable}
                  onAvailabilityChange={setShowAvailable}
                />
                <ProductGrid 
                  onProductClick={handleProductClick}
                  selectedCategory={selectedCategory}
                  showAvailable={showAvailable}
                />
              </>
            )}
            
            {currentPage === 'about' && (
              <AboutPage onShopNow={() => setCurrentPage('shop')} />
            )}
            
            {currentPage === 'contact' && (
              <ContactPage />
            )}
            
            <Footer />
            
            {selectedProduct && viewMode === 'modal' && (
              <ProductModal 
                product={selectedProduct} 
                onClose={handleCloseProduct} 
              />
            )}
            
            {isCartOpen && (
              <Cart onClose={() => setIsCartOpen(false)} />
            )}
          </>
        )}
      </div>
    </CartProvider>
  );
}

export default App;