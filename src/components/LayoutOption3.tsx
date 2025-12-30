import { ImageWithFallback } from './figma/ImageWithFallback';

export function LayoutOption3() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--canvas)' }}>
      {/* Navigation */}
      <nav className="px-6 md:px-20 py-6 flex justify-between items-center border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}>
          <span className="text-xl">Origin</span>
        </div>
        <div className="flex gap-8 items-center" style={{ fontFamily: 'var(--font-sans)' }}>
          <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Work</a>
          <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Services</a>
          <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>About</a>
          <button 
            className="px-6 py-3 text-sm transition-all duration-300 hover:opacity-80"
            style={{ 
              backgroundColor: 'var(--accent-rose)', 
              color: 'var(--canvas)',
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              borderRadius: '2px'
            }}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Minimal Hero with Generous Whitespace */}
      <section className="py-32 md:py-48 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <p 
            className="text-xs tracking-widest mb-12 uppercase"
            style={{ 
              fontFamily: 'var(--font-sans)', 
              color: 'var(--accent-denim)',
              fontWeight: 500,
              letterSpacing: '0.15em'
            }}
          >
            Origin Creative Media — Est. 2018
          </p>
          <h1 
            className="text-4xl md:text-6xl mb-12"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              maxWidth: '20ch'
            }}
          >
            Where Content Finds Its Home
          </h1>
        </div>
      </section>

      {/* Single Powerful Image */}
      <section className="px-6 md:px-20 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden" style={{ aspectRatio: '21/9' }}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1652790794718-1dd2956647bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBtYWdhemluZSUyMG1pbmltYWx8ZW58MXx8fHwxNzYwODM5NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Editorial workspace"
              className="w-full h-full object-cover"
              style={{ filter: 'saturate(0.75) contrast(1.2)' }}
            />
          </div>
          <div className="flex justify-between items-start mt-6">
            <p 
              className="text-sm max-w-md"
              style={{ 
                fontFamily: 'var(--font-sans)',
                color: 'var(--charcoal-tertiary)',
                lineHeight: 1.7
              }}
            >
              We approach every project as if it were a magazine spread — with care for composition, 
              respect for negative space, and an understanding that what you leave out matters as much as what you include.
            </p>
            <p 
              className="text-xs hidden md:block"
              style={{ 
                fontFamily: 'var(--font-sans)',
                color: 'var(--charcoal-tertiary)'
              }}
            >
              Photography © 2025
            </p>
          </div>
        </div>
      </section>

      {/* Offset Text Block */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-start-4 md:col-span-7">
              <h2 
                className="text-3xl md:text-4xl mb-8"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700,
                  letterSpacing: '-0.01em'
                }}
              >
                Our Approach
              </h2>
              <div className="space-y-6">
                <p 
                  className="text-lg"
                  style={{ 
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--charcoal-secondary)',
                    lineHeight: 1.7
                  }}
                >
                  The best stories don't shout. They sit with quiet confidence on the page, 
                  inviting you in rather than demanding your attention. This is how we work.
                </p>
                <p 
                  className="text-lg"
                  style={{ 
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--charcoal-secondary)',
                    lineHeight: 1.7
                  }}
                >
                  Inspired by the editorial design of the 1980s, the warmth of film photography, 
                  and the timeless principles that Massimo Vignelli championed, we create media 
                  that respects both the past and the present.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Grid */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="mb-8 overflow-hidden" style={{ aspectRatio: '1/1' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1738438396674-1c46bb360eb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd29ya3NwYWNlJTIwdmludGFnZXxlbnwxfHx8fDE3NjA4Mzk2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Minimal workspace"
                  className="w-full h-full object-cover"
                  style={{ filter: 'saturate(0.8) contrast(1.1)' }}
                />
              </div>
              <h3 
                className="text-2xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Intentional Design
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                Every element serves a purpose. Every decision is deliberate. 
                We believe in the power of restraint.
              </p>
            </div>
            <div>
              <div className="mb-8 overflow-hidden" style={{ aspectRatio: '1/1' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1521459467264-802e2ef3141f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZ3JhaW4lMjB0ZXh0dXJlfGVufDF8fHx8MTc2MDc4NTc4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Film grain texture"
                  className="w-full h-full object-cover"
                  style={{ filter: 'saturate(0.8) contrast(1.1)' }}
                />
              </div>
              <h3 
                className="text-2xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Analog Soul
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                Digital tools, analog heart. We infuse modern work with the warmth and 
                texture that only comes from respecting traditional craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Gradient */}
      <footer 
        className="py-32 px-6 md:px-20 mt-32 relative film-grain"
        style={{
          background: `linear-gradient(135deg, rgba(196, 150, 138, 0.15) 0%, rgba(184, 138, 125, 0.12) 35%, rgba(156, 170, 152, 0.08) 70%, rgba(212, 197, 176, 0.05) 100%)`
        }}
      >
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 
            className="text-4xl md:text-5xl mb-8"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Ready to Begin?
          </h2>
          <p 
            className="text-lg mb-12 mx-auto"
            style={{ 
              fontFamily: 'var(--font-sans)',
              color: 'var(--charcoal-secondary)',
              lineHeight: 1.7,
              maxWidth: '50ch'
            }}
          >
            If your story deserves space, care, and intention, we'd love to hear from you.
          </p>
          <button 
            className="px-8 py-4 transition-all duration-300 hover:opacity-80 mb-20"
            style={{ 
              backgroundColor: 'var(--accent-rose)', 
              color: 'var(--canvas)',
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              borderRadius: '2px'
            }}
          >
            Get In Touch
          </button>
          <div className="pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'var(--border)' }}>
            <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}>
              <span className="text-lg">Origin Creative Media</span>
            </div>
            <div className="flex gap-6 text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
              <a href="#" className="hover:opacity-70 transition-opacity">Instagram</a>
              <a href="#" className="hover:opacity-70 transition-opacity">Vimeo</a>
              <a href="#" className="hover:opacity-70 transition-opacity">Contact</a>
            </div>
            <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
              © 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
