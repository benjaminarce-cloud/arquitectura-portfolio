import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/projects';

const leadImage = projects[2];

type HeroBottomVariant = 'stats' | 'philosophy' | 'none';

const HERO_BOTTOM_VARIANT: HeroBottomVariant = 'stats';

const heroBottomCopy = {
  stats: '2018 — 2022  /  FIVE PROJECTS  /  SELECTED WORK',
  philosophy: 'Private homes shaped for stone, shadow, and the slow light of Baja',
} as const;

export function OpeningHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#ded0bc]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.38),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(115,85,52,0.14),transparent_32%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col px-4 pb-8 pt-5 md:px-8 md:pb-10 md:pt-6">
        <div
          className="flex items-center justify-between gap-4 border-b border-black/10 pb-4 text-[10px] uppercase tracking-[0.28em] text-[#64584a] opacity-0 translate-y-4 animate-slide-up md:text-[11px]"
          style={{
            animationDelay: '0.15s',
            animationFillMode: 'forwards',
          }}
        >
          <span>Yoshio Urakami</span>
          <span className="hidden md:inline">Residential Architecture</span>
          <span>Baja California Sur, Mexico</span>
        </div>

        <div className="flex flex-1 flex-col justify-end py-10 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-end lg:gap-10">
            <div className="order-2 lg:order-1">
              <div
                className="opacity-0 translate-y-6 animate-slide-up"
                style={{
                  animationDelay: '0.3s',
                  animationFillMode: 'forwards',
                }}
              >
                <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#7b6a56] md:text-[11px]">
                  BAJA CALIFORNIA SUR
                </p>
                <h1 className="max-w-[8ch] text-[clamp(4.1rem,10vw,10.5rem)] font-serif font-light leading-[0.82] tracking-[-0.06em] text-[#151311]">
                  Yoshio
                  <br />
                  Urakami
                </h1>
                <p className="mt-4 max-w-[20ch] text-[clamp(0.95rem,1.8vw,1.45rem)] font-serif font-light italic leading-[1.18] text-[#3f372f]">
                  Residential Architecture in Baja California Sur
                </p>
              </div>

              <div
                className="mt-8 max-w-md border-t border-black/10 pt-6 opacity-0 translate-y-6 animate-slide-up"
                style={{
                  animationDelay: '0.45s',
                  animationFillMode: 'forwards',
                }}
              >
                <div className="flex items-center gap-6">
                  <Link
                    href="#projects"
                    className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[#151311] transition-opacity duration-300 hover:opacity-60"
                  >
                    <span>Selected Work</span>
                    <span className="h-px w-14 bg-current" />
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="order-1 opacity-0 translate-y-8 animate-slide-up lg:order-2"
              style={{
                animationDelay: '0.3s',
                animationFillMode: 'forwards',
              }}
            >
              <div className="relative">
                <article className="relative ml-auto aspect-[4/5] min-h-[440px] overflow-hidden bg-black/10 sm:min-h-[620px] lg:w-[88%]">
                  <Image
                    src={leadImage.hero}
                    alt={leadImage.name}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 56vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                </article>

                <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 md:inset-x-6 md:bottom-6">
                  <div className="max-w-[15rem] bg-[rgba(17,15,13,0.76)] px-4 py-3 text-white backdrop-blur-sm md:px-5 md:py-4">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/60">Featured Project</p>
                    <p className="mt-2 text-2xl font-serif font-light md:text-3xl">{leadImage.name}</p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/65">
                      Querencia, Baja California Sur
                    </p>
                  </div>

                  <div className="hidden text-right text-[10px] uppercase tracking-[0.22em] text-white/70 md:block">
                    <p>Warm stone</p>
                    <p>Deep shade</p>
                    <p>Ocean horizon</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {HERO_BOTTOM_VARIANT !== 'none' && (
          <div
            className="border-t border-black/10 pt-4 opacity-0 translate-y-4 animate-slide-up md:pt-5"
            style={{
              animationDelay: '0.6s',
              animationFillMode: 'forwards',
            }}
          >
            {HERO_BOTTOM_VARIANT === 'stats' && (
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#605343] md:text-[11px] md:tracking-[0.3em]">
                {heroBottomCopy.stats}
              </p>
            )}
            {HERO_BOTTOM_VARIANT === 'philosophy' && (
              <p className="text-[11px] font-serif italic text-[#54483b] md:text-[12px]">
                {heroBottomCopy.philosophy}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
