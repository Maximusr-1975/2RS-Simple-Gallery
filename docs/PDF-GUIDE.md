# 📄 PDF Support - Quick Guide

## How to Display PDF Documents in Simple Lightbox

### Basic Usage

```html
<!-- PDF Button -->
<a href="brochure.pdf" 
   data-lightbox="gallery" 
   data-type="pdf"
   data-caption="Product Brochure 2024"
   class="btn btn-primary">
    <i class="fas fa-file-pdf"></i> View Brochure
</a>
```

### Integration with Bootstrap Cards

```html
<div class="card">
    <img src="product.jpg" class="card-img-top" alt="Product">
    <div class="card-body">
        <h5 class="card-title">SlimLine 68</h5>
        <p class="card-text">Ultra-slim aluminium profiles</p>
        
        <!-- PDF Button -->
        <a href="slimline-68-brochure.pdf" 
           data-lightbox="products" 
           data-type="pdf"
           data-caption="SlimLine 68 Technical Brochure"
           class="btn btn-primary">
            <i class="fas fa-file-pdf"></i> View Brochure
        </a>
    </div>
</div>
```

### PDF in List Group

```html
<div class="list-group">
    <a href="installation-guide.pdf" 
       data-lightbox="docs" 
       data-type="pdf"
       data-caption="Installation Guide"
       class="list-group-item list-group-item-action">
        <i class="fas fa-file-pdf text-danger me-2"></i>
        Installation Guide
        <span class="badge bg-primary float-end">PDF</span>
    </a>
</div>
```

### Mixed Gallery (Images + PDF)

```html
<div class="gallery">
    <!-- Image -->
    <a href="photo.jpg" data-lightbox="mixed" data-caption="Product Photo">
        <img src="photo-thumb.jpg" alt="Photo">
    </a>
    
    <!-- PDF Document -->
    <a href="specs.pdf" 
       data-lightbox="mixed" 
       data-type="pdf"
       data-caption="Technical Specifications">
        <div class="pdf-card">
            <i class="fas fa-file-pdf"></i>
            <p>View Specs</p>
        </div>
    </a>
    
    <!-- Another Image -->
    <a href="photo2.jpg" data-lightbox="mixed" data-caption="Installation">
        <img src="photo2-thumb.jpg" alt="Installation">
    </a>
</div>
```

## Important Notes

### ✅ Required Attribute
Always add `data-type="pdf"` for PDF files:
```html
data-type="pdf"
```

### ✅ File Paths
- Local files: `href="brochures/product.pdf"`
- URLs: `href="https://example.com/brochure.pdf"`

### ✅ Navigation
- PDF documents work with the same navigation as images
- Use arrow keys ← → to navigate between items
- ESC to close
- Counter shows position (e.g., "3/10")

### 📱 Mobile Support
- PDF viewer is fully responsive
- Swipe gestures work
- Optimized viewport for mobile devices

## Example for 2R Systems

```html
<!-- Product Section -->
<div class="row">
    <div class="col-md-6">
        <!-- Product Image -->
        <a href="assets/img/SL68/Slim_Line_SL68.jpg" 
           data-lightbox="sl68" 
           data-caption="SlimLine 68 - Ultra-slim profiles">
            <img src="assets/img/SL68/Slim_Line_SL68.jpg" 
                 class="img-fluid" 
                 alt="SlimLine 68">
        </a>
    </div>
    
    <div class="col-md-6">
        <h2>SlimLine 68</h2>
        <p>Ultra-slim aluminium profiles with exceptional thermal performance.</p>
        
        <!-- PDF Brochure Button -->
        <button class="btn btn-primary pdf-trigger" 
                data-pdf-src="https://www.reynaersathome.co.uk/.../SL68-Brochure.pdf">
            📄 View SlimLine 68 Brochure
        </button>
        
        <!-- Convert to Simple Lightbox: -->
        <a href="https://www.reynaersathome.co.uk/.../SL68-Brochure.pdf" 
           data-lightbox="sl68" 
           data-type="pdf"
           data-caption="SlimLine 68 Technical Brochure"
           class="btn btn-primary">
            <i class="fas fa-file-pdf"></i> View Brochure
        </a>
    </div>
</div>
```

## CSS Styling for PDF Cards (Optional)

```css
.pdf-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 40px 20px;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.pdf-card:hover {
    transform: translateY(-5px);
}

.pdf-card i {
    font-size: 48px;
    margin-bottom: 15px;
}
```

## Replace Fancybox PDF Code

### Before (Fancybox):
```javascript
document.querySelectorAll('.pdf-trigger').forEach(function(button) {
    button.addEventListener('click', function() {
        const pdfSrc = this.getAttribute('data-pdf-src');
        
        Fancybox.show([{
            src: pdfSrc,
            type: 'iframe'
        }]);
    });
});
```

### After (Simple Lightbox):
```html
<!-- Just use the link - automatic initialization -->
<a href="brochure.pdf" 
   data-lightbox="docs" 
   data-type="pdf"
   data-caption="Brochure"
   class="btn btn-primary">
    <i class="fas fa-file-pdf"></i> View Brochure
</a>
```

**No JavaScript needed!** Simple Lightbox auto-initializes.
