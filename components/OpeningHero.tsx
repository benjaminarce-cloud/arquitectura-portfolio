import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/projects';

const leadImage = projects[2];
const insetImages = [
  {
    src: projects[3].images[14],
    alt: `${projects[3].name} detail`,
    label: 'Stone + Pacific Light',
  },
  {
    src: projects[1].images[15],
    alt: `${projects[1].name} courtyard`,
    label: 'Courtyard + Shade',
  },
];

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
                  La Paz / Los Cabos / Mexico
                </p>
                <h1 className="max-w-[8ch] text-[clamp(4.8rem,11vw,9.75rem)] font-serif font-light leading-[0.84] tracking-[-0.055em] text-[#151311]">
                  Desert Coast Architecture
                </h1>
              </div>

              <div
                className="mt-8 max-w-md border-t border-black/10 pt-6 opacity-0 translate-y-6 animate-slide-up"
                style={{
                  animationDelay: '0.45s',
                  animationFillMode: 'forwards',
                }}
              >
                <p className="text-sm font-light uppercase tracking-[0.22em] leading-6 text-[#4e463d] md:text-[13px]">
                  Private homes shaped for stone, shadow, salt air, and the slow light of Baja.
                </p>

                <div className="mt-8 flex items-center gap-6">
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

                <div className="mt-4 grid grid-cols-2 gap-4 lg:absolute lg:-left-20 lg:bottom-10 lg:mt-0 lg:w-[44%]">
                  {insetImages.map((image, index) => (
                    <article
                      key={image.label}
                      className={`relative overflow-hidden bg-black/10 ${
                        index === 0 ? 'aspect-[4/5] lg:translate-y-10' : 'aspect-[5/4]'
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                      <p className="absolute bottom-3 left-3 right-3 text-[10px] uppercase tracking-[0.22em] text-white/78 md:bottom-4 md:left-4 md:right-4">
                        {image.label}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
