# GitHub Deployment Instructions

## Quick GitHub + Vercel Setup

### 1. Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: MA Transform Lab website"
```

### 2. Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name: `ma-transform-lab`
4. Description: "Premium transformation website"
5. Make it Public
6. Click "Create repository"

### 3. Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/ma-transform-lab.git
git branch -M main
git push -u origin main
```

### 4. Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Framework: Next.js (auto-detected)
5. Build Command: `npm run build`
6. Output Directory: `.next`
7. Click "Deploy"

### 5. Automatic Deployments
✅ Every push to main = automatic deployment
✅ Preview deployments for every PR
✅ Custom domains supported
✅ Analytics included

## Environment Variables (if needed)
In Vercel dashboard → Settings → Environment Variables:
- `NODE_ENV=production`
- `NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app`