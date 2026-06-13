<div align="center">

# Equinox Interactive

**Official Studio Website — React + TypeScript + Vite**

[![React](https://img.shields.io/badge/React-18.3-61dafb?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-7.3-646cff?logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06b6d4?logo=tailwindcss)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-000000)](https://ui.shadcn.com)
[![License](https://img.shields.io/badge/License-Unlicensed-lightgrey)](./LICENSE)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Live Preview](#live-preview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages and Sections](#pages-and-sections)
- [Component Reference](#component-reference)
- [Theming System](#theming-system)
- [Routing](#routing)
- [Animations and Scroll Behavior](#animations-and-scroll-behavior)
- [Typography](#typography)
- [Social Links and Contact](#social-links-and-contact)
- [Asset Management](#asset-management)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Build and Deployment](#build-and-deployment)
- [Configuration Reference](#configuration-reference)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This repository contains the official website for **Equinox Interactive**, an independent game development studio founded in April 2025. The site serves as the studio's public-facing presence: showcasing the team, presenting game portfolio entries, and linking to social media channels.

The website is a single-page application (SPA) built with React 18, TypeScript, Vite 7, and Tailwind CSS. UI primitives are sourced from shadcn/ui backed by Radix UI. The design system supports full dark and light modes, driven by CSS custom properties and toggled via `next-themes`. Smooth-scroll navigation, intersection-observer-based entrance animations, and a view-transition-powered theme toggle give the site a cinematic, polished feel consistent with the studio's game aesthetic.

---

## Live Preview

The portfolio section links to the first game release at:

```
https://box-siege.vercel.app/
```

---

## Tech Stack

| Layer | Library / Tool | Version |
|---|---|---|
| Framework | React | 18.3 |
| Language | TypeScript | 5.8 |
| Build tool | Vite (SWC) | 7.3 |
| Styling | Tailwind CSS | 3.4 |
| UI primitives | Radix UI (via shadcn/ui) | latest |
| Routing | React Router DOM | 6.30 |
| Server state | TanStack React Query | 5.83 |
| Theme | next-themes | 0.3 |
| Icons | Lucide React | 0.462 |
| Animations | tailwindcss-animate | 1.0 |
| Forms | React Hook Form + Zod | 7.61 / 3.25 |
| Toast notifications | Sonner | 1.7 |
| Testing | Vitest + Testing Library | 3.2 / 16.0 |
| Linting | ESLint + typescript-eslint | 9.32 |

---

## Project Structure

```
equinox-interactive-website/
├── public/
│   ├── bg.mp4                  -- Video background for the hero section
│   └── favicon.png
├── src/
│   ├── assets/
│   │   ├── logo.png            -- Studio logo (navbar + footer)
│   │   ├── Team.png            -- Team photo used in the About section
│   │   ├── box-siege.jpg       -- Portfolio hero image
│   │   ├── BadutZY.jpg         -- Team member avatar
│   │   ├── SwimmingFOX.jpg     -- Team member avatar
│   │   └── Ari.jpg             -- Team member avatar
│   ├── components/
│   │   ├── Navbar.tsx          -- Fixed top navigation bar with hide-on-scroll
│   │   ├── HeroSection.tsx     -- Full-screen video background landing section
│   │   ├── AboutSection.tsx    -- Studio story, vision, and mission
│   │   ├── TeamSection.tsx     -- Team member cards with GitHub links
│   │   ├── PortfolioSection.tsx-- Cinematic game showcase card
│   │   ├── ContactSection.tsx  -- Social media link cards
│   │   ├── Footer.tsx          -- Footer with quick links and social icons
│   │   ├── BackToTop.tsx       -- Fixed scroll-to-top button
│   │   ├── ThemeToggle.tsx     -- Dark/light mode toggle with view transition
│   │   ├── NavLink.tsx         -- React Router NavLink wrapper with active class
│   │   └── ui/                 -- shadcn/ui generated primitives
│   ├── hooks/
│   │   ├── use-mobile.tsx      -- Breakpoint hook for responsive logic
│   │   └── use-toast.ts        -- Toast state management hook
│   ├── lib/
│   │   └── utils.ts            -- cn() class merging utility
│   ├── pages/
│   │   ├── Index.tsx           -- Root page, composes all sections in order
│   │   └── NotFound.tsx        -- 404 fallback page
│   ├── test/
│   │   ├── example.test.ts     -- Example test file
│   │   └── setup.ts            -- Vitest global setup (Testing Library matchers)
│   ├── App.tsx                 -- Root component: providers, router, routes
│   ├── App.css                 -- Global overrides and custom component styles
│   ├── index.css               -- Tailwind directives, design tokens, base styles
│   ├── main.tsx                -- Application entry point
│   └── vite-env.d.ts           -- Vite environment type declarations
├── components.json             -- shadcn/ui configuration
├── eslint.config.js            -- ESLint flat config
├── index.html                  -- Vite HTML entry, imports Google Fonts
├── package.json
├── postcss.config.js
├── tailwind.config.ts          -- Tailwind theme extension and font families
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts              -- Vite server, plugins, and path aliases
└── vitest.config.ts            -- Vitest test environment setup
```

---

## Pages and Sections

The site is a single page (`Index.tsx`) that stacks all sections vertically. Navigation scrolls to anchors within the same document.

| Anchor | Component | Description |
|---|---|---|
| `#home` | `HeroSection` | Full-screen hero with video background and CTA buttons |
| `#about` | `AboutSection` | Studio story, vision, and mission with team photo |
| `#team` | `TeamSection` | Three team member cards linking to GitHub profiles |
| `#portfolio` | `PortfolioSection` | Featured game showcase (Box Siege) with coming-soon placeholders |
| `#contact` | `ContactSection` | Social media links (TikTok, Twitter/X, Instagram) |

The `Index.tsx` page composition is straightforward:

```tsx
// src/pages/Index.tsx
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <TeamSection />
    <PortfolioSection />
    <ContactSection />
    <Footer />
    <BackToTop />
  </div>
);

export default Index;
```

---

## Component Reference

### Navbar.tsx

A fixed top bar that hides when the user scrolls down and reappears when scrolling up. On mobile it collapses into a hamburger menu. Internally it tracks three pieces of state: whether the menu is open, whether the page has scrolled past 50px (triggers the glass backdrop), and whether the bar is currently visible.

```tsx
// Hide-on-scroll logic (simplified)
useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsScrolled(currentScrollY > 50);
    if (currentScrollY > 100) {
      setIsVisible(currentScrollY < lastScrollY); // hide going down, show going up
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, [lastScrollY]);
```

All nav links use smooth-scroll with a fixed navbar height offset of `70px`:

```tsx
const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    const navHeight = 70;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementPosition - navHeight, behavior: 'smooth' });
  }
  setIsMenuOpen(false);
};
```

The mobile hamburger button auto-closes at the `md` breakpoint via a `resize` event listener.

---

### HeroSection.tsx

A full-viewport-height section with a `<video>` background (sourced from `public/bg.mp4`), a gradient overlay fading to the page background, and two CTA buttons. The video is served from `public/` so it is accessible at `/bg.mp4` without bundling through Vite.

```tsx
<video autoPlay loop muted playsInline preload="auto"
  className="absolute inset-0 w-full h-full object-cover opacity-30 z-0">
  <source src="/bg.mp4" type="video/mp4" />
</video>
```

Both buttons use the same `scrollToSection` helper with the 70px offset.

---

### AboutSection.tsx

Uses `IntersectionObserver` to trigger entrance animations when the section enters the viewport at a 20% threshold. Content is split into a two-column layout on large screens: story/vision/mission text on the left, team photo on the right.

```tsx
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
    { threshold: 0.2 }
  );
  if (sectionRef.current) observer.observe(sectionRef.current);
  return () => observer.disconnect();
}, []);
```

The team image has a blurred gradient border glow behind it, achieved by layering an absolutely-positioned `div` with `blur-xl opacity-30` beneath the `<img>`.

---

### TeamSection.tsx

Renders three team member cards from a static `teamMembers` array. Each card wraps the avatar in an `<a>` to the member's GitHub profile. On hover, a semi-transparent primary-colored overlay with a centered GitHub icon appears.

```tsx
const teamMembers = [
  { name: 'BadutZY',     role: 'Game Programmer', image: badutzy,     github: 'https://github.com/BadutZY'    },
  { name: 'SwimmingFox', role: 'Sprite Artist',   image: swimmingfox, github: 'https://github.com/Marrwertz' },
  { name: 'Ari8Bit',    role: 'Sound Designer',  image: ari8bit,     github: 'https://github.com/AriAja17'  },
];
```

Cards are staggered with `transitionDelay` computed as `200 + index * 150` milliseconds.

---

### PortfolioSection.tsx

A single featured game entry (Box Siege) rendered as a full-bleed cinematic card. Separate layouts are rendered for desktop (`md` and up, content overlaid on the image) and mobile (content below the image). The card has ambient glow decorators in the background using absolutely positioned divs with `blur-[120px]`.

Two placeholder cards below it indicate future projects:

```tsx
{[1, 2].map((i) => (
  <div key={i} className="aspect-video rounded-2xl border border-dashed border-border ...">
    <p className="font-orbitron tracking-[0.4em] text-muted-foreground">PROJECT 0{i + 1}</p>
    <p className="text-2xl font-orbitron font-bold text-foreground/40">Coming Soon</p>
  </div>
))}
```

---

### ContactSection.tsx

Three social media cards (TikTok, Twitter/X, Instagram) each linking externally with `target="_blank" rel="noopener noreferrer"`. Icons are inline SVGs. Hover color transitions are defined per card via the `color` field in the data array.

---

### ThemeToggle.tsx

Uses the View Transition API to animate the theme switch as a circular reveal expanding from the toggle button's position. Falls back to an instant switch when the API is unavailable (Firefox, older Safari).

```tsx
const transition = doc.startViewTransition(() => { setTheme(next); });
await transition.ready;
document.documentElement.animate(
  {
    clipPath: [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ],
  },
  { duration: 650, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', pseudoElement: '::view-transition-new(root)' }
);
```

The Sun and Moon icons are cross-faded via CSS `opacity` and `rotate` transitions, rendered only after the component mounts to avoid hydration mismatch.

---

### BackToTop.tsx

A fixed button anchored to the bottom-right of the viewport. Appears after the user scrolls past 300px. Uses `window.scrollTo({ top: 0, behavior: 'smooth' })`.

---

### Footer.tsx

Three-column layout: brand identity (logo + tagline), quick links (same smooth-scroll navigation as the navbar), and social icon links. On mobile it stacks to a single column and centers everything.

---

## Theming System

The design system is built entirely on CSS custom properties defined in `src/index.css`. Both light and dark themes are declared; `next-themes` swaps the `.dark` class on `<html>` to switch between them. The default theme is dark, with system detection disabled:

```tsx
// src/App.tsx
<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
```

### Color Tokens (Dark Theme)

| Token | Value | Usage |
|---|---|---|
| `--background` | `235 40% 5%` | Page background |
| `--foreground` | `210 40% 98%` | Primary text |
| `--primary` | `265 95% 68%` | Accent purple (buttons, gradients) |
| `--secondary` | `174 95% 55%` | Teal accent |
| `--accent` | `330 95% 65%` | Pink accent |
| `--muted` | `235 25% 14%` | Subtle surface backgrounds |
| `--card` | `235 35% 8%` | Card backgrounds |
| `--border` | CSS variable | Borders and dividers |

All tokens are expressed as bare HSL channel values (`H S% L%`) so Tailwind's opacity modifier syntax works correctly, for example `bg-primary/20` for a 20% opacity primary.

---

## Routing

React Router DOM v6 is configured in `src/App.tsx` with two routes:

```tsx
<BrowserRouter>
  <Routes>
    <Route path="/"  element={<Index />} />
    <Route path="*"  element={<NotFound />} />
  </Routes>
</BrowserRouter>
```

All navigation within the site is anchor-based smooth scroll — React Router is present for the 404 fallback and future multi-page expansion.

---

## Animations and Scroll Behavior

Entrance animations rely on `IntersectionObserver`. Each section holds a `isVisible` boolean that flips to `true` once the section crosses a threshold (typically 20%). Tailwind transitions drive the visual change:

```tsx
className={`transition-all duration-700 ${
  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
}`}
```

Staggered children use inline `style={{ transitionDelay: '${n}ms' }}`.

Custom Tailwind animations defined in `tailwind.config.ts`:

| Animation | Keyframes | Usage |
|---|---|---|
| `animate-fade-in` | opacity 0 to 1 over 0.6s | Hero heading |
| `animate-slide-up` | opacity + translateY over 0.6s | Hero subtext and buttons |
| `animate-float` | translateY 0 to -20px, loop | Decorative floating elements |
| `animate-bounce-slow` | built-in modified | Scroll indicator chevron |

---

## Typography

Two font families are imported from Google Fonts in `index.html`:

| Family | Weights | Used for |
|---|---|---|
| Orbitron | 400–900 | Headings, nav links, labels, buttons |
| Poppins | 300–800 | Body text, descriptions |
| Space Grotesk | 400–700 | Supplementary UI text |

They are registered in `tailwind.config.ts` as `font-orbitron` and `font-poppins` utility classes.

---

## Social Links and Contact

| Platform | Handle | URL |
|---|---|---|
| TikTok | @equinox.interactive | https://tiktok.com/@equinox.interactive |
| Twitter / X | @EquinoxIntratve | https://x.com/EquinoxIntratve |
| Instagram | @equinox.interactive | https://instagram.com/equinox.interactive |

These are defined as static arrays in both `ContactSection.tsx` and `Footer.tsx`. To update them, edit the `socialLinks` array in each file.

---

## Asset Management

Static assets imported by components are placed in `src/assets/` and handled by Vite's asset pipeline (hashed filenames in production):

```
src/assets/
├── logo.png          -- 1:1 square, used at h-8/h-10 (32–40px)
├── Team.png          -- Team group photo, used at max-w-xs in About section
├── box-siege.jpg     -- 16:9 game screenshot, hero image in Portfolio
├── BadutZY.jpg       -- Team member avatar, rendered at 160x160 / 192x192px
├── SwimmingFOX.jpg   -- Team member avatar
└── Ari.jpg           -- Team member avatar
```

The video background (`bg.mp4`) is placed in `public/` so it is served directly as `/bg.mp4` without bundling. This avoids including a large binary in the Vite module graph.

---

## Getting Started

### Requirements

- Node.js 18 or later
- npm 9 or later (or an equivalent package manager)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/equinox-interactive-website.git
cd equinox-interactive-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server starts at `http://localhost:8080` by default (configured in `vite.config.ts`). Hot Module Replacement is enabled; the error overlay is disabled to reduce visual noise during development.

### Path Alias

The `@` alias resolves to `src/`. All internal imports should use this alias:

```ts
// Correct
import Navbar from '@/components/Navbar';
import { cn } from '@/lib/utils';

// Avoid
import Navbar from '../../components/Navbar';
```

This is configured in both `vite.config.ts` and `tsconfig.app.json`:

```ts
// vite.config.ts
resolve: {
  alias: { '@': path.resolve(__dirname, './src') }
}
```

```json
// tsconfig.app.json
{
  "compilerOptions": {
    "paths": { "@/*": ["./src/*"] }
  }
}
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite development server on port 8080 |
| `npm run build` | Production build output to `dist/` |
| `npm run build:dev` | Development-mode build (source maps, no minification) |
| `npm run preview` | Serve the production build locally for inspection |
| `npm run lint` | Run ESLint across all TypeScript and TSX files |
| `npm run test` | Run Vitest test suite once |
| `npm run test:watch` | Run Vitest in watch mode |

---

## Build and Deployment

### Production Build

```bash
npm run build
```

Output is written to `dist/`. The build uses `@vitejs/plugin-react-swc` for fast TypeScript transpilation via SWC.

### Deployment Checklist

Before deploying, confirm the following:

1. `public/bg.mp4` is present — the hero section video will silently fail without it.
2. All Google Fonts are loading correctly; the import is in `index.html` so it is not affected by Vite's bundling.
3. Social links in `ContactSection.tsx` and `Footer.tsx` are up to date.
4. The portfolio link (`https://box-siege.vercel.app/`) resolves correctly.
5. Run `npm run lint` and `npm run test` with zero errors before pushing.

### Recommended Deployment Platforms

The project is a static SPA and can be deployed to any static hosting service. Configure the host to serve `index.html` for all routes (SPA fallback) so that direct navigation to `/*` routes does not 404.

| Platform | Notes |
|---|---|
| Vercel | Connect the GitHub repo; zero-config for Vite |
| Netlify | Add `_redirects` file: `/* /index.html 200` |
| GitHub Pages | Use `gh-pages` package with `base` set in `vite.config.ts` |

---

## Configuration Reference

### vite.config.ts

```ts
export default defineConfig(({ mode }) => ({
  server: {
    host: '::',   // Listens on all interfaces including IPv6
    port: 8080,
    hmr: { overlay: false },
  },
  plugins: [
    react(),                                          // SWC-powered React plugin
    mode === 'development' && componentTagger(),      // lovable-tagger (dev only)
  ].filter(Boolean),
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
}));
```

### tailwind.config.ts

Key extensions on top of the Tailwind defaults:

- Custom font families: `font-orbitron`, `font-poppins`
- Extended color palette with full shadcn/ui token set plus `dark`, `light`, and gray scale overrides
- Custom `keyframes` and `animation` utilities: `fade-in`, `slide-up`, `float`
- `darkMode: ['class']` — theme switching via the `.dark` class on `<html>`

### components.json (shadcn/ui)

```json
{
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": { "config": "tailwind.config.ts", "css": "src/index.css", "baseColor": "slate" },
  "aliases": { "components": "@/components", "utils": "@/lib/utils" }
}
```

---

## Contributing

Contributions are welcome. To contribute:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and verify them in the development server.
4. Run `npm run lint` and `npm run test` before committing.
5. Commit with a descriptive message: `git commit -m "feat: description of change"`
6. Push your branch: `git push origin feature/your-feature-name`
7. Open a Pull Request describing what was changed and why.

### Coding Conventions

- All components are written as named function declarations and exported as `default`.
- Internal imports use the `@/` path alias at all times.
- Static data arrays (nav links, team members, social links) are declared at module scope above the component, not inside it.
- `IntersectionObserver` instances are always cleaned up with `observer.disconnect()` in the `useEffect` return function.
- Event listeners added via `window.addEventListener` are always cleaned up in the `useEffect` return function with the matching `removeEventListener` call.
- New UI primitives should be generated via `npx shadcn-ui@latest add <component>` rather than written by hand.

---

## License

This project is currently unlicensed. All rights are retained by Equinox Interactive unless otherwise specified. Contact the project maintainer before using code or assets from this repository in other works.

---

<div align="center">

**Equinox Interactive — Built with React, TypeScript, and Vite**

*Small Team. Big Dreams.*

</div>