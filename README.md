# Animation 3D Website

A strawberry-themed product landing page for **Primo Strawberry**, built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. The page pairs a scroll-driven bottle visual with animated product storytelling, product details, and a simple add-to-bag interaction.

## Features

- Scroll-based product bottle animation
- Animated page transitions and section reveals
- Responsive product landing page layout
- Product information maintained in a typed data file
- Reduced-motion support for the freshness section
- Add-to-bag button interaction

## Tech stack

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Getting started

### Prerequisites

- Node.js (a current LTS release is recommended)
- npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Create a production build

```bash
npm run build
```

## Project structure

```text
├── app/                 # Next.js app entry point, page, and global styles
├── components/          # Navigation, footer, bottle animation, and overlays
├── data/                # Typed product content
├── public/              # Static assets used by the site
└── package.json         # Scripts and dependencies
```

The product content is defined in `data/products.ts`. The bottle animation component is `components/ProductBottleScroll.tsx`; its image assets are referenced from the public directory.

## Customization

Update the product name, copy, price, features, and section content in `data/products.ts`. Place or replace the corresponding static visual assets under `public/` and keep the asset path in the product data in sync.

## License

No license has been specified for this repository.
