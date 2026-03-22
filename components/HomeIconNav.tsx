import Link from 'next/link';

export function HomeIconNav() {
  return (
    <Link
      href="/#top"
      aria-label="Return to homepage"
      className="fixed right-4 top-4 z-[90] md:right-6 md:top-6"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-[rgba(250,248,242,0.82)] text-[#171614] shadow-[0_18px_45px_rgba(0,0,0,0.14)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[rgba(255,255,255,0.92)]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M3.5 10.5 12 3l8.5 7.5" />
          <path d="M6.5 9.5V20h11V9.5" />
          <path d="M10 20v-6h4v6" />
        </svg>
      </span>
    </Link>
  );
}
