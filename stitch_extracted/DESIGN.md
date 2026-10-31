---
name: Atelier Obsidian
colors:
  surface: '#121416'
  surface-dim: '#121416'
  surface-bright: '#38393c'
  surface-container-lowest: '#0c0e10'
  surface-container-low: '#1a1c1e'
  surface-container: '#1e2022'
  surface-container-high: '#282a2c'
  surface-container-highest: '#333537'
  on-surface: '#e2e2e5'
  on-surface-variant: '#c3c8c1'
  inverse-surface: '#e2e2e5'
  inverse-on-surface: '#2f3133'
  outline: '#8d928c'
  outline-variant: '#434843'
  surface-tint: '#b9cbbb'
  primary: '#e0f2e2'
  on-primary: '#253429'
  primary-container: '#c4d6c6'
  on-primary-container: '#4d5d51'
  inverse-primary: '#526255'
  secondary: '#c4c7c9'
  on-secondary: '#2d3133'
  secondary-container: '#464a4c'
  on-secondary-container: '#b5b9bb'
  tertiary: '#ffe8ea'
  on-tertiary: '#412a2d'
  tertiary-container: '#ecc9cc'
  on-tertiary-container: '#6d5356'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d5e7d7'
  primary-fixed-dim: '#b9cbbb'
  on-primary-fixed: '#101f15'
  on-primary-fixed-variant: '#3b4a3f'
  secondary-fixed: '#e0e3e5'
  secondary-fixed-dim: '#c4c7c9'
  on-secondary-fixed: '#181c1e'
  on-secondary-fixed-variant: '#434749'
  tertiary-fixed: '#fedadd'
  tertiary-fixed-dim: '#e0bec1'
  on-tertiary-fixed: '#2a1619'
  on-tertiary-fixed-variant: '#594043'
  background: '#121416'
  on-background: '#e2e2e5'
  surface-variant: '#333537'
typography:
  display-hero:
    fontFamily: Geist
    fontSize: 5rem
    fontWeight: '600'
    lineHeight: 5.25rem
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Geist
    fontSize: 2.75rem
    fontWeight: '600'
    lineHeight: 3rem
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Geist
    fontSize: 3.5rem
    fontWeight: '500'
    lineHeight: 3.75rem
    letterSpacing: -0.035em
  headline-xl-mobile:
    fontFamily: Geist
    fontSize: 2.25rem
    fontWeight: '500'
    lineHeight: 2.5rem
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Geist
    fontSize: 2.25rem
    fontWeight: '500'
    lineHeight: 2.75rem
    letterSpacing: -0.025em
  headline-md:
    fontFamily: Geist
    fontSize: 1.5rem
    fontWeight: '500'
    lineHeight: 2rem
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 1.125rem
    fontWeight: '500'
    lineHeight: 1.6rem
    letterSpacing: -0.015em
  body-lead:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: '400'
    lineHeight: 2rem
    letterSpacing: -0.01em
  body-default:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.65rem
    letterSpacing: -0.005em
  body-diminished:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.45rem
    letterSpacing: '0'
  eyebrow-tracked:
    fontFamily: Geist
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.18em
  label-mono:
    fontFamily: Geist
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: 1.15rem
    letterSpacing: 0.02em
  caption:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: 1.1rem
    letterSpacing: 0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-tablet: 2.5rem
  margin-desktop: 4.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

The design system establishes a high-caliber digital gallery aesthetic suited for high-end video editing, creative direction, and cinematic storytelling. It departs from cliché creator portfolios loaded with aggressive RGB accents, noisy particle effects, and kinetic overkill. Instead, it embodies the restrained confidence of an archival art book, an architectural monograph, or a bespoke post-production house.

The aesthetic philosophy rests upon:
- **Curated Negative Space:** Broad visual margins that allow film stills, typography, and motion artifacts to command full sensory attention.
- **Editorial Contrast:** Dual-tonality canvas shifts where the core darkroom atmosphere (Obsidian) transitions gracefully into select daylight gallery plates (Light Editorial Canvas) for treatments, director's statements, and narrative breakdowns.
- **Precision Restraint:** Purposeful interactions with zero bouncy physics; motion is deliberate, linear-damped, and subtle, reflecting an editor's frame-accurate sensibility.

