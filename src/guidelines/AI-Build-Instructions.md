# Origin Design System - AI Build Instructions

**Version:** 2.0  
**Last Updated:** January 2025  
**Purpose:** Instructions for AI assistants building Origin-branded interfaces

---

## Quick Reference

**Design Pattern Library:** `/components/DesignPatternLibrary.tsx`  
**Design Rules:** `/guidelines/Design-Rules.md`  
**Brand Guidelines:** `/guidelines/Guidelines.md`  
**Color Reference:** See `styles/globals.css` for CSS variables

---

## Brand Philosophy

**Core Aesthetic:** "Muted, nostalgic, confident"

Origin's design language draws inspiration from:
- 1980s editorial design (think Vogue, Architectural Digest)
- Mid-century modern restraint
- Film photography aesthetics
- Academic publishing layouts

**What This Means in Practice:**
- Generous whitespace (80-120px vertical spacing)
- Asymmetric layouts (avoid perfect centering)
- Muted color palette (washed 80s hues)
- Subtle film grain texture on hero sections only
- Restrained motion (200-300ms transitions max)
- Editorial hierarchy (large serif headlines, clean sans body)

---

## Typography System

### Font Stack

```tsx
// Headings, Stats, Emphasis
font-family: var(--font-serif)  // Playfair Display

// Body, UI, Navigation
font-family: var(--font-sans)   // Inter
```

### Typography Hierarchy (DO NOT MODIFY)

```tsx
// Hero Headline
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
  Headline Text
</h1>

// Section Headline
<h2 
  className="text-3xl md:text-5xl"
  style={{ 
    fontFamily: 'var(--font-serif)', 
    color: 'var(--charcoal-primary)',
    fontWeight: 700,
    letterSpacing: '-0.01em'
  }}
>
  Section Title
</h2>

// Card Headline
<h3 
  className="text-2xl"
  style={{ 
    fontFamily: 'var(--font-serif)', 
    color: 'var(--charcoal-primary)',
    fontWeight: 700
  }}
>
  Card Title
</h3>

// Body Copy - Large (Hero/Intro)
<p 
  className="text-lg md:text-xl"
  style={{ 
    fontFamily: 'var(--font-sans)',
    color: 'var(--charcoal-secondary)',
    maxWidth: '65ch',
    lineHeight: 1.7
  }}
>
  Body text for hero sections and introductions.
</p>

// Body Copy - Standard
<p 
  className="text-base"
  style={{ 
    fontFamily: 'var(--font-sans)',
    color: 'var(--charcoal-secondary)',
    lineHeight: 1.7
  }}
>
  Standard body copy for descriptions and content blocks.
</p>

// Supporting Text
<p 
  className="text-sm"
  style={{ 
    fontFamily: 'var(--font-sans)',
    color: 'var(--charcoal-tertiary)',
    lineHeight: 1.7
  }}
>
  Supporting details and metadata.
</p>
```

**CRITICAL:** Never override font-size, font-weight, or line-height with Tailwind classes unless explicitly requested. The system in `globals.css` handles this.

---

## Color System

### CSS Variables (ALWAYS USE THESE)

```tsx
// Background
backgroundColor: 'var(--canvas)'           // #F5F5F3

// Accents
backgroundColor: 'var(--accent-rose)'      // #C4968A (Primary)
backgroundColor: 'var(--accent-denim)'     // #7B8B9E (Tech)
backgroundColor: 'var(--accent-sage)'      // #9CAA98 (Media)
backgroundColor: 'var(--accent-terracotta)' // #B88A7D (Culinary)
backgroundColor: 'var(--accent-sand)'      // #D4C5B0 (Subtle)

// Text
color: 'var(--charcoal-primary)'          // #2A2A2A (Headlines)
color: 'var(--charcoal-secondary)'        // #4A4A4A (Body)
color: 'var(--charcoal-tertiary)'         // #6A6A6A (Supporting)

// Structural
borderColor: 'var(--border)'              // #E0DED9
```

### Color Assignment by Venture

- **Origin Creative Group:** Rose
- **Origin Media Group:** Rose
- **Origin Stack:** Denim
- **Origin Creative Media:** Sage
- **Moments by Origin:** Terracotta
- **Origin Music:** Rose
- **Origin Studio:** Denim

### Background Treatments

