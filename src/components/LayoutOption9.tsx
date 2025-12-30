import { ImageWithFallback } from './figma/ImageWithFallback';
import { Lightbulb, Users, Rocket, Target, Sparkles, MessageSquare } from 'lucide-react';

export function LayoutOption9() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Navigation */}
      <nav className="px-6 md:px-20 py-6 flex justify-between items-center border-b" style={{ borderColor: '#E5E5E5' }}>
        <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}>
          <span className="text-xl">ORIGIN</span>
          <span style={{ margin: '0 8px', color: 'var(--charcoal-tertiary)' }}>×</span>
          <span className="text-xl">STUDIO</span>
        </div>
        <div className="flex gap-8 items-center" style={{ fontFamily: 'var(--font-sans)' }}>
          <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Workshops</a>
          <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Format</a>
          <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Community</a>
          <button 
            className="px-6 py-3 text-sm transition-all duration-300 hover:opacity-80"
            style={{ 
              backgroundColor: 'var(--charcoal-primary)', 
              color: '#FFFFFF',
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              borderRadius: '4px'
            }}
          >
            Apply to Present
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 md:py-40 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8" style={{ backgroundColor: 'rgba(123, 139, 158, 0.1)', borderRadius: '24px', border: '1px solid rgba(123, 139, 158, 0.2)' }}>
                <Lightbulb size={16} style={{ color: 'var(--accent-denim)' }} />
                <span className="text-xs" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-primary)', fontWeight: 500 }}>Where the Beginning Meets Experimentation</span>
              </div>
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
                Ideas Worth Sharing Start Here
              </h1>
              <p 
                className="text-lg md:text-xl mb-12"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                Origin × Studio is an incubator and workshop platform for everyday changemakers. 
                Using design thinking and collaborative formats, we help neighbors unleash bold ideas 
                and transform their communities — like TEDx, but for regular people.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button 
                  className="px-8 py-4 transition-all duration-300 hover:opacity-80"
                  style={{ 
                    backgroundColor: 'var(--charcoal-primary)', 
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    borderRadius: '4px'
                  }}
                >
                  Attend a Workshop
                </button>
                <button 
                  className="px-8 py-4 border transition-all duration-300 hover:bg-gray-100"
                  style={{ 
                    borderColor: 'var(--charcoal-primary)',
                    borderWidth: '1.5px',
                    backgroundColor: 'transparent',
                    color: 'var(--charcoal-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    borderRadius: '4px'
                  }}
                >
                  Submit Your Idea
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden" style={{ borderRadius: '8px' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1649252504304-3d564a12dc52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGJyYWluc3Rvcm0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2MDg0NDA3OHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Workshop collaboration"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
              {/* Floating Stats */}
              <div 
                className="absolute -bottom-6 -left-6 p-6"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #E5E5E5'
                }}
              >
                <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-sage)', fontWeight: 700 }}>250+</div>
                <div className="text-xs" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>Ideas Shared</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-5xl mb-6"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                color: 'var(--charcoal-primary)',
                fontWeight: 700,
                letterSpacing: '-0.01em'
              }}
            >
              The Origin × Studio Format
            </h2>
            <p 
              className="text-lg mx-auto"
              style={{ 
                fontFamily: 'var(--font-sans)',
                color: 'var(--charcoal-secondary)',
                maxWidth: '65ch',
                lineHeight: 1.7
              }}
            >
              We combine design thinking methodologies with community storytelling to create 
              a platform where everyone's voice matters.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(123, 139, 158, 0.1)',
                  borderRadius: '50%'
                }}
              >
                <Lightbulb size={28} style={{ color: 'var(--accent-denim)' }} />
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Ideation
              </h3>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.7
                }}
              >
                Share your vision for change in the neighborhood
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(156, 170, 152, 0.1)',
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
                Collaboration
              </h3>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.7
                }}
              >
                Work with mentors and community members
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(196, 150, 138, 0.1)',
                  borderRadius: '50%'
                }}
              >
                <Target size={28} style={{ color: 'var(--accent-rose)' }} />
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Refinement
              </h3>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.7
                }}
              >
                Design thinking workshops to sharpen your concept
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(184, 138, 125, 0.1)',
                  borderRadius: '50%'
                }}
              >
                <Rocket size={28} style={{ color: 'var(--accent-terracotta)' }} />
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Launch
              </h3>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.7
                }}
              >
                Present at our quarterly showcase events
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Ideas */}
      <section className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: '#FAFAFA' }}>
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
            Recent Ideas From the Neighborhood
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="p-8 group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              style={{ 
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E5E5',
                borderRadius: '8px'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-12 h-12 flex items-center justify-center"
                  style={{ 
                    backgroundColor: 'rgba(123, 139, 158, 0.1)',
                    borderRadius: '6px'
                  }}
                >
                  <Sparkles size={20} style={{ color: 'var(--accent-denim)' }} />
                </div>
                <span className="text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: 'var(--accent-denim)', fontWeight: 500 }}>Community</span>
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Mobile Food Pantry Initiative
              </h3>
              <p 
                className="text-sm mb-4"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.7
                }}
              >
                A neighbor's vision to bring fresh food directly to senior residents using 
                repurposed vehicles and volunteer networks.
              </p>
              <p 
                className="text-xs"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)'
                }}
              >
                Presented by Sarah J. — Now serving 200+ families
              </p>
            </div>

            <div 
              className="p-8 group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              style={{ 
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E5E5',
                borderRadius: '8px'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-12 h-12 flex items-center justify-center"
                  style={{ 
                    backgroundColor: 'rgba(156, 170, 152, 0.1)',
                    borderRadius: '6px'
                  }}
                >
                  <Users size={20} style={{ color: 'var(--accent-sage)' }} />
                </div>
                <span className="text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: 'var(--accent-sage)', fontWeight: 500 }}>Youth</span>
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Tech Literacy for Elders
              </h3>
              <p 
                className="text-sm mb-4"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.7
                }}
              >
                High school students teaching seniors smartphone skills and digital safety 
                through weekly community sessions.
              </p>
              <p 
                className="text-xs"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)'
                }}
              >
                Presented by Marcus T. — 50+ students involved
              </p>
            </div>

            <div 
              className="p-8 group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              style={{ 
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E5E5',
                borderRadius: '8px'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-12 h-12 flex items-center justify-center"
                  style={{ 
                    backgroundColor: 'rgba(196, 150, 138, 0.1)',
                    borderRadius: '6px'
                  }}
                >
                  <MessageSquare size={20} style={{ color: 'var(--accent-rose)' }} />
                </div>
                <span className="text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: 'var(--accent-rose)', fontWeight: 500 }}>Culture</span>
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Neighborhood Oral History
              </h3>
              <p 
                className="text-sm mb-4"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.7
                }}
              >
                Recording and archiving stories from longtime residents to preserve 
                community heritage for future generations.
              </p>
              <p 
                className="text-xs"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)'
                }}
              >
                Presented by Kim L. — 100+ stories archived
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden" style={{ borderRadius: '8px' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1599586108868-9c37eb5172ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0aGlua2luZyUyMGlkZWF0aW9ufGVufDF8fHx8MTc2MDg0NDA3OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Design thinking"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
            <div className="relative overflow-hidden" style={{ borderRadius: '8px' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556866149-a42ffe6478ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB3b3Jrc2hvcCUyMHBlb3BsZXxlbnwxfHx8fDE3NjA3NzYzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Community workshop"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: 'var(--charcoal-primary)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-5xl mb-6"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: '#FFFFFF',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Your Idea Could Change Everything
          </h2>
          <p 
            className="text-lg mb-10"
            style={{ 
              fontFamily: 'var(--font-sans)',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: 1.7
            }}
          >
            Origin × Studio is launching in 2028. Whether you're dreaming of a community garden, 
            a youth program, or a neighborhood business — we want to help you bring it to life.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              className="px-8 py-4 transition-all duration-300 hover:opacity-80"
              style={{ 
                backgroundColor: '#FFFFFF',
                color: 'var(--charcoal-primary)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                borderRadius: '4px'
              }}
            >
              Join the Waitlist
            </button>
            <button 
              className="px-8 py-4 border transition-all duration-300 hover:bg-white/10"
              style={{ 
                borderColor: '#FFFFFF',
                borderWidth: '1.5px',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                borderRadius: '4px'
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-20 border-t" style={{ borderColor: '#E5E5E5', backgroundColor: '#FAFAFA' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}>
            <span className="text-lg">Origin × Studio</span>
          </div>
          <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
            © 2025 — Where the beginning meets experimentation
          </p>
        </div>
      </footer>
    </div>
  );
}
