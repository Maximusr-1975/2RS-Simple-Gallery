# ✅ Updated: Simple Lightbox with PDF Support

## What's New?

### 🆕 PDF Document Preview
- Display PDF files directly in the lightbox
- Same navigation as images (arrows, ESC, counter)
- Fully responsive on mobile devices
- Mixed galleries (images + PDFs)

### 🌍 English Descriptions
- All examples translated to English
- Professional technical descriptions
- Ready for international projects

## Quick Usage

### For Images:
```html
<a href="image.jpg" data-lightbox="gallery" data-caption="Description">
    <img src="thumb.jpg" alt="Description">
</a>
```

### For PDF Documents:
```html
<a href="brochure.pdf" 
   data-lightbox="gallery" 
   data-type="pdf"
   data-caption="PDF Title"
   class="btn btn-primary">
    <i class="fas fa-file-pdf"></i> View Brochure
</a>
```

## Integration with 2R Systems

Perfect for product pages with technical brochures:

```html
<div class="product">
    <!-- Product Image -->
    <a href="slimline-68.jpg" 
       data-lightbox="sl68" 
       data-caption="SlimLine 68 - Ultra-slim aluminium profiles">
        <img src="slimline-68-thumb.jpg" alt="SlimLine 68">
    </a>
    
    <!-- Technical Brochure -->
    <a href="sl68-brochure.pdf" 
       data-lightbox="sl68" 
       data-type="pdf"
       data-caption="SlimLine 68 Technical Brochure">
        <i class="fas fa-file-pdf"></i> View Brochure
    </a>
</div>
```

## Files Included

1. **2RS_Simple_Gallery.js** - Updated with PDF support
2. **2RS_Simple_Gallery.css** - Styles for PDF iframe
3. **example-english-pdf.html** - Full demo with images & PDF
4. **bootstrap-integration-english-pdf.html** - Bootstrap examples
5. **README.md** - Complete documentation (Polish)
6. **PDF-GUIDE.md** - PDF usage guide (English)

## Key Features

✅ Images + PDF documents  
✅ Automatic type detection (.pdf extension)  
✅ Manual type override (`data-type="pdf"`)  
✅ Responsive iframe for PDF  
✅ Same navigation for all content types  
✅ Mobile-optimized  
✅ No external dependencies  

## Size

- **JavaScript:** ~10KB
- **CSS:** ~3KB
- **Total:** ~13KB (minified)

Still 5x smaller than Fancybox! 🚀

---

**Ready to use!** Just replace Fancybox links with Simple Lightbox attributes.
