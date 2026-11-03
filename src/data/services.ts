export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  image: string;
  accent: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'short-form-video-editing',
    number: '01',
    title: 'Short-Form Video Editing',
    tagline: 'High-retention vertical reels and shorts engineered to stop the scroll.',
    description: 'Hook-driven pacing, dynamic sound SFX, kinetic typography, and surgical frame-level timing built specifically for modern audience attention.',
    deliverables: ['9:16 Vertical Reels', 'TikTok Campaigns', 'YouTube Shorts', 'Hook Iterations & Variations'],
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=900&auto=format&fit=crop',
    accent: '#DDE9D7',
  },
  {
    id: 'documentary-long-form-editing',
    number: '02',
    title: 'Documentary and Long-Form Editing',
    tagline: 'Thoughtful narrative editing bringing structure, emotion, and cinematic depth.',
    description: 'Precision offline and online assembly focusing on pacing, narrative arcs, and emotional resonance. Cutting the fluff and letting compelling storytelling breathe.',
    deliverables: ['Documentary Features', 'Episodic Series', 'Narrative Shorts', 'Deep-Dive Creator Essays'],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=900&auto=format&fit=crop',
    accent: '#EDF2E9',
  },
  {
    id: 'brand-product-content',
    number: '03',
    title: 'Brand and Product Content',
    tagline: 'Commercial films and product showcases crafted with distinctive visual tone.',
    description: 'Sharp visual sequencing, color finishing, and tactile sound design that elevate brand positioning and present products in an aspirational light.',
    deliverables: ['Product Spotlights', 'Brand Anthems & Manifestos', 'Commercial Launch Spots', 'Social Lookbooks'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=900&auto=format&fit=crop',
    accent: '#DDE9D7',
  },
  {
    id: 'motion-graphics-explainers',
    number: '04',
    title: 'Motion Graphics and Explainers',
    tagline: 'Clear, engaging visual explanations supported by purposeful motion design.',
    description: 'Bespoke kinetic typography, title sequences, 2D/3D product simulations, and clean UI animations to clarify complex concepts effortlessly.',
    deliverables: ['Kinetic Typography', 'Title Sequences', 'Diagrams & Data Visuals', 'Product 3D Simulations'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop',
    accent: '#EDF2E9',
  },
  {
    id: 'creative-content-support',
    number: '05',
    title: 'Creative Content Support',
    tagline: 'From content concepts to final delivery, ongoing creative production support.',
    description: 'Consistent weekly turnaround, brand guidelines synchronization, footage vault archival, and multi-format aspect deliveries for fast-moving creators.',
    deliverables: ['Weekly Retainers', 'Multi-Aspect Ratio Exports', 'Vault Archiving', 'Thumbnail Direction'],
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=900&auto=format&fit=crop',
    accent: '#DDE9D7',
  },
];
