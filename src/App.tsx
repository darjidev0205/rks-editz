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
import { WhatsAppButton } from './components/ui/WhatsAppButton';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Active section tracking for navbar
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

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#0D0E10] text-[#F4F3EF] selection:bg-[#E8E7E3] selection:text-[#111214] overflow-x-hidden flex flex-col justify-between">
        {/* Floating Apple-Inspired Glass Navbar */}
        <GlassNavbar activeSection={activeSection} />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Selected Work Gallery - Inline Playback, Balanced Editorial Grid */}
          <SelectedWork />

          {/* 3. Services ("What I Do") */}
          <Services />

          {/* 4. About ("Behind the Edit") */}
          <About />

          {/* 5. Creative Process */}
          <CreativeProcess />

          {/* 6. Contact Finale */}
          <Contact />
        </main>

        {/* 7. Footer */}
        <Footer />

        {/* Monochromatic Apple-style Floating Contact / WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </SmoothScrollProvider>
  );
}

export default App;
