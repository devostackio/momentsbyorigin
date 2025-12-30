import { ImageWithFallback } from './figma/ImageWithFallback';
import { Film, Radio, Calendar, Mic } from 'lucide-react';

export function LayoutOption4() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--canvas)' }}>
      {/* Navigation */}
      <nav className="px-6 md:px-20 py-6 flex justify-between items-center border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}>
          <span className="text-xl">ORIGIN</span>
          <span className="text-xs ml-2" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>Media Group</span>
        </div>
        <div className="flex gap-8 items-center" style={{ fontFamily: 'var(--font-sans)' }}>
          <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Services</a>
          <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Work</a>
          <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Talent</a>
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
            Start a Project
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-32 md:py-48 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <span 
            className="inline-block px-4 py-2 text-xs uppercase tracking-wider mb-8"
            style={{ 
              backgroundColor: 'rgba(196, 150, 138, 0.15)', 
              color: 'var(--accent-rose)', 
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              borderRadius: '2px'
            }}
          >
            Production House
          </span>
          <h1 
            className="text-5xl md:text-7xl mb-8"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}
          >
            We Don't Just Tell Stories—We Train Storytellers
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
            Origin Media Group is where Southeast DC youth learn professional production, then create the films, podcasts, and content themselves. We pay them, credit them, and help them build careers—not just portfolios.
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
              View Our Work
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
              Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: 'rgba(212, 197, 176, 0.15)' }}>
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
            What We Create
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Content Production */}
            <div 
              className="p-8"
              style={{ 
                backgroundColor: 'var(--canvas)',
                border: '1px solid var(--border)',
                borderRadius: '4px'
              }}
            >
              <span className="inline-block px-3 py-1 text-xs mb-4 uppercase tracking-wider" style={{ backgroundColor: 'rgba(196, 150, 138, 0.15)', color: 'var(--accent-rose)', fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
                PRODUCTION
              </span>
              <h3 
                className="text-2xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Content Production
              </h3>
              <p 
                className="text-base mb-4"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                Video, photography, podcasts, and digital media crafted with professional quality and authentic storytelling—created by neighborhood talent trained through our programs.
              </p>
              <ul className="space-y-2">
                {['Video production', 'Photography', 'Podcasts', 'Digital content'].map((item, i) => (
                  <li 
                    key={i}
                    className="text-sm flex items-center gap-2"
                    style={{ 
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--charcoal-tertiary)'
                    }}
                  >
                    <span style={{ color: 'var(--accent-rose)' }}>•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Live Events */}
            <div 
              className="p-8"
              style={{ 
                backgroundColor: 'var(--canvas)',
                border: '1px solid var(--border)',
                borderRadius: '4px'
              }}
            >
              <span className="inline-block px-3 py-1 text-xs mb-4 uppercase tracking-wider" style={{ backgroundColor: 'rgba(123, 139, 158, 0.15)', color: 'var(--accent-denim)', fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
                EVENTS
              </span>
              <h3 
                className="text-2xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Live Events
              </h3>
              <p 
                className="text-base mb-4"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                From intimate showcases to large-scale community gatherings—we produce memorable experiences that center neighborhood voices and celebrate local creativity.
              </p>
              <ul className="space-y-2">
                {['Event production', 'Stage management', 'A/V services', 'Community activations'].map((item, i) => (
                  <li 
                    key={i}
                    className="text-sm flex items-center gap-2"
                    style={{ 
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--charcoal-tertiary)'
                    }}
                  >
                    <span style={{ color: 'var(--accent-denim)' }}>•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Youth Programs */}
            <div 
              className="p-8"
              style={{ 
                backgroundColor: 'var(--canvas)',
                border: '1px solid var(--border)',
                borderRadius: '4px'
              }}
            >
              <span className="inline-block px-3 py-1 text-xs mb-4 uppercase tracking-wider" style={{ backgroundColor: 'rgba(156, 170, 152, 0.15)', color: 'var(--accent-sage)', fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
                EDUCATION
              </span>
              <h3 
                className="text-2xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Youth Programs
              </h3>
              <p 
                className="text-base mb-4"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                Hands-on film and media training that leads to paid work, portfolio credits, and career pathways—not just workshops, but launchpads into professional creative industries.
              </p>
              <ul className="space-y-2">
                {['Indie film workshops', 'Media training', 'Paid opportunities', 'Portfolio development'].map((item, i) => (
                  <li 
                    key={i}
                    className="text-sm flex items-center gap-2"
                    style={{ 
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--charcoal-tertiary)'
                    }}
                  >
                    <span style={{ color: 'var(--accent-sage)' }}>•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Podcast Network */}
            <div 
              className="p-8"
              style={{ 
                backgroundColor: 'var(--canvas)',
                border: '1px solid var(--border)',
                borderRadius: '4px'
              }}
            >
              <span className="inline-block px-3 py-1 text-xs mb-4 uppercase tracking-wider" style={{ backgroundColor: 'rgba(184, 138, 125, 0.15)', color: 'var(--accent-terracotta)', fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
                AUDIO
              </span>
              <h3 
                className="text-2xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Podcast Network
              </h3>
              <p 
                className="text-base mb-4"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                Professional podcast production, hosting, and distribution for voices that deserve to be heard—specializing in community stories and neighborhood conversations.
              </p>
              <ul className="space-y-2">
                {['Studio recording', 'Editing & production', 'Distribution', 'Audience growth'].map((item, i) => (
                  <li 
                    key={i}
                    className="text-sm flex items-center gap-2"
                    style={{ 
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--charcoal-tertiary)'
                    }}
                  >
                    <span style={{ color: 'var(--accent-terracotta)' }}>•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
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
            Recent Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div>
              <div className="relative mb-4 overflow-hidden" style={{ borderRadius: '4px', aspectRatio: '16/9' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Film production"
                  className="w-full h-full object-cover"
                  style={{ filter: 'saturate(0.85) contrast(1.1)' }}
                />
              </div>
              <span className="inline-block px-3 py-1 text-xs mb-3 uppercase tracking-wider" style={{ backgroundColor: 'rgba(196, 150, 138, 0.15)', color: 'var(--accent-rose)', fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
                SHORT FILM
              </span>
              <h3 
                className="text-xl mb-2"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Voices of Southeast
              </h3>
              <p 
                className="text-sm mb-2"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                A documentary series by neighborhood youth exploring local history and culture through the eyes of young creators.
              </p>
              <p 
                className="text-xs"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)'
                }}
              >
                Origin Media Group • 2024 • Youth-Created
              </p>
            </div>

            {/* Project 2 */}
            <div>
              <div className="relative mb-4 overflow-hidden" style={{ borderRadius: '4px', aspectRatio: '16/9' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Podcast recording"
                  className="w-full h-full object-cover"
                  style={{ filter: 'saturate(0.85) contrast(1.1)' }}
                />
              </div>
              <span className="inline-block px-3 py-1 text-xs mb-3 uppercase tracking-wider" style={{ backgroundColor: 'rgba(123, 139, 158, 0.15)', color: 'var(--accent-denim)', fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
                PODCAST
              </span>
              <h3 
                className="text-xl mb-2"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                The Neighborhood Report
              </h3>
              <p 
                className="text-sm mb-2"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                Weekly conversations with community leaders, creators, and changemakers—produced and hosted by DC residents.
              </p>
              <p 
                className="text-xs"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)'
                }}
              >
                50+ Episodes • Weekly • Community Voices
              </p>
            </div>

            {/* Project 3 */}
            <div>
              <div className="relative mb-4 overflow-hidden" style={{ borderRadius: '4px', aspectRatio: '16/9' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Community event"
                  className="w-full h-full object-cover"
                  style={{ filter: 'saturate(0.85) contrast(1.1)' }}
                />
              </div>
              <span className="inline-block px-3 py-1 text-xs mb-3 uppercase tracking-wider" style={{ backgroundColor: 'rgba(156, 170, 152, 0.15)', color: 'var(--accent-sage)', fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
                EVENT
              </span>
              <h3 
                className="text-xl mb-2"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Summer Showcase Series
              </h3>
              <p 
                className="text-sm mb-2"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                Quarterly events featuring local artists, filmmakers, and performers—celebrating neighborhood talent and building community.
              </p>
              <p 
                className="text-xs"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)'
                }}
              >
                500+ Attendees • Quarterly • Free Entry
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Talent */}
      <section className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: 'rgba(196, 150, 138, 0.08)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl mb-8"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            The Team Behind the Work
          </h2>
          <p 
            className="text-lg mb-12"
            style={{ 
              fontFamily: 'var(--font-sans)',
              color: 'var(--charcoal-secondary)',
              lineHeight: 1.7,
              maxWidth: '75ch'
            }}
          >
            Every Origin Media Group production pairs professional crew with youth creators—not as interns watching from the sidelines, but as credited collaborators earning real pay. Experience mentors talent. Talent brings fresh perspective. Everyone grows.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-rose)', fontWeight: 900 }}>
                15+
              </div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                Professional Crew
              </p>
              <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                Experienced media professionals
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-sage)', fontWeight: 900 }}>
                50+
              </div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                Youth Creators
              </p>
              <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                Neighborhood filmmakers earning credits and income
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-denim)', fontWeight: 900 }}>
                100+
              </div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                Projects Completed
              </p>
              <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                Productions since launch
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-terracotta)', fontWeight: 900 }}>
                25+
              </div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                Community Partners
              </p>
              <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                Organizations and venues
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-32 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-5xl mb-6"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Let's Create Something Together
          </h2>
          <p 
            className="text-lg mb-10"
            style={{ 
              fontFamily: 'var(--font-sans)',
              color: 'var(--charcoal-secondary)',
              lineHeight: 1.7
            }}
          >
            Whether you need a video, want to launch a podcast, or have an event that needs production support—we're ready to collaborate. And if you're a young creator looking to break in, we're hiring.
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
              Start a Conversation
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
              Apply to Join Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-20 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}>
            <span className="text-lg">Origin Media Group</span>
          </div>
          <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
            © 2025 — Origin Media Group
          </p>
        </div>
      </footer>
    </div>
  );
}
