# Minakshi Banerjee | Portfolio Vol.2

A premium, interactive graphic design portfolio built using **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. It showcases branding identity, digital content, packaging, and UI designs with a clean, dynamic, scroll-free aesthetic.

---

## 🚀 Key Features

* **Scroll-Free Section Designs**: Selected Works sections automatically adjust their height (`h-auto`) on all device screens so that all visual design grids are fully visible without awkward internal scrollbars.
* **Exact Native Aspect Ratios**: Images are rendered using their exact native aspect ratios to guarantee **zero cropping** and **zero clipping**:
  * **YouTube Thumbnails**: `aspect-video` (16:9 ratio, `1280x720`)
  * **Beauty UI Designs (Mobile)**: `aspect-[402/874]` (tall phone mockups)
  * **Affecté Products (Branding)**: `aspect-[3/4]` (portrait packaging, `1200x1600`)
  * **Insta Works & Ecommerce**: `aspect-[4/5]` (standard Instagram posts, `1080x1350`)
* **Responsive Layouts**: Responsive grids that automatically switch from mobile (single/double columns) to tablet (2 columns) to desktop (3, 4, or 5 columns based on image count).
* **Enhanced Visual Canvas**: Grid containers are configured to support wider desktop displays up to `max-w-[1600px]`, making the images larger and more impactful.
* **Modern Aesthetics**: Curated dark and HSL-tailored colored background sections, subtle custom typography, grain overlay textures, and custom interactive cursor/preloader elements.
* **Fluid Animations**: Smooth scrolling and staggered entrance animations.

---

## 🛠️ Technology Stack

* **Framework**: Next.js 14 (App Router)
* **Styling**: Tailwind CSS & Vanilla CSS
* **Animations**: Framer Motion
* **Icons**: Lucide React

---

## 📂 Project Structure

```bash
├── app/
│   ├── components/            # Reusable UI sections & components
│   │   ├── Animations.tsx     # Framer Motion motion-wrappers
│   │   ├── SelectedWorksSection.tsx # Unified grid container for projects
│   │   ├── HeroSection.tsx    # Header & introductory fold
│   │   └── ...                # Other section components
│   ├── globals.css            # Global styling, fonts & scrollbars
│   ├── layout.tsx             # HTML structure & metadata wrapper
│   └── page.tsx               # Main portfolio landing page structure
├── public/
│   └── images/                # Visual assets, mockup files & thumbnails
├── tailwind.config.ts         # Tailwind configuration
└── tsconfig.json              # TypeScript configuration
```

---

## ⚙️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production
```bash
npm run build
```
