# 📤 Manual Upload Instructions

If the automatic scripts don't work, you can upload files manually through GitHub's web interface.

## Method 1: GitHub Web Interface (Easiest)

### Step 1: Go to your repository
Open: https://github.com/Maximusr-1975/2RS-Simple-Gallery

### Step 2: Upload files
1. Click the **"Add file"** button (top right)
2. Select **"Upload files"**
3. Drag and drop ALL files and folders from the `github-upload` directory
4. Add commit message: "Update Simple Lightbox - Added PDF support"
5. Click **"Commit changes"**

Done! ✅

---

## Method 2: Git Command Line

### Step 1: Open Terminal/Command Prompt

**Windows:**
- Press `Win + R`
- Type `cmd` and press Enter

**Mac/Linux:**
- Open Terminal

### Step 2: Navigate to the upload folder

```bash
cd /path/to/github-upload
```

### Step 3: Clone repository (if not already cloned)

```bash
git clone https://github.com/Maximusr-1975/2RS-Simple-Gallery.git
cd 2RS-Simple-Gallery
```

### Step 4: Copy files

**Windows:**
```cmd
xcopy /E /I /Y ..\dist dist
xcopy /E /I /Y ..\docs docs
xcopy /E /I /Y ..\examples examples
copy /Y ..\*.md .
copy /Y ..\LICENSE .
copy /Y ..\.gitignore .
copy /Y ..\*.js .
```

**Mac/Linux:**
```bash
cp -r ../dist .
cp -r ../docs .
cp -r ../examples .
cp ../*.md .
cp ../LICENSE .
cp ../.gitignore .
cp ../*.js .
```

### Step 5: Commit and push

```bash
git add .
git commit -m "Update Simple Lightbox - Added PDF support and English documentation"
git push origin main
```

If asked for credentials:
- **Username:** Maximusr-1975
- **Password:** Your GitHub Personal Access Token (not your password!)

---

## Method 3: GitHub Desktop (Recommended for Windows users)

### Step 1: Install GitHub Desktop
Download from: https://desktop.github.com/

### Step 2: Clone repository
1. Open GitHub Desktop
2. File → Clone Repository
3. URL: `https://github.com/Maximusr-1975/2RS-Simple-Gallery.git`
4. Click "Clone"

### Step 3: Copy files
1. Copy all files from `github-upload` folder
2. Paste into the cloned repository folder
3. GitHub Desktop will automatically detect changes

### Step 4: Commit and push
1. Write commit message: "Update Simple Lightbox - Added PDF support"
2. Click "Commit to main"
3. Click "Push origin"

Done! ✅

---

## Method 4: Direct File Upload (One by one)

If drag & drop doesn't work:

1. Go to: https://github.com/Maximusr-1975/2RS-Simple-Gallery
2. For each file:
   - Click "Add file" → "Create new file"
   - Name it correctly (e.g., `dist/simple-lightbox.js`)
   - Paste content
   - Click "Commit new file"

This is slower but works when other methods fail.

---

## Files to Upload

Make sure these files are in the repository:

```
2RS-Simple-Gallery/
├── dist/
│   ├── simple-lightbox.js
│   └── simple-lightbox.css
├── docs/
│   ├── README-PL.md
│   ├── BOOTSTRAP-STUDIO-GUIDE.md
│   ├── PDF-GUIDE.md
│   └── PACKAGE-SUMMARY.md
├── examples/
│   ├── example-english-pdf.html
│   ├── bootstrap-integration-english-pdf.html
│   ├── example.html
│   └── bootstrap-integration.html
├── README.md
├── CHANGELOG.md
├── SHORT-DESCRIPTION.md
├── LICENSE
├── .gitignore
└── convert-fancybox-to-lightbox.js
```

---

## Troubleshooting

### "Authentication failed"
- Use Personal Access Token instead of password
- Generate token at: https://github.com/settings/tokens
- Select scopes: `repo` (full control)

### "Permission denied"
- Make sure you're logged into the correct GitHub account
- Check if you have write access to the repository

### "Connection timeout"
- Check your internet connection
- Try using GitHub Desktop instead
- Try uploading through web interface

### "Repository not found"
- Check if repository exists: https://github.com/Maximusr-1975/2RS-Simple-Gallery
- Make sure repository is public or you have access

---

## Need Help?

If you're still having issues:
1. Check GitHub Status: https://www.githubstatus.com/
2. GitHub Docs: https://docs.github.com/en/get-started
3. Or just upload files manually through the web interface - it's the most reliable method!
