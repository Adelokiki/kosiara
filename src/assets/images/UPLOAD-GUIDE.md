# 📸 How to Upload Your Own Images to Kosiara

## Step-by-Step Guide

### 1. Prepare Your Images
- **Resize your images** to the recommended sizes
- **Optimize for web** (compress to reduce file size)
- **Use descriptive names** like `gold-necklace-pendant.jpg`

### 2. Upload to the Right Folders

#### For Product Images:
- Go to: `src/assets/images/products/`
- Upload: Your jewelry product photos
- Size: 800x800px (square)

#### For Hero Banner:
- Go to: `src/assets/images/hero/`
- Upload: Your main banner image
- Size: 1920x1080px (landscape)

#### For About Page:
- Go to: `src/assets/images/about/`
- Upload: Images showing your brand/craftsmanship
- Size: 800x1000px (portrait)

### 3. Update Your Code

#### Example: Replace Hero Image
```tsx
// 1. Import your image at the top of the file
import heroImage from '../assets/images/hero/my-hero-image.jpg';

// 2. Replace the src attribute
<img 
  src={heroImage}  // Instead of the Pexels URL
  alt="Kosiara Jewelry Collection"
  className="w-full h-full object-cover"
/>
```

#### Example: Replace Product Images
```tsx
// 1. Import your product images
import necklace1 from '../assets/images/products/gold-necklace-1.jpg';
import earrings1 from '../assets/images/products/diamond-earrings-1.jpg';

// 2. Update the products array
const featuredProducts = [
  {
    id: 1,
    name: "Gold Layered Chain Necklace",
    price: 245,
    image: necklace1,  // Use imported image
    // ... other properties
  },
  {
    id: 2,
    name: "Crystal Drop Earrings", 
    price: 185,
    image: earrings1,  // Use imported image
    // ... other properties
  }
];
```

### 4. Files to Update

After uploading your images, you'll need to update these files:

1. **src/components/HeroBanner.tsx** - Hero background image
2. **src/components/FeaturedProducts.tsx** - Featured product images
3. **src/components/ProductGrid.tsx** - All shop product images
4. **src/components/AboutPage.tsx** - About page images
5. **src/components/ProductDetail.tsx** - Product detail images

### 5. Image Optimization Tips

- **Use JPG** for photos (smaller file size)
- **Use PNG** only if you need transparency
- **Compress images** before uploading (use tools like TinyPNG)
- **Keep file sizes under 500KB** for fast loading

### 6. Need Help?

If you need help updating the code after uploading your images, just ask! I can help you:
- Import your images correctly
- Update all the image references
- Optimize your images for web
- Set up responsive images

Happy uploading! 🚀✨