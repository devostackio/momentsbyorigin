import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, MapPin, ChefHat, Camera, Wine, Sparkles } from 'lucide-react';

export function LayoutOption7() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0D0D0D' }}>
      {/* Navigation */}
      <nav className="px-6 md:px-20 py-6 flex justify-between items-center backdrop-blur-lg fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'rgba(13, 13, 13, 0.8)', borderBottom: '1px solid rgba(196, 150, 138, 0.15)' }}>
        <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: '#FFFFFF' }}>
          <span className="text-xl">Moments</span>
          <span className="text-xs ml-2" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(196, 150, 138, 0.8)' }}>by Origin</span>
        </div>
        <div className="flex gap-8 items-center" style={{ fontFamily: 'var(--font-sans)' }}>
          <a href="#" className="text-sm hidden md:block transition-colors duration-300" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Experiences</a>
          <a href="#" className="text-sm hidden md:block transition-colors duration-300" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Chefs</a>
          <a href="#" className="text-sm hidden md:block transition-colors duration-300" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Venues</a>
          <button 
            className="px-6 py-3 text-sm transition-all duration-300 hover:opacity-80"
            style={{ 
              backgroundColor: '#C4968A',
              color: '#FFFFFF',
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              borderRadius: '2px'
            }}
          >
            Book Experience
          </button>
        </div>
      </nav>

      {/* Hero - Full Bleed Photography */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1698434939525-dd584e446a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzYwODE1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Fine dining experience"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.5) saturate(1.1) contrast(1.2)' }}
          />
        </div>
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(0deg, rgba(13, 13, 13, 0.95) 0%, transparent 40%, rgba(13, 13, 13, 0.6) 100%)'
          }}
        />
        <div className="relative h-full flex items-end px-6 md:px-20 pb-20 md:pb-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8" style={{ backgroundColor: 'rgba(196, 150, 138, 0.15)', borderRadius: '24px', border: '1px solid rgba(196, 150, 138, 0.3)' }}>
              <Sparkles size={16} style={{ color: '#C4968A' }} />
              <span className="text-xs" style={{ fontFamily: 'var(--font-sans)', color: '#FFFFFF', fontWeight: 500 }}>Curated Cultural Experiences</span>
            </div>
            <h1 
              className="text-5xl md:text-7xl mb-8"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                color: '#FFFFFF',
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-0.03em'
              }}
            >
              Where Every Detail Tells a Story
            </h1>
            <p 
              className="text-xl md:text-2xl mb-12"
              style={{ 
                fontFamily: 'var(--font-sans)',
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: 1.6,
                maxWidth: '55ch'
              }}
            >
              Moments by Origin partners with DC's finest chefs, restaurants, and venues to create 
              unforgettable cultural experiences. Each moment is carefully crafted, beautifully documented, 
              and designed to celebrate the artistry of food and connection.
            </p>
            <button 
              className="px-8 py-4 transition-all duration-300 hover:opacity-80"
              style={{ 
                backgroundColor: '#C4968A',
                color: '#FFFFFF',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                borderRadius: '2px',
                boxShadow: '0 4px 30px rgba(196, 150, 138, 0.4)'
              }}
            >
              Explore Upcoming Experiences
            </button>
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: '#0D0D0D' }}>
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl mb-16"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: '#FFFFFF',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Featured Experiences
          </h2>
          
          {/* Large Feature */}
          <div className="mb-12 relative overflow-hidden group cursor-pointer" style={{ borderRadius: '4px' }}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759419038843-29749ac4cd2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2MDc4MzMyMHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Elegant restaurant interior"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ aspectRatio: '21/9', filter: 'brightness(0.6) saturate(1.1) contrast(1.2)' }}
            />
            <div 
              className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end"
              style={{
                background: 'linear-gradient(0deg, rgba(13, 13, 13, 0.95) 0%, transparent 60%)'
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 text-xs uppercase tracking-wider" style={{ backgroundColor: '#C4968A', color: '#FFFFFF', fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
                  This Weekend
                </span>
                <div className="flex items-center gap-2 text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255, 255, 255, 0.7)' }}>
                  <Calendar size={14} />
                  Saturday, Oct 26
                </div>
              </div>
              <h3 
                className="text-3xl md:text-5xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: '#FFFFFF',
                  fontWeight: 700,
                  letterSpacing: '-0.02em'
                }}
              >
                An Evening with Chef Marcus
              </h3>
              <p 
                className="text-lg mb-4 max-w-3xl"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.6
                }}
              >
                A 7-course tasting menu celebrating the flavors of the Chesapeake Bay. 
                Intimate seating for 30 guests at The Rooftop Gallery.
              </p>
              <div className="flex items-center gap-2 text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(196, 150, 138, 0.9)' }}>
                <MapPin size={14} />
                Shaw Neighborhood, DC
              </div>
            </div>
          </div>

          {/* Grid of Experiences */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden group cursor-pointer" style={{ borderRadius: '4px' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1622001618569-eae18fee3a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMGdvdXJtZXR8ZW58MXx8fHwxNzYwODQ0MDc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Chef cooking"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ aspectRatio: '4/3', filter: 'brightness(0.6) saturate(1.1) contrast(1.2)' }}
              />
              <div 
                className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end"
                style={{
                  background: 'linear-gradient(0deg, rgba(13, 13, 13, 0.95) 0%, transparent 60%)'
                }}
              >
                <span className="text-xs mb-2 uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: '#C4968A', fontWeight: 500 }}>Chef's Table</span>
                <h3 
                  className="text-2xl md:text-3xl mb-2"
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    color: '#FFFFFF',
                    fontWeight: 700
                  }}
                >
                  Culinary Workshop Series
                </h3>
                <p 
                  className="text-sm"
                  style={{ 
                    fontFamily: 'var(--font-sans)',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: 1.6
                  }}
                >
                  Learn from masters while enjoying wine pairings
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden group cursor-pointer" style={{ borderRadius: '4px' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759301247251-0624eee90348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGV2ZW50JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYwODQ0MDc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cultural celebration"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ aspectRatio: '4/3', filter: 'brightness(0.6) saturate(1.1) contrast(1.2)' }}
              />
              <div 
                className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end"
                style={{
                  background: 'linear-gradient(0deg, rgba(13, 13, 13, 0.95) 0%, transparent 60%)'
                }}
              >
                <span className="text-xs mb-2 uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: '#9CAA98', fontWeight: 500 }}>Pop-Up Event</span>
                <h3 
                  className="text-2xl md:text-3xl mb-2"
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    color: '#FFFFFF',
                    fontWeight: 700
                  }}
                >
                  Heritage & Harvest
                </h3>
                <p 
                  className="text-sm"
                  style={{ 
                    fontFamily: 'var(--font-sans)',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: 1.6
                  }}
                >
                  Celebrating seasonal ingredients and cultural traditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: '#121212' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-5xl mb-6"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                color: '#FFFFFF',
                fontWeight: 700,
                letterSpacing: '-0.01em'
              }}
            >
              Our Partners
            </h2>
            <p 
              className="text-lg mx-auto"
              style={{ 
                fontFamily: 'var(--font-sans)',
                color: 'rgba(255, 255, 255, 0.6)',
                maxWidth: '60ch'
              }}
            >
              We collaborate with DC's most celebrated chefs, renowned restaurants, 
              and distinctive venues to create unforgettable experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div 
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(196, 150, 138, 0.15)',
                  borderRadius: '50%'
                }}
              >
                <ChefHat size={28} style={{ color: '#C4968A' }} />
              </div>
              <h3 
                className="text-2xl mb-2"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: '#FFFFFF',
                  fontWeight: 700
                }}
              >
                Award-Winning Chefs
              </h3>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'rgba(255, 255, 255, 0.6)',
                  lineHeight: 1.7
                }}
              >
                Michelin-starred and James Beard recognized culinary masters
              </p>
            </div>

            <div className="text-center p-8">
              <div 
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(156, 170, 152, 0.15)',
                  borderRadius: '50%'
                }}
              >
                <Wine size={28} style={{ color: '#9CAA98' }} />
              </div>
              <h3 
                className="text-2xl mb-2"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: '#FFFFFF',
                  fontWeight: 700
                }}
              >
                Signature Venues
              </h3>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'rgba(255, 255, 255, 0.6)',
                  lineHeight: 1.7
                }}
              >
                Historic and contemporary spaces that elevate every gathering
              </p>
            </div>

            <div className="text-center p-8">
              <div 
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(184, 138, 125, 0.15)',
                  borderRadius: '50%'
                }}
              >
                <Camera size={28} style={{ color: '#B88A7D' }} />
              </div>
              <h3 
                className="text-2xl mb-2"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: '#FFFFFF',
                  fontWeight: 700
                }}
              >
                Visual Storytelling
              </h3>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'rgba(255, 255, 255, 0.6)',
                  lineHeight: 1.7
                }}
              >
                Professional photography capturing every beautiful detail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Waitlist */}
      <section className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: '#0D0D0D' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-5xl mb-6"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: '#FFFFFF',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Be the First to Know
          </h2>
          <p 
            className="text-lg mb-10"
            style={{ 
              fontFamily: 'var(--font-sans)',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.7
            }}
          >
            Join our community to receive early access to exclusive culinary experiences, 
            special events, and behind-the-scenes stories.
          </p>
          <div className="flex gap-3 max-w-md mx-auto mb-4">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-5 py-4 text-sm border"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(196, 150, 138, 0.3)',
                borderRadius: '2px',
                fontFamily: 'var(--font-sans)',
                color: '#FFFFFF'
              }}
            />
            <button 
              className="px-8 py-4 text-sm transition-all duration-300 hover:opacity-80"
              style={{ 
                backgroundColor: '#C4968A',
                color: '#FFFFFF',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                borderRadius: '2px'
              }}
            >
              Join Waitlist
            </button>
          </div>
          <p className="text-xs" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255, 255, 255, 0.5)' }}>
            Coming 2028 • Limited seating for each experience
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-20" style={{ borderTop: '1px solid rgba(196, 150, 138, 0.15)', backgroundColor: '#0D0D0D' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: '#FFFFFF' }}>
            <span className="text-lg">Moments by Origin</span>
          </div>
          <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255, 255, 255, 0.5)' }}>
            © 2025 — Curated cultural experiences
          </p>
        </div>
      </footer>
    </div>
  );
}
