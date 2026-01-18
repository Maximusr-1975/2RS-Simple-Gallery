# 📦 Simple Lightbox - Complete Package

## 📄 Files Included

### Core Files (Required)
1. **2RS_Simple_Gallery.js** - Main JavaScript (~10KB)
2. **2RS_Simple_Gallery.css** - Styles (~3KB)

### Documentation (English)
3. **README.md** - Complete documentation (English)
4. **README-PL.md** - Complete documentation (Polish)
5. **PDF-GUIDE.md** - PDF usage guide
6. **CHANGELOG.md** - What's new
7. **SHORT-DESCRIPTION.md** - Brief overview
8. **BOOTSTRAP-STUDIO-GUIDE.md** - Bootstrap Studio integration (Polish)

### Examples
9. **example-english-pdf.html** - Full demo with images & PDF
10. **bootstrap-integration-english-pdf.html** - Bootstrap integration examples
11. **example.html** - Basic demo (Polish)
12. **bootstrap-integration.html** - Bootstrap examples (Polish)

### Tools
13. **convert-fancybox-to-lightbox.js** - Automatic Fancybox converter (Node.js)

---

## 🚀 Quick Start

### 1. Copy these 2 files to your project:
- `2RS_Simple_Gallery.js` → `assets/js/`
- `2RS_Simple_Gallery.css` → `assets/css/`

### 2. Add to HTML:
```html
<link rel="stylesheet" href="assets/css/2RS_Simple_Gallery.css">
<script src="assets/js/2RS_Simple_Gallery.js"></script>
```

### 3. Use on images:
```html
<a href="full-image.jpg" data-lightbox="gallery" data-caption="Description">
    <img src="thumbnail.jpg" alt="Description">
</a>
```

### 4. Use on PDF:
```html
<a href="brochure.pdf" 
   data-lightbox="gallery" 
   data-type="pdf"
   data-caption="PDF Title">
    📄 View Brochure
</a>
```

That's it! ✅

---

## 📖 Which file to read?

- **Getting started?** → Read `README.md`
- **PDF support?** → Read `PDF-GUIDE.md`
- **Bootstrap Studio?** → Read `BOOTSTRAP-STUDIO-GUIDE.md`
- **See examples?** → Open `example-english-pdf.html`
- **What's new?** → Read `CHANGELOG.md`

---

## 🎯 For 2R Systems Integration

### Replace Fancybox PDF buttons:

**Before:**
```html
<button class="btn btn-primary pdf-trigger" 
        data-pdf-src="https://example.com/brochure.pdf">
    📄 View SlimLine 68 Brochure
</button>

<script>
document.querySelectorAll('.pdf-trigger').forEach(function(button) {
    button.addEventListener('click', function() {
        const pdfSrc = this.getAttribute('data-pdf-src');
        Fancybox.show([{
            src: pdfSrc,
            type: 'iframe'
        }]);
    });
});
</script>
```

**After:**
```html
<a href="https://example.com/brochure.pdf" 
   data-lightbox="products" 
   data-type="pdf"
   data-caption="SlimLine 68 Technical Brochure"
   class="btn btn-primary">
    <i class="fas fa-file-pdf"></i> View Brochure
</a>

<!-- No JavaScript needed - auto-initializes! -->
```

---

## 📊 Features

✅ Images + PDF documents  
✅ Keyboard navigation (arrows, ESC)  
✅ Touch gestures (swipe)  
✅ Image captions  
✅ Counter (1/10)  
✅ Loading animation  
✅ Fully responsive  
✅ No dependencies  
✅ Only ~13KB total  
✅ 5x smaller than Fancybox  

---

## 💾 Installation Methods

### Method 1: Manual (Recommended)
1. Copy `2RS_Simple_Gallery.js` and `2RS_Simple_Gallery.css`
2. Add to your HTML
3. Replace `data-fancybox` with `data-lightbox`

### Method 2: Automatic (Node.js)
```bash
node convert-fancybox-to-lightbox.js
```
Automatically converts all Fancybox references

### Method 3: Bootstrap Studio
1. Import files via Custom Code
2. Follow `BOOTSTRAP-STUDIO-GUIDE.md`

---

## 🌟 Support

- **English documentation:** `README.md`
- **Polish documentation:** `README-PL.md`
- **All examples work offline** - just open HTML files in browser

---

**Ready to use!** 🚀

Choose any example HTML file to see it in action.
