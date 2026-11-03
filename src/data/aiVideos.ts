export interface AIVideoProject {
  id: string;
  index: string;
  category: string;
  title: string;
  duration: string;
  poster: string;
  videoUrl: string;
}

export const AI_VIDEOS_DATA: AIVideoProject[] = [
  {
    id: 'ai-01',
    index: '01',
    category: 'AI COMMERCIAL',
    title: 'Cybernetic Genesis',
    duration: '0:45',
    poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_2MB.mp4',
  },
  {
    id: 'ai-02',
    index: '02',
    category: 'AI REEL',
    title: 'Synthetic Metamorphosis',
    duration: '0:28',
    poster: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_1MB.mp4',
  },
  {
    id: 'ai-03',
    index: '03',
    category: 'NEURAL VISUAL',
    title: 'Neural Dreamscapes',
    duration: '01:14',
    poster: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_2MB.mp4',
  },
  {
    id: 'ai-04',
    index: '04',
    category: 'AI SHORT',
    title: 'Echoes of Tomorrow',
    duration: '0:34',
    poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_1MB.mp4',
  },
  {
    id: 'ai-05',
    index: '05',
    category: 'SYNTHETIC MOTION',
    title: 'Kinetic Monolith',
    duration: '0:50',
    poster: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_2MB.mp4',
  },
  {
    id: 'ai-06',
    index: '06',
    category: 'SPEC FILM',
    title: 'Digital Organics',
    duration: '0:42',
    poster: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_2MB.mp4',
  },
];
