import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/projects';

const heroProjects = [projects[2], projects[0], projects[1]];
const portfolioLabels = projects.map((project) => project.name);

export function OpeningHero() {
  const [leadProject, upperProject, lowerProject] = heroProjects;

  return (
    <section id="top" className="relative overflow-hidden bg-[#ebe4da]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,165,116,0.25),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(26,26,26,0.16),transparent_38%)]" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/5 to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col justify-end px-4 pb-10 pt-24 md:px-8 md:pb-12 lg:pt-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end lg:gap-14">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.28em] text-text-muted md:text-xs">
              <span className="h-px w-10 bg-[#d4a574]" />
              Residential Architecture
            </div>

            <h1
              className="max-w-[12ch] text-[clamp(3.8rem,10vw,8rem)] font-serif font-light leading-[0.88] tracking-[-0.04em] text-[#171614] opacity-0 translate-y-5 animate-slide-up"
              style={{
                animationDelay: '0.25s',
                animationFillMode: 'forwards',
              }}
            >
              Homes shaped by horizon, climate, and calm.
            </h1>

            <p
              className="mt-6 max-w-xl text-base font-light leading-7 text-text-muted opacity-0 translate-y-5 animate-slide-up md:text-lg"
              style={{
                animationDelay: '0.45s',
                animationFillMode: 'forwards',
              }}
            >
              Selected work across Los Cabos, Querencia, and El Estable, composed for light,
              wind, and the quiet rhythm of inhabiting the landscape.
            </p>

            <div
              className="mt-10 flex flex-col gap-3 opacity-0 translate-y-5 animate-slide-up sm:flex-row"
              style={{
                animationDelay: '0.6s',
                animationFillMode: 'forwards',
              }}
            >
              <Link
                href="#projects"
                className="inline-flex items-center justify-center border border-[#171614] px-6 py-3 text-xs uppercase tracking-[0.24em] text-[#171614] transition-all duration-300 hover:bg-[#171614] hover:text-[#ebe4da]"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-black/10 bg-white/40 px-6 py-3 text-xs uppercase tracking-[0.24em] text-text transition-all duration-300 hover:border-black/20 hover:bg-white/65"
              >
                Contact
              </Link>
            </div>

            <div
              className="mt-12 grid gap-5 border-t border-black/10 pt-6 opacity-0 translate-y-5 animate-slide-up sm:grid-cols-3"
              style={{
                animationDelay: '0.8s',
                animationFillMode: 'forwards',
              }}
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-text-muted">Practice</p>
                <p className="mt-2 text-xl font-serif font-light text-[#171614]">30+ years</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-text-muted">Location</p>
                <p className="mt-2 text-xl font-serif font-light text-[#171614]">Los Cabos</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-text-muted">Focus</p>
                <p className="mt-2 text-xl font-serif font-light text-[#171614]">Private Residences</p>
              </div>
            </div>
          </div>

          <div
            className="opacity-0 translate-y-8 animate-slide-up lg:pl-6"
            style={{
              animationDelay: '0.45s',
              animationFillMode: 'forwards',
            }}
          >
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1.06fr)_minmax(280px,0.74fr)] lg:gap-5">
              <article className="relative overflow-hidden bg-black/10 aspect-[4/5] min-h-[420px] sm:min-h-[560px]">
                <Image
                  src={leadProject.hero}
                  alt={leadProject.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white md:p-6">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/65">Featured Project</p>
                    <h2 className="mt-2 text-3xl font-serif font-light md:text-4xl">{leadProject.name}</h2>
                  </div>
                  <p className="hidden text-xs uppercase tracking-[0.24em] text-white/70 md:block">
                    {leadProject.location}
                  </p>
                </div>
              </article>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-5">
                {[upperProject, lowerProject].map((project, index) => (
                  <article
                    key={project.id}
                    className={`relative overflow-hidden bg-black/10 ${
                      index === 0 ? 'aspect-[4/3]' : 'aspect-[3/4]'
                    }`}
                  >
                    <Image
                      src={project.hero}
                      alt={project.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 24vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white md:p-5">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-white/65">
                        {project.location}
                      </p>
                      <h3 className="mt-2 text-2xl font-serif font-light md:text-[2rem]">
                        {project.name}
                      </h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-5 border-t border-black/10 pt-4">
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.24em] text-text-muted md:text-[11px]">
                {portfolioLabels.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-10 flex justify-center opacity-0 translate-y-5 animate-slide-up"
          style={{
            animationDelay: '1s',
            animationFillMode: 'forwards',
          }}
        >
          <Link href="#projects" aria-label="Scroll to projects" className="group inline-flex items-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/45 text-[#171614] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white/70">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                <path d="M12 5v14M18 13l-6 6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
