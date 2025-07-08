# st-man-hori.github.io

Personal project portfolio website hosting multiple projects.

## Projects

### ♡ ギャルサイト ♡ (Gal Site)

A nostalgic 2000s-era gyaru (gal) culture website built with modern web technologies.

**Technologies Used:**
- Astro
- TailwindCSS
- TypeScript

**Features:**
- 2000s-inspired flashy design with sparkly animations
- Random gyaru slang phrase generator
- Responsive design with vibrant gradients
- Interactive elements with hover effects

**Development:**
```bash
cd gal-site
npm install
npm run dev    # Development server
npm run build  # Build for production
```

**Live Demo:** [/gal-site-web/](./gal-site-web/)

## Repository Structure

```
.
├── index.html           # Main landing page
├── gal-site/           # Gal site source code
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── layouts/
│   │   └── pages/
│   ├── package.json
│   └── astro.config.mjs
└── gal-site-web/       # Built gal site for GitHub Pages
```

## Adding New Projects

1. Create a new directory for your project
2. Build your project and create a deployable version
3. Update the main `index.html` to include a link to your new project
4. Commit and push to deploy via GitHub Pages
