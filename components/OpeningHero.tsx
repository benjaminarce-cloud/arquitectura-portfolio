import Image from 'next/image';

export function OpeningHero() {
  return (
    <section className="relative h-screen w-full bg-bg-dark overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=1920&h=1280&fit=crop&q=90"
        alt="Architecture"
        fill
        className="object-cover opacity-85"
        priority
      />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <h1 
          className="text-6xl md:text-[5.5rem] font-serif font-light text-white mb-6 opacity-0 translate-y-5 animate-slide-up tracking-wide"
          style={{ 
            animationDelay: '0.5s',
            animationFillMode: 'forwards'
          }}
        >
          Yoshio Urakami
        </h1>
        
        <p 
          className="text-sm md:text-base text-white/80 uppercase tracking-[0.15em] font-light opacity-0 translate-y-5 animate-slide-up"
          style={{ 
            animationDelay: '0.8s',
            animationFillMode: 'forwards'
          }}
        >
          Architect — Los Cabos, Baja California Sur
        </p>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-slide-up"
        style={{ 
          animationDelay: '1.2s',
          animationFillMode: 'forwards'
        }}
      >
        <div className="animate-float" style={{ animationDelay: '2s' }}>
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="rgba(255, 255, 255, 0.6)" 
            strokeWidth="2"
            className="w-6 h-6"
          >
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
