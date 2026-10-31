export interface Project {
  id: string;
  title: string;
  category: 'Documentaries' | 'Short Form' | '3D & Motion' | 'Commercial' | 'Travel';
  subtitle: string;
  year: string;
  duration?: string;
  aspectRatio: '16/9' | '9/16' | '4/5';
  role: string;
  client: string;
  synopsis: string;
  tools: string[];
  image: string;
  videoPreview?: string;
  badge?: string;
  featured?: boolean;
}

export const CATEGORIES = [
  'All',
  'Documentaries',
  'Short Form',
  '3D & Motion',
  'Commercial',
  'Travel',
] as const;

export type ProjectCategory = typeof CATEGORIES[number];

export const PROJECTS: Project[] = [
  {
    id: 'noir-luxe',
    title: 'NOIR LUXE',
    category: 'Commercial',
    subtitle: 'Editorial Fashion Campaign',
    year: '2024',
    duration: '01:45',
    aspectRatio: '9/16',
    role: 'Lead Editor & Colorist',
    client: 'Maison Noir Studio',
    synopsis: 'A high-contrast monochrome fashion campaign exploring architectural silhouettes, shadow choreography, and tactile silk textiles in a brutalist setting.',
    tools: ['DaVinci Resolve', 'Premiere Pro', 'FilmConvert'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6oRbG6Rl3fL7gv02vLkjiAPbzuAKkeB9rvgkbfsuA_1TzrWYcg0x6SFryc3ug_7m5ofnGsXRgChrll2pH6euz6mFA67kiO04s6IdJDcxjmwYDpwNUmMfO9mr65cHPEg-Fm5bqjaHaFcsy2ISQCyWJJbYsSuErYbIgKMeSrN8ZDIAOCGn92Lz2Kk7kvqw9r1geDOL-VGVfJuoZYlJJKgJR5hVB7VdVcNNZt6wylDs',
    videoPreview: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-black-and-white-42511-large.mp4',
    badge: '01 / COMMERCIAL',
    featured: true,
  },
  {
    id: 'the-artisans-touch',
    title: "The Artisan's Touch",
    category: 'Documentaries',
    subtitle: 'Documentary / 35mm',
    year: '2024',
    duration: '04:12',
    aspectRatio: '16/9',
    role: 'Director & Editor',
    client: 'Cremona Master Luthiers',
    synopsis: 'An intimate portrait of a third-generation violin maker in his candlelit workshop, capturing the rhythmic scraping of spruce wood and acoustic resonance.',
    tools: ['Premiere Pro', 'DaVinci Resolve Studio', 'iZotope RX'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBL7hs5BjUXjdMSI2igwgLmUoEk9veFXsFLCfkh3IGYtOenOuY23MHjOtCDCXfLMJI4ctTNDxqJ8tVndTGPazxR65oa_F7Wwb6y_Ka9SdixuI7qI6efCmUJYL5vZwNfcm4abKZ6HIRzY6Qs36Ebx_Onm5GHCylUA6d_jQZcX24vak72PmMlrPZJ6d78IFTYgynKrIuzxg85LRJfMLKeJZSaw29bz6rax771ARPkcQ4',
    videoPreview: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-carpenter-measuring-a-piece-of-wood-42475-large.mp4',
    badge: '35MM REEL',
    featured: true,
  },
  {
    id: 'aura-ss25',
    title: 'Aura SS25',
    category: 'Commercial',
    subtitle: 'Fashion Film',
    year: '2024',
    duration: '00:58',
    aspectRatio: '9/16',
    role: 'Motion & Offline Editor',
    client: 'AURA Collective',
    synopsis: 'Experimental vertical runway treatment featuring ambient soundscape layering and subtle analog film halation.',
    tools: ['After Effects', 'Premiere Pro'],
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    videoPreview: 'https://assets.mixkit.co/videos/preview/mixkit-model-walking-on-a-catwalk-41443-large.mp4',
    badge: 'VERTICAL',
  },
  {
    id: 'tokyo-rain-echoes',
    title: 'Tokyo Rain Echoes',
    category: 'Short Form',
    subtitle: 'Short Form / Grade',
    year: '2024',
    duration: '01:15',
    aspectRatio: '9/16',
    role: 'Colorist & Sound Design',
    client: 'Personal Narrative',
    synopsis: 'Cinematic night rain street capture in Shinjuku illuminated by crimson and amber neon lanterns with organic water reflections.',
    tools: ['DaVinci Resolve', 'Logic Pro'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHvvLPgP-25amfCD0a87qPD0ih7TX0IpPYvtOY3K7Al6alUbpb7H9Ebwi2X2nP-9DnD3c1xoUi0M81azfvrELpDU65XqvfBFTRHvUFYDhf1x8uQBTttjd0NFnNKkm6ZeS5ElVwjkx14QeQzhsVKgo8iaAW5eBtYfnsat1EGQc0wYGbGPmk8GHkG2KydMGXpw4hEo0bnvKWMGMgd3-VPc1gLN6Kr8sjKXd1avx3TFg',
    videoPreview: 'https://assets.mixkit.co/videos/preview/mixkit-night-street-in-tokyo-under-the-rain-43285-large.mp4',
    badge: 'GRADE',
  },
  {
    id: 'midnight-horizon',
    title: 'Midnight Horizon',
    category: 'Commercial',
    subtitle: 'Commercial / Automotive',
    year: '2024',
    duration: '02:30',
    aspectRatio: '16/9',
    role: 'Lead Commercial Editor',
    client: 'Apex Automotive',
    synopsis: 'Twilight desert highway crossing under deep obsidian skies, punctuated with electric crimson tail-light streaks and dynamic tracking rhythms.',
    tools: ['Premiere Pro', 'Cinema 4D', 'DaVinci Resolve'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFjXhGeuTRHyCOW81rac4_210Sb45F5zJi_wLYdnY3xRN_BS8WYVnKUloNYr3isJgQGo8IXAShjLZ1AvL6q66CKT8dqWrDM_nLKRrto4KviBsR3EfLwZ32X1aivKaiCaqI68XWYpSGh_Uo96OvkqYaxG1713-DjVzD2N1f_6Dpx1GMzqFMNUn5Wx97K0tJprvpFnK6CcuWoPOTussAZjvI6dYzfZaYIeU0w3_loPg',
    videoPreview: 'https://assets.mixkit.co/videos/preview/mixkit-car-driving-along-a-curved-road-at-dusk-41617-large.mp4',
    badge: 'CAMPAIGN',
    featured: true,
  },
  {
    id: 'kinetic-dimensions',
    title: 'Kinetic Dimensions',
    category: '3D & Motion',
    subtitle: 'Brand Identity Motion',
    year: '2024',
    duration: '01:00',
    aspectRatio: '16/9',
    role: '3D Motion Designer',
    client: 'Hyperform Architecture',
    synopsis: 'Abstract architectural 3D simulations celebrating modular structural forms, brutalist monoliths, and light ray refractions.',
    tools: ['Blender', 'After Effects', 'Octane'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    videoPreview: 'https://assets.mixkit.co/videos/preview/mixkit-futuristic-building-with-dynamic-lights-42474-large.mp4',
    badge: '3D SIMULATION',
  },
  {
    id: 'kyoto-solitude',
    title: 'Kyoto Solitude',
    category: 'Travel',
    subtitle: 'Visual Travel Diary',
    year: '2023',
    duration: '03:10',
    aspectRatio: '16/9',
    role: 'Cinematographer & Editor',
    client: 'Wanderlust Films',
    synopsis: 'A meditative visual journey through the cedar forests and historic stone shrines of Arashiyama, edited to a contemplative tempo.',
    tools: ['DaVinci Resolve', 'Premiere Pro'],
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
    videoPreview: 'https://assets.mixkit.co/videos/preview/mixkit-bamboo-forest-in-japan-42478-large.mp4',
    badge: '4K ARCHIVE',
  },
  {
    id: 'sonic-pulse',
    title: 'Sonic Pulse',
    category: 'Short Form',
    subtitle: 'Music Video Reel',
    year: '2024',
    duration: '00:45',
    aspectRatio: '9/16',
    role: 'Offline Editor',
    client: 'Subterranean Records',
    synopsis: 'Rapid-cut syncopated pacing matching heavy industrial basslines with glitch typography and high-shutter visual cadence.',
    tools: ['Premiere Pro', 'After Effects'],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop',
    videoPreview: 'https://assets.mixkit.co/videos/preview/mixkit-dj-playing-music-at-a-club-party-42484-large.mp4',
    badge: 'SHORT REEL',
  }
];
