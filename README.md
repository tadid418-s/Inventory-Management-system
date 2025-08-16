# InventoryOS — Smart Inventory Management Landing

Marketing site for InventoryOS, a modern inventory management platform. Built with Next.js 14, Tailwind CSS, and HeroUI. Includes product sections, ETB pricing with monthly/yearly toggle, and animated UI components.

![Preview](/app/opengraph-image.png)

## Table of Contents

- [Tech Stack](#tech-stack)
- [Key Features](#key-features)
- [Structure](#structure)
- [Getting Started](#getting-started)
- [Development Scripts](#development-scripts)
- [Customization](#customization)
- [Credits](#credits)
- [License](#license)

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- HeroUI (Cards, Buttons, Accordion, Tooltip)
- Framer Motion (subtle animations)

## Key Features

- Hero with product preview and CTA
- Features grid with improved borders for light/dark modes
- How it works section with interactive steps
- Pricing in Ethiopian Birr (ETB) with Monthly/Yearly toggle
  - Yearly applies a 15% reduction to the per‑month price and displays a “billed yearly” note
  - Plan tiers: Basic, Premium (popular), Enterprise
- Testimonials carousel
- Partners grid
- FAQ with accordion
- Consistent section pills (FAQ-style) across sections where appropriate
- Accessible, responsive layout with keyboard focus states

## Structure

- `app/`
  - `layout.tsx`: global styles, fonts, metadata (including favicon)
  - `page.tsx`: assembles the homepage
  - `providers.tsx`: UI providers
- `components/`
  - `hero.tsx`, `features.tsx`, `how-it-works.tsx`, `pricing.tsx`, `testimonials.tsx`, `partners.tsx`, `faq.tsx`, `stats.tsx`
  - `ui/`: shared UI (glowing-effect, infinite-moving-cards, tabs, etc.)

## Getting Started

1. Clone: `git clone https://github.com/tadid418-s/Inventory-Management-system.git`
2. Install deps: `npm install`
3. Start dev server: `npm run dev`
4. Visit `http://localhost:3000`

## Development Scripts

- `npm run dev` — start Next.js dev server
- `npm run build` — production build
- `npm run start` — start production server

## Pricing Configuration

Pricing lives in `components/pricing.tsx`.

- Plans are defined in the `plans` array with `monthlyPriceETB` and features
- Billing cycle state controls monthly/yearly rendering; yearly uses `Math.round(monthly * 0.85)`
- Update ETB values, plan names, and features to match your offering

## Theming & Styles

- Tailwind config in `tailwind.config.ts`
- Global styles in `app/globals.css`
- Light/dark borders tuned in `components/features.tsx`

## Favicon

- Place your icon at `app/favicon.ico`
- Metadata in `app/layout.tsx` declares the icon for robustness

## Customization Tips

- Section pills: use `text-xs uppercase tracking-wide px-3 py-1 rounded-full border border-border bg-background/70`
- Animations: Framer Motion variants are configured for smooth, subtle motion
- Images: replace assets in `public/Images/`

## Credits

- HeroUI components
- Radix Icons
- Community patterns and inspiration

## License

MIT — see [`license.txt`](./license.txt)
