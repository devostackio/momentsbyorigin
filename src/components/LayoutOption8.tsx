import { ImageWithFallback } from './figma/ImageWithFallback';
import { Music, Disc, Radio, HeartHandshake, Award, MapPin } from 'lucide-react';

export function LayoutOption8() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--canvas)' }}>
      {/* Navigation */}
      <nav className="px-6 md:px-20 py-6 flex justify-between items-center border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}>
          <span className="text-xl">ORIGIN</span>
          <span className="text-xs ml-2" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>Music</span>
        </div>
        <div className="flex gap-8 items-center" style={{ fontFamily: 'var(--font-sans)' }}>
          <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Artists</a>
          <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Heritage</a>
          <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>America 250</a>
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
            Listen Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 md:py-48 px-6 md:px-20 overflow-hidden film-grain">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1727793574518-7a7969cadee3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwdmlueWwlMjByZWNvcmRzJTIwbXVzaWN8ZW58MXx8fHwxNzYwODQ0MDc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Vintage vinyl records"
            className="w-full h-full object-cover opacity-20"
            style={{ filter: 'saturate(0.7) contrast(1.2)' }}
          />
        </div>
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(184, 138, 125, 0.15) 0%, rgba(196, 150, 138, 0.10) 50%, rgba(212, 197, 176, 0.08) 100%)`
          }}
        />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8" style={{ backgroundColor: 'rgba(184, 138, 125, 0.15)', borderRadius: '24px', border: '1px solid rgba(184, 138, 125, 0.3)' }}>
            <Music size={16} style={{ color: 'var(--accent-terracotta)' }} />
            <span className="text-xs" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-primary)', fontWeight: 500 }}>Southeast DC Music Label</span>
          </div>
          <h1 
            className="text-5xl md:text-7xl mb-8 max-w-5xl mx-auto"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}
          >
            The Sound of Our Ancestors
          </h1>
          <p 
            className="text-lg md:text-xl mb-12 mx-auto"
            style={{ 
              fontFamily: 'var(--font-sans)',
              color: 'var(--charcoal-secondary)',
              maxWidth: '65ch',
              lineHeight: 1.7
            }}
          >
            Origin Music elevates the authentic voice of Southeast DC, honoring the rich musical 
            legacy of our community leaders and the countless artists who have shaped America's 
            cultural landscape for over two centuries.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
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
              Explore Our Artists
            </button>
            <button 
              className="px-8 py-4 border transition-all duration-300 hover:bg-[var(--charcoal-primary)] hover:text-[var(--canvas)]"
              style={{ 
                borderColor: 'var(--charcoal-primary)',
                borderWidth: '1.5px',
                backgroundColor: 'transparent',
                color: 'var(--charcoal-primary)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                borderRadius: '2px'
              }}
            >
              Our Story
            </button>
          </div>
        </div>
      </section>

      {/* America 250 Section */}
      <section className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: 'rgba(184, 138, 125, 0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6" style={{ backgroundColor: 'rgba(184, 138, 125, 0.15)', borderRadius: '24px' }}>
                <Award size={16} style={{ color: 'var(--accent-terracotta)' }} />
                <span className="text-xs" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-primary)', fontWeight: 500 }}>America 250 Celebration</span>
              </div>
              <h2 
                className="text-3xl md:text-5xl mb-6"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700,
                  letterSpacing: '-0.01em'
                }}
              >
                Two Centuries of Sound
              </h2>
              <p 
                className="text-lg mb-8"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                As America celebrates its 250th anniversary, we honor the musicians, poets, and 
                cultural leaders who called DC home. From jazz pioneers to go-go legends, from 
                gospel roots to hip-hop revolution — this is our sonic heritage.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} style={{ color: 'var(--accent-terracotta)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <h4 className="text-base mb-1" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-primary)', fontWeight: 500 }}>
                      Rooted in Southeast
                    </h4>
                    <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)', lineHeight: 1.6 }}>
                      Celebrating the neighborhood that birthed go-go and shaped the soul of DC
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <HeartHandshake size={20} style={{ color: 'var(--accent-sage)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <h4 className="text-base mb-1" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-primary)', fontWeight: 500 }}>
                      Honoring Our Ancestors
                    </h4>
                    <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)', lineHeight: 1.6 }}>
                      Preserving the stories and sounds of community leaders who paved the way
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden" style={{ borderRadius: '4px' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1710951403141-353d4e5c7cbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwbXVzaWNpYW4lMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjA4NDQwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Jazz musician performance"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '4/3', filter: 'saturate(0.85) contrast(1.1)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-20 md:py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl mb-16"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Our Artists
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4" style={{ aspectRatio: '1/1', borderRadius: '4px' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1674319836004-f9cb376147c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHJlY29yZGluZ3xlbnwxfHx8fDE3NjA4MzY2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Recording studio"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'saturate(0.85) contrast(1.1)' }}
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Disc size={14} style={{ color: 'var(--accent-rose)' }} />
                <span className="text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: 'var(--accent-rose)', fontWeight: 500 }}>New Release</span>
              </div>
              <h3 
                className="text-2xl mb-2"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Marcus Washington
              </h3>
              <p 
                className="text-base mb-3"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.6
                }}
              >
                Contemporary soul with deep go-go roots
              </p>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  fontStyle: 'italic'
                }}
              >
                "East of the River" — Out Now
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4" style={{ aspectRatio: '1/1', borderRadius: '4px' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1656283384093-1e227e621fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbmNlcnQlMjBjcm93ZHxlbnwxfHx8fDE3NjA4MjQwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Concert crowd"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'saturate(0.85) contrast(1.1)' }}
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Music size={14} style={{ color: 'var(--accent-sage)' }} />
                <span className="text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: 'var(--accent-sage)', fontWeight: 500 }}>Featured</span>
              </div>
              <h3 
                className="text-2xl mb-2"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Jasmine Clarke
              </h3>
              <p 
                className="text-base mb-3"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.6
                }}
              >
                Neo-soul vocalist channeling ancestral wisdom
              </p>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  fontStyle: 'italic'
                }}
              >
                "Voices of the Past" — Coming Soon
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4" style={{ aspectRatio: '1/1', borderRadius: '4px' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1628529062965-de9280a4ae39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwc3R1ZGlvJTIwbWljcm9waG9uZXxlbnwxfHx8fDE3NjA3NzMwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Music studio"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'saturate(0.85) contrast(1.1)' }}
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Radio size={14} style={{ color: 'var(--accent-terracotta)' }} />
                <span className="text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: 'var(--accent-terracotta)', fontWeight: 500 }}>Rising Star</span>
              </div>
              <h3 
                className="text-2xl mb-2"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                The Anacostia Collective
              </h3>
              <p 
                className="text-base mb-3"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.6
                }}
              >
                Jazz fusion honoring DC's historic musicians
              </p>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  fontStyle: 'italic'
                }}
              >
                Debut Album — Spring 2028
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Timeline */}
      <section className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: 'rgba(212, 197, 176, 0.15)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-5xl mb-6"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            A Living Legacy
          </h2>
          <p 
            className="text-lg mb-12"
            style={{ 
              fontFamily: 'var(--font-sans)',
              color: 'var(--charcoal-secondary)',
              lineHeight: 1.7
            }}
          >
            For over 200 years, Washington DC has been home to musical innovators, from Duke Ellington 
            to Chuck Brown. Origin Music carries forward this tradition, ensuring the sounds of Southeast 
            DC continue to shape America's cultural future.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-terracotta)', fontWeight: 900 }}>
                1775
              </div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                America's Musical Roots
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-sage)', fontWeight: 900 }}>
                1970s
              </div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                Birth of Go-Go Music
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-rose)', fontWeight: 900 }}>
                2028
              </div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                Origin Music Launches
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-32 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl mb-6"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Join the Movement
          </h2>
          <p 
            className="text-lg mb-8"
            style={{ 
              fontFamily: 'var(--font-sans)',
              color: 'var(--charcoal-secondary)',
              lineHeight: 1.7
            }}
          >
            Be part of the story as we elevate Southeast DC's sound to the world.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-5 py-3 text-sm border"
              style={{ 
                backgroundColor: 'var(--canvas)',
                borderColor: 'var(--border)',
                borderRadius: '2px',
                fontFamily: 'var(--font-sans)',
                color: 'var(--charcoal-primary)'
              }}
            />
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
              Subscribe
            </button>
          </div>
          <p className="text-xs mt-4" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
            Coming 2028 • Following the America 250 celebrations
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-20 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}>
            <span className="text-lg">Origin Music</span>
          </div>
          <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
            © 2025 — The sound of our ancestors
          </p>
        </div>
      </footer>
    </div>
  );
}
