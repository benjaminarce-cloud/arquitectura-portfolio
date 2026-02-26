import { projects } from '@/lib/projects';
import { OpeningHero } from '@/components/OpeningHero';
import { ProjectCard } from '@/components/ProjectCard';
import { ArchitectsMark } from '@/components/ArchitectsMark';
import { CustomCursor } from '@/components/CustomCursor';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <ArchitectsMark />
      <CustomCursor />
      
      <OpeningHero />

      <main className="bg-bg-light relative z-10">
        {/* Project Grid */}
        <section className="py-32 px-4 md:px-8 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[400px] gap-8">
            {/* Asymmetric grid layout */}
            <ProjectCard 
              project={projects[0]} 
              className="md:col-span-7"
            />
            <ProjectCard 
              project={projects[1]} 
              className="md:col-span-5"
            />
            <ProjectCard 
              project={projects[2]} 
              className="md:col-span-5"
            />
            <ProjectCard 
              project={projects[3]} 
              className="md:col-span-7"
            />
            <ProjectCard 
              project={projects[4]} 
              className="md:col-span-12"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-20 px-4 border-t border-black/5">
          <Link 
            href="/contact"
            className="text-sm text-text-muted hover:text-text transition-colors uppercase tracking-widest font-light"
          >
            Contact
          </Link>
        </footer>
      </main>
    </>
  );
}
