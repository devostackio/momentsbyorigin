import { ImageWithFallback } from './figma/ImageWithFallback';

export function LayoutOption2() {
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

      {/* Asymmetric Hero Section */}
      <section className="py-20 md:py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div className="md:pr-12">
              <p 
                className="text-xs tracking-widest mb-6 uppercase"
                style={{ 
                  fontFamily: 'var(--font-sans)', 
                  color: 'var(--accent-terracotta)',
                  fontWeight: 500,
                  letterSpacing: '0.15em'
                }}
              >
                Creative Media Studio
              </p>
              <h1 
                className="text-5xl md:text-6xl mb-8"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em'
                }}
              >
                Crafted With Intention
              </h1>
              <p 
                className="text-lg mb-10"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7,
                  maxWidth: '60ch'
                }}
              >
                We believe in the warmth of analog, the permanence of print, and the timelessness 
                of stories well told. Every frame, every word, every moment is deliberate.
              </p>
              <button 
                className="px-8 py-4 transition-all duration-300 hover:opacity-80"
                style={{ 
                  backgroundColor: 'var(--accent-rose)', 
                  color: 'var(--canvas)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  borderRadius: '2px'
                }}
              >
                Explore Our Work
              </button>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1588415158669-c8b2154fa9bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwcmVjb3JkJTIwcGxheWVyfGVufDF8fHx8MTc2MDgzOTY1MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Vintage record player"
                  className="w-full h-full object-cover"
                  style={{ filter: 'saturate(0.8) contrast(1.15)' }}
                />
              </div>
              <div 
                className="absolute -bottom-8 -left-8 px-8 py-6"
                style={{ backgroundColor: 'var(--accent-sand)' }}
              >
                <p 
                  className="text-sm"
                  style={{ 
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--charcoal-primary)',
                    maxWidth: '30ch'
                  }}
                >
                  "Every project begins with listening — to the story, to the silence, to what wants to be said."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: 'var(--accent-sand)', opacity: 0.3 }}>
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl mb-20 max-w-3xl"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div 
                className="w-12 h-12 mb-6 flex items-center justify-center border"
                style={{ 
                  borderColor: 'var(--charcoal-primary)',
                  borderWidth: '1.5px',
                  borderRadius: '2px'
                }}
              >
                <span style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}>01</span>
              </div>
              <h3 
                className="text-xl mb-4"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Documentary Film
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                Cinematic storytelling with the texture of film grain and the depth of genuine human experience.
              </p>
            </div>
            <div>
              <div 
                className="w-12 h-12 mb-6 flex items-center justify-center border"
                style={{ 
                  borderColor: 'var(--charcoal-primary)',
                  borderWidth: '1.5px',
                  borderRadius: '2px'
                }}
              >
                <span style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}>02</span>
              </div>
              <h3 
                className="text-xl mb-4"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Editorial Content
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                Magazine-quality narratives that honor the craft of writing and the beauty of thoughtful design.
              </p>
            </div>
            <div>
              <div 
                className="w-12 h-12 mb-6 flex items-center justify-center border"
                style={{ 
                  borderColor: 'var(--charcoal-primary)',
                  borderWidth: '1.5px',
                  borderRadius: '2px'
                }}
              >
                <span style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}>03</span>
              </div>
              <h3 
                className="text-xl mb-4"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Brand Identity
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                Visual systems built on restraint, confidence, and the principles that have always worked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Gradient */}
      <footer 
        className="py-20 px-6 md:px-20 relative film-grain"
        style={{
          background: `linear-gradient(135deg, rgba(196, 150, 138, 0.15) 0%, rgba(184, 138, 125, 0.12) 35%, rgba(156, 170, 152, 0.08) 70%, rgba(212, 197, 176, 0.05) 100%)`
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 
                className="text-3xl mb-4"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Let's Create Something Enduring
              </h3>
              <p 
                className="text-base mb-6"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7,
                  maxWidth: '50ch'
                }}
              >
                We're selective about the stories we tell. If your project values craft over speed, 
                substance over spectacle, we should talk.
              </p>
              <button 
                className="px-8 py-4 transition-all duration-300 hover:opacity-80"
                style={{ 
                  backgroundColor: 'var(--accent-rose)', 
                  color: 'var(--canvas)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  borderRadius: '2px'
                }}
              >
                Start a Conversation
              </button>
            </div>
            <div className="flex flex-col justify-end">
              <div className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                <p className="mb-2">hello@origincreative.com</p>
                <p>Based in Portland, working everywhere</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t flex justify-between items-center" style={{ borderColor: 'var(--border)' }}>
            <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}>
              <span className="text-lg">Origin Creative Media</span>
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
