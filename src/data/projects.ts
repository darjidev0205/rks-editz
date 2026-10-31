export interface Project {
  id: string;
  title: string;
  category: 'Documentaries' | 'Short Form' | '3D & Motion' | 'Commercial' | 'Travel';
  subtitle: string;
  year: string;
  aspectRatio: '16/9' | '9/16';
  role: string;
  client: string;
  image: string;
  videoUrl?: string;
  badge?: string;
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
    id: 'the-artisans-touch',
    title: "The Artisan's Touch",
    category: 'Documentaries',
    subtitle: 'Documentary // 35mm Grain',
    year: '2024',
    aspectRatio: '16/9',
    role: 'Director & Editor',
    client: 'Cremona Master Luthiers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBL7hs5BjUXjdMSI2igwgLmUoEk9veFXsFLCfkh3IGYtOenOuY23MHjOtCDCXfLMJI4ctTNDxqJ8tVndTGPazxR65oa_F7Wwb6y_Ka9SdixuI7qI6efCmUJYL5vZwNfcm4abKZ6HIRzY6Qs36Ebx_Onm5GHCylUA6d_jQZcX24vak72PmMlrPZJ6d78IFTYgynKrIuzxg85LRJfMLKeJZSaw29bz6rax771ARPkcQ4',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_2MB.mp4',
    badge: '35MM REEL',
  },
  {
    id: 'noir-luxe',
    title: 'NOIR LUXE',
    category: 'Commercial',
    subtitle: 'Monochrome Fashion Reel',
    year: '2024',
    aspectRatio: '9/16',
    role: 'Lead Editor & Colorist',
    client: 'Maison Noir Studio',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6oRbG6Rl3fL7gv02vLkjiAPbzuAKkeB9rvgkbfsuA_1TzrWYcg0x6SFryc3ug_7m5ofnGsXRgChrll2pH6euz6mFA67kiO04s6IdJDcxjmwYDpwNUmMfO9mr65cHPEg-Fm5bqjaHaFcsy2ISQCyWJJbYsSuErYbIgKMeSrN8ZDIAOCGn92Lz2Kk7kvqw9r1geDOL-VGVfJuoZYlJJKgJR5hVB7VdVcNNZt6wylDs',
    videoUrl: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_1MB.mp4',
    badge: 'VERTICAL',
  },
  {
    id: 'midnight-horizon',
    title: 'Midnight Horizon',
    category: 'Commercial',
    subtitle: 'Twilight Automotive Campaign',
    year: '2024',
    aspectRatio: '16/9',
    role: 'Commercial Editor',
    client: 'Apex Automotive',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFjXhGeuTRHyCOW81rac4_210Sb45F5zJi_wLYdnY3xRN_BS8WYVnKUloNYr3isJgQGo8IXAShjLZ1AvL6q66CKT8dqWrDM_nLKRrto4KviBsR3EfLwZ32X1aivKaiCaqI68XWYpSGh_Uo96OvkqYaxG1713-DjVzD2N1f_6Dpx1GMzqFMNUn5Wx97K0tJprvpFnK6CcuWoPOTussAZjvI6dYzfZaYIeU0w3_loPg',
    videoUrl: 'https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_2MB.mp4',
    badge: 'CAMPAIGN',
  },
  {
    id: 'aura-ss25',
    title: 'Aura SS25',
    category: 'Commercial',
    subtitle: 'Runway Editorial Film',
    year: '2024',
    aspectRatio: '9/16',
    role: 'Offline Editor',
    client: 'AURA Collective',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_1MB.mp4',
    badge: 'VERTICAL',
  },
  {
    id: 'tokyo-rain-echoes',
    title: 'Tokyo Rain Echoes',
    category: 'Short Form',
    subtitle: 'Ambient Night Rain Grade',
    year: '2024',
    aspectRatio: '9/16',
    role: 'Colorist & Sound Design',
    client: 'Personal Narrative',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHvvLPgP-25amfCD0a87qPD0ih7TX0IpPYvtOY3K7Al6alUbpb7H9Ebwi2X2nP-9DnD3c1xoUi0M81azfvrELpDU65XqvfBFTRHvUFYDhf1x8uQBTttjd0NFnNKkm6ZeS5ElVwjkx14QeQzhsVKgo8iaAW5eBtYfnsat1EGQc0wYGbGPmk8GHkG2KydMGXpw4hEo0bnvKWMGMgd3-VPc1gLN6Kr8sjKXd1avx3TFg',
    videoUrl: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_1MB.mp4',
    badge: 'GRADE',
  },
  {
    id: 'kinetic-dimensions',
    title: 'Kinetic Dimensions',
    category: '3D & Motion',
    subtitle: 'Architectural Simulation',
    year: '2024',
    aspectRatio: '16/9',
    role: '3D Motion Designer',
    client: 'Hyperform Architecture',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_2MB.mp4',
    badge: '3D MOTION',
  },
  {
    id: 'kyoto-solitude',
    title: 'Kyoto Solitude',
    category: 'Travel',
    subtitle: 'Visual Travel Monograph',
    year: '2023',
    aspectRatio: '16/9',
    role: 'Cinematographer & Editor',
    client: 'Wanderlust Films',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_2MB.mp4',
    badge: '4K NATIVE',
  },
  {
    id: 'sonic-pulse',
    title: 'Sonic Pulse',
    category: 'Short Form',
    subtitle: 'Industrial Sound Sync Reel',
    year: '2024',
    aspectRatio: '9/16',
    role: 'Offline Editor',
    client: 'Subterranean Records',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_1MB.mp4',
    badge: 'SHORT REEL',
  }
];