```tsx
// Default section background
style={{ backgroundColor: 'var(--canvas)' }}

// Alternating sections (use subtly)
style={{ backgroundColor: 'rgba(212, 197, 176, 0.15)' }} // Sand tint
style={{ backgroundColor: 'rgba(196, 150, 138, 0.08)' }} // Rose tint
style={{ backgroundColor: 'rgba(156, 170, 152, 0.08)' }} // Sage tint
style={{ backgroundColor: 'rgba(123, 139, 158, 0.08)' }} // Denim tint

// Hero gradient (MAXIMUM ONE PER PAGE)
style={{
  background: `linear-gradient(135deg, 
    rgba(196, 150, 138, 0.15) 0%, 
    rgba(184, 138, 125, 0.12) 35%, 
    rgba(156, 170, 152, 0.08) 70%, 
    rgba(212, 197, 176, 0.05) 100%)`
}}
```

---

## Component Templates

### Primary Button

```tsx
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
  Button Text
</button>
```

### Outlined Button

```tsx
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
  Secondary Action
</button>
```

### Category Badge

```tsx
<span 
  className="inline-block px-3 py-1 text-xs uppercase tracking-wider" 
  style={{ 
    backgroundColor: 'rgba(196, 150, 138, 0.15)', 
    color: 'var(--accent-rose)', 
    fontFamily: 'var(--font-sans)', 
    fontWeight: 500, 
    borderRadius: '2px' 
  }}
>
  CATEGORY
</span>
```

### Content Card

```tsx
<div 
  className="p-8"
  style={{ 
    backgroundColor: 'var(--canvas)',
    border: '1px solid var(--border)',
    borderRadius: '4px'
  }}
>
  <span className="inline-block px-3 py-1 text-xs mb-4 uppercase tracking-wider" 
    style={{ 
      backgroundColor: 'rgba(196, 150, 138, 0.15)', 
      color: 'var(--accent-rose)', 
      fontFamily: 'var(--font-sans)', 
      fontWeight: 500, 
      borderRadius: '2px' 
    }}
  >
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
    Card Title
  </h3>
  <p 
    className="text-base"
    style={{ 
      fontFamily: 'var(--font-sans)',
      color: 'var(--charcoal-secondary)',
      lineHeight: 1.7
    }}
  >
    Card description goes here.
  </p>
</div>
```

### Interactive Card (with hover)

```tsx
<div 
  className="p-8 group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
  style={{ 
    backgroundColor: 'var(--canvas)',
    border: '1px solid var(--border)',
    borderRadius: '4px'
  }}
>
  {/* Content */}
</div>
```

### Icon Container - Circular

```tsx
<div 
  className="w-16 h-16 flex items-center justify-center"
  style={{ 
    backgroundColor: 'rgba(196, 150, 138, 0.15)',
    borderRadius: '50%'
  }}
>
  <Building2 size={28} style={{ color: 'var(--accent-rose)' }} />
</div>
```

### Icon Container - Square

```tsx
<div 
  className="w-14 h-14 flex items-center justify-center"
  style={{ 
    backgroundColor: 'rgba(123, 139, 158, 0.15)',
    borderRadius: '4px'
  }}
>
  <Shield size={28} style={{ color: 'var(--accent-denim)' }} />
</div>
```

### Stats Display

```tsx
<div className="grid md:grid-cols-4 gap-12 text-center">
  <div>
    <div className="text-4xl md:text-5xl mb-2" 
      style={{ 
        fontFamily: 'var(--font-serif)', 
        color: 'var(--accent-rose)', 
        fontWeight: 900 
      }}
    >
      15K+
    </div>
    <p className="text-sm" 
      style={{ 
        fontFamily: 'var(--font-sans)', 
        color: 'var(--charcoal-secondary)' 
      }}
    >
      Primary Label
    </p>
    <p className="text-xs mt-1" 
      style={{ 
        fontFamily: 'var(--font-sans)', 
        color: 'var(--charcoal-tertiary)' 
      }}
    >
      Supporting context
    </p>
  </div>
</div>
```

### Form Input

```tsx
<input
  type="email"
  placeholder="Your email address"
  className="px-6 py-4 border"
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
```

### Input + Button Combo

```tsx
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
    Subscribe
  </button>
</form>
```

---

## Layout Structure

### Standard Page Layout

