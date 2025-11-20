#!/bin/bash

echo "🚀 Deploying MA Transform Lab to Vercel..."
echo ""

# Check if user is logged in to Vercel
echo "Step 1: Checking Vercel authentication..."
npx vercel whoami

if [ $? -ne 0 ]; then
    echo "❌ Not logged in to Vercel. Please run: npx vercel login"
    echo "Then run this script again."
    exit 1
fi

echo "✅ Authenticated with Vercel"
echo ""

# Deploy to Vercel
echo "Step 2: Deploying to Vercel..."
echo "This will:"
echo "- Build your Next.js application"
echo "- Deploy to Vercel's global CDN"
echo "- Provide you with a live URL"
echo ""

npx vercel --prod

echo ""
echo "🎉 DEPLOYMENT COMPLETE!"
echo ""
echo "Your MA Transform Lab website is now live!"
echo "Check the output above for your live URL."
echo ""
echo "Next steps:"
echo "1. Visit your live URL"
echo "2. Test all features"
echo "3. Set up custom domain (if needed)"
echo "4. Configure environment variables in Vercel dashboard"