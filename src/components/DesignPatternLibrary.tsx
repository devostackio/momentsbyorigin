import { ImageWithFallback } from './figma/ImageWithFallback';
import { Building2, TrendingUp, Users, Sparkles, Shield, Key, Film, Newspaper, Mic2, BookOpen } from 'lucide-react';

export function DesignPatternLibrary() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--canvas)' }}>
      {/* Header */}
      <nav className="px-6 md:px-20 py-6 border-b sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(245, 245, 243, 0.95)', borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}>
            <span className="text-xl">ORIGIN</span>
            <span className="text-xs ml-2" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>Design Pattern Library</span>
          </div>
          <a 
            href="/"
            className="text-sm transition-opacity duration-200 hover:opacity-70"
            style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}
          >
            ← Back to Presentation
          </a>
        </div>
      </nav>

      {/* Intro */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h1 
            className="text-5xl md:text-7xl mb-6"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}
          >
            Design Pattern Library
          </h1>
          <p 
            className="text-lg max-w-3xl"
            style={{ 
              fontFamily: 'var(--font-sans)',
              color: 'var(--charcoal-secondary)',
              lineHeight: 1.7
            }}
          >
            A comprehensive reference of all design patterns, components, and styles used across the Origin Creative Media presentation suite. Use this library to maintain consistency and guide future AI-assisted UI builds.
          </p>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-20 px-6 md:px-20" style={{ backgroundColor: 'rgba(212, 197, 176, 0.15)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl mb-6"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Color Palette
          </h2>
          <p className="text-sm mb-12" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
            Washed 80s hues with charcoal foundations on warm off-white canvas
          </p>
          
          <div className="grid md:grid-cols-6 gap-6">
            {[
              { name: 'Canvas', var: '--canvas', hex: '#F5F5F3', usage: 'Primary background' },
              { name: 'Dusty Rose', var: '--accent-rose', hex: '#C4968A', usage: 'Primary accent, CTAs' },
              { name: 'Terracotta', var: '--accent-terracotta', hex: '#B88A7D', usage: 'Secondary accent' },
              { name: 'Sage', var: '--accent-sage', hex: '#9CAA98', usage: 'Nature, growth themes' },
              { name: 'Denim', var: '--accent-denim', hex: '#7B8B9E', usage: 'Tech, security themes' },
              { name: 'Sand', var: '--accent-sand', hex: '#D4C5B0', usage: 'Subtle backgrounds' },
              { name: 'Charcoal Primary', var: '--charcoal-primary', hex: '#2A2A2A', usage: 'Headings, primary text' },
              { name: 'Charcoal Secondary', var: '--charcoal-secondary', hex: '#4A4A4A', usage: 'Body text' },
              { name: 'Charcoal Tertiary', var: '--charcoal-tertiary', hex: '#6A6A6A', usage: 'Supporting text' },
              { name: 'Border', var: '--border', hex: '#E0DED9', usage: 'Dividers, borders' }
            ].map((color, i) => (
              <div key={i}>
                <div 
                  className="w-full h-24 mb-3 border"
                  style={{ 
                    backgroundColor: `var(${color.var})`,
                    borderColor: 'var(--border)',
                    borderRadius: '4px'
                  }}
                />
                <p className="text-sm mb-1" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-primary)', fontWeight: 500 }}>
                  {color.name}
                </p>
                <p className="text-xs mb-1" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                  {color.hex}
                </p>
                <p className="text-xs" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                  {color.usage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl mb-6"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Typography
          </h2>
          <p className="text-sm mb-12" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
            Playfair Display (serif) for headlines • Inter (sans-serif) for body text
          </p>

          <div className="space-y-12">
            {/* Hero Headline */}
            <div className="p-8 border" style={{ borderColor: 'var(--border)', borderRadius: '4px' }}>
              <p className="text-xs mb-4 uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                HERO HEADLINE
              </p>
              <h1 
                className="text-5xl md:text-7xl"
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
              <p className="text-xs mt-4" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                font-family: Playfair Display • font-weight: 900 • font-size: 5xl-7xl • line-height: 1.1 • letter-spacing: -0.02em
              </p>
            </div>

            {/* Section Headline */}
            <div className="p-8 border" style={{ borderColor: 'var(--border)', borderRadius: '4px' }}>
              <p className="text-xs mb-4 uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                SECTION HEADLINE
              </p>
              <h2 
                className="text-3xl md:text-5xl"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700,
                  letterSpacing: '-0.01em'
                }}
              >
                Our Portfolio of Ventures
              </h2>
              <p className="text-xs mt-4" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                font-family: Playfair Display • font-weight: 700 • font-size: 3xl-5xl • letter-spacing: -0.01em
              </p>
            </div>

            {/* Card/Component Headline */}
            <div className="p-8 border" style={{ borderColor: 'var(--border)', borderRadius: '4px' }}>
              <p className="text-xs mb-4 uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                CARD/COMPONENT HEADLINE
              </p>
              <h3 
                className="text-2xl"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Origin Media Group
              </h3>
              <p className="text-xs mt-4" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                font-family: Playfair Display • font-weight: 700 • font-size: 2xl
              </p>
            </div>

            {/* Body Copy - Large */}
            <div className="p-8 border" style={{ borderColor: 'var(--border)', borderRadius: '4px' }}>
              <p className="text-xs mb-4 uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                BODY COPY - LARGE (Hero/Intro)
              </p>
              <p 
                className="text-lg md:text-xl"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7,
                  maxWidth: '65ch'
                }}
              >
                Origin Creative Group launches the companies, platforms, and spaces that DC's creators need to thrive. We don't just invest in ideas—we build the infrastructure that turns neighborhood talent into generational wealth.
              </p>
              <p className="text-xs mt-4" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                font-family: Inter • font-size: lg-xl • line-height: 1.7 • max-width: 65ch • color: charcoal-secondary
              </p>
            </div>

            {/* Body Copy - Standard */}
            <div className="p-8 border" style={{ borderColor: 'var(--border)', borderRadius: '4px' }}>
              <p className="text-xs mb-4 uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                BODY COPY - STANDARD
              </p>
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
              <p className="text-xs mt-4" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                font-family: Inter • font-size: base • line-height: 1.7 • color: charcoal-secondary
              </p>
            </div>

            {/* Supporting Text */}
            <div className="p-8 border" style={{ borderColor: 'var(--border)', borderRadius: '4px' }}>
              <p className="text-xs mb-4 uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                SUPPORTING TEXT
              </p>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-tertiary)',
                  lineHeight: 1.7
                }}
              >
                Trained, paid, and credited for their work
              </p>
              <p className="text-xs mt-4" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                font-family: Inter • font-size: sm • line-height: 1.7 • color: charcoal-tertiary
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="py-20 px-6 md:px-20" style={{ backgroundColor: 'rgba(196, 150, 138, 0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl mb-6"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Buttons
          </h2>
          <p className="text-sm mb-12" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
            Primary, secondary, and outlined variants with hover states
          </p>

          <div className="space-y-8">
            {/* Primary Buttons */}
            <div className="p-8 border" style={{ backgroundColor: 'var(--canvas)', borderColor: 'var(--border)', borderRadius: '4px' }}>
              <p className="text-xs mb-4 uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                PRIMARY BUTTONS (Brand Colors)
              </p>
              <div className="flex gap-4 flex-wrap">
                {[
                  { label: 'Dusty Rose', color: 'var(--accent-rose)' },
                  { label: 'Denim', color: 'var(--accent-denim)' },
                  { label: 'Sage', color: 'var(--accent-sage)' },
                  { label: 'Terracotta', color: 'var(--accent-terracotta)' }
                ].map((btn, i) => (
                  <button 
                    key={i}
                    className="px-8 py-4 transition-all duration-300 hover:opacity-80"
                    style={{ 
                      backgroundColor: btn.color, 
                      color: 'var(--canvas)',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 500,
                      borderRadius: '2px',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
              <p className="text-xs mt-4" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                px-8 py-4 • background: accent-color • color: canvas • border-radius: 2px • hover: opacity 80%
              </p>
            </div>

            {/* Outlined Buttons */}
            <div className="p-8 border" style={{ backgroundColor: 'var(--canvas)', borderColor: 'var(--border)', borderRadius: '4px' }}>
              <p className="text-xs mb-4 uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                OUTLINED BUTTONS
              </p>
              <div className="flex gap-4 flex-wrap">
                <button 
                  className="px-8 py-4 border transition-all duration-300 hover:bg-[var(--charcoal-primary)] hover:text-[var(--canvas)]"
                  style={{ 
                    borderColor: 'var(--charcoal-primary)',
                    borderWidth: '1.5px',
                    backgroundColor: 'transparent',
                    color: 'var(--charcoal-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    borderRadius: '2px',
                    cursor: 'pointer'
                  }}
                >
                  Secondary Action
                </button>
                <button 
                  className="px-8 py-4 border transition-all duration-300 hover:bg-[var(--accent-rose)] hover:text-[var(--canvas)] hover:border-[var(--accent-rose)]"
                  style={{ 
                    borderColor: 'var(--accent-rose)',
                    borderWidth: '1.5px',
                    backgroundColor: 'transparent',
                    color: 'var(--accent-rose)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    borderRadius: '2px',
                    cursor: 'pointer'
                  }}
                >
                  Accent Outlined
                </button>
              </div>
              <p className="text-xs mt-4" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                px-8 py-4 • border: 1.5px • border-radius: 2px • hover: fill with border color
              </p>
            </div>

            {/* Small Buttons (Nav) */}
            <div className="p-8 border" style={{ backgroundColor: 'var(--canvas)', borderColor: 'var(--border)', borderRadius: '4px' }}>
              <p className="text-xs mb-4 uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                SMALL BUTTONS (Navigation)
              </p>
              <div className="flex gap-4 flex-wrap">
                <button 
                  className="px-6 py-3 text-sm transition-all duration-300 hover:opacity-80"
                  style={{ 
                    backgroundColor: 'var(--accent-rose)', 
                    color: 'var(--canvas)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    borderRadius: '2px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Get Started
                </button>
              </div>
              <p className="text-xs mt-4" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                px-6 py-3 • font-size: sm • Used in navigation bars
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Badges & Tags */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl mb-6"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Badges & Tags
          </h2>
          <p className="text-sm mb-12" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
            Category indicators and status labels
          </p>

          <div className="space-y-8">
            {/* Category Badges */}
            <div className="p-8 border" style={{ backgroundColor: 'var(--canvas)', borderColor: 'var(--border)', borderRadius: '4px' }}>
              <p className="text-xs mb-4 uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                CATEGORY BADGES
              </p>
              <div className="flex gap-3 flex-wrap">
                {[
                  { label: 'PRODUCTION', color: 'var(--accent-rose)' },
                  { label: 'TECHNOLOGY', color: 'var(--accent-denim)' },
                  { label: 'MEDIA', color: 'var(--accent-sage)' },
                  { label: 'EXPERIENCES', color: 'var(--accent-terracotta)' }
                ].map((badge, i) => (
                  <span 
                    key={i}
                    className="inline-block px-3 py-1 text-xs uppercase tracking-wider" 
                    style={{ 
                      backgroundColor: `${badge.color}15`, 
                      color: badge.color, 
                      fontFamily: 'var(--font-sans)', 
                      fontWeight: 500, 
                      borderRadius: '2px' 
                    }}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
              <p className="text-xs mt-4" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                px-3 py-1 • text-xs uppercase • background: accent-color with 15% opacity • color: accent-color
              </p>
            </div>

            {/* Hero Badges */}
            <div className="p-8 border" style={{ backgroundColor: 'var(--canvas)', borderColor: 'var(--border)', borderRadius: '4px' }}>
              <p className="text-xs mb-4 uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                HERO SECTION BADGES
              </p>
              <div className="flex gap-3 flex-wrap">
                <span 
                  className="inline-block px-4 py-2 text-xs uppercase tracking-wider"
                  style={{ 
                    backgroundColor: 'rgba(123, 139, 158, 0.15)', 
                    color: 'var(--accent-denim)', 
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    borderRadius: '2px'
                  }}
                >
                  Community Infrastructure Platform
                </span>
              </div>
              <p className="text-xs mt-4" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                px-4 py-2 • Larger padding for hero sections
              </p>
            </div>

            {/* Status Badges */}
            <div className="p-8 border" style={{ backgroundColor: 'var(--canvas)', borderColor: 'var(--border)', borderRadius: '4px' }}>
              <p className="text-xs mb-4 uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                STATUS BADGES
              </p>
              <div className="flex gap-3 flex-wrap">
                {[
                  { label: 'Coming 2028', color: 'var(--accent-terracotta)' },
                  { label: 'LAUNCHED', color: 'var(--accent-sage)' },
                  { label: 'IN PROGRESS', color: 'var(--accent-denim)' }
                ].map((badge, i) => (
                  <span 
                    key={i}
                    className="inline-block px-3 py-1 text-xs uppercase tracking-wider" 
                    style={{ 
                      backgroundColor: `${badge.color}15`, 
                      color: badge.color, 
                      fontFamily: 'var(--font-sans)', 
                      fontWeight: 500, 
                      borderRadius: '2px' 
                    }}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards & Containers */}
      <section className="py-20 px-6 md:px-20" style={{ backgroundColor: 'rgba(212, 197, 176, 0.15)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl mb-6"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Cards & Containers
          </h2>
          <p className="text-sm mb-12" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
            Content containers with consistent styling
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Standard Card */}
            <div 
              className="p-8"
              style={{ 
                backgroundColor: 'var(--canvas)',
                border: '1px solid var(--border)',
                borderRadius: '4px'
              }}
            >
              <span className="inline-block px-3 py-1 text-xs mb-4 uppercase tracking-wider" style={{ backgroundColor: 'rgba(196, 150, 138, 0.15)', color: 'var(--accent-rose)', fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
                CATEGORY
              </span>
              <h3 
                className="text-2xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Card Headline
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                Card description with body copy explaining the content or feature. Uses standard spacing and typography hierarchy.
              </p>
              <p className="text-xs mt-6 pt-6 border-t" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)', borderColor: 'var(--border)' }}>
                p-8 • background: canvas • border: 1px solid border • border-radius: 4px
              </p>
            </div>

            {/* Hover Card */}
            <div 
              className="p-8 group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              style={{ 
                backgroundColor: 'var(--canvas)',
                border: '1px solid var(--border)',
                borderRadius: '4px'
              }}
            >
              <span className="inline-block px-3 py-1 text-xs mb-4 uppercase tracking-wider" style={{ backgroundColor: 'rgba(123, 139, 158, 0.15)', color: 'var(--accent-denim)', fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
                INTERACTIVE
              </span>
              <h3 
                className="text-2xl mb-3"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--charcoal-primary)',
                  fontWeight: 700
                }}
              >
                Hover Card (Try It)
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--charcoal-secondary)',
                  lineHeight: 1.7
                }}
              >
                Interactive card with hover state. Scales slightly on hover for tactile feedback.
              </p>
              <p className="text-xs mt-6 pt-6 border-t" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)', borderColor: 'var(--border)' }}>
                + transition: all 300ms • hover: scale 1.02
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Icon Containers */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl mb-6"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Icon Containers
          </h2>
          <p className="text-sm mb-12" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
            Icon treatments with brand color backgrounds
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Circular Icons */}
            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(196, 150, 138, 0.15)',
                  borderRadius: '50%'
                }}
              >
                <Building2 size={28} style={{ color: 'var(--accent-rose)' }} />
              </div>
              <p className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                Circular • 64x64px • 15% opacity bg
              </p>
            </div>

            {/* Square Icons */}
            <div className="text-center">
              <div 
                className="w-14 h-14 mx-auto mb-4 flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(123, 139, 158, 0.15)',
                  borderRadius: '4px'
                }}
              >
                <Shield size={28} style={{ color: 'var(--accent-denim)' }} />
              </div>
              <p className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                Square • 56x56px • border-radius: 4px
              </p>
            </div>

            {/* Number Badges */}
            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(156, 170, 152, 0.15)',
                  borderRadius: '50%'
                }}
              >
                <span 
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    fontSize: '24px', 
                    fontWeight: 900, 
                    color: 'var(--accent-sage)' 
                  }}
                >
                  1
                </span>
              </div>
              <p className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                Number badge • serif font
              </p>
            </div>

            {/* Icon Only */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex items-center justify-center" style={{ height: '56px' }}>
                <Sparkles size={32} style={{ color: 'var(--accent-terracotta)' }} />
              </div>
              <p className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                No container • 32px icon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Display */}
      <section className="py-20 px-6 md:px-20" style={{ backgroundColor: 'rgba(196, 150, 138, 0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl mb-6"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Stats & Metrics
          </h2>
          <p className="text-sm mb-12" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
            Impact metrics with supporting context
          </p>

          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-4xl md:text-5xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-rose)', fontWeight: 900 }}>
                15K+
              </div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                Active Users
              </p>
              <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                DC creators accessing opportunities daily
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-sage)', fontWeight: 900 }}>
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
              <div className="text-4xl md:text-5xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-denim)', fontWeight: 900 }}>
                99.9%
              </div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                Uptime
              </p>
              <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                Always available when you need us
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-terracotta)', fontWeight: 900 }}>
                500+
              </div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
                Partner Organizations
              </p>
              <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                Jobs, training, and resources integrated
              </p>
            </div>
          </div>

          <p className="text-xs mt-12 text-center" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
            Number: text-4xl/5xl • serif • font-weight: 900 • accent colors<br/>
            Label: text-sm • charcoal-secondary<br/>
            Supporting: text-xs • charcoal-tertiary
          </p>
        </div>
      </section>

      {/* Background Treatments */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl mb-6"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Background Treatments
          </h2>
          <p className="text-sm mb-12" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
            Subtle backgrounds and gradient overlays
          </p>

          <div className="space-y-6">
            {/* Canvas (Default) */}
            <div className="p-12 border" style={{ backgroundColor: 'var(--canvas)', borderColor: 'var(--border)', borderRadius: '4px' }}>
              <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-primary)', fontWeight: 500 }}>
                Canvas (Default Background)
              </p>
              <p className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                background-color: var(--canvas) • #F5F5F3
              </p>
            </div>

            {/* Sand Tint */}
            <div className="p-12 border" style={{ backgroundColor: 'rgba(212, 197, 176, 0.15)', borderColor: 'var(--border)', borderRadius: '4px' }}>
              <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-primary)', fontWeight: 500 }}>
                Sand Tint (Alternating Sections)
              </p>
              <p className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                background-color: rgba(212, 197, 176, 0.15)
              </p>
            </div>

            {/* Rose Tint */}
            <div className="p-12 border" style={{ backgroundColor: 'rgba(196, 150, 138, 0.08)', borderColor: 'var(--border)', borderRadius: '4px' }}>
              <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-primary)', fontWeight: 500 }}>
                Rose Tint (CTAs, Special Sections)
              </p>
              <p className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                background-color: rgba(196, 150, 138, 0.08)
              </p>
            </div>

            {/* Sage Tint */}
            <div className="p-12 border" style={{ backgroundColor: 'rgba(156, 170, 152, 0.08)', borderColor: 'var(--border)', borderRadius: '4px' }}>
              <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-primary)', fontWeight: 500 }}>
                Sage Tint
              </p>
              <p className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                background-color: rgba(156, 170, 152, 0.08)
              </p>
            </div>

            {/* Denim Tint */}
            <div className="p-12 border" style={{ backgroundColor: 'rgba(123, 139, 158, 0.08)', borderColor: 'var(--border)', borderRadius: '4px' }}>
              <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-primary)', fontWeight: 500 }}>
                Denim Tint
              </p>
              <p className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                background-color: rgba(123, 139, 158, 0.08)
              </p>
            </div>

            {/* Gradient Overlay */}
            <div 
              className="p-12 border film-grain" 
              style={{ 
                background: `linear-gradient(135deg, rgba(196, 150, 138, 0.15) 0%, rgba(184, 138, 125, 0.12) 35%, rgba(156, 170, 152, 0.08) 70%, rgba(212, 197, 176, 0.05) 100%)`,
                borderColor: 'var(--border)', 
                borderRadius: '4px' 
              }}
            >
              <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-primary)', fontWeight: 500 }}>
                Gradient Overlay with Film Grain (Hero Sections)
              </p>
              <p className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                linear-gradient(135deg, rose → terracotta → sage → sand) • + .film-grain class
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing System */}
      <section className="py-20 px-6 md:px-20" style={{ backgroundColor: 'rgba(212, 197, 176, 0.15)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl mb-6"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Spacing System
          </h2>
          <p className="text-sm mb-12" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
            Generous whitespace with 80-120px vertical section spacing
          </p>

          <div className="space-y-6">
            <div className="p-6 border" style={{ backgroundColor: 'var(--canvas)', borderColor: 'var(--border)', borderRadius: '4px' }}>
              <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-primary)', fontWeight: 500 }}>
                Section Padding (Vertical)
              </p>
              <p className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                py-20 md:py-32 • 80px mobile / 128px desktop
              </p>
            </div>

            <div className="p-6 border" style={{ backgroundColor: 'var(--canvas)', borderColor: 'var(--border)', borderRadius: '4px' }}>
              <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-primary)', fontWeight: 500 }}>
                Hero Section Padding
              </p>
              <p className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                py-32 md:py-48 • 128px mobile / 192px desktop
              </p>
            </div>

            <div className="p-6 border" style={{ backgroundColor: 'var(--canvas)', borderColor: 'var(--border)', borderRadius: '4px' }}>
              <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-primary)', fontWeight: 500 }}>
                Horizontal Padding (Sections)
              </p>
              <p className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                px-6 md:px-20 • 24px mobile / 80px desktop
              </p>
            </div>

            <div className="p-6 border" style={{ backgroundColor: 'var(--canvas)', borderColor: 'var(--border)', borderRadius: '4px' }}>
              <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-primary)', fontWeight: 500 }}>
                Component/Card Padding
              </p>
              <p className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                p-8 • 32px all sides
              </p>
            </div>

            <div className="p-6 border" style={{ backgroundColor: 'var(--canvas)', borderColor: 'var(--border)', borderRadius: '4px' }}>
              <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-primary)', fontWeight: 500 }}>
                Section Headline Margin
              </p>
              <p className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                mb-16 • 64px below headlines before content
              </p>
            </div>

            <div className="p-6 border" style={{ backgroundColor: 'var(--canvas)', borderColor: 'var(--border)', borderRadius: '4px' }}>
              <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-primary)', fontWeight: 500 }}>
                Grid Gap (Cards, Components)
              </p>
              <p className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                gap-8 • 32px between grid items
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Elements */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl mb-6"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Form Elements
          </h2>
          <p className="text-sm mb-12" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
            Input fields and form components
          </p>

          <div className="space-y-6 max-w-2xl">
            {/* Email Input */}
            <div>
              <p className="text-xs mb-3 uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                TEXT INPUT
              </p>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-6 py-4 border"
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
              <p className="text-xs mt-2" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                px-6 py-4 • border: 1px • border-radius: 2px • font-size: 14px
              </p>
            </div>

            {/* Input + Button Combo */}
            <div>
              <p className="text-xs mb-3 uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
                INPUT + BUTTON COMBO
              </p>
              <form className="flex gap-3">
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
              <p className="text-xs mt-2" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)' }}>
                flex gap-3 • input flex-1 • button fixed width
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Patterns */}
      <section className="py-20 px-6 md:px-20" style={{ backgroundColor: 'rgba(196, 150, 138, 0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl mb-6"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Navigation Patterns
          </h2>
          <p className="text-sm mb-12" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
            Standard navigation bar structure
          </p>

          <div className="p-6 border" style={{ backgroundColor: 'var(--canvas)', borderColor: 'var(--border)', borderRadius: '4px' }}>
            <div className="flex justify-between items-center">
              <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}>
                <span className="text-xl">ORIGIN</span>
                <span className="text-xs ml-2" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>Company Name</span>
              </div>
              <div className="flex gap-8 items-center" style={{ fontFamily: 'var(--font-sans)' }}>
                <a href="#" className="text-sm" style={{ color: 'var(--charcoal-secondary)' }}>Link 1</a>
                <a href="#" className="text-sm" style={{ color: 'var(--charcoal-secondary)' }}>Link 2</a>
                <a href="#" className="text-sm" style={{ color: 'var(--charcoal-secondary)' }}>Link 3</a>
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
                  CTA Button
                </button>
              </div>
            </div>
            <p className="text-xs mt-6 pt-6 border-t" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal-tertiary)', borderColor: 'var(--border)' }}>
              px-6 md:px-20 py-6 • border-bottom • flex justify-between • Brand: serif "ORIGIN" + sans subtitle<br/>
              Links: text-sm gap-8 charcoal-secondary • CTA: small button variant
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-20 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}>
              <span className="text-lg">Origin Design Pattern Library</span>
            </div>
            <div className="flex gap-6 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
              <a href="/guidelines/Guidelines.md" className="transition-opacity duration-200 hover:opacity-70" style={{ color: 'var(--charcoal-tertiary)' }}>
                Guidelines
              </a>
              <a href="/guidelines/Design-Rules.md" className="transition-opacity duration-200 hover:opacity-70" style={{ color: 'var(--charcoal-tertiary)' }}>
                Design Rules
              </a>
              <a href="/" className="transition-opacity duration-200 hover:opacity-70" style={{ color: 'var(--charcoal-tertiary)' }}>
                Back to Presentation
              </a>
            </div>
          </div>
          <p className="text-sm text-center" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
            © 2025 — Origin Creative Group • For internal use and AI-assisted builds
          </p>
        </div>
      </footer>
    </div>
  );
}
