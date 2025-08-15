# Kosiara Image Replacement Guide

## 🖼️ All Image URLs to Replace with Your Own

### 1. **Hero Banner** (src/components/HeroBanner.tsx)
```javascript
// Line ~18: Main hero background image
src="https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
// Replace with: "/src/assets/images/hero/gold-necklace-pendant.jpg"
```

### 2. **Featured Products** (src/components/FeaturedProducts.tsx)
```javascript
// Product 1 - Gold Layered Chain Necklace
image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"

// Product 2 - Crystal Drop Earrings  
image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"

// Product 3 - Beaded Waist Chain
image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"

// Product 4 - Gold Stacking Bangles Set
image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
```

### 3. **Product Grid** (src/components/ProductGrid.tsx)
```javascript
// 15 different products - Lines 15-150
// All using these two URLs repeatedly:
"https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800"
"https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800"
```

### 4. **About Section** (src/components/AboutSection.tsx)
```javascript
// Line ~65: About section image
src="https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
// Replace with: "/src/assets/images/about/about-jewelry.jpg"
```

### 5. **About Page** (src/components/AboutPage.tsx)
```javascript
// Hero background image
src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"

// Carousel images (2 images)
src: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
src: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
```

### 6. **Product Detail** (src/components/ProductDetail.tsx)
```javascript
// Additional product images for gallery
"https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800"
"https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800"
"https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800"

// Related products (4 products)
image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400"
// ... and 3 more similar URLs
```

## 📁 Recommended Image Organization

### Upload your images to these folders:
- **Hero Images**: `src/assets/images/hero/`
  - `hero-background.jpg` (1920x1080px recommended)
  - `about-hero.jpg` (1920x1080px recommended)

- **Product Images**: `src/assets/images/products/`
  - `necklace-1.jpg`, `necklace-2.jpg`, etc.
  - `earrings-1.jpg`, `earrings-2.jpg`, etc.
  - `rings-1.jpg`, `rings-2.jpg`, etc.
  - `bangles-1.jpg`, `bangles-2.jpg`, etc.
  - `waistbeads-1.jpg`, `waistbeads-2.jpg`, etc.

- **About Images**: `src/assets/images/about/`
  - `about-jewelry.jpg` (800x1000px recommended)
  - `founder-story.jpg` (800x1000px recommended)

## 🔄 Next Steps:
1. **Upload your images** to the folders above
2. **Tell me which specific images you want to replace**
3. **I'll update the code** to use your images instead of stock photos

## 💡 Image Tips:
- **Product images**: 800x800px or 1000x1000px (square)
- **Hero images**: 1920x1080px (landscape)
- **About images**: 800x1000px (portrait)
- **File formats**: JPG, PNG, or WebP
- **File names**: Use descriptive names like `gold-necklace-pendant.jpg`