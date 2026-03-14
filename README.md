# Muhammad Wamiq Abbasi - Portfolio

React portfolio site presenting software engineering work, internal systems experience, and a featured full-stack LMS project.

## Overview
This portfolio presents:
- software engineering work relevant to hiring managers and recruiters
- public-sector systems and workflow delivery experience
- frontend implementation with responsive layout and polished motion
- a featured BrightPath LMS case section that highlights full-stack product work

The site is built as a modular React application using reusable components, global CSS tokens, fluid responsive patterns, and Framer Motion for subtle interaction design.

## Tech Stack
- React 19
- Vite 7
- Framer Motion
- Lucide React icons
- CSS (custom, mobile-first, fluid scale)

## Project Structure
```
src/
  components/
    Hero.jsx
    About.jsx
    FeaturedProject.jsx
    Projects.jsx
    Contact.jsx
  content/
    portfolioContent.js
  lib/
    animations.js
  App.jsx
  main.jsx
  index.css
public/
  favicon.svg
```

## Run Locally
### Prerequisites
- Node.js 18+
- npm 9+

### Install
```bash
npm install
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

## Key Frontend Decisions
- **Fluid responsiveness**: Uses `clamp()`, `min()`, flexible grids, and responsive gutters to scale from mobile to large desktop screens.
- **Modular architecture**: Content is separated from presentation so portfolio messaging can be updated without rewriting layout logic.
- **Performance-conscious visuals**: CSS-based layered backgrounds and restrained motion for polish without heavy runtime cost.
- **Accessible motion**: Honors `prefers-reduced-motion`.
- **Professional presentation**: The site balances product polish with practical engineering-focused project descriptions.

## Recruiter Notes
This portfolio highlights:
- full-stack and frontend project work
- end-to-end delivery and production-minded cleanup
- public-sector systems experience alongside personal software projects

## Contact
- Email: `muhammadabbasi1020@gmail.com`
- GitHub: `https://github.com/Muhammad-W-Abbasi`
- LinkedIn: `https://www.linkedin.com/in/wamiqabbasi/`
