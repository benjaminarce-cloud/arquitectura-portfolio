import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProjectById, getNextProject } from '@/lib/projects';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ArchitectsMark } from '@/components/ArchitectsMark';

export async function generateStaticParams() {
  // This will be called at build time to generate static pages for all projects
  const projects = [
    { id: 'casa-karen' },
    { id: 'rancho-espiritu' },
    { id: 'el-parque-08' },
    { id: 'cresta-del-mar' },
    { id: 'casa-agradecida' },
  ];
  
  return projects;
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(project.id);
  const images = project.images;

  // Layout pattern indices for 25 images
  // This determines which images are full-width, 80%, 60%, or side-by-side
  const layoutPattern = [
    'full',      // 0
    'full',      // 1
    '80',        // 2
    'side',      // 3-4 (pair)
    'side',
    'full',      // 5
    '60',        // 6
    'full',      // 7
    'side',      // 8-9 (pair)
    'side',
    'full',      // 10
    '80',        // 11
    'side',      // 12-13 (pair)
    'side',
    'full',      // 14
    'full',      // 15
    '60',        // 16
    'side',      // 17-18 (pair)
    'side',
    'full',      // 19 (dusk hero)
    'side',      // 20-21 (pair)
    'side',
    '80',        // 22
    'full',      // 23
    'full',      // 24
  ];

  // Render image based on layout pattern
  const renderImage = (index: number) => {
    const pattern = layoutPattern[index];
    const imageSrc = images[index];

    if (!imageSrc) return null;

    if (pattern === 'full') {
      return (
        <ScrollReveal key={index} className="w-full my-24 first:mt-32">
          <Image
            src={imageSrc}
            alt={`${project.name} - Image ${index + 1}`}
            width={1920}
            height={1280}
            className="w-full h-auto"
            sizes="100vw"
          />
        </ScrollReveal>
      );
    }

    if (pattern === '80') {
      return (
        <ScrollReveal key={index} className="w-full py-24 px-4 md:px-8">
          <div className="max-w-[80%] mx-auto">
            <Image
              src={imageSrc}
              alt={`${project.name} - Image ${index + 1}`}
              width={1600}
              height={1067}
              className="w-full h-auto"
              sizes="80vw"
            />
          </div>
        </ScrollReveal>
      );
    }

    if (pattern === '60') {
      return (
        <ScrollReveal key={index} className="w-full py-24 px-4 md:px-8">
          <div className="max-w-[60%] mx-auto">
            <Image
              src={imageSrc}
              alt={`${project.name} - Image ${index + 1}`}
              width={1200}
              height={800}
              className="w-full h-auto"
              sizes="60vw"
            />
          </div>
        </ScrollReveal>
      );
    }

    if (pattern === 'side') {
      // Check if next image is also 'side' to create pair
      const nextPattern = layoutPattern[index + 1];
      if (nextPattern === 'side' && images[index + 1]) {
        return (
          <ScrollReveal key={`pair-${index}`} className="w-full py-24 px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 max-w-[1600px] mx-auto">
              <Image
                src={imageSrc}
                alt={`${project.name} - Image ${index + 1}`}
                width={900}
                height={600}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <Image
                src={images[index + 1]}
                alt={`${project.name} - Image ${index + 2}`}
                width={900}
                height={600}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        );
      }
      // Skip if this is the second of a pair (already rendered)
      return null;
    }

    return null;
  };

  return (
    <>
      <ArchitectsMark />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-bg-dark">
        <Image
          src={project.hero}
          alt={project.name}
          fill
          className="object-cover opacity-0 animate-hero-image"
          priority
          sizes="100vw"
        />
        
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center px-4">
          <div>
            <h1 
              className="text-5xl md:text-6xl font-serif font-light text-white mb-6 opacity-0 translate-y-8 animate-slide-up"
              style={{ 
                animationDelay: '0.8s',
                animationFillMode: 'forwards'
              }}
            >
              {project.name}
            </h1>
            <p 
              className="text-base md:text-lg text-white/90 uppercase tracking-[0.15em] font-light opacity-0 translate-y-8 animate-slide-up"
              style={{ 
                animationDelay: '1.1s',
                animationFillMode: 'forwards'
              }}
            >
              {project.location}
            </p>
          </div>
        </div>
      </section>

      {/* Floating Info Card */}
      <div className="relative z-20">
        <section className="max-w-4xl mx-auto px-4 md:px-8 -mt-20 md:-mt-24">
          <div 
            className="bg-bg-light/95 backdrop-blur-md p-10 md:p-14 rounded-sm shadow-2xl opacity-0 translate-y-5 animate-card-float"
            style={{ backdropFilter: 'blur(20px)' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
              <div>
                <p className="text-xs text-text-muted uppercase tracking-widest mb-3 font-medium">
                  Location
                </p>
                <p className="text-xl font-serif font-light text-text">
                  {project.location}
                </p>
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-widest mb-3 font-medium">
                  Year
                </p>
                <p className="text-xl font-serif font-light text-text">
                  {project.year}
                </p>
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-widest mb-3 font-medium">
                  Type
                </p>
                <p className="text-xl font-serif font-light text-text">
                  {project.type}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Image Gallery */}
      <main className="bg-bg-light">
        {images.map((_, index) => renderImage(index))}
      </main>

      {/* Credits */}
      <section className="py-32 px-4 text-center text-text-muted border-t border-black/5 mt-16">
        <p className="mb-3 text-sm font-light tracking-wide">Architecture: Yoshio Urakami</p>
        <p className="text-sm font-light tracking-wide">Completed: {project.year}</p>
      </section>

      {/* Next Project */}
      {nextProject && (
        <Link 
          href={`/projects/${nextProject.id}`}
          className="block relative h-[70vh] overflow-hidden bg-bg-dark group"
        >
          <Image
            src={nextProject.hero}
            alt={nextProject.name}
            fill
            className="object-cover opacity-90 transition-all duration-1000 ease-out group-hover:scale-105 group-hover:opacity-100"
            sizes="100vw"
          />
          
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-500 flex items-center justify-center text-center px-4">
            <div>
              <p className="text-xs md:text-sm text-white/75 uppercase tracking-widest mb-6 font-light">
                Next Project
              </p>
              <h3 
                className="text-4xl md:text-5xl font-serif font-light text-white pb-4 border-b-2 transition-transform duration-500 group-hover:-translate-y-1"
                style={{ borderColor: nextProject.accent }}
              >
                {nextProject.name} →
              </h3>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
