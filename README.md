# 🖼️ Simple Lightbox Gallery

A lightweight, dependency-free JavaScript gallery for images and PDF documents - perfect alternative to Fancybox.

## ✨ Features

- ✅ **No dependencies** - Pure JavaScript, no jQuery required
- ✅ **Lightweight** - Only ~10KB (CSS + JS)
- ✅ **Fully responsive** - Works on all devices
- ✅ **Images + PDF** - Display images and PDF documents
- ✅ **Keyboard navigation** - Arrow keys ← →, ESC
- ✅ **Touch gestures** - Swipe support on mobile
- ✅ **Image captions** - data-caption attribute
- ✅ **Counter** - Shows image number (1/10)
- ✅ **Loader** - Loading animation
- ✅ **Smooth animations** - fade, zoom, slide
- ✅ **Easy integration** - Bootstrap compatible

## 📦 Installation

### 1. Download files

```
simple-lightbox.js
simple-lightbox.css
```

### 2. Add to your project

```html
<!-- In <head> -->
<link rel="stylesheet" href="assets/css/simple-lightbox.css">

<!-- Before </body> -->
<script src="assets/js/simple-lightbox.js"></script>
```

### 3. Add attributes to links

```html
<a href="full-image.jpg" 
   data-lightbox="gallery" 
   data-caption="Image description">
    <img src="thumbnail.jpg" alt="Description">
</a>
```

## 🎯 Usage

### Basic usage

```html
<!-- Auto-initialization -->
<a href="image-full.jpg" data-lightbox="gallery" data-caption="Beautiful view">
    <img src="image-thumb.jpg" alt="View">
</a>
```

### With custom options

```javascript
const lightbox = new SimpleLightbox('[data-lightbox]', {
    closeOnBackdrop: true,    // Close when clicking outside
    showCaption: true,        // Show captions
    showCounter: true,        // Show counter (1/10)
    keyboardNav: true,        // Keyboard navigation
    animation: 'fade'         // fade / zoom / slide
});
```

### Displaying PDF documents

```html
<!-- PDF Button -->
<a href="brochure.pdf" 
   data-lightbox="gallery" 
   data-type="pdf"
   data-caption="Product Brochure 2024">
    <i class="fas fa-file-pdf"></i> View Brochure
</a>

<!-- PDF Card -->
<div class="pdf-card">
    <a href="document.pdf" 
       data-lightbox="docs" 
       data-type="pdf"
       data-caption="Technical Specifications">
        📄 Technical Documentation
    </a>
</div>
```

### Multiple galleries on one page

```html
<!-- Product gallery -->
<a href="product1.jpg" data-lightbox="products">...</a>
<a href="product2.jpg" data-lightbox="products">...</a>

<!-- Portfolio gallery -->
<a href="portfolio1.jpg" data-lightbox="portfolio">...</a>
<a href="portfolio2.jpg" data-lightbox="portfolio">...</a>
```

## 🔧 Bootstrap Studio Integration

### Method 1: Import files

1. **Design → Custom Code → CSS Files**
   - Import: `simple-lightbox.css`

2. **Design → Custom Code → JavaScript Files**
   - Import: `simple-lightbox.js`

### Method 2: Replace Fancybox

1. **Find in HTML:**
```html
<a data-fancybox="gallery" href="image.jpg">
```

2. **Replace with:**
```html
<a data-lightbox="gallery" href="image.jpg" data-caption="Description">
```

3. **Remove Fancybox:**
```html
<!-- REMOVE THESE LINES -->
<link rel="stylesheet" href=".../fancybox.css">
<script src=".../fancybox.umd.js"></script>
```

## 🎨 Custom Colors (2R Systems Brand)

```css
/* 2R Systems brand colors - #0066cc */
.simple-lightbox-close,
.simple-lightbox-prev,
.simple-lightbox-next {
    background: rgba(0, 102, 204, 0.2);
    border-color: rgba(0, 102, 204, 0.5);
}

.simple-lightbox-close:hover,
.simple-lightbox-prev:hover,
.simple-lightbox-next:hover {
    background: rgba(0, 102, 204, 0.4);
    border-color: #0066cc;
}

.simple-lightbox-caption,
.simple-lightbox-counter {
    background: rgba(0, 102, 204, 0.8);
}
```

## 📋 API

### Methods

```javascript
const lightbox = new SimpleLightbox('[data-lightbox]');

// Open specific image
lightbox.open(2); // Open 3rd image (index from 0)

// Close
lightbox.close();

// Previous
lightbox.prev();

// Next
lightbox.next();

// Destroy instance
lightbox.destroy();
```

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `closeOnBackdrop` | boolean | `true` | Close when clicking outside |
| `showCaption` | boolean | `true` | Show captions |
| `showCounter` | boolean | `true` | Show counter (1/10) |
| `keyboardNav` | boolean | `true` | Keyboard navigation |
| `animation` | string | `'fade'` | Animation type: fade, zoom, slide |
| `animationDuration` | number | `300` | Animation duration in ms |

