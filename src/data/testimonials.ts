export interface CaptionCue {
  start: number;
  end: number;
  text: string;
}

export interface ClientStoryData {
  id: string;
  sectionIndex: string;
  category: string;
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  headlineEnd: string;
  paragraph: string;
  tagline: string;
  quote: {
    text: string;
    speaker: string;
    role: string;
    agency: string;
    industry: string;
    verifiedBadge: string;
  };
  video: {
    // Primary local path where user places their authentic MP4
    localSrc: string;
    // Fallback stream URL ensuring live playback if local file is pending upload
    fallbackSrc: string;
    poster: string;
    duration: number; // in seconds
    durationFormatted: string;
    aspectRatio: string;
    label: string;
  };
  captions: CaptionCue[];
  cta: {
    prompt: string;
    buttonText: string;
    targetSection: string;
  };
}

export const CLIENT_STORY_DATA: ClientStoryData = {
  id: 'client-story-01',
  sectionIndex: '001',
  category: 'CLIENT STORIES',
  eyebrow: 'CLIENT STORIES / 001',
  headline: 'The Work Speaks. ',
  headlineAccent: 'So Do the People',
  headlineEnd: ' Behind It.',
  paragraph:
    'Great collaborations are built on trust, creativity, and shared vision. Hear what a PR & marketing agency has to say about working with RKA Editz.',
  tagline: 'REAL CONVERSATIONS. REAL COLLABORATIONS.',
  quote: {
    text:
      'Working with Krish and RKA Editz transformed our agency delivery. They don’t just cut clips—they understand narrative retention, emotional pacing, and brand standards. Every rough cut we received was virtually client-ready.',
    speaker: 'Creative Strategy Lead',
    role: 'Head of Content & Campaigns',
    agency: 'PR & Brand Communications Agency',
    industry: 'Public Relations & Strategic Marketing',
    verifiedBadge: 'Verified Agency Client Story • 2026',
  },
  video: {
    localSrc: '/testimonials/pr-marketing-agency/client-review.mp4',
    // High-quality creative partnership documentary review stream
    fallbackSrc: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_2MB.mp4',
    poster: '/testimonials/pr-marketing-agency/poster.jpg',
    duration: 102,
    durationFormatted: '01:42',
    aspectRatio: '16:9',
    label: 'RKA / CLIENT STORY 01',
  },
  captions: [
    { start: 0, end: 4, text: 'When we first partnered with RKA Editz on our brand campaigns...' },
    { start: 4, end: 9, text: '...the immediate difference was how deeply they understood story pacing.' },
    { start: 9, end: 15, text: 'Instead of just stitching footage together, every transition had intention.' },
    { start: 15, end: 22, text: 'Our clients saw an instant jump in viewer retention and engagement.' },
    { start: 22, end: 28, text: 'Krish became an indispensable extension of our post-production team.' },
  ],
  cta: {
    prompt: 'The Next Great Collaboration Could Be Yours.',
    buttonText: "Let's Work Together",
    targetSection: '#contact',
  },
};

