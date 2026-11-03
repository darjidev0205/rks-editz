export interface PortfolioCardData {
  id: string;
  cardIndex: string;
  category: string;
  heading: string;
  description: string;
  client?: string;
  year: string;
  image: string;
  videoUrl?: string;
  aspectRatio: '9/16' | '16/9';
  initialY: number; // e.g. -55, +45
  driftY: number;   // e.g. -18, +18
}

export type Project = PortfolioCardData;

export const PORTFOLIO_CARDS: PortfolioCardData[] = [
  {
    id: 'card-01',
    cardIndex: '01',
    category: 'REELS / SHORTS',
    heading: 'Made to Stop the Scroll.',
    description: 'Fast-paced, purposeful edits that keep people watching.',
    client: 'Maison Noir / Creator Reel',
    year: '2024',
    aspectRatio: '9/16',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6oRbG6Rl3fL7gv02vLkjiAPbzuAKkeB9rvgkbfsuA_1TzrWYcg0x6SFryc3ug_7m5ofnGsXRgChrll2pH6euz6mFA67kiO04s6IdJDcxjmwYDpwNUmMfO9mr65cHPEg-Fm5bqjaHaFcsy2ISQCyWJJbYsSuErYbIgKMeSrN8ZDIAOCGn92Lz2Kk7kvqw9r1geDOL-VGVfJuoZYlJJKgJR5hVB7VdVcNNZt6wylDs',
    videoUrl: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_1MB.mp4',
    initialY: -55,
    driftY: -18,
  },
  {
    id: 'card-02',
    cardIndex: '02',
    category: 'DOCUMENTARY / STORYTELLING',
    heading: 'Stories That Stay With You.',
    description: 'Emotion, pacing, and narrative built frame by frame.',
    client: 'Cremona Master Luthiers',
    year: '2024',
    aspectRatio: '16/9',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBL7hs5BjUXjdMSI2igwgLmUoEk9veFXsFLCfkh3IGYtOenOuY23MHjOtCDCXfLMJI4ctTNDxqJ8tVndTGPazxR65oa_F7Wwb6y_Ka9SdixuI7qI6efCmUJYL5vZwNfcm4abKZ6HIRzY6Qs36Ebx_Onm5GHCylUA6d_jQZcX24vak72PmMlrPZJ6d78IFTYgynKrIuzxg85LRJfMLKeJZSaw29bz6rax771ARPkcQ4',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_2MB.mp4',
    initialY: 45,
    driftY: 18,
  },
  {
    id: 'card-03',
    cardIndex: '03',
    category: 'BRANDED CONTENT',
    heading: 'Make Every Frame Count.',
    description: 'Distinctive visual storytelling for brands and businesses.',
    client: 'Apex Automotive',
    year: '2024',
    aspectRatio: '16/9',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFjXhGeuTRHyCOW81rac4_210Sb45F5zJi_wLYdnY3xRN_BS8WYVnKUloNYr3isJgQGo8IXAShjLZ1AvL6q66CKT8dqWrDM_nLKRrto4KviBsR3EfLwZ32X1aivKaiCaqI68XWYpSGh_Uo96OvkqYaxG1713-DjVzD2N1f_6Dpx1GMzqFMNUn5Wx97K0tJprvpFnK6CcuWoPOTussAZjvI6dYzfZaYIeU0w3_loPg',
    videoUrl: 'https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_2MB.mp4',
    initialY: -45,
    driftY: -22,
  },
  {
    id: 'card-04',
    cardIndex: '04',
    category: 'MOTION / EXPLAINERS',
    heading: 'Complex Ideas. Clear Visuals.',
    description: 'Thoughtful motion graphics that make ideas easier to understand.',
    client: 'Hyperform Architecture',
    year: '2024',
    aspectRatio: '16/9',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_2MB.mp4',
    initialY: 55,
    driftY: 16,
  },
  {
    id: 'card-05',
    cardIndex: '05',
    category: 'CREATIVE PRODUCTION',
    heading: 'From Concept to Final Cut.',
    description: "Creative support from an idea's first frame to its final delivery.",
    client: 'Studio Apex Production',
    year: '2024',
    aspectRatio: '16/9',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_2MB.mp4',
    initialY: -50,
    driftY: -20,
  },
  {
    id: 'card-06',
    cardIndex: '06',
    category: 'SOCIAL CONTENT',
    heading: 'Built for the Digital World.',
    description: 'Modern video content created for the way audiences watch today.',
    client: 'Aura Collective',
    year: '2024',
    aspectRatio: '9/16',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHvvLPgP-25amfCD0a87qPD0ih7TX0IpPYvtOY3K7Al6alUbpb7H9Ebwi2X2nP-9DnD3c1xoUi0M81azfvrELpDU65XqvfBFTRHvUFYDhf1x8uQBTttjd0NFnNKkm6ZeS5ElVwjkx14QeQzhsVKgo8iaAW5eBtYfnsat1EGQc0wYGbGPmk8GHkG2KydMGXpw4hEo0bnvKWMGMgd3-VPc1gLN6Kr8sjKXd1avx3TFg',
    videoUrl: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_1MB.mp4',
    initialY: 40,
    driftY: 18,
  },
];