## 🎮 Keyboard Shortcuts

- **ESC** - Close lightbox
- **← (Left Arrow)** - Previous image
- **→ (Right Arrow)** - Next image

## 📱 Mobile Support

- **Swipe left** - Next image
- **Swipe right** - Previous image
- **Tap outside** - Close lightbox

## 🔄 Migration from Fancybox

### Automatic conversion (Node.js)

```bash
node convert-fancybox-to-lightbox.js
```

### Manual conversion

**Before:**
```html
<a data-fancybox="gallery" href="image.jpg">
    <img src="thumb.jpg">
</a>

<link rel="stylesheet" href=".../fancybox.css">
<script src=".../fancybox.umd.js"></script>

<script>
Fancybox.show([{
    src: 'image.jpg',
    type: 'image'
}]);
</script>
```

**After:**
```html
<a data-lightbox="gallery" href="image.jpg" data-caption="Description">
    <img src="thumb.jpg">
</a>

<link rel="stylesheet" href="simple-lightbox.css">
<script src="simple-lightbox.js"></script>

<!-- Auto-initialization - no additional code needed -->
```

## 🌟 Examples

### Product gallery

```html
<div class="product-gallery">
    <a href="img/product1-large.jpg" data-lightbox="products" data-caption="SlimLine 68">
        <img src="img/product1-thumb.jpg" alt="SlimLine 68">
    </a>
    <a href="img/product2-large.jpg" data-lightbox="products" data-caption="MasterLine 8">
        <img src="img/product2-thumb.jpg" alt="MasterLine 8">
    </a>
</div>
```

### Gallery with PDF documents

```html
<div class="gallery">
    <!-- Product image -->
    <a href="product.jpg" data-lightbox="catalog" data-caption="Product Image">
        <img src="product-thumb.jpg" alt="Product">
    </a>
    
    <!-- PDF Brochure -->
    <a href="brochure.pdf" 
       data-lightbox="catalog" 
       data-type="pdf"
       data-caption="Product Brochure - Complete specifications">
        <i class="fas fa-file-pdf"></i> View Brochure
    </a>
</div>
```

### Bootstrap Card

```html
<div class="card">
    <a href="image-full.jpg" data-lightbox="portfolio" data-caption="Project 2024">
        <img src="image-thumb.jpg" class="card-img-top" alt="Project">
    </a>
    <div class="card-body">
        <h5 class="card-title">Project 2024</h5>
        <p class="card-text">Project description...</p>
    </div>
</div>
```

### Inline gallery in text

```html
<p>
    Lorem ipsum dolor sit amet...
    <a href="diagram.jpg" data-lightbox="docs" data-caption="Process diagram">
        <img src="diagram-small.jpg" style="max-width: 200px;">
    </a>
    ...consectetur adipiscing elit.
</p>
```

## 📊 Comparison with Fancybox

| Feature | Simple Lightbox | Fancybox |
|---------|----------------|----------|
| Size | ~10KB | ~50KB |
| Dependencies | None | None (v5+) |
| jQuery | No | No (v5+) |
| Responsive | ✅ | ✅ |
| Free | ✅ | ❌ (GPLv3 license) |
| Ease of use | ✅✅✅ | ✅✅ |
| PDF Support | ✅ | ✅ |

## 🐛 Troubleshooting

### Images won't open

1. Check if CSS and JS files are loaded
2. Check browser console (F12)
3. Make sure `data-lightbox` attribute is correctly set

### Arrow navigation doesn't work

Make sure `keyboardNav: true` in options (enabled by default)

### Images load slowly

1. Reduce image size
2. Use compression (WebP, optimized JPEG)
3. Add lazy loading for thumbnails

### PDF doesn't display

1. Make sure to add `data-type="pdf"` attribute
2. Check if PDF URL is correct
3. Some browsers may block PDFs from different domains (CORS)

## 📄 License

MIT License - free to use in commercial and personal projects.

## 💡 Support

- Compatibility: Chrome, Firefox, Safari, Edge (all modern browsers)
- IE11: Not supported (use polyfills for older browsers)

## 🚀 Planned features (optional extensions)

- [ ] Zoom (pinch gesture)
- [ ] Thumbnails (bottom gallery)
- [ ] Fullscreen API
- [ ] Video support (YouTube, Vimeo)
- [ ] Gallery grouping

---

**Author:** Maximus / 2R Systems Ltd  
**Version:** 1.0  
**Date:** 2025