## Colors

The palette mimics physical editing suites and photographic darkrooms—shadow-rich environments designed to maximize color fidelity and focus.

### Palette Architecture
- **Obsidian Darkroom Base (`#101214`):** The primary immersion background. Pure enough to vanish into high-grade displays while warm enough to avoid sterile pitch-black dead zones.
- **Graphite Trench (`#1C2022`):** Structural panels, audio meters, secondary structural bars, and modal underlays.
- **Elevated Slate (`#25292B`):** Surface tier for interactive cards, project tiles, and elevated film metadata badges.
- **Muted Sage (`#C4D6C6`):** The exclusive hero accent. Kept strictly below 10% spatial coverage; reserved for refined primary actions, precise status indicators, and selected timeline cursors.
- **Sage Radiance (`#DCE8DD`):** Micro-interaction hover target for accent triggers.
- **Warm Ivory (`#F5F3ED`):** Display headers and primary readable copy, engineered with an antique milk tint to eliminate digital eye fatigue.
- **Muted Silver (`#A3AAA9`):** Secondary metadata, timestamps, frame rates, and editorial subheads.
- **Light Editorial Canvas (`#ECECE6`) & Deep Carbon (`#171A19`):** Complementary daytime reading canvas used in modular long-form case studies or press features.

### Borders & Translucency
- **Dark Perimeter:** `rgba(255, 255, 255, 0.09)` hair-thin keylines defining structure without creating harsh geometric cages.
- **Editorial Light Perimeter:** `rgba(20, 25, 22, 0.12)` for inverted daylight modules.
- **Obsidian Glass:** `rgba(28, 32, 34, 0.80)` with 16px backdrop-blur and a top-edge linear white highlight (`rgba(255, 255, 255, 0.06)`).

## Typography

The typographic engine uses a Swiss neo-grotesque hierarchy, pairing `Geist` for architectural headings, numbers, and technical metadata with `Inter` for long-form case studies and production treatments.

### Hierarchy & Style Rules
- **Eyebrows & Technical Trackers:** Always formatted uppercase with generous tracking (`0.18em`). Used to designate project categories (e.g., `COMMERCIAL // 4K NATIVE`), timeline positions, client names, and reel durations.
- **Display Typography:** Heavy negative kerning (`-0.03em` to `-0.04em`) creates a tight, unified word-unit cadence reminiscent of editorial cinema credits.
- **Body & Narrative Flow:** Body copy stays comfortably open (`line-height: 1.65rem`) to guarantee effortless readability across low-light displays.

## Layout & Spacing

Layouts follow an asymmetric 12-column architectural grid inspired by modernist art posters and film contact sheets.

### Form Factors & Breakpoints
- **Mobile (< 768px):** 4-column single-stream presentation. Gutters set to `1.5rem` with `1.25rem` outer canvas padding. Media blocks expand full-bleed or maintain 16:9 and 9:16 vertical reels without horizontal margin wastage.
- **Tablet (768px – 1024px):** 8-column layout. Side-by-side film metadata and preview screens begin to detach into independent vertical scrollers. Outer margin spans `2.5rem`.
- **Desktop (1024px+):** 12-column asymmetric canvas. Grid spans up to a maximum constrained width of `1600px`. Standard margins extend to `4.5rem`. Asymmetrical splits (7 cols visual / 5 cols editorial, or 8 cols video / 4 cols project data) provide dynamic cadence.

Vertical rhythm relies on generous structural breaks: sections breathe with `space-xl` scaled up to `6rem` or `8rem` margins between distinct acts.

## Elevation & Depth

Visual hierarchy uses physical material stratification instead of pronounced drop shadows. In a dark room interface, blur spreads must be low to avoid cheapening the mood.

