<div align="center">

# 🍓 Primo Strawberry

### An immersive, scroll-driven 3D product landing page

A bold product experience built around smooth motion, rich strawberry visuals, and a responsive editorial-style layout.

[Getting Started](#-getting-started) · [Features](#-features) · [Project Structure](#-project-structure) · [Customization](#-customization)

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-149eca?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06b6d4?logo=tailwindcss)

</div>

---

## Overview

**Primo Strawberry** is a product-focused landing page that turns a simple bottle presentation into an animated web experience. Scroll through the product story, explore its details, and discover a rich visual identity supported by motion and responsive design.

## ✨ Features

- **Scroll-driven bottle animation** to bring the product story to life
- **Motion-enhanced sections** with page transitions and reveal effects
- **Responsive layout** designed for mobile, tablet, and desktop screens
- **Typed product content** managed separately from the page components
- **Reduced-motion consideration** for the freshness section
- **Interactive add-to-bag feedback** in the product call to action

## 🧰 Built with

| Technology | Purpose |
| --- | --- |
| [Next.js](https://nextjs.org/) 16 | React framework and application structure |
| [React](https://react.dev/) 19 | User interface |
| [TypeScript](https://www.typescriptlang.org/) | Typed application code |
| [Tailwind CSS](https://tailwindcss.com/) 3 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animation and scroll interactions |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) — a current LTS release is recommended
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for production

```bash
npm run build
```

## 📁 Project Structure

```text
.
├── app/                 # Next.js page and global styles
├── components/          # Navigation, footer, bottle animation, and overlays
├── data/                # Typed product content
├── public/              # Static assets, including product visuals
└── package.json         # Project scripts and dependencies
```

Product content is defined in `data/products.ts`. The scroll-driven bottle is rendered by `components/ProductBottleScroll.tsx`, with its visual assets served from the `public/` directory.

## 🎨 Customization

- **Product copy and details:** edit the product entry in `data/products.ts`.
- **Product animation visuals:** add or replace the corresponding image sequence in `public/` and keep its path aligned with the product's `folderPath` value.
- **Page sections and interactions:** update the relevant files in `app/` and `components/`.

## 📄 License

No license has been specified for this repository. Please contact the repository owner before reusing or distributing its code.

---

<div align="center">

Made with care for the Primo Strawberry experience 🍓

</div>
