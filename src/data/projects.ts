export interface Project {
  id: string;
  title: string;
  category: 'Reels' | 'Brand Films' | 'Documentary Style' | 'Social Media Edits' | 'Product Videos' | 'Motion Graphics';
  subtitle: string;
  year: string;
  aspectRatio: '16/9' | '9/16';
  role: string;
  client: string;
  image: string;
  bgBackdrop: string;
  videoUrl?: string;
  badge?: string;
  offsetY?: 'up' | 'down' | 'neutral';
}

export const CATEGORIES = [
  'All',
  'Reels',
  'Brand Films',
  'Documentary Style',
  'Social Media Edits',
  'Product Videos',
  'Motion Graphics',
] as const;

export type ProjectCategory = typeof CATEGORIES[number];

export const PROJECTS: Project[] = [
  {
    id: 'noir-luxe',
    title: 'NOIR LUXE',
    category: 'Brand Films',
    subtitle: 'Editorial Fashion Campaign',
    year: '2024',
    aspectRatio: '9/16',
    role: 'Lead Editor & Colorist',
    client: 'Maison Noir Studio',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6oRbG6Rl3fL7gv02vLkjiAPbzuAKkeB9rvgkbfsuA_1TzrWYcg0x6SFryc3ug_7m5ofnGsXRgChrll2pH6euz6mFA67kiO04s6IdJDcxjmwYDpwNUmMfO9mr65cHPEg-Fm5bqjaHaFcsy2ISQCyWJJbYsSuErYbIgKMeSrN8ZDIAOCGn92Lz2Kk7kvqw9r1geDOL-VGVfJuoZYlJJKgJR5hVB7VdVcNNZt6wylDs',
    bgBackdrop: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_1MB.mp4',
    badge: 'FEATURED REEL',
    offsetY: 'up',
  },
  {
    id: 'the-artisans-touch',
    title: "The Artisan's Touch",
    category: 'Documentary Style',
    subtitle: '35mm Craftsman Narrative',
    year: '2024',
    aspectRatio: '16/9',
    role: 'Director & Editor',
    client: 'Cremona Master Luthiers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBL7hs5BjUXjdMSI2igwgLmUoEk9veFXsFLCfkh3IGYtOenOuY23MHjOtCDCXfLMJI4ctTNDxqJ8tVndTGPazxR65oa_F7Wwb6y_Ka9SdixuI7qI6efCmUJYL5vZwNfcm4abKZ6HIRzY6Qs36Ebx_Onm5GHCylUA6d_jQZcX24vak72PmMlrPZJ6d78IFTYgynKrIuzxg85LRJfMLKeJZSaw29bz6rax771ARPkcQ4',
    bgBackdrop: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_2MB.mp4',
    badge: '35MM GRAIN',
    offsetY: 'down',
  },
  {
    id: 'midnight-horizon',
    title: 'Midnight Horizon',
    category: 'Product Videos',
    subtitle: 'Automotive Twilight Campaign',
    year: '2024',
    aspectRatio: '16/9',
    role: 'Commercial Editor',
    client: 'Apex Automotive',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFjXhGeuTRHyCOW81rac4_210Sb45F5zJi_wLYdnY3xRN_BS8WYVnKUloNYr3isJgQGo8IXAShjLZ1AvL6q66CKT8dqWrDM_nLKRrto4KviBsR3EfLwZ32X1aivKaiCaqI68XWYpSGh_Uo96OvkqYaxG1713-DjVzD2N1f_6Dpx1GMzqFMNUn5Wx97K0tJprvpFnK6CcuWoPOTussAZjvI6dYzfZaYIeU0w3_loPg',
    bgBackdrop: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_2MB.mp4',
    badge: 'COMMERCIAL',
    offsetY: 'up',
  },
  {
    id: 'aura-ss25',
    title: 'Aura SS25',
    category: 'Reels',
    subtitle: 'Runway Editorial Short',
    year: '2024',
    aspectRatio: '9/16',
    role: 'Offline Editor',
    client: 'AURA Collective',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    bgBackdrop: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_1MB.mp4',
    badge: 'VIRAL REEL',
    offsetY: 'down',
  },
  {
    id: 'tokyo-rain-echoes',
    title: 'Tokyo Rain Echoes',
    category: 'Social Media Edits',
    subtitle: 'Night Street Atmosphere',
    year: '2024',
    aspectRatio: '9/16',
    role: 'Colorist & Sound Design',
    client: 'Personal Narrative',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHvvLPgP-25amfCD0a87qPD0ih7TX0IpPYvtOY3K7Al6alUbpb7H9Ebwi2X2nP-9DnD3c1xoUi0M81azfvrELpDU65XqvfBFTRHvUFYDhf1x8uQBTttjd0NFnNKkm6ZeS5ElVwjkx14QeQzhsVKgo8iaAW5eBtYfnsat1EGQc0wYGbGPmk8GHkG2KydMGXpw4hEo0bnvKWMGMgd3-VPc1gLN6Kr8sjKXd1avx3TFg',
    bgBackdrop: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_1MB.mp4',
    badge: 'COLOR GRADE',
    offsetY: 'up',
  },
  {
    id: 'kinetic-dimensions',
    title: 'Kinetic Dimensions',
    category: 'Motion Graphics',
    subtitle: 'Architectural Simulation',
    year: '2024',
    aspectRatio: '16/9',
    role: '3D Motion Designer',
    client: 'Hyperform Architecture',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    bgBackdrop: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_2MB.mp4',
    badge: '3D MOTION',
    offsetY: 'down',
  },
];
