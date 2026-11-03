import { useState, useEffect } from 'react';
import { SmoothScrollProvider } from './components/ui/SmoothScrollProvider';
import { GlassNavbar } from './components/navigation/GlassNavbar';
import { Hero } from './components/hero/Hero';
import { SelectedWork } from './components/works/SelectedWork';
import { About } from './components/about/About';
import { Services } from './components/services/Services';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { WhatsAppButton } from './components/ui/WhatsAppButton';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Active section tracking for navbar
  useEffect(() => {
    const sectionIds = ['hero', 'showcase', 'about', 'services', 'contact'];
    
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
      <div className="relative min-h-screen bg-[#0A0B0D] text-[#F4F3EF] selection:bg-[#E8E7E3] selection:text-[#111214] overflow-x-hidden flex flex-col justify-between">
        {/* Floating Apple-Inspired Glass Navbar */}
        <GlassNavbar activeSection={activeSection} />

        {/* Main Editorial Flow */}
        <main className="flex-grow">
          {/* 1. Hero Section (Spacious Intro + Right Upper Visual Cluster) */}
          <Hero />

          {/* 2. Middle Main Showcase (Staggered Vertical Cards + Horizontal Flow + Layered Photos) */}
          <SelectedWork />

          {/* 3. About / Approach (Layered Studio Photo + Floating Glass Statement) */}
          <About />

          {/* 4. Services (Capabilities & Weekly Retainers) */}
          <Services />

          {/* 5. Bottom Section (Two Horizontally Wide Cards + Quick Brief) */}
          <Contact />
        </main>

        {/* 6. Footer */}
        <Footer />

        {/* Monochromatic Quick-Chat Button */}
        <WhatsAppButton />
      </div>
    </SmoothScrollProvider>
  );
}

export default App;
