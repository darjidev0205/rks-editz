import { useState, useEffect } from 'react';
import { SmoothScrollProvider } from './components/ui/SmoothScrollProvider';
import { GlassNavbar } from './components/navigation/GlassNavbar';
import { Hero } from './components/hero/Hero';
import { SelectedWork } from './components/works/SelectedWork';
import { Services } from './components/services/Services';
import { About } from './components/about/About';
import { CreativeProcess } from './components/process/CreativeProcess';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { ProjectModal } from './components/works/ProjectModal';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { PROJECTS } from './data/projects';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Active section tracking
  useEffect(() => {
    const sectionIds = ['hero', 'works', 'services', 'about', 'process', 'contact'];
    
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.3;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const selectedProject = PROJECTS.find((p) => p.id === selectedProjectId) || null;

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#101214] text-[#E2E2E5] selection:bg-[#C4D6C6] selection:text-[#101F15] overflow-x-hidden flex flex-col justify-between">
        {/* Floating Apple-Inspired Glass Navbar */}
        <GlassNavbar activeSection={activeSection} />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* 1. Hero Section */}
          <Hero onOpenProject={(id) => setSelectedProjectId(id)} />

          {/* 2. Selected Work Gallery */}
          <SelectedWork onOpenProject={(id) => setSelectedProjectId(id)} />

          {/* 3. Services ("What I Do") */}
          <Services />

          {/* 4. About ("Behind the Edit" Light Monograph Transition) */}
          <About />

          {/* 5. Creative Process (Return to Obsidian Dark Theme) */}
          <CreativeProcess />

          {/* 6. Contact Finale */}
          <Contact />
        </main>

        {/* 7. Footer */}
        <Footer />

        {/* Interactive Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProjectId(null)}
        />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppButton />
      </div>
    </SmoothScrollProvider>
  );
}

export default App;
