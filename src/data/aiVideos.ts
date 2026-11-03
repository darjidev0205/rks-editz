export interface AIVideoProject {
  id: string;
  index: string;
  category: 'AI REEL' | 'AI COMMERCIAL' | 'AI VISUAL' | 'AI SHORT' | 'SYNTHETIC MOTION';
  title: string;
  subtitle: string;
  description: string;
  aspect: 'portrait' | 'landscape';
  featured?: boolean;
  poster: string;
  videoUrl: string;
  duration: string;
  tags: string[];
}

export const AI_VIDEOS_DATA: AIVideoProject[] = [
  {
    id: 'ai-01',
    index: '01',
    category: 'AI COMMERCIAL',
    title: 'Cybernetic Genesis',
    subtitle: 'Brand Spec Film / Worldbuilding',
    description: 'Hyper-stylized cinematic universe crafted through multi-model diffusion and precision temporal coherence.',
    aspect: 'landscape',
    poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_2MB.mp4',
    duration: '0:45',
    tags: ['Midjourney v6', 'Runway Gen-3', 'Sound Design'],
  },
  {
    id: 'ai-02',
    index: '02',
    category: 'AI REEL',
    title: 'Synthetic Metamorphosis',
    subtitle: 'High-Retention Editorial Reel',
    description: 'Rapid-cut fashion surrealism engineered for viral social engagement with zero stock clichés.',
    aspect: 'portrait',
    poster: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_1MB.mp4',
    duration: '0:28',
    tags: ['Kling AI', 'Motion Tracking', 'Color Grade'],
  },
  {
    id: 'ai-03',
    index: '03',
    category: 'AI VISUAL',
    title: 'Neural Dreamscapes',
    subtitle: 'Centerpiece Showreel Showcase',
    description: 'Our flagship experimental short merging photorealistic neural rendering with cinematic orchestral pacing.',
    aspect: 'landscape',
    featured: true,
    poster: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_2MB.mp4',
    duration: '01:14',
    tags: ['Luma Dream Machine', 'After Effects', 'Neural Grading'],
  },
  {
    id: 'ai-04',
    index: '04',
    category: 'AI SHORT',
    title: 'Echoes of Tomorrow',
    subtitle: 'Vertical Storytelling Piece',
    description: 'Episodic character-driven micro-narrative maintaining facial consistency across generative cuts.',
    aspect: 'portrait',
    poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_1MB.mp4',
    duration: '0:34',
    tags: ['Face Consistency', 'Pacing Benchmark', 'Audio FX'],
  },
  {
    id: 'ai-05',
    index: '05',
    category: 'SYNTHETIC MOTION',
    title: 'Kinetic Monolith',
    subtitle: 'Commercial Title Sequence',
    description: 'Organic silicon fluid dynamics combined with heavy type animation and sub-bass audio mastering.',
    aspect: 'landscape',
    poster: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_2MB.mp4',
    duration: '0:50',
    tags: ['CGI + Diffusion', '4K Master', 'Film Grain'],
  },
];
