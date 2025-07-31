#!/bin/bash

# Simple deployment script for Next.js SSG app
# This script builds the app and prepares it for deployment

echo "🚀 Starting deployment process..."

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf out

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building the application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Static files are ready in the 'out' directory"
    echo ""
    echo "🌐 You can now deploy the 'out' directory to:"
    echo "   • Vercel: vercel --prod"
    echo "   • Netlify: netlify deploy --prod --dir=out"
    echo "   • AWS S3: aws s3 sync out/ s3://your-bucket-name"
    echo "   • GitHub Pages: Copy contents of 'out' to your gh-pages branch"
    echo ""
    echo "🎉 Deployment preparation complete!"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