### Tiers of Depth
- **Level 0 (The Trench — `#101214`):** Canvas backdrop, static viewport boundaries, and letterboxed gutters.
- **Level 1 (Submerged Containers — `#1C2022`):** Video thumbnail wrappers, navigation bar track, and lower third project docks.
- **Level 2 (Active Cards & Trays — `#25292B`):** Hover-activated project units, floating playback controls, and contact dialogue surfaces. Finished with a hair-thin perimeter of `rgba(255, 255, 255, 0.09)`.
- **Level 3 (Modal Stage & Focus Drawers):** `#1C2022` at 80% opacity with a hardware-accelerated 16px backdrop-filter blur. Outlined by an inset 1px highlight line (`rgba(255, 255, 255, 0.06)`).

Deep black ambient drop shadows (`rgba(0, 0, 0, 0.45)`, 24px blur, 0px offset) are permitted exclusively on active elevated popovers and video overlay controls.

## Shapes

The interface embraces a tailored industrial profile (`roundedness: 1`). Corners remain sharp and architectural, rejecting bubbly consumer geometries in favor of precision monitor panels and studio gear.

- **Base Radius (`0.25rem` / `4px`):** Applied to badges, project tags, film timecodes, text inputs, and technical buttons.
- **Card & Frame Radius (`0.5rem` / `8px`):** Applied to video showcase frames, media modals, and elevated portfolio cards.
- **Floating Overlays & Controls (`0.75rem` / `12px`):** Maximum radius used in the system, reserved for floating central action bars, audio scrubbers, and glass navigation pills.

## Components

### Buttons & CTAs
- **Primary Action (Direct / Booking):** Background in Muted Sage (`#C4D6C6`), typography in Dark Carbon (`#171A19`), font-weight 500, padding `0.75rem 1.5rem`. Smooth hover transition to Sage Radiance (`#DCE8DD`). No drop shadows.
- **Secondary (Watch Reel / Case Study):** Transparent base with hair-thin border (`rgba(255, 255, 255, 0.09)`), Warm Ivory text (`#F5F3ED`). Hover state fills background with Graphite (`#1C2022`) and lightens border to `rgba(255, 255, 255, 0.20)`.
- **Micro / Icon Controls:** 40x40px square with 4px corner rounding. Graphite background, Warm Ivory icon.

### Chips & Technical Eyebrows
- **Pill Badges:** Graphite background (`#1C2022`), borders in `rgba(255, 255, 255, 0.09)`, text in Muted Silver (`#A3AAA9`), Geist font family, uppercase tracking `0.18em`. Height strictly locked to 24px.
- **Active State:** Border shifts to Muted Sage (`#C4D6C6`), text transitions to Warm Ivory (`#F5F3ED`).

### Media Portfolio Cards & Video Grids
- **Base Style:** Background `#25292B`, border `1px solid rgba(255, 255, 255, 0.09)`, radius 8px.
- **Media Preview:** Contained within a 16:9 or 9:16 aspect ratio box with zero overflow. Video auto-previews on hover with an imperceptible 400ms cross-dissolve.
- **Meta Bar:** Positioned flush beneath media with space-md padding: Left-aligned title in Geist Headline-SM; right-aligned timecode and role tag in Label-Mono.

### Form Inputs & Inquiry Fields
- **Fields:** Flush `#1C2022` fill, 1px border (`rgba(255, 255, 255, 0.09)`), 4px radius, Warm Ivory input text, Muted Silver placeholder.
- **Focus State:** Border transitions cleanly to Muted Sage (`#C4D6C6`) with zero glow/outer-ring dispersion.

### Bespoke System Elements
- **Custom Timecode Scrub-bar:** 2px rail in Graphite (`#1C2022`) with an active timeline fill in Muted Sage (`#C4D6C6`). Thumb is a crisp 6x14px vertical rectangle, active only on hover.
- **Floating Island Navigation:** Anchored to screen top or bottom, built with Obsidian Glass (`rgba(28, 32, 34, 0.80)`, 16px blur), containing minimalist tab links spaced with `space-md` gaps.