export interface ProcessPhase {
  phase: string;
  title: string;
  description: string;
  details: string[];
}

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    phase: 'PHASE 01',
    title: 'Understand',
    description: 'Deconstructing creative vision, tone requirements, cadence and emotional pacing before a single cut is made.',
    details: ['Creative briefing & script analysis', 'Tone board & editorial reference mapping', 'Footage ingestion & metadata tagging'],
  },
  {
    phase: 'PHASE 02',
    title: 'Create',
    description: 'Assembly edit, rhythm sculpting, sound design architecture and integrated graphic treatments.',
    details: ['Rough cut assembly & narrative pacing', 'Sound effect & score integration', 'Motion graphics & title layouts'],
  },
  {
    phase: 'PHASE 03',
    title: 'Refine',
    description: 'Frame-by-frame color balancing, optical adjustments, and collaborative feedback loops.',
    details: ['DaVinci Resolve color grading & tone match', 'Audio mixing & dialogue leveling', 'Frame-accurate client review rounds'],
  },
  {
    phase: 'PHASE 04',
    title: 'Deliver',
    description: 'Multi-platform exports, archival master deliverables and tailored short-form cuts.',
    details: ['ProRes 4444 & H.265 master files', 'Vertical 9:16 and social aspect crops', 'Archival project file consolidation'],
  },
];

