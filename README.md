# RKA EDITZ — Premium Cinematic Portfolio

> High-caliber digital gallery portfolio for **Krish Patel (RKA EDITZ)** — Director, Video Editor & Creative Producer.
> Built with React, TypeScript, Vite, Tailwind CSS, GSAP ScrollTrigger, and Lenis smooth scrolling.

---

## ✦ Aesthetic & Design System

- **Palette Architecture:**
  - Obsidian Darkroom Base: `#101214`
  - Primary Stitch Surface: `#121416`
  - Graphite Trench: `#1C2022`
  - Elevated Slate: `#25292B`
  - Muted Sage Hero Accent: `#C4D6C6`
  - Sage Radiance Hover: `#DCE8DD`
  - Warm Ivory Display Text: `#F5F3ED` / `#E2E2E5`
  - Muted Silver Metadata: `#A3AAA9`
  - Light Editorial Canvas: `#ECECE6` & Deep Carbon `#171A19` (About Section)
- **Typography:**
  - Display & Headers: **Geist** with tight editorial negative tracking (`-0.03em` to `-0.04em`)
  - Body & Narratives: **Inter** for effortless readability
  - Eyebrows & Technical Trackers: **Geist** uppercase with `0.18em` tracking

---

## ✦ Cinematic Motion Map (Inspired by ACE Creative)

1. **Global Scrolling Engine:**
   - Desktop: Hardware-accelerated Lenis smooth wheel scrolling with natural deceleration.
   - Mobile: Native responsive touch scrolling with zero scroll hijacking or gesture interference.
   - RequestAnimationFrame unified ticker binding Lenis and GSAP ScrollTrigger.
   - `prefers-reduced-motion` detection and graceful degradation.

2. **Hero Staged Entrance:**
   - **Stage 1:** Floating capsule navigation gently settles in.
   - **Stage 2:** Live status eyebrow pulses and reveals.
   - **Stage 3:** Headline `"Stories, Shaped to Stay."` line-by-line masked reveals using overflow-hidden wrappers.
   - **Stage 4:** Editorial subhead & signature fade upward with staggered delay.
   - **Stage 5:** Primary and secondary CTA buttons materialize.
   - **Stage 6:** Dual-layered cinematic media cards reveal via clip-path wipe and settle from `1.06` scale.

3. **Section-to-Section Transitions:**
   - **Hero → Selected Work:** Subtle upward parallax handoff into asymmetric portfolio grid.
   - **Selected Work:** Clip-path reveal on entry, silent muted video previews on desktop hover, category filtering (All, Documentaries, Short Form, 3D & Motion, Commercial, Travel), and full interactive modal with video player, synopsis, and tech specs.
   - **Selected Work → Services:** Editorial handoff into `"What I Do."` with expanding hairline dividers and expandable capability cards.
   - **Services → About:** Seamless daylight transition into the `#ECECE6` Light Editorial Monograph canvas with Krish Patel's B&W portrait vertical reveal and Director's Statement.
   - **About → Creative Process:** Return to Obsidian darkroom theme with a scroll-scrubbed interactive vertical timeline extending through Phases 01 to 04 with illuminated nodes.
   - **Contact Finale:** Masked typography `"Let's Make Something Matter"`, direct booking action, inquiry quick-form, and social channels.

4. **Floating WhatsApp Button:**
   - Floating quick-chat CTA inspired by *yashsharmadigital.com* with a subtle pulsating indicator and quick-messaging pre-filled brief.

---

## ✦ Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v22.22.2)
- npm or pnpm

### Development
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
npm run preview
```

---

## ✦ Vercel Deployment

This project is pre-configured for instant zero-configuration deployment on [Vercel](https://vercel.com):
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

