# ⚡ QUICK START

## Get Running in 5 Minutes

### 1. Install Dependencies
```bash
cd arquitectura-portfolio
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open http://localhost:3000

---

## 📸 Add Your Photos (Do This Before Deploying!)

### The Easy Way:

1. **Open `lib/projects.ts`**
2. **Find this section for each project:**
   ```typescript
   hero: 'REPLACE_THIS_URL',
   images: [
     'REPLACE_URL_1',
     'REPLACE_URL_2',
     // ... 23 more
   ]
   ```
3. **Replace with your Cloudinary URLs**

### Cloudinary URL Format:
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/w_1920,q_auto,f_auto/folder/image.jpg
```

**Get YOUR_CLOUD_NAME from:** Cloudinary Dashboard → Settings → Account

---

## 🚀 Deploy to Vercel

### Option 1: GitHub + Vercel (Recommended)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main

# 2. Go to vercel.com
# 3. Click "Import Project"
# 4. Select your GitHub repo
# 5. Click "Deploy"
# Done! ✅
```

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 📁 Key Files to Edit

### 1. Project Data (MOST IMPORTANT)
**File:** `lib/projects.ts`
- Add your Cloudinary image URLs here
- Update project names, locations, years
- Change accent colors if needed

### 2. Contact Info
**File:** `app/contact/page.tsx`
- Update email address
- Add phone number if needed

### 3. Colors & Fonts
**File:** `tailwind.config.ts`
- Change background colors
- Update accent colors
- Swap fonts

---

## ✅ Pre-Deployment Checklist

Before going live:

- [ ] All Unsplash URLs replaced with Cloudinary URLs
- [ ] Test all 5 project pages locally
- [ ] Images load correctly
- [ ] Mobile test (Chrome DevTools)
- [ ] Run `npm run build` successfully
- [ ] Email in contact page is correct

---

## 📚 Full Docs

- **README.md** - Complete project documentation
- **DEPLOYMENT.md** - Step-by-step deployment guide with screenshots
- **This file** - Quick reference

---

## 🆘 Common Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Check for errors
npm run lint

# Deploy (with Vercel CLI)
vercel --prod
```

---

## 🎯 What You Get

- **Homepage:** Opening hero + asymmetric project grid
- **5 Project Pages:** 25 images each with scroll animations
- **Contact Page:** Simple, elegant contact info
- **All WOW Features:**
  - ✨ Refined typography (Cormorant + Inter)
  - ✨ Custom cursor (desktop)
  - ✨ Scroll reveal animations
  - ✨ Floating info cards
  - ✨ Architect's mark (vertical line)
  - ✨ Fully responsive

---

**Ready to deploy?** → See `DEPLOYMENT.md`

**Need help?** → See `README.md`

**Just want to add photos?** → Edit `lib/projects.ts`
