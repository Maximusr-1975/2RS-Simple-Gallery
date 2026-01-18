# 📘 Bootstrap Studio Integration Guide

Complete guide for integrating 2RS Simple Gallery into Bootstrap Studio projects.

## Quick Start

### Method 1: Import Files (Recommended)

1. **Add CSS File**
   - Bootstrap Studio → **Design → Custom Code → CSS Files**
   - Click **"+"** button
   - Select: `2RS_Simple_Gallery.css`
   - Import

2. **Add JavaScript File**
   - Bootstrap Studio → **Design → Custom Code → JavaScript Files**
   - Click **"+"** button
   - Select: `2RS_Simple_Gallery.js`
   - Import

3. **Use in HTML**
```html
<a href="image.jpg" data-lightbox="gallery" data-caption="Description">
    <img src="thumb.jpg" alt="Description">
</a>
```

Done! The gallery will work automatically.

---

## Replacing Fancybox

If you're migrating from Fancybox:

### Step 1: Find and Replace

**OLD:**
```html
<a data-fancybox="gallery" href="image.jpg">
```

**NEW:**
```html
<a data-lightbox="gallery" href="image.jpg" data-caption="Image description">
```

### Step 2: Remove Fancybox Files

1. Delete Fancybox CSS and JS from Custom Code
2. Remove Fancybox CDN links from HTML Head

```html
<!-- REMOVE THESE -->
<link rel="stylesheet" href=".../fancybox.css">
<script src=".../fancybox.umd.js"></script>
```

---

## Usage Examples

### Product Gallery

```html
<div class="row">
    <div class="col-md-4">
        <a href="assets/img/product1.jpg" 
           data-lightbox="products" 
           data-caption="SlimLine 68 Window System">
            <img src="assets/img/product1-thumb.jpg" class="img-fluid">
        </a>
    </div>
</div>
```

### PDF Brochure Button

```html
<a href="brochure.pdf" 
   data-lightbox="docs" 
   data-type="pdf"
   data-caption="Product Brochure 2024"
   class="btn btn-primary">
    <i class="fas fa-file-pdf"></i> View Brochure
</a>
```

---

## Testing

1. Press **F5** in Bootstrap Studio
2. Click on images/PDFs
3. Test navigation (arrows, ESC)

---

## Customization

### 2R Systems Colors

Add to Custom CSS:

```css
.simple-lightbox-caption {
    background: rgba(0, 102, 204, 0.8);
}
```

---

For full documentation, see `README.md`
