# 🚀 START HERE - Upload to GitHub

## Quick Start (3 methods)

Choose the method that works best for you:

---

### ⭐ Method 1: Automatic Upload (Recommended)

**Windows users:**
1. Double-click `upload-to-github.bat`
2. Follow on-screen instructions
3. Enter your GitHub credentials when asked
4. Done! ✅

**Mac/Linux users:**
1. Open Terminal in this folder
2. Run: `chmod +x upload-to-github.sh`
3. Run: `./upload-to-github.sh`
4. Follow on-screen instructions
5. Done! ✅

---

### 🌐 Method 2: Web Upload (Easiest - No Git needed!)

1. Go to: https://github.com/Maximusr-1975/2RS-Simple-Gallery
2. Click **"Add file"** → **"Upload files"**
3. Drag ALL folders and files from this directory into the browser
4. Add message: "Update Simple Lightbox - Added PDF support"
5. Click **"Commit changes"**
6. Done! ✅

**What to upload:**
- `dist/` folder (contains JS and CSS)
- `docs/` folder (documentation)
- `examples/` folder (demo files)
- All `.md` files
- `LICENSE` file
- `.gitignore` file
- `convert-fancybox-to-lightbox.js`

---

### 🖥️ Method 3: Manual Git Commands

If you're comfortable with Git:

```bash
# Clone repo
git clone https://github.com/Maximusr-1975/2RS-Simple-Gallery.git
cd 2RS-Simple-Gallery

# Copy files (adjust paths as needed)
cp -r ../dist .
cp -r ../docs .
cp -r ../examples .
cp ../*.md .
cp ../LICENSE .
cp ../.gitignore .
cp ../*.js .

# Commit and push
git add .
git commit -m "Update Simple Lightbox - Added PDF support and English documentation"
git push origin main
```

---

## Need Help?

Read: `MANUAL-UPLOAD-INSTRUCTIONS.md` for detailed step-by-step guides.

---

## What's in this package?

### Main Files (Required)
- `dist/simple-lightbox.js` - Main JavaScript
- `dist/simple-lightbox.css` - Styles

### Documentation (English)
- `README.md` - Main documentation
- `CHANGELOG.md` - What's new
- `SHORT-DESCRIPTION.md` - Brief overview

### Documentation (in docs/ folder)
- `docs/README-PL.md` - Polish documentation
- `docs/PDF-GUIDE.md` - PDF usage guide
- `docs/BOOTSTRAP-STUDIO-GUIDE.md` - Bootstrap Studio guide
- `docs/PACKAGE-SUMMARY.md` - Package summary

### Examples (in examples/ folder)
- `examples/example-english-pdf.html` - Full demo with PDF
- `examples/bootstrap-integration-english-pdf.html` - Bootstrap examples
- `examples/example.html` - Basic demo (Polish)
- `examples/bootstrap-integration.html` - Bootstrap (Polish)

### Tools
- `convert-fancybox-to-lightbox.js` - Automatic Fancybox converter
- `LICENSE` - MIT License
- `.gitignore` - Git ignore rules

---

## After Upload

Once uploaded, your repository will be available at:
https://github.com/Maximusr-1975/2RS-Simple-Gallery

Users can then:
- Download files directly from GitHub
- Clone the repository
- View live examples (if you enable GitHub Pages)

---

## Enable GitHub Pages (Optional)

To show live examples:

1. Go to repository Settings
2. Click "Pages" in sidebar
3. Source: Deploy from branch
4. Branch: main / root
5. Click "Save"

Your examples will be live at:
`https://maximusr-1975.github.io/2RS-Simple-Gallery/examples/example-english-pdf.html`

---

**Choose your method and start uploading!** 🚀
