import { ImageWithFallback } from './figma/ImageWithFallback';
import { Building2, TrendingUp, Users, Sparkles } from 'lucide-react';

export function LayoutOption1() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--canvas)' }}>
      {/* Navigation */}
      <nav className="px-6 md:px-20 py-6 flex justify-between items-center border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}>
          <span className="text-xl">ORIGIN</span>
          <span className="text-xs ml-2" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>Creative Group</span>
        </div>
        <div className="flex gap-8 items-center" style={{ fontFamily: 'var(--font-sans)' }}>
          <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Vision</a>
          <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Ventures</a>
          <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Community</a>
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
            Partner With Us
          </button>
        </div>
      </nav>

      {/* Hero Section with Gradient */}
      <section 
        className="relative py-32 md:py-48 px-6 md:px-20 film-grain overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(196, 150, 138, 0.15) 0%, rgba(184, 138, 125, 0.12) 35%, rgba(156, 170, 152, 0.08) 70%, rgba(212, 197, 176, 0.05) 100%)`
        }}
      >
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 
            className="text-5xl md:text-7xl mb-8 max-w-4xl mx-auto"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}
          >
            Building Creative Futures Together
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
            Origin Creative Group launches the companies, platforms, and spaces that DC's creators need to thrive. We don't just invest in ideas—we build the infrastructure that turns neighborhood talent into generational wealth.
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
              Our Vision
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
              Investment Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20 md:py-32 px-6 md:px-20">
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
            Our Impact
          </h2>
          <div className="grid md:grid-cols-5 gap-12 text-center">
            <div>
              <div className="text-4xl md:text-5xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-rose)', fontWeight: 900 }}>
                4
              </div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                Active Companies
              </p>
              <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                Generating revenue and impact today
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-terracotta)', fontWeight: 900 }}>
                3
              </div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                Launching 2028
              </p>
              <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                Music, events, and innovation labs
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-sage)', fontWeight: 900 }}>
                5K+
              </div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                Community Members
              </p>
              <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                Creators, entrepreneurs, and neighbors
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-denim)', fontWeight: 900 }}>
                $2M+
              </div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                Invested Locally
              </p>
              <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                In businesses, training, and infrastructure
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-sand)', fontWeight: 900 }}>
                150+
              </div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                Youth Creators
              </p>
              <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                Trained, paid, and credited for their work
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio of Ventures */}
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
            Our Portfolio of Ventures
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Origin Media Group */}
            <div 
              className="p-8 group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
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
                Origin Media Group
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                A production company where Southeast DC youth create the films, podcasts, and content—not just appear in them. Professional training meets neighborhood storytelling, and creators get paid for their work.
              </p>
            </div>

            {/* Origin Stack */}
            <div 
              className="p-8 group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              style={{ 
                backgroundColor: 'var(--canvas)',
                border: '1px solid var(--border)',
                borderRadius: '4px'
              }}
            >
              <span className="inline-block px-3 py-1 text-xs mb-4 uppercase tracking-wider" style={{ backgroundColor: 'rgba(123, 139, 158, 0.15)', color: 'var(--accent-denim)', fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
                TECHNOLOGY
              </span>
              <h3 
                className="text-2xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Origin Stack
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                One secure login for every opportunity. Origin Stack connects DC creators to training, tools, jobs, and community through Club ID—eliminating password fatigue across 500+ partner organizations.
              </p>
            </div>

            {/* Origin Creative Media */}
            <div 
              className="p-8 group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              style={{ 
                backgroundColor: 'var(--canvas)',
                border: '1px solid var(--border)',
                borderRadius: '4px'
              }}
            >
              <span className="inline-block px-3 py-1 text-xs mb-4 uppercase tracking-wider" style={{ backgroundColor: 'rgba(156, 170, 152, 0.15)', color: 'var(--accent-sage)', fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
                MEDIA
              </span>
              <h3 
                className="text-2xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Origin Creative Media
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                Where DC's stories live. A publishing platform for community-created news, podcasts, films, and long-form writing—curated for depth, rooted in neighborhood truth, distributed to the world.
              </p>
            </div>

            {/* Moments by Origin */}
            <div 
              className="p-8 group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              style={{ 
                backgroundColor: 'var(--canvas)',
                border: '1px solid var(--border)',
                borderRadius: '4px'
              }}
            >
              <span className="inline-block px-3 py-1 text-xs mb-4 uppercase tracking-wider" style={{ backgroundColor: 'rgba(184, 138, 125, 0.15)', color: 'var(--accent-terracotta)', fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
                EXPERIENCES • Coming 2028
              </span>
              <h3 
                className="text-2xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Moments by Origin
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                Intimate culinary experiences celebrating DC's food heritage—where world-class chefs meet neighborhood stories. Every event funds culinary scholarships for Southeast DC youth.
              </p>
            </div>

            {/* Origin Music */}
            <div 
              className="p-8 group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              style={{ 
                backgroundColor: 'var(--canvas)',
                border: '1px solid var(--border)',
                borderRadius: '4px'
              }}
            >
              <span className="inline-block px-3 py-1 text-xs mb-4 uppercase tracking-wider" style={{ backgroundColor: 'rgba(196, 150, 138, 0.15)', color: 'var(--accent-rose)', fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
                MUSIC LABEL • Coming 2028
              </span>
              <h3 
                className="text-2xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Origin Music
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                A Southeast DC music label honoring two centuries of our community's sound—from go-go to gospel, jazz to hip-hop. Launching 2028 to celebrate America's 250th with the voices that shaped the nation's soundtrack.
              </p>
            </div>

            {/* Origin Studio */}
            <div 
              className="p-8 group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              style={{ 
                backgroundColor: 'var(--canvas)',
                border: '1px solid var(--border)',
                borderRadius: '4px'
              }}
            >
              <span className="inline-block px-3 py-1 text-xs mb-4 uppercase tracking-wider" style={{ backgroundColor: 'rgba(123, 139, 158, 0.15)', color: 'var(--accent-denim)', fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
                INCUBATOR • Coming 2028
              </span>
              <h3 
                className="text-2xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Origin Studio
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                TEDx for everyday changemakers. A workshop platform where neighbors design solutions to real problems—from community gardens to youth programs—then bring them to life with mentorship and resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-32 px-6 md:px-20">
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
            Our Approach
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(196, 150, 138, 0.15)',
                  borderRadius: '50%'
                }}
              >
                <Building2 size={28} style={{ color: 'var(--accent-rose)' }} />
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Invest in Infrastructure
              </h3>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.7
                }}
              >
                We build platforms, companies, and spaces that last—not one-off programs, but permanent infrastructure that serves generations.
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(156, 170, 152, 0.15)',
                  borderRadius: '50%'
                }}
              >
                <Users size={28} style={{ color: 'var(--accent-sage)' }} />
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Empower People
              </h3>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.7
                }}
              >
                Community members aren't just users or audiences—they're owners, creators, and decision-makers in every venture we launch.
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(123, 139, 158, 0.15)',
                  borderRadius: '50%'
                }}
              >
                <TrendingUp size={28} style={{ color: 'var(--accent-denim)' }} />
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Scale Impact
              </h3>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.7
                }}
              >
                Sustainability requires revenue. Every Origin venture is designed to generate profit, then reinvest that wealth back into community outcomes.
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(184, 138, 125, 0.15)',
                  borderRadius: '50%'
                }}
              >
                <Sparkles size={28} style={{ color: 'var(--accent-terracotta)' }} />
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Preserve Culture
              </h3>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.7
                }}
              >
                From go-go to storytelling, we don't just preserve DC's cultural legacy—we fund the next generation to build on it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: 'rgba(196, 150, 138, 0.08)' }}>
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
            Build the Future With Us
          </h2>
          <p 
            className="text-lg mb-10"
            style={{ 
              fontFamily: 'var(--font-sans)',
              color: 'var(--charcoal-secondary)',
              lineHeight: 1.7
            }}
          >
            Whether you're investing capital, contributing talent, or bringing ideas—Origin has a place for you. Let's build an economy where creativity generates wealth that stays in the community.
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
              Explore Investment Tiers
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
              Join Our Community
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-20 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}>
            <span className="text-lg">Origin Creative Group</span>
          </div>
          <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
            © 2025 — Building creative futures together
          </p>
        </div>
      </footer>
    </div>
  );
}
