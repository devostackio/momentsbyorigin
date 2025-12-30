import { ImageWithFallback } from './figma/ImageWithFallback';
import { Newspaper, Mic2, Film, BookOpen } from 'lucide-react';

export function LayoutOption6() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--canvas)' }}>
      {/* Navigation */}
      <nav className="px-6 md:px-20 py-6 flex justify-between items-center border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}>
          <span className="text-xl">ORIGIN</span>
          <span className="text-xs ml-2" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>Creative Media</span>
        </div>
        <div className="flex gap-8 items-center" style={{ fontFamily: 'var(--font-sans)' }}>
          <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Stories</a>
          <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Podcasts</a>
          <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Films</a>
          <button 
            className="px-6 py-3 text-sm transition-all duration-300 hover:opacity-80"
            style={{ 
              backgroundColor: 'var(--accent-sage)', 
              color: 'var(--canvas)',
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              borderRadius: '2px'
            }}
          >
            Subscribe
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-32 md:py-48 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
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
            Where DC's Stories Live
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
            Origin Creative Media is a publishing platform for community-created news, podcasts, films, and long-form writing. We curate for quality, anchor in neighborhood truth, and distribute to the world—because local stories deserve global reach.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              className="px-8 py-4 transition-all duration-300 hover:opacity-80"
              style={{ 
                backgroundColor: 'var(--accent-sage)', 
                color: 'var(--canvas)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                borderRadius: '2px'
              }}
            >
              Explore Content
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
              Subscribe to Feed
            </button>
          </div>
        </div>
      </section>

      {/* What We Publish */}
      <section className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: 'rgba(156, 170, 152, 0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl mb-16 text-center"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            What We Publish
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Newspaper,
                title: 'News & Investigations',
                description: 'Community journalism that holds power accountable and amplifies neighborhood voices—reported by residents who know the real story.',
                color: 'var(--accent-rose)'
              },
              {
                icon: Mic2,
                title: 'Podcasts & Conversations',
                description: 'Long-form interviews and storytelling that goes deep into the topics that matter—hosted by DC creators, not outsiders.',
                color: 'var(--accent-denim)'
              },
              {
                icon: Film,
                title: 'Films & Documentaries',
                description: 'Youth-created indie films and documentaries that showcase neighborhood talent and tell stories Hollywood won\'t fund.',
                color: 'var(--accent-sage)'
              },
              {
                icon: BookOpen,
                title: 'Essays & Long Reads',
                description: 'In-depth features exploring culture, innovation, and neighborhood life—written by the people living it.',
                color: 'var(--accent-terracotta)'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                  style={{ 
                    backgroundColor: `${item.color}15`,
                    borderRadius: '50%'
                  }}
                >
                  <item.icon size={28} style={{ color: item.color }} />
                </div>
                <h3 
                  className="text-xl mb-3"
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    color: 'var(--charcoal-primary)',
                    fontWeight: 700
                  }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-sm"
                  style={{ 
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--charcoal-tertiary)',
                    lineHeight: 1.7
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured This Week */}
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
            Featured This Week
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div>
              <div className="relative mb-4 overflow-hidden" style={{ borderRadius: '4px', aspectRatio: '16/9' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Urban development"
                  className="w-full h-full object-cover"
                  style={{ filter: 'saturate(0.85) contrast(1.1)' }}
                />
              </div>
              <span className="inline-block px-3 py-1 text-xs mb-3 uppercase tracking-wider" style={{ backgroundColor: 'rgba(196, 150, 138, 0.15)', color: 'var(--accent-rose)', fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
                FEATURED STORY
              </span>
              <h3 
                className="text-xl mb-2"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                The Future of Southeast DC's Creative Economy
              </h3>
              <p 
                className="text-sm mb-2"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                An in-depth look at how Origin's ventures are transforming the neighborhood's economic landscape—and what it means for the next generation.
              </p>
              <p 
                className="text-xs"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)'
                }}
              >
                12 min read • Community Impact • By Jamal Richardson
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <div className="relative mb-4 overflow-hidden" style={{ borderRadius: '4px', aspectRatio: '16/9' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Technology"
                  className="w-full h-full object-cover"
                  style={{ filter: 'saturate(0.85) contrast(1.1)' }}
                />
              </div>
              <span className="inline-block px-3 py-1 text-xs mb-3 uppercase tracking-wider" style={{ backgroundColor: 'rgba(123, 139, 158, 0.15)', color: 'var(--accent-denim)', fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
                NEW PODCAST
              </span>
              <h3 
                className="text-xl mb-2"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Episode 47: Building Tech Platforms That Serve Community
              </h3>
              <p 
                className="text-sm mb-2"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                A conversation with Origin Stack's lead engineer about designing secure, accessible technology that empowers rather than extracts.
              </p>
              <p 
                className="text-xs"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)'
                }}
              >
                45 min • Technology • Host: Keisha Washington
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <div className="relative mb-4 overflow-hidden" style={{ borderRadius: '4px', aspectRatio: '16/9' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Film production"
                  className="w-full h-full object-cover"
                  style={{ filter: 'saturate(0.85) contrast(1.1)' }}
                />
              </div>
              <span className="inline-block px-3 py-1 text-xs mb-3 uppercase tracking-wider" style={{ backgroundColor: 'rgba(156, 170, 152, 0.15)', color: 'var(--accent-sage)', fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
                FILM PREMIERE
              </span>
              <h3 
                className="text-xl mb-2"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                "Rooted" — A Short Film by Maya J.
              </h3>
              <p 
                className="text-sm mb-2"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                A neighborhood youth's powerful documentary about family, heritage, and what it means to stay rooted when everything around you changes.
              </p>
              <p 
                className="text-xs"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)'
                }}
              >
                18 min • Documentary • Youth-Created
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore by Category */}
      <section className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: 'rgba(212, 197, 176, 0.15)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl mb-16 text-center"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Explore by Category
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Technology & Innovation', subtitle: 'How tech can serve community, not extract from it' },
              { title: 'Community Stories', subtitle: 'Profiles of neighbors building the future' },
              { title: 'Creative Spotlights', subtitle: 'Artists, musicians, and makers doing the work' },
              { title: 'Economic Justice', subtitle: 'Building wealth that stays in the neighborhood' },
              { title: 'Youth Voices', subtitle: 'Stories told by the next generation' },
              { title: 'Cultural Heritage', subtitle: 'Preserving and building on DC\'s legacy' }
            ].map((category, index) => (
              <div 
                key={index}
                className="p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                style={{ 
                  backgroundColor: 'var(--canvas)',
                  border: '1px solid var(--border)',
                  borderRadius: '4px'
                }}
              >
                <h3 
                  className="text-lg mb-2"
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    color: 'var(--charcoal-primary)',
                    fontWeight: 700
                  }}
                >
                  {category.title}
                </h3>
                <p 
                  className="text-sm"
                  style={{ 
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--charcoal-tertiary)',
                    lineHeight: 1.6
                  }}
                >
                  {category.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Episodes */}
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
            Latest Episodes
          </h2>
          <div className="space-y-6">
            {[
              {
                title: 'The Origin Story: How It All Began',
                description: 'Founder\'s journey and the vision behind Origin Creative Group—from idea to impact.',
                duration: '52 min'
              },
              {
                title: 'Music, Memory, and America 250',
                description: 'Preview of Origin Music and how we\'re celebrating DC\'s musical legacy for the nation\'s 250th anniversary.',
                duration: '38 min'
              },
              {
                title: 'Design Thinking for Regular People',
                description: 'Inside Origin Studio\'s community workshop format—where neighbors become changemakers.',
                duration: '41 min'
              }
            ].map((episode, index) => (
              <div 
                key={index}
                className="p-6 flex items-center justify-between cursor-pointer transition-all duration-300 hover:bg-[rgba(156,170,152,0.05)]"
                style={{ 
                  border: '1px solid var(--border)',
                  borderRadius: '4px'
                }}
              >
                <div>
                  <h3 
                    className="text-lg mb-2"
                    style={{ 
                      fontFamily: 'var(--font-serif)', 
                      color: 'var(--charcoal-primary)',
                      fontWeight: 700
                    }}
                  >
                    {episode.title}
                  </h3>
                  <p 
                    className="text-sm mb-2"
                    style={{ 
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--charcoal-secondary)',
                      lineHeight: 1.7,
                      maxWidth: '70ch'
                    }}
                  >
                    {episode.description}
                  </p>
                  <p 
                    className="text-xs"
                    style={{ 
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--charcoal-tertiary)'
                    }}
                  >
                    {episode.duration}
                  </p>
                </div>
                <div 
                  className="w-12 h-12 flex items-center justify-center"
                  style={{ 
                    backgroundColor: 'rgba(156, 170, 152, 0.15)',
                    borderRadius: '50%'
                  }}
                >
                  <Mic2 size={20} style={{ color: 'var(--accent-sage)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: 'rgba(156, 170, 152, 0.08)' }}>
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
            Never Miss a Story
          </h2>
          <p 
            className="text-lg mb-10"
            style={{ 
              fontFamily: 'var(--font-sans)',
              color: 'var(--charcoal-secondary)',
              lineHeight: 1.7
            }}
          >
            Get Origin Creative Media content delivered directly to your inbox, RSS reader, or favorite podcast app. All free. Always community-first.
          </p>
          <div className="grid md:grid-cols-4 gap-4 mb-10 text-left">
            {[
              { title: 'Email Newsletter', subtitle: 'Weekly digest of our best stories' },
              { title: 'RSS Feed', subtitle: 'Every article, film, and podcast as it publishes' },
              { title: 'Podcast Feed', subtitle: 'Audio content only' },
              { title: 'Push Notifications', subtitle: 'Breaking news and major releases' }
            ].map((option, index) => (
              <div 
                key={index}
                className="p-4 text-center"
                style={{ 
                  backgroundColor: 'var(--canvas)',
                  border: '1px solid var(--border)',
                  borderRadius: '4px'
                }}
              >
                <p 
                  className="text-sm mb-1"
                  style={{ 
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--charcoal-primary)',
                    fontWeight: 500
                  }}
                >
                  {option.title}
                </p>
                <p 
                  className="text-xs"
                  style={{ 
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--charcoal-tertiary)'
                  }}
                >
                  {option.subtitle}
                </p>
              </div>
            ))}
          </div>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 border"
              style={{ 
                backgroundColor: 'var(--canvas)',
                borderColor: 'var(--border)',
                borderWidth: '1px',
                borderRadius: '2px',
                fontFamily: 'var(--font-sans)',
                color: 'var(--charcoal-primary)',
                fontSize: '14px'
              }}
            />
            <button 
              type="submit"
              className="px-8 py-4 transition-all duration-300 hover:opacity-80"
              style={{ 
                backgroundColor: 'var(--accent-sage)', 
                color: 'var(--canvas)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                borderRadius: '2px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Subscribe Free
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-20 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}>
            <span className="text-lg">Origin Creative Media</span>
          </div>
          <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
            © 2025 — Origin Creative Media
          </p>
        </div>
      </footer>
    </div>
  );
}
