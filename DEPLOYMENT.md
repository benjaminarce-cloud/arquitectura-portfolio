# 🚀 DEPLOYMENT GUIDE

## Step-by-Step Instructions to Deploy Your Portfolio

---

## PART 1: Prepare Your Images (DO THIS FIRST)

### 1. Organize Your Photos

For each project, select **exactly 25 photos** following this pattern:

**Casa Karen (and all other projects):**
```
Photos 1-2:   Full-width exterior/arrival shots (1920x1280)
Photo 3:      Detail shot for 80% layout (1600x1067)
Photos 4-5:   Side-by-side pair (900x600 each)
Photo 6:      Full-width main living space (1920x1280)
Photo 7:      Intimate detail for 60% layout (1200x800)
Photo 8:      Full-width view/landscape (1920x1280)
Photos 9-10:  Side-by-side material details (900x600 each)
Photo 11:     Full-width bedroom (1920x1280)
Photo 12:     80% bathroom/detail (1600x1067)
Photos 13-14: Side-by-side materials (900x600 each)
Photos 15-16: Full-width outdoor/pool (1920x1280 each)
Photo 17:     60% centered detail (1200x800)
Photos 18-19: Side-by-side landscape (900x600 each)
Photo 20:     Full-width DUSK HERO SHOT (1920x1280) ⭐
Photos 21-22: Side-by-side evening shots (900x600 each)
Photo 23:     80% special detail (1600x1067)
Photos 24-25: Full-width final shots (1920x1280 each)
```

**Plus 1 HERO image per project** for homepage/project page hero

**Total per project:** 26 images (25 for gallery + 1 hero)
**Total for 5 projects:** 130 images

---

### 2. Upload to Cloudinary

**Option A: Cloudinary Web Interface**

1. Go to https://cloudinary.com and sign in
2. Click "Media Library"
3. Create a folder for each project:
   - `casa-karen/`
   - `rancho-espiritu/`
   - `el-parque-08/`
   - `cresta-del-mar/`
   - `casa-agradecida/`
4. Upload 26 images to each folder
5. Name them logically: `hero.jpg`, `01.jpg`, `02.jpg`, etc.

**Option B: Cloudinary Upload API (Faster for bulk uploads)**

```bash
# Install Cloudinary CLI
npm install -g cloudinary-cli

# Login
cld config

# Upload folder
cld uploader upload_dir /path/to/casa-karen-photos -f casa-karen
```

---

### 3. Get Cloudinary URLs

For each image, right-click → "Copy URL" or note the format:

```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1234567890/casa-karen/hero.jpg
```

**IMPORTANT: Add transformations for performance:**

```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/w_1920,q_auto,f_auto/v1234567890/casa-karen/hero.jpg
```

This automatically:
- Resizes to max 1920px width
- Optimizes quality
- Serves WebP to supported browsers

---

### 4. Update `lib/projects.ts`

Open `lib/projects.ts` and replace URLs:

```typescript
{
  id: 'casa-karen',
  name: 'Casa Karen',
  location: 'Cabo del Sol',
  year: '2019',
  type: 'Residential Villa',
  accent: '#d4a574',
  
  // Replace with your Cloudinary URL
  hero: 'https://res.cloudinary.com/YOUR_CLOUD/image/upload/w_1920,q_auto,f_auto/casa-karen/hero.jpg',
  
  // Replace all 25 image URLs
  images: [
    'https://res.cloudinary.com/YOUR_CLOUD/image/upload/w_1920,q_auto,f_auto/casa-karen/01.jpg',
    'https://res.cloudinary.com/YOUR_CLOUD/image/upload/w_1920,q_auto,f_auto/casa-karen/02.jpg',
    'https://res.cloudinary.com/YOUR_CLOUD/image/upload/w_1600,q_auto,f_auto/casa-karen/03.jpg',
    'https://res.cloudinary.com/YOUR_CLOUD/image/upload/w_900,q_auto,f_auto/casa-karen/04.jpg',
    'https://res.cloudinary.com/YOUR_CLOUD/image/upload/w_900,q_auto,f_auto/casa-karen/05.jpg',
    // ... etc for all 25 images
  ],
},
```

**Repeat for all 5 projects.**

---

## PART 2: Set Up Git Repository

### 1. Initialize Git

```bash
cd arquitectura-portfolio
git init
```

### 2. Create GitHub Repository

1. Go to https://github.com
2. Click "New repository"
3. Name it: `arquitectura-portfolio`
4. **Do NOT** initialize with README (we already have one)
5. Click "Create repository"

### 3. Connect Local to GitHub

```bash
git add .
git commit -m "Initial commit - Portfolio setup"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/arquitectura-portfolio.git
git push -u origin main
```

