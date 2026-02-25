# Yoshio Urakami Architecture Portfolio

A premium, high-performance architecture portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ✅ Full-screen opening hero animation
- ✅ Asymmetric project grid layout
- ✅ Custom cursor interaction (desktop)
- ✅ Scroll reveal animations
- ✅ Floating info cards
- ✅ Architect's mark (vertical line indicator)
- ✅ Refined typography (Cormorant Garamond + Inter)
- ✅ Optimized images with Next.js Image
- ✅ Cloudinary support
- ✅ Fully responsive
- ✅ TypeScript

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Adding Your Cloudinary Images

### Step 1: Upload to Cloudinary

1. Go to [Cloudinary](https://cloudinary.com) and sign in
2. Upload your project images to folders (e.g., `casa-karen/`, `rancho-espiritu/`, etc.)
3. Organize each project with 25 images following this pattern:
   - Images 1-2: Full-width arrival shots
   - Image 3: Detail shot (80% centered)
   - Images 4-5: Side-by-side context
   - Image 6: Full-width main living
   - Image 7: Intimate moment (60% centered)
   - ... (see `lib/projects.ts` for full pattern)

### Step 2: Get Cloudinary URLs

For each image, get the URL. It should look like:
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1234567890/folder/image-name.jpg
```

**Recommended: Add transformations for better performance:**
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/w_1920,q_auto,f_auto/v1234567890/folder/image-name.jpg
```

Where:
- `w_1920` = max width 1920px
- `q_auto` = automatic quality optimization
- `f_auto` = automatic format (WebP when supported)

### Step 3: Update `lib/projects.ts`

Open `lib/projects.ts` and replace the placeholder URLs:

```typescript
{
  id: 'casa-karen',
  name: 'Casa Karen',
  location: 'Cabo del Sol',
  year: '2019',
  type: 'Residential Villa',
  accent: '#d4a574',
  
  // Replace this hero image URL
  hero: 'YOUR_CLOUDINARY_URL_HERE',
  
  // Replace these 25 image URLs
  images: [
    'YOUR_CLOUDINARY_URL_1',
    'YOUR_CLOUDINARY_URL_2',
    'YOUR_CLOUDINARY_URL_3',
    // ... 22 more images
  ],
},
```

Repeat for all 5 projects.

### Step 4: Update Cloudinary Domain in `next.config.js`

Make sure your Cloudinary domain is allowed:

```javascript
module.exports = {
  images: {
    domains: [
      'res.cloudinary.com',  // ✅ Keep this
      'images.unsplash.com', // ❌ Remove this once you have real images
    ],
  },
}
```

## Deploying to Vercel

### Option 1: Deploy from Git (Recommended)

#### 1. Create Git Repository

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Create GitHub repo and push
# (Go to GitHub, create new repository, then:)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

#### 2. Deploy to Vercel

1. Go to [Vercel](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

**That's it!** Vercel will build and deploy your site.

### Option 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts
# When asked "Set up and deploy?", select Yes
# When asked about settings, accept defaults

# Deploy to production
vercel --prod
```

## Environment Variables (Optional)

If you want to use environment variables for Cloudinary:

1. Create `.env.local` file:
```bash
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

2. In Vercel dashboard, add the same environment variable:
   - Go to Project Settings → Environment Variables
   - Add `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`

3. Update `lib/projects.ts` to use it:
```typescript
const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
hero: `https://res.cloudinary.com/${cloudName}/image/upload/...`,
```

## Project Structure

```
arquitectura-portfolio/
├── app/
│   ├── globals.css           # Global styles & animations
│   ├── layout.tsx             # Root layout with fonts
│   ├── page.tsx               # Homepage
│   ├── contact/
│   │   └── page.tsx           # Contact page
│   └── projects/
│       └── [id]/
│           └── page.tsx       # Dynamic project pages
├── components/
│   ├── ArchitectsMark.tsx     # Vertical line indicator
│   ├── CustomCursor.tsx       # Custom cursor (desktop)
│   ├── OpeningHero.tsx        # Homepage hero
│   ├── ProjectCard.tsx        # Project grid cards
│   └── ScrollReveal.tsx       # Scroll animations
├── lib/
│   └── projects.ts            # ⭐ PROJECT DATA - UPDATE THIS
├── public/
│   └── images/                # Static images (if needed)
├── next.config.js             # Next.js config
├── tailwind.config.ts         # Tailwind config
├── tsconfig.json              # TypeScript config
└── package.json
```

## Customization

### Colors

Update colors in `tailwind.config.ts`:

```typescript
extend: {
  colors: {
    'bg-light': '#fafaf8',  // Background color
    'bg-dark': '#1a1a1a',   // Hero backgrounds
    'text': '#2d2d2d',      // Main text
    'text-muted': '#6b6b6b', // Secondary text
  },
}
```

### Fonts

Fonts are loaded in `app/layout.tsx`. To change:

```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({
  subsets: ['latin'],
  variable: '--font-your-font',
})
```

### Project Accent Colors

Each project has an accent color in `lib/projects.ts`:

```typescript
accent: '#d4a574', // Change this per project
```

## Performance Tips

1. **Image Optimization**: Always use Cloudinary transformations:
   - `w_1920` for max width
   - `q_auto` for quality
   - `f_auto` for format

2. **Lazy Loading**: Images are lazy-loaded by default (except hero images)

3. **Font Loading**: Fonts use `display: 'swap'` to prevent layout shift

4. **Build Optimization**: Run `npm run build` to check bundle size

## Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server locally
npm start

# Lint
npm run lint
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** Custom cursor only works on desktop browsers.

## Troubleshooting

### Images Not Loading

1. Check Cloudinary domain in `next.config.js`
2. Verify URLs in `lib/projects.ts` are correct
3. Check browser console for errors

### Build Fails

1. Run `npm install` again
2. Delete `.next` folder and rebuild
3. Check TypeScript errors: `npm run lint`

### Animations Not Working

1. Clear browser cache
2. Check if JavaScript is enabled
3. Try different browser

## License

This project is private and proprietary.

## Contact

For questions about this codebase, contact the developer who set this up.

---

## 🚀 DEPLOYMENT CHECKLIST

Before deploying to production:

- [ ] Replace all Unsplash URLs with Cloudinary URLs in `lib/projects.ts`
- [ ] Test all 5 project pages locally
- [ ] Verify images load correctly
- [ ] Test on mobile (Chrome DevTools)
- [ ] Run `npm run build` successfully
- [ ] Push to Git
- [ ] Deploy to Vercel
- [ ] Test production site
- [ ] Share with client!
# arquitectura-portfolio