```tsx
<div className="min-h-screen" style={{ backgroundColor: 'var(--canvas)' }}>
  {/* Navigation */}
  <nav className="px-6 md:px-20 py-6 border-b" style={{ borderColor: 'var(--border)' }}>
    {/* Nav content */}
  </nav>

  {/* Hero Section */}
  <section className="py-32 md:py-48 px-6 md:px-20">
    <div className="max-w-4xl mx-auto text-center">
      {/* Hero content */}
    </div>
  </section>

  {/* Content Section */}
  <section className="py-20 md:py-32 px-6 md:px-20">
    <div className="max-w-7xl mx-auto">
      {/* Section content */}
    </div>
  </section>

  {/* Alternating Background Section */}
  <section className="py-20 md:py-32 px-6 md:px-20" 
    style={{ backgroundColor: 'rgba(212, 197, 176, 0.15)' }}
  >
    <div className="max-w-7xl mx-auto">
      {/* Section content */}
    </div>
  </section>

  {/* Footer */}
  <footer className="py-12 px-6 md:px-20 border-t" style={{ borderColor: 'var(--border)' }}>
    <div className="max-w-7xl mx-auto">
      {/* Footer content */}
    </div>
  </footer>
</div>
```

### Navigation Bar

```tsx
<nav className="px-6 md:px-20 py-6 flex justify-between items-center border-b" 
  style={{ borderColor: 'var(--border)' }}
>
  <div className="tracking-tight" 
    style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}
  >
    <span className="text-xl">ORIGIN</span>
    <span className="text-xs ml-2" 
      style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}
    >
      Company Name
    </span>
  </div>
  <div className="flex gap-8 items-center" style={{ fontFamily: 'var(--font-sans)' }}>
    <a href="#" className="text-sm hidden md:block" 
      style={{ color: 'var(--charcoal-secondary)' }}
    >
      Link 1
    </a>
    <a href="#" className="text-sm hidden md:block" 
      style={{ color: 'var(--charcoal-secondary)' }}
    >
      Link 2
    </a>
    <button className="px-6 py-3 text-sm">CTA</button>
  </div>
</nav>
```

---

## Spacing Guidelines

### Section Padding

```tsx
// Standard sections
className="py-20 md:py-32 px-6 md:px-20"
// 80px mobile / 128px desktop (vertical)
// 24px mobile / 80px desktop (horizontal)

// Hero sections
className="py-32 md:py-48 px-6 md:px-20"
// 128px mobile / 192px desktop (vertical)
```

### Component Spacing

```tsx
// Section headline to content
className="mb-16"  // 64px

// Card padding
className="p-8"    // 32px all sides

// Grid gap
className="gap-8"  // 32px between items

// Button group gap
className="gap-4"  // 16px between buttons
```

---

## Image Handling

### Standard Image

```tsx
import { ImageWithFallback } from './figma/ImageWithFallback';

<ImageWithFallback
  src="https://images.unsplash.com/..."
  alt="Descriptive alt text"
  className="w-full h-full object-cover"
  style={{ 
    aspectRatio: '16/9',
    filter: 'saturate(0.85) contrast(1.1)',
    borderRadius: '4px'
  }}
/>
```

**Important:**
- Always use `ImageWithFallback` component (never `<img>` tag directly)
- Apply filter: `saturate(0.85) contrast(1.1)` for muted aesthetic
- Common aspect ratios: 16/9 (standard), 16/10 (hero), 4/3 (portraits)

---

## Icons

### Lucide React Icons

```tsx
import { Building2, Users, TrendingUp, Sparkles, Shield, Key } from 'lucide-react';

// In component
<Building2 size={28} style={{ color: 'var(--accent-rose)' }} />
```

**Standard Icon Sizes:**
- Large containers: 28px
- Medium containers: 24px
- Inline with text: 20px
- Small UI elements: 16-18px

---

## Motion & Animation

### Approved Transitions

```tsx
// Button hover
className="transition-all duration-300 hover:opacity-80"

// Card hover
className="transition-all duration-300 hover:scale-[1.02]"

// Link hover
className="transition-opacity duration-200 hover:opacity-70"
```

**Rules:**
- Duration: 200-300ms MAXIMUM
- Opacity changes: 0.7-0.8 (subtle)
- Scale changes: 1.02 (barely perceptible)
- NO spinning, bouncing, or aggressive animations

---

## Grid Systems

### Standard Card Grid

```tsx
<div className="grid md:grid-cols-3 gap-8">
  {/* 3 cards per row on desktop, stacked on mobile */}
</div>
```

### Stats Grid

```tsx
<div className="grid md:grid-cols-4 gap-12 text-center">
  {/* 4 stats per row */}
</div>
```

### Two-Column Layout

```tsx
<div className="grid md:grid-cols-2 gap-8 items-center">
  {/* 2 columns, vertically centered */}
</div>
```

### Asymmetric Layout (12-column)

```tsx
<div className="grid md:grid-cols-12 gap-8">
  <div className="md:col-span-7">{/* 7 columns */}</div>
  <div className="md:col-span-5">{/* 5 columns */}</div>
</div>
```

---

