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
    id: 'reels-shorts-editing',
    number: '02',
    title: 'Reels / Shorts Editing',
    tagline: 'High-retention vertical reels engineered for aggressive audience retention.',
    description: 'Hook-driven pacing, custom kinetic captions, fast sound SFX, and platform-optimized color grades designed to stop the thumb from scrolling.',
    deliverables: ['9:16 Vertical Reels', 'TikTok Campaigns', 'YouTube Shorts Cutdowns', 'Hook Testing & Iterations'],
  },
  {
    id: 'brand-content',
    number: '03',
    title: 'Brand Content',
    tagline: 'Commercial films and product showcases crafted with high-end visual tone.',
    description: 'High-contrast lighting, tactile sound design, and color grading that elevates brand positioning into luxury and agency-grade tier.',
    deliverables: ['Product Spotlights', 'Brand Manifestos', 'Fashion & Editorial Films', 'Crowdfunding Campaigns'],
  },
  {
    id: 'motion-graphics',
    number: '04',
    title: 'Motion Graphics',
    tagline: 'Creative 2D/3D visuals and animated storytelling that simplify complex ideas.',
    description: 'Bespoke kinetic typography, title sequences, 3D product simulations, and clean UI animations to support the narrative flow.',
    deliverables: ['Custom Title Sequences', 'Kinetic Typography', '3D Brand Visuals', 'HUD & UI Overlays'],
  },
  {
    id: 'social-media-creative-support',
    number: '05',
    title: 'Social Media Creative Support',
    tagline: 'Comprehensive editing retainers for creators and fast-growing visual brands.',
    description: 'Consistent weekly turnaround, brand guidelines synchronization, footage vault archival, and multi-format aspect deliveries.',
    deliverables: ['Weekly Creator Retainers', 'Multi-Aspect Exports', 'Asset Vault Archival', 'Thumbnail Frame Direction'],
  },
];
