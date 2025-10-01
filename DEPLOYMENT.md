# 🚀 Deployment Guide - Haus of PR

This guide will walk you through deploying your Haus of PR website to GitHub Pages and Vercel for public access.

## 📋 Prerequisites

Before deploying, ensure you have:
- Git installed on your computer
- A GitHub account
- A Vercel account (optional, for Vercel deployment)
- Node.js 16+ installed (for local development)

## 📁 Project Structure (Organized)

Your project should now have this structure:
```
hausofpr/
├── assets/                 # Images, icons, logos
│   ├── logo.png
│   ├── haus-of-pr-logo.svg
│   └── favicon.ico
├── videos/                 # Video files
│   └── fluid-background.mp4
├── css/                    # Stylesheets
│   └── style.css
├── js/                     # JavaScript files
│   └── script.js
├── index.html              # Main landing page
├── coming-soon.html        # Coming soon page
├── contact.html            # Contact page
├── package.json            # Node.js configuration
├── vercel.json             # Vercel configuration
├── vite.config.js          # Vite configuration
├── .gitignore              # Git ignore rules
└── README.md               # Project documentation
```

## 🐙 GitHub Deployment

### Step 1: Create GitHub Repository

1. **Go to GitHub.com** and sign in
2. **Click "New repository"** (green button)
3. **Repository settings:**
   - Repository name: `hausofpr` (or your preferred name)
   - Description: `Haus of PR - AI-powered PR solutions landing page`
   - Set to **Public** (required for free GitHub Pages)
   - ✅ Add README file (if you don't have one)
   - ✅ Add .gitignore: Node
   - Choose License: MIT (recommended)
4. **Click "Create repository"**

### Step 2: Connect Local Project to GitHub

Open terminal in your project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add GitHub remote repository
git remote add origin https://github.com/YOUR_USERNAME/hausofpr.git

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Haus of PR website"

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username.**

### Step 3: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab
3. **Scroll to "Pages"** section (left sidebar)
4. **Source settings:**
   - Source: `Deploy from a branch`
   - Branch: `main` 
   - Folder: `/ (root)`
5. **Click "Save"**

### Step 4: Access Your Live Website

- GitHub will provide a URL like: `https://YOUR_USERNAME.github.io/hausofpr/`
- It may take 5-10 minutes to go live
- You'll receive an email when it's ready

## ⚡ Vercel Deployment (Recommended)

Vercel offers better performance, custom domains, and instant deployments.

### Method 1: Deploy via GitHub (Recommended)

1. **Go to [vercel.com](https://vercel.com)** and sign up
2. **Click "New Project"**
3. **Import your GitHub repository:**
   - Connect GitHub account
   - Select `hausofpr` repository
   - Click "Import"
4. **Configure project:**
   - Framework Preset: `Other`
   - Root Directory: `./` (leave default)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. **Click "Deploy"**

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (run from project root)
vercel

# For production deployment
vercel --prod
```

### Step 5: Custom Domain (Optional)

1. **In Vercel dashboard**, go to your project
2. **Click "Settings"** → **"Domains"**
3. **Add your custom domain** (e.g., `hausofpr.com`)
4. **Follow DNS configuration** instructions
5. **Vercel will provide SSL certificate** automatically

## 🌐 Alternative Deployment Options

### Netlify

1. **Go to [netlify.com](https://netlify.com)**
2. **Drag and drop** your project folder
3. **Or connect GitHub** for automatic deployments

### Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and initialize
firebase login
firebase init hosting

# Deploy
firebase deploy
```

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📧 Email Configuration (Contact Form)

To make the contact form work:

1. **Sign up at [EmailJS](https://www.emailjs.com/)**
2. **Create email service** and template
3. **Update `js/script.js`:**
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   ```
4. **Replace placeholders:**
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID` 
   - `YOUR_PUBLIC_KEY`

## 🎯 SEO Optimization

### Update Meta Tags

In `index.html`, update:
- `<title>` tags
- `<meta name="description">` 
- `<meta property="og:url">` (your actual domain)
- `<meta property="og:image">` (your logo URL)

### Add Google Analytics (Optional)

```html
<!-- Add before closing </head> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🔒 Security Best Practices

1. **Never commit sensitive data** (API keys, passwords)
2. **Use environment variables** for secrets
3. **Keep dependencies updated:** `npm audit fix`
4. **Enable HTTPS** (automatic with Vercel/Netlify)

## 📈 Performance Optimization

1. **Compress images** before uploading
2. **Optimize video files** for web
3. **Use WebP format** for images when possible
4. **Enable gzip compression** (automatic with Vercel)

## 🐛 Common Issues & Solutions

### Issue: "Page not found" on GitHub Pages
**Solution:** Check that `index.html` is in the root directory

### Issue: Styles not loading
**Solution:** Verify CSS paths are correct (`css/style.css`)

### Issue: Contact form not working
**Solution:** Configure EmailJS credentials properly

### Issue: Video not playing
**Solution:** Ensure video file is under 100MB and in MP4 format

## 📞 Support

If you encounter issues:
1. **Check the browser console** for errors (F12)
2. **Verify file paths** are correct
3. **Check repository settings** on GitHub
4. **Contact support:** taanya.hausofpr@gmail.com

## 🎉 Success Checklist

- ✅ Project organized in proper directory structure
- ✅ Repository created on GitHub
- ✅ Code pushed to GitHub successfully  
- ✅ GitHub Pages enabled and working
- ✅ Vercel deployment configured (optional)
- ✅ Custom domain configured (optional)
- ✅ Contact form configured with EmailJS
- ✅ SEO meta tags updated
- ✅ SSL certificate active (HTTPS)

**Congratulations! Your Haus of PR website is now live! 🚀**

---

## 📊 Quick Links

- **GitHub Repository:** `https://github.com/YOUR_USERNAME/hausofpr`
- **GitHub Pages:** `https://YOUR_USERNAME.github.io/hausofpr/`  
- **Vercel Dashboard:** `https://vercel.com/dashboard`
- **EmailJS Dashboard:** `https://dashboard.emailjs.com/`

Remember to replace `YOUR_USERNAME` with your actual GitHub username in all URLs!
