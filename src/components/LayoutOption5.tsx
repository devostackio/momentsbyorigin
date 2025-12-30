import { ImageWithFallback } from './figma/ImageWithFallback';
import { Shield, GraduationCap, Users, Key, Check, Lock, Zap } from 'lucide-react';

export function LayoutOption5() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A0A0A' }}>
      {/* Navigation */}
      <nav className="px-6 md:px-20 py-6 flex justify-between items-center border-b" style={{ backgroundColor: '#0A0A0A', borderColor: 'rgba(123, 139, 158, 0.15)' }}>
        <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: '#FFFFFF' }}>
          <span className="text-xl">ORIGIN</span>
          <span className="text-xs ml-2" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255, 255, 255, 0.5)' }}>Stack</span>
        </div>
        <div className="flex gap-8 items-center" style={{ fontFamily: 'var(--font-sans)' }}>
          <a href="#" className="text-sm hidden md:block transition-colors duration-200" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Platform</a>
          <a href="#" className="text-sm hidden md:block transition-colors duration-200" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Security</a>
          <a href="#" className="text-sm hidden md:block transition-colors duration-200" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Academy</a>
          <button 
            className="px-6 py-3 text-sm transition-all duration-300"
            style={{ 
              backgroundColor: '#7B8B9E', 
              color: '#FFFFFF',
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              borderRadius: '2px',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8A9AAD'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7B8B9E'}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-32 md:py-48 px-6 md:px-20" style={{ 
        background: 'linear-gradient(180deg, #0A0A0A 0%, #121212 100%)',
        position: 'relative'
      }}>
        {/* Subtle grid pattern overlay */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(rgba(123, 139, 158, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(123, 139, 158, 0.03) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
            pointerEvents: 'none'
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span 
            className="inline-block px-4 py-2 text-xs uppercase tracking-wider mb-8"
            style={{ 
              backgroundColor: 'rgba(123, 139, 158, 0.15)', 
              color: '#7B8B9E', 
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              borderRadius: '2px',
              border: '1px solid rgba(123, 139, 158, 0.2)'
            }}
          >
            Enterprise Infrastructure Platform
          </span>
          <h1 
            className="text-5xl md:text-7xl mb-8"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: '#FFFFFF',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}
          >
            One Login. Every Opportunity.
          </h1>
          <p 
            className="text-lg md:text-xl mb-12 mx-auto"
            style={{ 
              fontFamily: 'var(--font-sans)',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '65ch',
              lineHeight: 1.7
            }}
          >
            Origin Stack gives DC's creators, makers, and entrepreneurs one secure identity—Club ID—that unlocks training, tools, job boards, studio bookings, and connections across 500+ organizations. No more password fatigue. No more missed chances.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              className="px-8 py-4 transition-all duration-300"
              style={{ 
                backgroundColor: '#7B8B9E', 
                color: '#FFFFFF',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                borderRadius: '2px',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8A9AAD'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7B8B9E'}
            >
              Try Stack Free
            </button>
            <button 
              className="px-8 py-4 border transition-all duration-300"
              style={{ 
                borderColor: 'rgba(255, 255, 255, 0.2)',
                borderWidth: '1.5px',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                borderRadius: '2px',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              See How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: '#121212' }}>
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl mb-16 text-center"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: '#FFFFFF',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Built for Community, Scaled for Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Club ID */}
            <div 
              className="p-8 group transition-all duration-300"
              style={{ 
                backgroundColor: '#1A1A1A',
                border: '1px solid rgba(123, 139, 158, 0.15)',
                borderRadius: '4px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(123, 139, 158, 0.3)';
                e.currentTarget.style.backgroundColor = '#1F1F1F';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(123, 139, 158, 0.15)';
                e.currentTarget.style.backgroundColor = '#1A1A1A';
              }}
            >
              <div 
                className="w-14 h-14 mb-6 flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(123, 139, 158, 0.15)',
                  borderRadius: '4px'
                }}
              >
                <Key size={28} style={{ color: '#7B8B9E' }} />
              </div>
              <span className="inline-block px-3 py-1 text-xs mb-4 uppercase tracking-wider" style={{ backgroundColor: 'rgba(123, 139, 158, 0.15)', color: '#7B8B9E', fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
                AUTHENTICATION
              </span>
              <h3 
                className="text-2xl mb-2"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: '#FFFFFF',
                  fontWeight: 700
                }}
              >
                Club ID
              </h3>
              <p 
                className="text-base mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)',
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontStyle: 'italic'
                }}
              >
                One Identity. Endless Access.
              </p>
              <p 
                className="text-sm mb-4"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: 1.7
                }}
              >
                Your secure passport to opportunities across the Origin ecosystem and partner organizations—from job postings to training courses, studio bookings to community events.
              </p>
              <ul className="space-y-2">
                {['Access 500+ partner organizations', 'Passkey & OTP security', 'Never miss opportunities due to login issues', 'Privacy-first design'].map((item, i) => (
                  <li 
                    key={i}
                    className="text-xs flex items-center gap-2"
                    style={{ 
                      fontFamily: 'var(--font-sans)',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}
                  >
                    <Check size={14} style={{ color: '#7B8B9E', flexShrink: 0 }} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Enterprise Security */}
            <div 
              className="p-8 group transition-all duration-300"
              style={{ 
                backgroundColor: '#1A1A1A',
                border: '1px solid rgba(123, 139, 158, 0.15)',
                borderRadius: '4px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(123, 139, 158, 0.3)';
                e.currentTarget.style.backgroundColor = '#1F1F1F';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(123, 139, 158, 0.15)';
                e.currentTarget.style.backgroundColor = '#1A1A1A';
              }}
            >
              <div 
                className="w-14 h-14 mb-6 flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(123, 139, 158, 0.15)',
                  borderRadius: '4px'
                }}
              >
                <Shield size={28} style={{ color: '#7B8B9E' }} />
              </div>
              <span className="inline-block px-3 py-1 text-xs mb-4 uppercase tracking-wider" style={{ backgroundColor: 'rgba(123, 139, 158, 0.15)', color: '#7B8B9E', fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
                SECURITY
              </span>
              <h3 
                className="text-2xl mb-2"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: '#FFFFFF',
                  fontWeight: 700
                }}
              >
                Enterprise Security
              </h3>
              <p 
                className="text-base mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)',
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontStyle: 'italic'
                }}
              >
                Your Data, Protected
              </p>
              <p 
                className="text-sm mb-4"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: 1.7
                }}
              >
                Bank-level encryption and security infrastructure that keeps your information safe while you focus on creating and building.
              </p>
              <ul className="space-y-2">
                {['End-to-end encryption', 'SOC 2 Type II certified', '99.9% uptime—always accessible', '24/7 monitoring'].map((item, i) => (
                  <li 
                    key={i}
                    className="text-xs flex items-center gap-2"
                    style={{ 
                      fontFamily: 'var(--font-sans)',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}
                  >
                    <Check size={14} style={{ color: '#7B8B9E', flexShrink: 0 }} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack Academy */}
            <div 
              className="p-8 group transition-all duration-300"
              style={{ 
                backgroundColor: '#1A1A1A',
                border: '1px solid rgba(123, 139, 158, 0.15)',
                borderRadius: '4px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(123, 139, 158, 0.3)';
                e.currentTarget.style.backgroundColor = '#1F1F1F';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(123, 139, 158, 0.15)';
                e.currentTarget.style.backgroundColor = '#1A1A1A';
              }}
            >
              <div 
                className="w-14 h-14 mb-6 flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(123, 139, 158, 0.15)',
                  borderRadius: '4px'
                }}
              >
                <GraduationCap size={28} style={{ color: '#7B8B9E' }} />
              </div>
              <span className="inline-block px-3 py-1 text-xs mb-4 uppercase tracking-wider" style={{ backgroundColor: 'rgba(123, 139, 158, 0.15)', color: '#7B8B9E', fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
                LEARNING
              </span>
              <h3 
                className="text-2xl mb-2"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: '#FFFFFF',
                  fontWeight: 700
                }}
              >
                Stack Academy
              </h3>
              <p 
                className="text-base mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)',
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontStyle: 'italic'
                }}
              >
                Learn. Earn. Grow.
              </p>
              <p 
                className="text-sm mb-4"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: 1.7
                }}
              >
                500+ courses in media production, technology, business, and creative skills—taught by DC professionals and designed for real career outcomes. Earn certificates, build your portfolio, get hired.
              </p>
              <ul className="space-y-2">
                {['500+ courses covering real job skills', 'Taught by working professionals', 'Certificates that employers recognize', 'Free for Club ID members'].map((item, i) => (
                  <li 
                    key={i}
                    className="text-xs flex items-center gap-2"
                    style={{ 
                      fontFamily: 'var(--font-sans)',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}
                  >
                    <Check size={14} style={{ color: '#7B8B9E', flexShrink: 0 }} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl mb-16 text-center"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: '#FFFFFF',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Trusted by the Community
          </h2>
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-4xl md:text-5xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: '#7B8B9E', fontWeight: 900 }}>
                15K+
              </div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255, 255, 255, 0.9)' }}>
                Active Users
              </p>
              <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255, 255, 255, 0.5)' }}>
                DC creators accessing opportunities daily
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: '#7B8B9E', fontWeight: 900 }}>
                500+
              </div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255, 255, 255, 0.9)' }}>
                Partner Organizations
              </p>
              <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255, 255, 255, 0.5)' }}>
                Jobs, training, and resources integrated
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: '#7B8B9E', fontWeight: 900 }}>
                99.9%
              </div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255, 255, 255, 0.9)' }}>
                Uptime
              </p>
              <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255, 255, 255, 0.5)' }}>
                Always available when you need us
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: '#7B8B9E', fontWeight: 900 }}>
                $2M+
              </div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255, 255, 255, 0.9)' }}>
                in Opportunities
              </p>
              <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255, 255, 255, 0.5)' }}>
                Connected members to paid work and training
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: '#121212' }}>
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl mb-16 text-center"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: '#FFFFFF',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Simple to Start, Powerful to Scale
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Create Your Club ID',
                description: 'Sign up once with your email, passkey, or social login. One identity for everything.'
              },
              {
                step: '2',
                title: 'Access Everything',
                description: 'Use Club ID to apply for jobs, book studio time, enroll in courses, and connect with 500+ partner organizations—no more juggling passwords.'
              },
              {
                step: '3',
                title: 'Learn & Grow',
                description: 'Take Stack Academy courses, earn certifications recognized by DC employers, and build skills that lead to real careers.'
              },
              {
                step: '4',
                title: 'Get Hired',
                description: 'Your Stack profile showcases your training, projects, and certifications—making it easier for employers and collaborators to find you.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                  style={{ 
                    backgroundColor: 'rgba(123, 139, 158, 0.15)',
                    borderRadius: '50%',
                    border: '1px solid rgba(123, 139, 158, 0.2)'
                  }}
                >
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-serif)', 
                      fontSize: '24px', 
                      fontWeight: 900, 
                      color: '#7B8B9E' 
                    }}
                  >
                    {item.step}
                  </span>
                </div>
                <h3 
                  className="text-xl mb-3"
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    color: '#FFFFFF',
                    fontWeight: 700
                  }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-sm"
                  style={{ 
                    fontFamily: 'var(--font-sans)',
                    color: 'rgba(255, 255, 255, 0.6)',
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

      {/* Use Cases */}
      <section className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl mb-16 text-center"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: '#FFFFFF',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Built for Every Creator
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'For Creators & Makers',
                description: 'One login for all opportunities—jobs, training, studio access, and community connections. Plus Stack Academy courses to level up your skills.',
                icon: Users
              },
              {
                title: 'For Partners & Employers',
                description: 'Connect your organization to DC\'s creative talent pool. Post opportunities, track applications, and access a network of trained, verified creators.',
                icon: Shield
              },
              {
                title: 'For Developers & Builders',
                description: 'White-label Stack for your community. Robust APIs, SDKs, and documentation to build secure authentication and learning platforms.',
                icon: Zap
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-8 transition-all duration-300"
                style={{ 
                  backgroundColor: '#1A1A1A',
                  border: '1px solid rgba(123, 139, 158, 0.15)',
                  borderRadius: '4px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(123, 139, 158, 0.3)';
                  e.currentTarget.style.backgroundColor = '#1F1F1F';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(123, 139, 158, 0.15)';
                  e.currentTarget.style.backgroundColor = '#1A1A1A';
                }}
              >
                <div 
                  className="w-12 h-12 mb-6 flex items-center justify-center"
                  style={{ 
                    backgroundColor: 'rgba(123, 139, 158, 0.15)',
                    borderRadius: '4px'
                  }}
                >
                  <item.icon size={24} style={{ color: '#7B8B9E' }} />
                </div>
                <h3 
                  className="text-xl mb-3"
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    color: '#FFFFFF',
                    fontWeight: 700
                  }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-sm"
                  style={{ 
                    fontFamily: 'var(--font-sans)',
                    color: 'rgba(255, 255, 255, 0.6)',
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

      {/* Pricing */}
      <section className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: '#121212' }}>
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
            Accessible to All
          </h2>
          <p 
            className="text-lg mb-10"
            style={{ 
              fontFamily: 'var(--font-sans)',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.7
            }}
          >
            Club ID and Stack Academy are free for individual creators. Organizations and partners can integrate Stack into their platforms with flexible pricing.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              className="px-8 py-4 transition-all duration-300"
              style={{ 
                backgroundColor: '#7B8B9E', 
                color: '#FFFFFF',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                borderRadius: '2px',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8A9AAD'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7B8B9E'}
            >
              Get Started Free
            </button>
            <button 
              className="px-8 py-4 border transition-all duration-300"
              style={{ 
                borderColor: 'rgba(255, 255, 255, 0.2)',
                borderWidth: '1.5px',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                borderRadius: '2px',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 px-6 md:px-20" style={{ backgroundColor: '#0A0A0A' }}>
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
            Your Opportunity Starts Here
          </h2>
          <p 
            className="text-lg mb-10"
            style={{ 
              fontFamily: 'var(--font-sans)',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.7
            }}
          >
            Join 15,000+ DC creators who use Origin Stack to access training, find work, and build their careers.
          </p>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 border"
              style={{ 
                backgroundColor: '#1A1A1A',
                borderColor: 'rgba(123, 139, 158, 0.2)',
                borderWidth: '1px',
                borderRadius: '2px',
                fontFamily: 'var(--font-sans)',
                color: '#FFFFFF',
                fontSize: '14px'
              }}
            />
            <button 
              type="submit"
              className="px-8 py-4 transition-all duration-300"
              style={{ 
                backgroundColor: '#7B8B9E', 
                color: '#FFFFFF',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                borderRadius: '2px',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8A9AAD'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7B8B9E'}
            >
              Create Free Club ID
            </button>
          </form>
          <p 
            className="text-xs mt-4"
            style={{ 
              fontFamily: 'var(--font-sans)',
              color: 'rgba(255, 255, 255, 0.5)'
            }}
          >
            No credit card required • Always free for creators
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-20 border-t" style={{ backgroundColor: '#0A0A0A', borderColor: 'rgba(123, 139, 158, 0.15)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: '#FFFFFF' }}>
            <span className="text-lg">Origin Stack</span>
          </div>
          <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255, 255, 255, 0.5)' }}>
            © 2025 — Origin Stack
          </p>
        </div>
      </footer>
    </div>
  );
}
