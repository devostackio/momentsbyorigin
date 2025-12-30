import { ImageWithFallback } from './figma/ImageWithFallback';
import { Target, Users, Rocket, TrendingUp, Briefcase, Building2 } from 'lucide-react';

export function VenturePage9() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Navigation */}
      <nav className="px-6 md:px-20 py-6 flex justify-between items-center border-b" style={{ borderColor: '#E5E5E5' }}>
        <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}>
          <span className="text-xl">ORIGIN</span>
          <span style={{ margin: '0 8px', color: 'var(--charcoal-tertiary)' }}>×</span>
          <span className="text-xl">CONSULTING</span>
        </div>
        <div className="flex gap-8 items-center" style={{ fontFamily: 'var(--font-sans)' }}>
          <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Services</a>
          <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Process</a>
          <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Case Studies</a>
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
            Book a Consultation
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 md:py-40 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8" style={{ backgroundColor: 'rgba(123, 139, 158, 0.1)', borderRadius: '24px', border: '1px solid rgba(123, 139, 158, 0.2)' }}>
                <Briefcase size={16} style={{ color: 'var(--accent-denim)' }} />
                <span className="text-xs" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-primary)', fontWeight: 500 }}>Where Expertise Meets Enterprise Transformation</span>
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
                Innovation that Scales: Transform Your Enterprise Now
              </h1>
              <p 
                className="text-lg md:text-xl mb-12"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                Origin Consulting curates the best talent, trainers, coaches, and mentors to deliver live Design Thinking Workshops—like the practical, results-driven models of Stanford D.School and IDEO—specifically designed for medium to large enterprises ready to shed legacy thinking and build for the modern age.
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
                  Book a Consultation
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
                  Request a Prospectus
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden" style={{ borderRadius: '8px' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwd29ya3Nob3AlMjB0ZWFtfGVufDF8fHx8MTc2MDg0NDA3OHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Enterprise workshop team collaboration"
                  className="w-full h-full object-cover"
                  style={{ 
                    aspectRatio: '4/3',
                    filter: 'saturate(0.85) contrast(1.1)'
                  }}
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
                <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-denim)', fontWeight: 700 }}>85%</div>
                <div className="text-xs" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>Client Satisfaction</div>
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
              The Origin Consulting Format
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
              Our bespoke process combines world-class design thinking methodologies with 
              hands-on implementation support to drive lasting transformation.
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
                <Target size={28} style={{ color: 'var(--accent-denim)' }} />
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Discovery
              </h3>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.7
                }}
              >
                Deep dive with leadership to assess current product/service gaps and define transformation goals
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
                Co-Creation Workshop
              </h3>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.7
                }}
              >
                Live, immersive Design Thinking workshops led by top-tier talent, modeling new methodologies
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
                <TrendingUp size={28} style={{ color: 'var(--accent-rose)' }} />
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Future-Proofing & Implementation
              </h3>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.7
                }}
              >
                Develop a strategic roadmap and immediate, actionable product/service prototypes
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
                Scale & Sustain
              </h3>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.7
                }}
              >
                Post-workshop coaching and mentorship to integrate new design-led practices across the organization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
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
            Transformation Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
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
                  <Rocket size={20} style={{ color: 'var(--accent-denim)' }} />
                </div>
                <span className="text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: 'var(--accent-denim)', fontWeight: 500 }}>Product Innovation</span>
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Accelerating Product-Market Fit
              </h3>
              <p 
                className="text-sm mb-4"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.7
                }}
              >
                A regional bank transitioned from a 1990s waterfall process to a modern Agile-Design system, 
                resulting in a 40% faster time-to-market for new digital services.
              </p>
              <div className="flex items-center gap-8 pt-4" style={{ borderTop: '1px solid #E5E5E5' }}>
                <div>
                  <div className="text-2xl mb-1" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-denim)', fontWeight: 700 }}>40%</div>
                  <div className="text-xs" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>Faster Launch Time</div>
                </div>
                <div>
                  <div className="text-2xl mb-1" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-denim)', fontWeight: 700 }}>$2.5M</div>
                  <div className="text-xs" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>Annual Savings</div>
                </div>
              </div>
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
                  <Building2 size={20} style={{ color: 'var(--accent-sage)' }} />
                </div>
                <span className="text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: 'var(--accent-sage)', fontWeight: 500 }}>Culture & Efficiency</span>
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Re-Engaging the Workforce
              </h3>
              <p 
                className="text-sm mb-4"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.7
                }}
              >
                A logistics company used design sprints to restructure internal communications, 
                leading to a 15% reduction in cross-departmental errors and an increase in employee engagement.
              </p>
              <div className="flex items-center gap-8 pt-4" style={{ borderTop: '1px solid #E5E5E5' }}>
                <div>
                  <div className="text-2xl mb-1" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-sage)', fontWeight: 700 }}>15%</div>
                  <div className="text-xs" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>Error Reduction</div>
                </div>
                <div>
                  <div className="text-2xl mb-1" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-sage)', fontWeight: 700 }}>3.8x</div>
                  <div className="text-xs" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>Engagement Boost</div>
                </div>
              </div>
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
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3b3Jrc2hvcCUyMGRlc2lnbiUyMHRoaW5raW5nfGVufDF8fHx8MTc2MDg0NDA3OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Corporate design thinking workshop"
                className="w-full h-full object-cover"
                style={{ 
                  aspectRatio: '4/3',
                  filter: 'saturate(0.85) contrast(1.1)'
                }}
              />
            </div>
            <div className="relative overflow-hidden" style={{ borderRadius: '8px' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYwODQ0MDc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Enterprise team collaboration"
                className="w-full h-full object-cover"
                style={{ 
                  aspectRatio: '4/3',
                  filter: 'saturate(0.85) contrast(1.1)'
                }}
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
            Your Next Breakthrough Starts Here
          </h2>
          <p 
            className="text-lg mb-10"
            style={{ 
              fontFamily: 'var(--font-sans)',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: 1.7
            }}
          >
            Our engagements are bespoke and capacity is limited to ensure dedicated attention from 
            our world-class coaches. We focus on quality, deep-impact transformation.
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
              Inquire About 2026 Availability
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
              Download Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-20 border-t" style={{ borderColor: '#E5E5E5', backgroundColor: '#FAFAFA' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}>
            <span className="text-lg">Origin Consulting — Studio X Product Workshop</span>
          </div>
          <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
            © 2025 — Where expertise meets enterprise transformation
          </p>
        </div>
      </footer>
    </div>
  );
}
