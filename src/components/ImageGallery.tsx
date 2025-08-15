import React, { useState, useEffect } from 'react';
import { Download, Copy, Check, Image as ImageIcon, Search, Filter } from 'lucide-react';

const ImageGallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const imageCategories = {
    'Hero Images': [
      {
        id: 1,
        name: 'Main Hero Background',
        url: '/src/assets/Luxury necklace display.png',
        description: 'Luxury jewelry background for hero banner',
        dimensions: 'Custom uploaded image',
        usage: 'HeroBanner.tsx'
      }
    ],
    'Product Images': [
      {
        id: 2,
        name: 'Pearl Pendant Necklace',
        url: '/src/assets/Pearl Pendant Necklace.png',
        description: 'Elegant pearl necklace product image',
        dimensions: '800x800',
        usage: 'ProductGrid.tsx, FeaturedProducts.tsx'
      },
      {
        id: 3,
        name: 'Diamond Ring',
        url: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Diamond solitaire ring',
        dimensions: '800x800',
        usage: 'ProductGrid.tsx, FeaturedProducts.tsx'
      },
      {
        id: 4,
        name: 'Gold Jewelry Collection',
        url: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Various gold jewelry pieces',
        dimensions: '800x800',
        usage: 'ProductDetail.tsx'
      }
    ],
    'About Page Images': [
      {
        id: 5,
        name: 'About Hero Background',
        url: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
        description: 'Luxury jewelry craftsmanship background',
        dimensions: '1920x1080',
        usage: 'AboutPage.tsx - Hero section'
      },
      {
        id: 6,
        name: 'Jewelry Display 1',
        url: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
        description: 'Luxury necklace display',
        dimensions: '800x1000',
        usage: 'AboutPage.tsx - Image carousel'
      },
      {
        id: 7,
        name: 'Jewelry Display 2',
        url: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
        description: 'Elegant jewelry pieces',
        dimensions: '800x1000',
        usage: 'AboutPage.tsx - Image carousel'
      },
      {
        id: 8,
        name: 'About Section Image',
        url: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
        description: 'Luxury jewelry collection for about section',
        dimensions: '800x1000',
        usage: 'AboutSection.tsx'
      }
    ],
    'Featured Products': [
      {
        id: 9,
        name: 'Gold Chain Necklace',
        url: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        description: 'Gold layered chain necklace',
        dimensions: '400x400',
        usage: 'FeaturedProducts.tsx'
      },
      {
        id: 10,
        name: 'Crystal Drop Earrings',
        url: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        description: 'Crystal drop earrings',
        dimensions: '400x400',
        usage: 'FeaturedProducts.tsx'
      }
    ]
  };

  const allImages = Object.values(imageCategories).flat();
  const categories = ['All', ...Object.keys(imageCategories)];

  const filteredImages = allImages.filter(image => {
    const matchesCategory = selectedCategory === 'All' || 
      Object.entries(imageCategories).some(([category, images]) => 
        category === selectedCategory && images.includes(image)
      );
    const matchesSearch = image.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const downloadImage = (url: string, name: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${name.replace(/\s+/g, '_').toLowerCase()}.jpg`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#0D1B2A]">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F6D1C1]/10 via-transparent to-[#F6D1C1]/5"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#F6D1C1]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#F6D1C1]/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center mb-6">
            <ImageIcon className="w-16 h-16 text-[#F6D1C1] mr-4" />
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-[#F6D1C1] mb-6 leading-tight">
            Image Gallery
          </h1>
          <p className="text-[#F6D1C1]/80 text-xl md:text-2xl font-light max-w-2xl mx-auto">
            All images currently used in your Kosiara store
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-[#F6D1C1]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#F6D1C1]/60" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#F6D1C1]/5 border-2 border-[#F6D1C1]/20 rounded-xl text-[#F6D1C1] placeholder-[#F6D1C1]/50 focus:border-[#F6D1C1] focus:outline-none transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-[#F6D1C1]/60" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-[#F6D1C1] text-[#0D1B2A]'
                        : 'bg-[#F6D1C1]/10 text-[#F6D1C1] hover:bg-[#F6D1C1]/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6">
            <p className="text-[#F6D1C1]/70">
              Showing {filteredImages.length} of {allImages.length} images
            </p>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`group bg-[#F6D1C1]/5 backdrop-blur-sm border border-[#F6D1C1]/20 rounded-2xl overflow-hidden hover:bg-[#F6D1C1]/10 hover:border-[#F6D1C1]/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#F6D1C1]/10 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={image.url}
                    alt={image.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-[#F6D1C1] font-semibold text-lg mb-2 playfair">
                    {image.name}
                  </h3>
                  <p className="text-[#F6D1C1]/70 text-sm mb-4 leading-relaxed">
                    {image.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#F6D1C1]/60">Dimensions:</span>
                      <span className="text-[#F6D1C1]">{image.dimensions}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#F6D1C1]/60">Used in:</span>
                      <span className="text-[#F6D1C1] text-right">{image.usage}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => copyToClipboard(image.url)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#F6D1C1]/10 text-[#F6D1C1] rounded-lg hover:bg-[#F6D1C1]/20 transition-all duration-300"
                    >
                      {copiedUrl === image.url ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy URL
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => downloadImage(image.url, image.name)}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-[#F6D1C1] text-[#0D1B2A] rounded-lg hover:bg-[#F6D1C1]/90 transition-all duration-300"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <ImageIcon className="w-16 h-16 text-[#F6D1C1]/30 mx-auto mb-6" />
              <h3 className="text-[#F6D1C1] text-xl font-semibold mb-2">No images found</h3>
              <p className="text-[#F6D1C1]/60">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F6D1C1]/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold text-[#F6D1C1] mb-8 text-center">
            How to Replace Images
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0D1B2A]/30 backdrop-blur-sm border border-[#F6D1C1]/20 rounded-2xl p-6">
              <h3 className="text-[#F6D1C1] font-semibold text-lg mb-4">Option 1: Upload Your Own</h3>
              <ol className="text-[#F6D1C1]/80 space-y-2 text-sm">
                <li>1. Create an <code className="bg-[#F6D1C1]/10 px-2 py-1 rounded">src/assets/images</code> folder</li>
                <li>2. Upload your images to this folder</li>
                <li>3. Import them in your components</li>
                <li>4. Replace the Pexels URLs with your imports</li>
              </ol>
            </div>

            <div className="bg-[#0D1B2A]/30 backdrop-blur-sm border border-[#F6D1C1]/20 rounded-2xl p-6">
              <h3 className="text-[#F6D1C1] font-semibold text-lg mb-4">Option 2: Use External URLs</h3>
              <ol className="text-[#F6D1C1]/80 space-y-2 text-sm">
                <li>1. Upload images to Cloudinary, AWS S3, etc.</li>
                <li>2. Get the direct image URLs</li>
                <li>3. Copy the URLs from this gallery</li>
                <li>4. Replace them in your component files</li>
              </ol>
            </div>
          </div>

          <div className="mt-8 p-6 bg-[#F6D1C1]/10 rounded-2xl border border-[#F6D1C1]/20">
            <h4 className="text-[#F6D1C1] font-semibold mb-3">💡 Pro Tip</h4>
            <p className="text-[#F6D1C1]/80 text-sm leading-relaxed">
              For best performance, optimize your images before uploading. Recommended sizes: 
              Hero images (1920x1080), Product images (800x800), Thumbnails (400x400).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageGallery;