export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'video-editing',
    number: '01',
    title: 'Video Editing',
    tagline: 'Clean, thoughtful editing for powerful short- and long-form content.',
    description: 'Precision offline and online assembly focusing on pacing, narrative arcs, and emotional resonance. Every cut serves the narrative purpose, cutting out the fluff and accentuating the core story.',
    deliverables: ['Documentary Features', 'Commercials & Spots', 'Brand Anthems', 'YouTube & Creator Formats'],
  },
  {
    id: 'motion-graphics',
    number: '02',
    title: '3D & Motion Graphics',
    tagline: 'Creative visuals and animated storytelling that simplify complex ideas.',
    description: 'Bespoke kinetic typography, title sequences, 3D simulations, and UI product mockups designed to amplify the cinematic atmosphere without distraction.',
    deliverables: ['Custom Title Sequences', 'Kinetic Typography', '3D Brand Renders', 'HUD & UI Overlays'],
  },
  {
    id: 'creative-production',
    number: '03',
    title: 'Creative Production',
    tagline: 'Concepts, scripting, shooting and comprehensive post-production.',
    description: 'End-to-end creative direction from the initial treatment through production supervision, sound design sculpting, and final master delivery.',
    deliverables: ['Treatment Development', 'Sound Design & Foley', 'Color Grading & Finishing', 'Master Deliverables'],
  },
  {
    id: 'social-content',
    number: '04',
    title: 'Social Content',
    tagline: 'Content designed for modern creators, high-growth products and brands.',
    description: 'High-retention vertical reels, TikToks, and episodic social campaigns crafted with aggressive hook timing and frictionless audience retention.',
    deliverables: ['9:16 Vertical Reels', 'Campaign Cutdowns', 'Organic Social Hooks', 'Ad Creatives & Variations'],
  },
];
