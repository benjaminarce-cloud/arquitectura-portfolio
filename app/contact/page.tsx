import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-light mb-16">
          Contact
        </h1>
        
        <div className="space-y-6 text-base md:text-lg font-light text-text">
          <p>Yoshio Urakami</p>
          <p>Architect</p>
          <p className="text-text-muted">Los Cabos, Baja California Sur</p>
          
          <p className="pt-8">
            <a 
              href="mailto:yoshiourakami@gmail.com"
              className="border-b border-gray-300 hover:border-text transition-colors"
            >
              yoshiourakami@gmail.com
            </a>
          </p>
        </div>

        <p className="mt-16">
          <Link 
            href="/"
            className="text-sm text-text-muted hover:text-text transition-colors"
          >
            ← Back to Projects
          </Link>
        </p>
      </div>
    </div>
  );
}
