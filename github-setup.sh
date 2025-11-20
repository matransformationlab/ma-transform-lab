#!/bin/bash

echo "🚀 GITHUB + VERCEL DEPLOYMENT SETUP"
echo "=================================="
echo ""

# Replace with your GitHub username
GITHUB_USERNAME="YOUR_USERNAME"
REPO_NAME="ma-transform-lab"

echo "Step 1: Adding GitHub remote..."
git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git

echo "Step 2: Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Code pushed to GitHub!"
echo "Repository: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo ""
echo "Next: Go to vercel.com to connect this repository"