export const PROJECTS = PORTFOLIO_CARDS;

export interface HeroVideoCard {
  id: string;
  title: string;
  category: string;
  aspect: 'portrait' | 'landscape';
  poster: string;
  videoUrl?: string;
}

export const HERO_ROW_TOP: HeroVideoCard[] = [
  {
    id: 'hero-top-1',
    title: 'Maison Noir Reel',
    category: '9:16 REEL',
    aspect: 'portrait',
    poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6oRbG6Rl3fL7gv02vLkjiAPbzuAKkeB9rvgkbfsuA_1TzrWYcg0x6SFryc3ug_7m5ofnGsXRgChrll2pH6euz6mFA67kiO04s6IdJDcxjmwYDpwNUmMfO9mr65cHPEg-Fm5bqjaHaFcsy2ISQCyWJJbYsSuErYbIgKMeSrN8ZDIAOCGn92Lz2Kk7kvqw9r1geDOL-VGVfJuoZYlJJKgJR5hVB7VdVcNNZt6wylDs',
    videoUrl: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_1MB.mp4',
  },
  {
    id: 'hero-top-2',
    title: 'Cremona Master Luthiers',
    category: 'DOCUMENTARY',
    aspect: 'landscape',
    poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBL7hs5BjUXjdMSI2igwgLmUoEk9veFXsFLCfkh3IGYtOenOuY23MHjOtCDCXfLMJI4ctTNDxqJ8tVndTGPazxR65oa_F7Wwb6y_Ka9SdixuI7qI6efCmUJYL5vZwNfcm4abKZ6HIRzY6Qs36Ebx_Onm5GHCylUA6d_jQZcX24vak72PmMlrPZJ6d78IFTYgynKrIuzxg85LRJfMLKeJZSaw29bz6rax771ARPkcQ4',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_2MB.mp4',
  },
  {
    id: 'hero-top-3',
    title: 'Urban Kinetic Short',
    category: 'CREATIVE',
    aspect: 'portrait',
    poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_1MB.mp4',
  },
  {
    id: 'hero-top-4',
    title: 'Apex Commercial Cut',
    category: 'COMMERCIAL',
    aspect: 'landscape',
    poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFjXhGeuTRHyCOW81rac4_210Sb45F5zJi_wLYdnY3xRN_BS8WYVnKUloNYr3isJgQGo8IXAShjLZ1AvL6q66CKT8dqWrDM_nLKRrto4KviBsR3EfLwZ32X1aivKaiCaqI68XWYpSGh_Uo96OvkqYaxG1713-DjVzD2N1f_6Dpx1GMzqFMNUn5Wx97K0tJprvpFnK6CcuWoPOTussAZjvI6dYzfZaYIeU0w3_loPg',
    videoUrl: 'https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_2MB.mp4',
  },
  {
    id: 'hero-top-5',
    title: 'Nordic Architecture Film',
    category: 'BRAND',
    aspect: 'landscape',
    poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_2MB.mp4',
  },
];

export const HERO_ROW_BOTTOM: HeroVideoCard[] = [
  {
    id: 'hero-bot-1',
    title: 'Studio Apex Production',
    category: 'PRODUCTION',
    aspect: 'landscape',
    poster: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_2MB.mp4',
  },
  {
    id: 'hero-bot-2',
    title: 'Aura Social Campaign',
    category: '9:16 REEL',
    aspect: 'portrait',
    poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHvvLPgP-25amfCD0a87qPD0ih7TX0IpPYvtOY3K7Al6alUbpb7H9Ebwi2X2nP-9DnD3c1xoUi0M81azfvrELpDU65XqvfBFTRHvUFYDhf1x8uQBTttjd0NFnNKkm6ZeS5ElVwjkx14QeQzhsVKgo8iaAW5eBtYfnsat1EGQc0wYGbGPmk8GHkG2KydMGXpw4hEo0bnvKWMGMgd3-VPc1gLN6Kr8sjKXd1avx3TFg',
    videoUrl: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_1MB.mp4',
  },
  {
    id: 'hero-bot-3',
    title: 'Cinematic Sound & Pacing',
    category: 'NARRATIVE',
    aspect: 'landscape',
    poster: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_2MB.mp4',
  },
  {
    id: 'hero-bot-4',
    title: 'Monochrome Fashion Reel',
    category: '9:16 REEL',
    aspect: 'portrait',
    poster: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_1MB.mp4',
  },
  {
    id: 'hero-bot-5',
    title: 'Post-Studio Timeline Suite',
    category: 'EXPLAINER',
    aspect: 'landscape',
    poster: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_2MB.mp4',
  },
];
