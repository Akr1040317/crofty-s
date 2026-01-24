# Crofty's Sporting Collectibles & Things

A sophisticated, vintage-inspired e-commerce landing page for Colin E. H. Croft's cricket memorabilia and vinyl record collection.

## Features

- Elegant heritage design with vintage auction house aesthetic
- Responsive layout for all devices
- Smooth animations and hover effects
- Intersection Observer for scroll-triggered animations
- Premium color palette (dark green, gold, burgundy)
- Serif typography (Playfair Display & Crimson Text)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Header with title and proprietor info
│   ├── Introduction.jsx   # Legacy section with highlight box
│   ├── Gallery.jsx         # Collection items grid
│   ├── Contact.jsx         # Contact methods and transaction note
│   └── Footer.jsx          # Footer with copyright
├── App.jsx                 # Main app component with intersection observer
├── App.css                 # App-level styles
├── main.jsx                # React entry point
└── index.css               # Global styles and CSS variables
```

## Design Specifications

### Color Palette
- Cream: `#FAF8F3` (main background)
- Dark Green: `#1B3A2F` (primary dark, headers)
- Gold: `#C9A961` (accent color, borders)
- Burgundy: `#6B2737` (secondary accent, badges)
- Charcoal: `#2C2C2C` (text color)
- Light Gold: `#E8D7B0` (subtle accents)

### Typography
- Headings: Playfair Display (400, 600, 700, 900)
- Body: Crimson Text (400, 600, italic 400)

## Technologies Used

- React 18
- Vite
- CSS3 (Custom Properties, Grid, Flexbox, Animations)
