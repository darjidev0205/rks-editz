import { useState, useEffect } from 'react';
import { SmoothScrollProvider } from './components/ui/SmoothScrollProvider';
import { GlassNavbar } from './components/navigation/GlassNavbar';
import { Hero } from './components/hero/Hero';
import { SelectedWork } from './components/works/SelectedWork';
import { BehindTheFeedback } from './components/testimonials/BehindTheFeedback';
import { About } from './components/about/About';
import { Services } from './components/services/Services';
import { CreativeProcess } from './components/process/CreativeProcess';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { WhatsAppButton } from './components/ui/WhatsAppButton';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Active section tracking for navbar & cinematic frame timeline
  useEffect(() => {
    const sectionIds = ['hero', 'work', 'testimonials', 'about', 'services', 'process', 'contact'];
    
    const handleScroll = () => {
      // Bottom of page check for final contact frame
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection('contact');
        return;
      }

      const scrollY = window.scrollY + window.innerHeight * 0.35;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#F7F6F0] text-[#222A25] selection:bg-[#1E3027] selection:text-[#F7F6F0] overflow-x-hidden flex flex-col justify-between">
        {/* Floating Editorial Glass Navbar */}
        <GlassNavbar activeSection={activeSection} />

        {/* Main Editorial Flow */}
        <main className="flex-grow">
          {/* Section 01: Hero with Two Continuously Moving Video Rows */}
          <Hero />

          {/* Section 02 (Main Feature): Pinned Horizontal Portfolio Scroll with 6 Staggered Cards */}
          <SelectedWork />

          {/* Section 03: Behind The Feedback — Real 16:9 Client Video Testimonial Experience */}
          <BehindTheFeedback />

          {/* Section 03: About RKA Editz ("There's More to an Edit Than Just Cutting Clips.") */}
          <About />

          {/* Section 04: Interactive Services ("What We Bring to the Frame.") */}
          <Services />

          {/* Section 05: Compact Connected Process ("Discover → Shape → Create → Refine") */}
          <CreativeProcess />

          {/* Section 06: Final Photographic CTA & Two Wide Cards */}
          <Contact />
        </main>

        {/* Studio Footer */}
        <Footer />

        {/* Official WhatsApp Floating Contact Button */}
        <WhatsAppButton />
      </div>
    </SmoothScrollProvider>
  );
}

export default App;
