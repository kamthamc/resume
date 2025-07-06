#!/bin/bash

# Image Optimization Script for Surreal Personal Website
# This script helps convert and optimize images for better performance

echo "🖼️  Image Optimization Helper for Surreal Personal Website"
echo "========================================================"
echo ""
echo "To optimize your images for better Lighthouse performance:"
echo ""
echo "1. CONVERT AVATAR TO WEBP:"
echo "   If you have avatar.png, convert it to WebP format:"
echo "   - Using online tools: https://squoosh.app/"
echo "   - Using ImageMagick: magick avatar.png avatar.webp"
echo "   - Using cwebp: cwebp avatar.png -o avatar.webp"
echo ""
echo "2. RESIZE AVATAR IMAGE:"
echo "   Ensure your avatar image is exactly 200x200 pixels:"
echo "   - Using ImageMagick: magick avatar.png -resize 200x200^ -gravity center -crop 200x200+0+0 avatar_optimized.png"
echo ""
echo "3. RECOMMENDED IMAGE SIZES:"
echo "   - avatar.webp: 200x200px (for modern browsers)"
echo "   - avatar.png: 200x200px (fallback)"
echo "   - File size should be under 50KB for optimal performance"
echo ""
echo "4. AFTER OPTIMIZATION:"
echo "   - Place both avatar.webp and avatar.png in your project root"
echo "   - The HTML is already configured to use WebP with PNG fallback"
echo ""
echo "📈 Expected Performance Improvements:"
echo "   - ~70% file size reduction with WebP"
echo "   - Faster Largest Contentful Paint (LCP)"
echo "   - Better Lighthouse performance score"
echo ""
echo "Note: If you don't have an avatar image yet, you can:"
echo "- Use a placeholder from https://ui-avatars.com/"
echo "- Create one using Canva or similar tools"
echo "- Use a professional headshot (recommended)"

# Check if ImageMagick is available
if command -v magick &> /dev/null; then
    echo ""
    echo "✅ ImageMagick is available for image conversion"
    echo "   Run: magick avatar.png avatar.webp"
elif command -v cwebp &> /dev/null; then
    echo ""
    echo "✅ cwebp is available for WebP conversion"
    echo "   Run: cwebp avatar.png -o avatar.webp"
else
    echo ""
    echo "💡 To install image conversion tools:"
    echo "   - macOS: brew install imagemagick webp"
    echo "   - Ubuntu: sudo apt install imagemagick webp"
    echo "   - Or use online tools like squoosh.app"
fi

echo ""
echo "🚀 After optimization, your Lighthouse performance should improve significantly!"