## Common Patterns

### Hero Section with Gradient

```tsx
<section 
  className="relative py-32 md:py-48 px-6 md:px-20 film-grain overflow-hidden"
  style={{
    background: `linear-gradient(135deg, 
      rgba(196, 150, 138, 0.15) 0%, 
      rgba(184, 138, 125, 0.12) 35%, 
      rgba(156, 170, 152, 0.08) 70%, 
      rgba(212, 197, 176, 0.05) 100%)`
  }}
>
  <div className="max-w-7xl mx-auto text-center relative z-10">
    <h1 className="text-5xl md:text-7xl mb-8">Headline</h1>
    <p className="text-lg md:text-xl mb-12">Body copy</p>
    <div className="flex gap-4 justify-center">
      {/* Buttons */}
    </div>
  </div>
</section>
```

### Content Section with Cards

```tsx
<section className="py-20 md:py-32 px-6 md:px-20">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-5xl mb-16">Section Title</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {/* Cards */}
    </div>
  </div>
</section>
```

### CTA Section

```tsx
<section className="py-20 md:py-32 px-6 md:px-20" 
  style={{ backgroundColor: 'rgba(196, 150, 138, 0.08)' }}
>
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-5xl mb-6">CTA Headline</h2>
    <p className="text-lg mb-10">Supporting copy</p>
    <div className="flex gap-4 justify-center">
      {/* Buttons */}
    </div>
  </div>
</section>
```

---

## AI Prompt Template

When requesting an AI to build an Origin-branded page, use this template:

```
Build a [page type] for Origin [Company Name] following the Origin design system:

1. Reference: /components/DesignPatternLibrary.tsx and /guidelines/Design-Rules.md
2. Color: Use var(--accent-[color]) for [Company Name]
3. Typography: Playfair Display for headlines, Inter for body (DO NOT override defaults)
4. Spacing: py-20 md:py-32 for sections, generous whitespace
5. Components: Follow exact patterns from DesignPatternLibrary
6. Motion: Restrained (200-300ms max), subtle hover states
7. Images: Use ImageWithFallback with saturate(0.85) contrast(1.1) filter
8. Border-radius: 2px for buttons, 4px for cards
9. ONE gradient maximum (hero section only)

Content:
[Describe content needs]

Layout Structure:
[Describe sections needed]
```

---

## Checklist for AI Builds

Before marking a build complete, verify:

- [ ] Uses CSS variables (never hardcoded hex values)
- [ ] Typography follows hierarchy (no custom font-size/weight)
- [ ] Line-height: 1.7 for all body copy
- [ ] Max-width: 65ch for large body text
- [ ] Spacing: py-20 md:py-32 for sections
- [ ] Buttons: border-radius 2px
- [ ] Cards: border-radius 4px, p-8 padding
- [ ] Maximum ONE gradient per page
- [ ] Film grain only on hero sections
- [ ] Images use ImageWithFallback component
- [ ] Images have filter: saturate(0.85) contrast(1.1)
- [ ] Hover transitions: 200-300ms max
- [ ] Border: 1px solid var(--border)
- [ ] Responsive design works at md: (768px)
- [ ] Color contrast meets WCAG AA
- [ ] No drop shadows, no aggressive animations
- [ ] Asymmetric layout (not perfectly centered)

---

## Common Mistakes to Avoid

❌ **DON'T:**
- Hardcode hex colors (use CSS variables)
- Override typography with Tailwind classes
- Use large border-radius (>4px for containers)
- Add multiple gradients
- Use bright, saturated colors
- Center everything perfectly
- Add drop shadows or modern effects
- Use animations >300ms
- Forget the image filter
- Use `<img>` instead of `ImageWithFallback`
- Make hover effects aggressive

✅ **DO:**
- Use CSS custom properties
- Let globals.css handle typography
- Keep border-radius subtle (2-4px)
- Use ONE gradient maximum
- Embrace muted palette
- Create asymmetric layouts
- Keep transitions restrained
- Apply image filters consistently
- Import ImageWithFallback
- Make hover states barely perceptible

---

## Resources

- **Live Examples:** `/components/DesignPatternLibrary.tsx`
- **Design Rules:** `/guidelines/Design-Rules.md`
- **Brand Guidelines:** `/guidelines/Guidelines.md`
- **CSS Variables:** `/styles/globals.css`
- **Existing Layouts:** `/components/LayoutOption[1-10].tsx`

---

**Last Updated:** January 2025  
**Maintained By:** Origin Creative Group Design Team  
**Questions?** Reference the Design Pattern Library for live, interactive examples of every component.
