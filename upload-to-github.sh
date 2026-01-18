#!/bin/bash

# Simple Lightbox - GitHub Upload Script
# This script helps you upload files to GitHub repository

echo "================================================"
echo "  Simple Lightbox Gallery - GitHub Upload"
echo "================================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Error: Git is not installed"
    echo "Please install Git first: https://git-scm.com/downloads"
    exit 1
fi

echo "✅ Git is installed"
echo ""

# Configure git user (if not already configured)
if [ -z "$(git config --global user.name)" ]; then
    echo "📝 Configuring Git user..."
    read -p "Enter your name: " git_name
    read -p "Enter your email: " git_email
    git config --global user.name "$git_name"
    git config --global user.email "$git_email"
    echo "✅ Git configured"
    echo ""
fi

# Repository URL
REPO_URL="https://github.com/Maximusr-1975/2RS-Simple-Gallery.git"
REPO_DIR="2RS-Simple-Gallery"

echo "📂 Repository: $REPO_URL"
echo ""

# Clone or update repository
if [ -d "$REPO_DIR" ]; then
    echo "📁 Repository already exists, pulling latest changes..."
    cd "$REPO_DIR"
    git pull origin main || git pull origin master
    cd ..
else
    echo "📥 Cloning repository..."
    git clone "$REPO_URL"
fi

if [ ! -d "$REPO_DIR" ]; then
    echo "❌ Error: Failed to clone repository"
    echo "Please check your internet connection and repository access"
    exit 1
fi

echo "✅ Repository ready"
echo ""

# Copy files
echo "📋 Copying files to repository..."
cp -r dist "$REPO_DIR/"
cp -r docs "$REPO_DIR/"
cp -r examples "$REPO_DIR/"
cp README.md "$REPO_DIR/"
cp CHANGELOG.md "$REPO_DIR/"
cp SHORT-DESCRIPTION.md "$REPO_DIR/"
cp LICENSE "$REPO_DIR/"
cp .gitignore "$REPO_DIR/"
cp convert-fancybox-to-lightbox.js "$REPO_DIR/"

echo "✅ Files copied"
echo ""

# Check git status
cd "$REPO_DIR"
echo "📊 Git status:"
git status
echo ""

# Add files
echo "➕ Adding files to git..."
git add .
echo "✅ Files added"
echo ""

# Commit
read -p "Enter commit message (or press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Update Simple Lightbox - Added PDF support and English documentation"
fi

git commit -m "$commit_msg"
echo "✅ Changes committed"
echo ""

# Push
echo "🚀 Pushing to GitHub..."
echo "You may need to enter your GitHub username and password/token"
echo ""

git push origin main || git push origin master

if [ $? -eq 0 ]; then
    echo ""
    echo "================================================"
    echo "  ✅ SUCCESS! Files uploaded to GitHub"
    echo "================================================"
    echo ""
    echo "View your repository at:"
    echo "https://github.com/Maximusr-1975/2RS-Simple-Gallery"
    echo ""
else
    echo ""
    echo "================================================"
    echo "  ⚠️  Upload failed"
    echo "================================================"
    echo ""
    echo "Possible reasons:"
    echo "1. Authentication failed - check your credentials"
    echo "2. No internet connection"
    echo "3. Repository access denied"
    echo ""
    echo "Try uploading manually:"
    echo "1. Go to https://github.com/Maximusr-1975/2RS-Simple-Gallery"
    echo "2. Click 'Add file' → 'Upload files'"
    echo "3. Drag and drop all files from this directory"
    echo ""
fi

cd ..