**Done!** Your code is now on GitHub.

---

## PART 3: Deploy to Vercel

### Method 1: Deploy from GitHub (Easiest)

#### Step 1: Go to Vercel
1. Visit https://vercel.com
2. Sign up/login (can use GitHub account)

#### Step 2: Import Project
1. Click "Add New Project"
2. Click "Import" next to your `arquitectura-portfolio` repository
3. Vercel auto-detects Next.js settings ✅

#### Step 3: Configure (Optional)
- **Framework Preset:** Next.js (auto-detected)
- **Root Directory:** `./` (leave as-is)
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)

#### Step 4: Deploy
1. Click "Deploy"
2. Wait 2-3 minutes for build
3. **Done!** You'll get a URL like: `arquitectura-portfolio.vercel.app`

---

### Method 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? → Yes
# - Link to existing project? → No
# - Project name? → arquitectura-portfolio
# - Directory? → ./ (press Enter)

# Deploy to production
vercel --prod
```

---

## PART 4: Custom Domain (Optional)

### If You Have a Domain (e.g., yoshiourakami.com):

#### On Vercel:
1. Go to Project Settings
2. Click "Domains"
3. Add your domain: `yoshiourakami.com`
4. Vercel gives you DNS records to add

#### On Your Domain Registrar (GoDaddy/Namecheap/etc):
1. Add DNS records as instructed by Vercel
2. Wait 24-48 hours for propagation
3. **Done!** Site accessible at your domain

---

## PART 5: Verify Everything Works

### Checklist:

- [ ] Homepage loads with opening hero
- [ ] All 5 project cards visible and hover works
- [ ] Click "Casa Karen" → project page loads
- [ ] All 25 images load in project page
- [ ] Scroll down → images reveal smoothly
- [ ] Click "Next Project" → goes to Rancho Espíritu
- [ ] Test all 5 projects
- [ ] Contact page works
- [ ] Mobile: Open on phone, test scrolling/taps
- [ ] Custom cursor appears on desktop hover

---

## PART 6: Future Updates

### To Update Images or Content:

1. **Edit `lib/projects.ts`** (change URLs, text, etc.)
2. **Commit changes:**
   ```bash
   git add .
   git commit -m "Update Casa Karen images"
   git push
   ```
3. **Vercel auto-deploys!** (within 1-2 minutes)

### To Add a New Project:

1. **Upload 26 images to Cloudinary** (new folder)
2. **Edit `lib/projects.ts`** → add new project object
3. **Update `app/projects/[id]/page.tsx`:**
   ```typescript
   export async function generateStaticParams() {
     return [
       { id: 'casa-karen' },
       { id: 'rancho-espiritu' },
       { id: 'el-parque-08' },
       { id: 'cresta-del-mar' },
       { id: 'casa-agradecida' },
       { id: 'new-project-id' }, // ← Add this
     ];
   }
   ```
4. **Commit and push** → Vercel auto-deploys

---

## Common Issues & Solutions

### Issue: Images Not Loading
**Solution:** 
- Check Cloudinary URLs are correct
- Verify domain in `next.config.js`:
  ```javascript
  domains: ['res.cloudinary.com']
  ```

### Issue: Build Fails
**Solution:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Issue: Changes Not Showing
**Solution:**
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Check Vercel dashboard for build logs
- Clear browser cache

### Issue: Mobile Layout Broken
**Solution:**
- Test locally: `npm run dev` → Open Chrome DevTools → Mobile view
- Check responsive breakpoints in components

---

## Performance Optimization

### Before Launch:

1. **Run Lighthouse Audit:**
   - Open site in Chrome
   - Right-click → Inspect → Lighthouse tab
   - Run audit
   - Aim for 90+ Performance score

2. **Optimize Cloudinary URLs:**
   - Always use: `w_1920,q_auto,f_auto`
   - For smaller images: adjust `w_` value

3. **Check Image Sizes:**
   - Full-width: 1920px max
   - 80% centered: 1600px max
   - 60% centered: 1200px max
   - Side-by-side: 900px each

---

## 🎉 You're Done!

Your portfolio is now:
- ✅ Live on the internet
- ✅ Fast and optimized
- ✅ Auto-deploying on every Git push
- ✅ Accessible from any device
- ✅ Professional and premium

**Share the link:**
`https://arquitectura-portfolio.vercel.app` (or your custom domain)

---

## Need Help?

1. Check Vercel build logs (if deployment fails)
2. Check browser console (F12) for errors
3. Re-read this guide
4. Contact your developer

---

**Built with Next.js 14, TypeScript, Tailwind CSS**  
**Deployed on Vercel**  
**Images hosted on Cloudinary**
