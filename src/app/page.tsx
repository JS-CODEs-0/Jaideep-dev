import { HeroSection } from '@/components/hero/HeroSection';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { AboutSection } from '@/components/about/AboutSection';
import { TechnologyIndexSection } from '@/components/tech/TechnologyIndexSection';
import { ContactSection } from '@/components/contact/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian">
      {/* 00 // Hero Section */}
      <HeroSection />

      {/* 01 // Selected Work (#work) */}
      <ProjectsSection />

      {/* 02 // About Section (#about) */}
      <AboutSection />

      {/* 03 // Technology Index Section (#index) */}
      <TechnologyIndexSection />

      {/* 04 // Contact Section (#contact) */}
      <ContactSection />
    </main>
  );
}
