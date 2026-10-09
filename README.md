# Harish Pranav S — Personal Engineering Portfolio

A premium, responsive, editorial personal portfolio designed and engineered for **Harish Pranav S** (Electronics and Communication Engineering Student, Embedded Systems & IoT Enthusiast).

Built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **Lucide React**, and **Framer Motion**.

---

## Table of Contents

1. [Features & Design System](#features--design-system)
2. [Project Structure](#project-structure)
3. [Quick Start (Installation & Dev)](#quick-start)
4. [How to Add Profile Images](#how-to-add-profile-images)
5. [How to Add Project Images](#how-to-add-project-images)
6. [How to Add or Update Projects](#how-to-add-or-update-projects)
7. [How to Add Certificates](#how-to-add-certificates)
8. [How to Update Hackathons & Achievements](#how-to-update-hackathons--achievements)
9. [How to Update Contact Details](#how-to-update-contact-details)
10. [How to Replace the Resume PDF](#how-to-replace-the-resume-pdf)
11. [Vercel Deployment Instructions](#vercel-deployment-instructions)

---

## Features & Design System

- **Zero Broken Images Guarantee**: Dedicated smart fallback system with customized SVG circuit blueprints and mathematical schematics when images are pending upload.
- **Accessible & Responsive**: Fully accessible modal dialogs with focus management, Escape key support, body scroll locking, and zero horizontal page overflow across mobile (320px–430px) and desktop.
- **Editorial Engineering Aesthetics**: Minimalist charcoal typography (`#0f172a`), refined emerald accents (`#059669`), subtle technical grid backdrops, and interactive project filters.
- **Static & Fast**: Completely static frontend build without requiring complex database dependencies or server-side setups.

---

## Project Structure

```text
harish-pranav-portfolio/
│
├── public/
│   ├── favicon.svg             # Custom SVG engineering favicon
│   └── resume.pdf              # Owner's resume PDF (place here)
│
├── images/                     # Dedicated folders for manual photo placement
│   ├── My Essentials/          # profile.jpg, profile-about.jpg, profile-secondary.jpg
│   ├── My Projects/            # Project folders (neoguard, sentinel, smart-bms, etc.)
│   ├── My Certificates/        # Certificate photographs & credentials
│   ├── My Achievements/        # Hackathon awards & selection certificates
│   └── My Events/              # Event coordination & symposium photographs
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navigation with scroll indicator & mobile drawer
│   │   ├── Hero.tsx            # Introduction with engineering coordinates & profile badge
│   │   ├── About.tsx           # Academic narrative, 4 focus pillars, and interests
│   │   ├── Skills.tsx          # Interactive capability matrix
│   │   ├── Projects.tsx        # Featured slider & searchable project gallery
│   │   ├── ProjectCard.tsx     # Responsive cards with blueprint fallbacks
│   │   ├── ProjectDetails.tsx  # Accessible technical specification modal
│   │   ├── Achievements.tsx    # Hackathon awards, selections & certificate preview
│   │   ├── Experience.tsx      # Technical event coordination & student leadership
│   │   ├── Education.tsx       # B.E. ECE degree details & CGPA record
│   │   ├── Certificates.tsx    # Categorized credential cards with modal viewer
│   │   ├── Resume.tsx          # On-page CV section & PDF preview modal
│   │   ├── Contact.tsx         # Direct communication links & copy actions
│   │   ├── Footer.tsx          # Quick links, social profiles, and scroll-to-top
│   │   ├── ProfilePhoto.tsx    # Smart profile photo loader with monogram fallback
│   │   ├── ProjectBlueprintVisual.tsx # Custom SVG technical blueprints
│   │   └── SafeImage.tsx       # Fallback-aware image component
│   │
│   ├── data/                   # Centralized content files (easy to edit)
│   │   ├── profile.ts
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   ├── achievements.ts
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   └── certificates.ts
│   │
│   ├── hooks/
│   │   └── useScrollProgress.ts
│   │
│   ├── utils/
│   │   └── assetPaths.ts
│   │
│   ├── styles/
│   │   ├── global.css
│   │   └── animations.css
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
└── README.md
```

---

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build
```bash
npm run build
```
Creates an optimized static bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## How to Add Profile Images

1. Place your photo in the `images/My Essentials/` directory.
2. Name your primary photo `profile.jpg`:
   ```text
   images/My Essentials/profile.jpg
   ```
3. The website automatically detects the image and replaces the engineering monogram placeholder with your photo. No code changes required!

---

## How to Add Project Images

Each project has its dedicated directory inside `images/My Projects/`:

- `images/My Projects/neoguard/`
- `images/My Projects/sentinel/`
- `images/My Projects/bilifusion/`
- `images/My Projects/smart-railway-safety/`
- `images/My Projects/smart-bms/`
- `images/My Projects/gobardhan/`
- `images/My Projects/groundguard/`
- `images/My Projects/fenceora/`
- `images/My Projects/lifebeep/`
- `images/My Projects/ev-energy-recovery/`
- `images/My Projects/hfss-antenna/`
- `images/My Projects/other-projects/`

To add photos:
1. Copy your project photos (e.g. `overview.jpg`, `prototype.jpg`) into the respective directory.
2. Open `src/data/projects.ts` and ensure the `imagePaths` array lists your file names, for example:
   ```ts
   imagePaths: [
     "images/My Projects/neoguard/overview.jpg",
     "images/My Projects/neoguard/prototype.jpg"
   ]
   ```
3. If an image is not yet available, the website seamlessly renders an architectural blueprint visual.

---

## How to Add or Update Projects

Open `src/data/projects.ts` and add a new entry to `projectsData`:

```ts
{
  id: "your-project-id",
  title: "Project Title",
  shortDescription: "A concise 1-2 sentence overview.",
  fullDescription: "Detailed technical background and engineering description.",
  category: "Embedded Systems", // Must match one of the categories
  technologies: ["ESP32", "C++", "Sensors"],
  imagePaths: ["images/My Projects/your-project-id/photo1.jpg"],
  featured: false, // Set to true to highlight in the top slider
  status: "Prototype Tested",
  githubUrl: null, // Or your GitHub repository link
  demoUrl: null,   // Or your live demo link
  problemStatement: "Problem being addressed...",
  solution: "Proposed technical solution...",
  workingPrinciple: "Operating mechanics...",
  hardwareComponents: ["Sensor 1", "Microcontroller"],
  softwareComponents: ["Firmware", "Dashboard"]
}
```

---

## How to Add Certificates

1. Place certificate image files into `images/My Certificates/`.
2. Open `src/data/certificates.ts` and add a new entry:
   ```ts
   {
     id: "cert-new",
     title: "Certificate of Merit",
     issuer: "Competition Organization",
     category: "Hackathons", // "Hackathons" | "Workshops" | "Technical Training" | "Research" | "Other Certifications"
     year: "2026",
     imagePath: "images/My Certificates/my-certificate.jpg",
     description: "Details regarding the achievement."
   }
   ```

---

## How to Update Hackathons & Achievements

Open `src/data/achievements.ts`. You can update, add, or categorize entries as:
- `"Award"` (Prize-winning results)
- `"Selection"` (Institutional or district top participant selections)
- `"Participation"` (Symposiums & hackathon participation)

---

## How to Update Contact Details

All contact links, emails, and social handles are centralized in a single file: `src/data/profile.ts`:

```ts
contact: {
  email: "harishpranavs259@gmail.com",
  phone: "+91 7845693765",
  github: "https://github.com/hyprpranav",
  linkedin: "https://www.linkedin.com/in/harish-pranav-s-030756364",
  instagram: "https://instagram.com/p_r_a_n_a_v.kvg",
  existingPortfolio: "https://hyprpanav.vercel.app",
}
```
Updating this object updates links in the Hero, Contact, and Footer components automatically.

---

## How to Replace the Resume PDF

1. Export your resume as a PDF.
2. Save it as `public/resume.pdf`.
3. The website will immediately detect the file, enabling both the in-browser PDF preview modal and direct downloads.

---

## Vercel Deployment Instructions

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit of Harish Pranav personal portfolio"
   git branch -M main
   git remote add origin https://github.com/hyprpranav/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Click **Add New...** -> **Project**.
4. Import your `hyprpranav/portfolio` repository.
5. In the configuration screen:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**.
7. Once deployed, verify your live domain.
