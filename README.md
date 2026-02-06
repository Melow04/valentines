# Valentine's Day Proposal Website 💕

A beautiful, interactive website with a hidden Valentine's Day proposal that reveals when triggered.

## Features

- 🎭 Hidden proposal that appears normal at first
- 🖼️ Parallax scrolling effects with photos
- ✨ Smooth animations using Framer Motion
- 💝 Interactive reveal mechanism
- 📱 Fully responsive design

## Setup

1. Install Node.js (if not already installed): https://nodejs.org/
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Deployment to Vercel

1. Push this repository to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite and deploy!

## Customization

- Add your photos to `/public/images/` folder
- Update photo paths in `src/components/ParallaxSection.jsx`
- Customize colors and text in `src/App.jsx` and components
- Adjust animations in each component's Framer Motion settings

## How It Works

The website starts as a normal landing page. Click the hidden trigger button (heart icon in the navigation) to reveal the beautiful Valentine's proposal with animated sections and parallax effects.

Made with ❤️
