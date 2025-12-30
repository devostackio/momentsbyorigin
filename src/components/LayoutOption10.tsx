import { Handshake, Code, GraduationCap, Palette, Lightbulb, DollarSign, Users, Building2, TrendingUp } from 'lucide-react';

export function LayoutOption10() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--canvas)' }}>
      {/* Navigation */}
      <nav className="px-6 md:px-20 py-6 flex justify-between items-center border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}>
          <span className="text-xl">ORIGIN</span>
          <span className="text-xs ml-2" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>Business Model</span>
        </div>
        <div className="flex gap-8 items-center" style={{ fontFamily: 'var(--font-sans)' }}>
          <a href="#partnerships" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Partners</a>
          <a href="#collective" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Collective</a>
          <a href="#investment" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Investment</a>
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
            Get Involved
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 md:py-40 px-6 md:px-20 film-grain" style={{ background: 'linear-gradient(135deg, rgba(196, 150, 138, 0.08) 0%, rgba(156, 170, 152, 0.05) 100%)' }}>
        <div className="max-w-5xl mx-auto text-center">
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
            Build the Future With Us
          </h1>
          <p 
            className="text-lg md:text-xl mb-12"
            style={{ 
              fontFamily: 'var(--font-sans)',
              color: 'var(--charcoal-secondary)',
              maxWidth: '65ch',
              lineHeight: 1.7,
              margin: '0 auto'
            }}
          >
            Origin is more than a company — it's a movement. We're building a creative ecosystem 
            that transforms communities through media, technology, culture, and innovation. 
            Here's how you can be part of the story.
          </p>
        </div>
      </section>

      {/* Partnerships & Integrations */}
      <section id="partnerships" className="py-20 md:py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6" style={{ backgroundColor: 'rgba(123, 139, 158, 0.1)', borderRadius: '24px' }}>
                <Handshake size={16} style={{ color: 'var(--accent-denim)' }} />
                <span className="text-xs" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-primary)', fontWeight: 500 }}>Partnerships</span>
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
                Partner With Origin
              </h2>
              <p 
                className="text-lg mb-8"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                We're seeking strategic partnerships and integrations that amplify our mission 
                and extend our reach.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6" style={{ backgroundColor: 'rgba(123, 139, 158, 0.05)', borderRadius: '4px' }}>
                <Code size={24} style={{ color: 'var(--accent-denim)', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <h4 className="text-lg mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)', fontWeight: 700 }}>
                    Technology Platforms
                  </h4>
                  <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)', lineHeight: 1.6 }}>
                    Integrate with Stack by Origin's SaaS platform. API partnerships, white-label solutions, 
                    and technology collaborations welcome.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6" style={{ backgroundColor: 'rgba(156, 170, 152, 0.05)', borderRadius: '4px' }}>
                <GraduationCap size={24} style={{ color: 'var(--accent-sage)', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <h4 className="text-lg mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)', fontWeight: 700 }}>
                    Educators & Workshop Leaders
                  </h4>
                  <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)', lineHeight: 1.6 }}>
                    Lead courses in Stack Academy or facilitate Origin × Studio workshops. 
                    Share your expertise with our community.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6" style={{ backgroundColor: 'rgba(184, 138, 125, 0.05)', borderRadius: '4px' }}>
                <Building2 size={24} style={{ color: 'var(--accent-terracotta)', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <h4 className="text-lg mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)', fontWeight: 700 }}>
                    Venues & Spaces
                  </h4>
                  <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)', lineHeight: 1.6 }}>
                    Partner with Moments by Origin for culinary experiences or host Origin × Studio events 
                    in your space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Collective */}
      <section id="collective" className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: 'rgba(212, 197, 176, 0.15)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6" style={{ backgroundColor: 'rgba(196, 150, 138, 0.15)', borderRadius: '24px' }}>
              <Users size={16} style={{ color: 'var(--accent-rose)' }} />
              <span className="text-xs" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-primary)', fontWeight: 500 }}>The Collective</span>
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
              Join the Origin Collective
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
              Gain membership and access to our ecosystem of creators, innovators, and changemakers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 text-center" style={{ backgroundColor: 'var(--canvas)', borderRadius: '4px', border: '1px solid var(--border)' }}>
              <div 
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(196, 150, 138, 0.1)',
                  borderRadius: '50%'
                }}
              >
                <Palette size={28} style={{ color: 'var(--accent-rose)' }} />
              </div>
              <h3 
                className="text-2xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Artists & Creatives
              </h3>
              <p 
                className="text-sm mb-6"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.7
                }}
              >
                Join Origin Music as a recording artist, contribute to Origin Media Labs productions, 
                or showcase your work through Origin Networks.
              </p>
              <ul className="text-xs text-left space-y-2" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                <li>• Music label representation</li>
                <li>• Production opportunities</li>
                <li>• Media platform access</li>
                <li>• Collaborative projects</li>
              </ul>
            </div>

            <div className="p-8 text-center" style={{ backgroundColor: 'var(--canvas)', borderRadius: '4px', border: '1px solid var(--border)' }}>
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
                className="text-2xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Innovators & Builders
              </h3>
              <p 
                className="text-sm mb-6"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.7
                }}
              >
                Platform tinkerers and developers who want to build with us. Access our APIs, 
                co-create tools, and shape the Stack platform.
              </p>
              <ul className="text-xs text-left space-y-2" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                <li>• Developer community</li>
                <li>• Early API access</li>
                <li>• Co-creation opportunities</li>
                <li>• Technical mentorship</li>
              </ul>
            </div>

            <div className="p-8 text-center" style={{ backgroundColor: 'var(--canvas)', borderRadius: '4px', border: '1px solid var(--border)' }}>
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
                className="text-2xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Community Members
              </h3>
              <p 
                className="text-sm mb-6"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.7
                }}
              >
                Participate in workshops, attend events, access learning resources, and connect 
                with like-minded changemakers.
              </p>
              <ul className="text-xs text-left space-y-2" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                <li>• Club ID membership</li>
                <li>• Event access</li>
                <li>• Stack Academy courses</li>
                <li>• Community network</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section id="investment" className="py-20 md:py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6" style={{ backgroundColor: 'rgba(184, 138, 125, 0.1)', borderRadius: '24px' }}>
              <DollarSign size={16} style={{ color: 'var(--accent-terracotta)' }} />
              <span className="text-xs" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-primary)', fontWeight: 500 }}>Investment</span>
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
              Investment Opportunities
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
              Partner with us financially to build sustainable creative infrastructure 
              and launch transformative ventures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Small Cap */}
            <div className="p-8" style={{ backgroundColor: 'rgba(196, 150, 138, 0.05)', borderRadius: '4px', border: '1px solid rgba(196, 150, 138, 0.2)' }}>
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp size={24} style={{ color: 'var(--accent-rose)' }} />
                <h3 
                  className="text-2xl"
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    color: 'var(--charcoal-primary)',
                    fontWeight: 700
                  }}
                >
                  Small Cap Investment
                </h3>
              </div>
              <div className="mb-6">
                <div className="text-4xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-rose)', fontWeight: 900 }}>
                  $250K
                </div>
                <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                  Entry investment tier
                </p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                  <span style={{ color: 'var(--accent-rose)' }}>✓</span>
                  Equity in Origin Creative Group
                </li>
                <li className="flex items-start gap-2 text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                  <span style={{ color: 'var(--accent-rose)' }}>✓</span>
                  Quarterly investor updates
                </li>
                <li className="flex items-start gap-2 text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                  <span style={{ color: 'var(--accent-rose)' }}>✓</span>
                  Access to exclusive events
                </li>
                <li className="flex items-start gap-2 text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                  <span style={{ color: 'var(--accent-rose)' }}>✓</span>
                  Community recognition
                </li>
              </ul>
              <p className="text-xs" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)', lineHeight: 1.6 }}>
                Ideal for individual investors and small funds who want to support our mission.
              </p>
            </div>

            {/* Mid Cap */}
            <div className="p-8" style={{ backgroundColor: 'rgba(156, 170, 152, 0.05)', borderRadius: '4px', border: '1px solid rgba(156, 170, 152, 0.2)' }}>
              <div className="flex items-center gap-3 mb-6">
                <Building2 size={24} style={{ color: 'var(--accent-sage)' }} />
                <h3 
                  className="text-2xl"
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    color: 'var(--charcoal-primary)',
                    fontWeight: 700
                  }}
                >
                  Mid Cap Investment
                </h3>
              </div>
              <div className="mb-6">
                <div className="text-4xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-sage)', fontWeight: 900 }}>
                  $1M
                </div>
                <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                  Strategic partnership tier
                </p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                  <span style={{ color: 'var(--accent-sage)' }}>✓</span>
                  Significant equity stake
                </li>
                <li className="flex items-start gap-2 text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                  <span style={{ color: 'var(--accent-sage)' }}>✓</span>
                  Board observer rights
                </li>
                <li className="flex items-start gap-2 text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                  <span style={{ color: 'var(--accent-sage)' }}>✓</span>
                  Strategic input on ventures
                </li>
                <li className="flex items-start gap-2 text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                  <span style={{ color: 'var(--accent-sage)' }}>✓</span>
                  Priority access to new projects
                </li>
              </ul>
              <p className="text-xs" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)', lineHeight: 1.6 }}>
                For institutional investors who want meaningful influence and partnership.
              </p>
            </div>
          </div>

          {/* Large Cap - Full Width */}
          <div className="p-10" style={{ backgroundColor: 'rgba(123, 139, 158, 0.05)', borderRadius: '4px', border: '1px solid rgba(123, 139, 158, 0.2)' }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Handshake size={28} style={{ color: 'var(--accent-denim)' }} />
                  <h3 
                    className="text-3xl"
                    style={{ 
                      fontFamily: 'var(--font-serif)', 
                      color: 'var(--charcoal-primary)',
                      fontWeight: 700
                    }}
                  >
                    Large Cap Investment
                  </h3>
                </div>
                <div className="mb-6">
                  <div className="text-5xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-denim)', fontWeight: 900 }}>
                    $10M+
                  </div>
                  <p className="text-base" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                    Lead investor & founding partner tier
                  </p>
                </div>
                <p className="text-base mb-6" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)', lineHeight: 1.7 }}>
                  Partner with us to scale Origin nationally and launch our full vision. 
                  This tier is for visionary investors who want to build generational wealth 
                  while transforming communities.
                </p>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                    <span style={{ color: 'var(--accent-denim)', fontSize: '20px' }}>✓</span>
                    <span>Major equity position with board seat</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                    <span style={{ color: 'var(--accent-denim)', fontSize: '20px' }}>✓</span>
                    <span>Co-development of new ventures</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                    <span style={{ color: 'var(--accent-denim)', fontSize: '20px' }}>✓</span>
                    <span>Exclusive strategic partnership opportunities</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                    <span style={{ color: 'var(--accent-denim)', fontSize: '20px' }}>✓</span>
                    <span>Full portfolio access and preferential terms</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                    <span style={{ color: 'var(--accent-denim)', fontSize: '20px' }}>✓</span>
                    <span>Named recognition in our legacy initiatives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Futures Fund */}
      <section className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: 'rgba(212, 197, 176, 0.15)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6" style={{ backgroundColor: 'rgba(212, 197, 176, 0.3)', borderRadius: '24px' }}>
              <Lightbulb size={16} style={{ color: 'var(--accent-sand)' }} />
              <span className="text-xs" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-primary)', fontWeight: 500 }}>Special Initiative</span>
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
              The Origin Futures Fund
            </h2>
            <p 
              className="text-lg mx-auto mb-8"
              style={{ 
                fontFamily: 'var(--font-sans)',
                color: 'var(--charcoal-secondary)',
                maxWidth: '65ch',
                lineHeight: 1.7
              }}
            >
              A dedicated fund that directly supports our mission to empower the next generation 
              of creators and innovators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6">
              <div className="text-3xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-rose)', fontWeight: 900 }}>
                Interns
              </div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                Paid internships for youth in media, tech, and creative fields
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-sage)', fontWeight: 900 }}>
                Collective
              </div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                Stipends for artists, developers, and workshop participants
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-denim)', fontWeight: 900 }}>
                Ventures
              </div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                Seed funding for 2028 launches and experimental projects
              </p>
            </div>
          </div>

          <div className="text-center p-8" style={{ backgroundColor: 'var(--canvas)', borderRadius: '4px', border: '1px solid var(--border)' }}>
            <p className="text-base mb-4" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)', lineHeight: 1.7 }}>
              Contributions to the Futures Fund ensure that Origin's work is sustainable and 
              accessible to those who need it most — the young creators and community members 
              who will carry this mission forward.
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
              Support the Futures Fund
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Let's Build Together
          </h2>
          <p 
            className="text-lg mb-10"
            style={{ 
              fontFamily: 'var(--font-sans)',
              color: 'var(--charcoal-secondary)',
              lineHeight: 1.7
            }}
          >
            Whether you're a partner, creator, innovator, or investor — we want to hear from you. 
            Let's create something extraordinary.
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
              Schedule a Meeting
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
              Download Investor Deck
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
