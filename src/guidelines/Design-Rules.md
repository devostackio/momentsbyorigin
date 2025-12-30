# Origin Design System Rules

**Version:** 2.0  
**Last Updated:** January 2025  
**Purpose:** Strict design rules for maintaining brand consistency across all Origin ventures

---

## Typography Rules

### Font Families

#### Serif (Playfair Display)
**Usage:** Headlines, statistics, numbers, emphasis
**Weights Available:** 700 (Bold), 900 (Black)

```css
font-family: var(--font-serif)
```

**Hierarchy:**
- Hero Headlines: `text-5xl md:text-7xl` (48px/84px) • Weight: 900 • Letter-spacing: -0.02em
- Section Headlines: `text-3xl md:text-5xl` (30px/48px) • Weight: 700 • Letter-spacing: -0.01em
- Card Headlines: `text-2xl` (24px) • Weight: 700
- Subheadings: `text-xl` (20px) • Weight: 700

#### Sans-Serif (Inter)
**Usage:** Body copy, navigation, UI elements, labels
**Weights Available:** 400 (Regular), 500 (Medium)

```css
font-family: var(--font-sans)
```

**Hierarchy:**
- Large Body (Hero/Intro): `text-lg md:text-xl` (18px/20px) • Line-height: 1.7
- Standard Body: `text-base` (16px) • Line-height: 1.7
- Supporting Text: `text-sm` (14px) • Line-height: 1.7
- Labels/Metadata: `text-xs` (12px) • Line-height: 1.6

### Critical Typography Rules

1. **DO NOT override font-size, font-weight, or line-height** with Tailwind classes unless explicitly requested
2. **ALWAYS use semantic HTML** (h1, h2, h3, p) and let globals.css handle defaults
3. **Line-height must always be 1.7** for body copy (readability)
4. **Max-width for body text:** 65ch (optimal reading length)
5. **Negative letter-spacing** only for large headlines (-0.02em for hero, -0.01em for sections)

---

## Color System

### Primary Palette

#### Background
- **Canvas (Primary):** `#F5F5F3` • Warm off-white
- **Usage:** Default page background, card backgrounds

#### Accent Colors (Washed 80s Hues)
- **Dusty Rose:** `#C4968A` • Primary accent, CTAs, Origin Media Group
- **Terracotta:** `#B88A7D` • Secondary accent, Moments by Origin
- **Sage:** `#9CAA98` • Nature/growth themes, Origin Creative Media
- **Denim:** `#7B8B9E` • Tech/security themes, Origin Stack
- **Sand:** `#D4C5B0` • Subtle backgrounds, dividers

#### Text Colors (Charcoal Foundation)
- **Primary:** `#2A2A2A` • Headlines, primary content
- **Secondary:** `#4A4A4A` • Body copy, descriptions
- **Tertiary:** `#6A6A6A` • Supporting text, metadata

#### Structural
- **Border:** `#E0DED9` • Dividers, card borders, input borders

### Color Usage Rules

1. **ONE gradient per layout maximum** (usually hero section only)
2. **Background tints use 8-15% opacity** of accent colors
3. **Icon containers use 15% opacity** of their accent color
4. **Never use pure black** (#000000) — always use charcoal-primary
5. **CTAs should use full opacity** accent colors with white text

### Approved Background Combinations

```css
/* Alternating section backgrounds */
Section 1: background-color: var(--canvas)
Section 2: background-color: rgba(212, 197, 176, 0.15) /* Sand tint */
Section 3: background-color: var(--canvas)
Section 4: background-color: rgba(196, 150, 138, 0.08) /* Rose tint */

/* Hero gradient (use sparingly - once per page) */
background: linear-gradient(135deg, 
  rgba(196, 150, 138, 0.15) 0%, 
  rgba(184, 138, 125, 0.12) 35%, 
  rgba(156, 170, 152, 0.08) 70%, 
  rgba(212, 197, 176, 0.05) 100%)
```

---

## Origin Stack Dark Theme (Enterprise Exception)

**EXCEPTION:** Origin Stack uses a dark theme to convey enterprise-grade professionalism and appeal to SaaS/enterprise users (Salesforce, Slack, Adobe level).

### Dark Theme Color Palette

#### Backgrounds
- **Primary Background:** `#0A0A0A` (Near black)
- **Secondary Background:** `#121212` (Dark gray sections)
- **Card/Elevated:** `#1A1A1A` (Card backgrounds)
- **Card Hover:** `#1F1F1F` (Hover state)

#### Text
- **Primary:** `#FFFFFF` (White - headlines, primary content)
- **Secondary:** `rgba(255, 255, 255, 0.7)` (70% white - body copy)
- **Tertiary:** `rgba(255, 255, 255, 0.5)` (50% white - supporting text)

#### Accents & Borders
- **Accent:** `#7B8B9E` (Denim - unchanged)
- **Accent Hover:** `#8A9AAD` (Lighter denim)
- **Border Default:** `rgba(123, 139, 158, 0.15)` (15% denim)
- **Border Hover:** `rgba(123, 139, 158, 0.3)` (30% denim)
- **Badge Background:** `rgba(123, 139, 158, 0.15)` with border

### Dark Theme Patterns

**Navigation:**
```tsx
style={{ 
  backgroundColor: '#0A0A0A', 
  borderColor: 'rgba(123, 139, 158, 0.15)' 
}}
```

**Hero Section with Grid Overlay:**
```tsx
<section style={{ 
  background: 'linear-gradient(180deg, #0A0A0A 0%, #121212 100%)',
  position: 'relative'
}}>
  {/* Subtle grid pattern */}
  <div style={{
    position: 'absolute',
    inset: 0,
    backgroundImage: `linear-gradient(rgba(123, 139, 158, 0.03) 1px, transparent 1px), 
                     linear-gradient(90deg, rgba(123, 139, 158, 0.03) 1px, transparent 1px)`,
    backgroundSize: '64px 64px',
    pointerEvents: 'none'
  }} />
</section>
```

**Interactive Cards:**
```tsx
<div 
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
```

**Buttons - Primary:**
```tsx
<button 
  style={{ 
    backgroundColor: '#7B8B9E', 
    color: '#FFFFFF'
  }}
  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8A9AAD'}
  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7B8B9E'}
>
```

**Buttons - Outlined:**
```tsx
<button 
  style={{ 
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'transparent',
    color: '#FFFFFF'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
  }}
>
```

**Form Inputs:**
```tsx
<input
  style={{ 
    backgroundColor: '#1A1A1A',
    borderColor: 'rgba(123, 139, 158, 0.2)',
    color: '#FFFFFF'
  }}
/>
```

### Dark Theme Design Principles

1. **Higher Contrast:** Maintain readability with pure white text on dark backgrounds
2. **Subtle Grid Overlays:** Add texture without noise (3% opacity grid on hero)
3. **Border Glow on Hover:** Cards lift with brighter border (15% → 30% opacity)
4. **Restrained Motion:** Same 200-300ms transitions as light theme
5. **Professional Polish:** Clean, inviting, enterprise-ready aesthetic
6. **Accessibility:** Ensure WCAG AA contrast ratios maintained

### When to Use Dark Theme

**Use Dark Theme For:**
- Origin Stack (SaaS platform)
- Enterprise/B2B products
- Developer tools
- Technical platforms
- Security-focused products

**Use Light Theme For:**
- Origin Creative Group (umbrella)
- Origin Media Group (production)
- Origin Creative Media (publishing)
- Moments by Origin (culinary)
- Origin Music (label)
- Origin Studio (community innovation)

---

## Spacing System

### Vertical Spacing (Sections)

**Standard Section Padding:**
```css
py-20 md:py-32  /* 80px mobile / 128px desktop */
```

**Hero Section Padding:**
```css
py-32 md:py-48  /* 128px mobile / 192px desktop */
```

**Rule:** Sections must have **80-120px of vertical spacing** to create generous whitespace

### Horizontal Spacing

**Page Margins:**
```css
px-6 md:px-20  /* 24px mobile / 80px desktop */
```

**Component/Card Padding:**
```css
p-8  /* 32px all sides */
```

### Component Spacing

- **Section headline to content:** `mb-16` (64px)
- **Card/component gap:** `gap-8` (32px)
- **Button group gap:** `gap-4` (16px)
- **Text paragraph spacing:** `mb-6` to `mb-12` (24-48px)

### Grid Systems

**Standard Card Grid:**
```css
grid md:grid-cols-3 gap-8
```

**Stats Grid:**
```css
grid md:grid-cols-4 gap-12 text-center
```

**Two-Column Layout:**
```css
grid md:grid-cols-2 gap-8 items-center
```

---

## Component Patterns

### Buttons

#### Primary Button
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

#### Outlined Button
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

**Button Rules:**
- Border-radius: **ALWAYS 2px** (subtle, modern)
- Hover: **opacity: 0.8** for solid buttons
- Hover: **fill background** for outlined buttons
- Font-weight: **500** (medium)
- Small nav buttons: `px-6 py-3 text-sm`
- Large CTA buttons: `px-8 py-4`

### Badges

#### Category Badge
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

**Badge Rules:**
- Always uppercase
- Background: 15% opacity of accent color
- Text: Full opacity accent color
- Padding: `px-3 py-1` (standard) or `px-4 py-2` (hero)
- Border-radius: `2px`

### Cards

#### Standard Card
```tsx
<div 
  className="p-8"
  style={{ 
    backgroundColor: 'var(--canvas)',
    border: '1px solid var(--border)',
    borderRadius: '4px'
  }}
>
  <span className="badge">CATEGORY</span>
  <h3 className="headline">Card Title</h3>
  <p className="body">Description...</p>
</div>
```

#### Interactive Card (Hover)
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

**Card Rules:**
- Border: **1px solid var(--border)**
- Border-radius: **4px**
- Padding: **p-8** (32px)
- Background: **var(--canvas)**
- Hover scale: **1.02** (subtle lift)
- Transition: **300ms**

### Icon Containers

#### Circular Container
```tsx
<div 
  className="w-16 h-16 flex items-center justify-center"
  style={{ 
    backgroundColor: 'rgba(196, 150, 138, 0.15)',
    borderRadius: '50%'
  }}
>
  <Icon size={28} style={{ color: 'var(--accent-rose)' }} />
</div>
```

#### Square Container
```tsx
<div 
  className="w-14 h-14 flex items-center justify-center"
  style={{ 
    backgroundColor: 'rgba(123, 139, 158, 0.15)',
    borderRadius: '4px'
  }}
>
  <Icon size={28} style={{ color: 'var(--accent-denim)' }} />
</div>
```

**Icon Container Rules:**
- Circular: 64x64px • border-radius: 50%
- Square: 56x56px • border-radius: 4px
- Background: 15% opacity of accent color
- Icon size: 24-28px
- Icon color: Full opacity accent color

---

## Navigation Pattern

### Standard Navigation Bar

```tsx
<nav className="px-6 md:px-20 py-6 flex justify-between items-center border-b" style={{ borderColor: 'var(--border)' }}>
  <div className="tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal-primary)' }}>
    <span className="text-xl">ORIGIN</span>
    <span className="text-xs ml-2" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>Company Name</span>
  </div>
  <div className="flex gap-8 items-center" style={{ fontFamily: 'var(--font-sans)' }}>
    <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Link 1</a>
    <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Link 2</a>
    <a href="#" className="text-sm hidden md:block" style={{ color: 'var(--charcoal-secondary)' }}>Link 3</a>
    <button className="small-button">CTA</button>
  </div>
</nav>
```

**Navigation Rules:**
- Padding: `px-6 md:px-20 py-6`
- Border-bottom: 1px solid border color
- Brand: Serif "ORIGIN" + sans subtitle
- Links: `text-sm` • `gap-8` • charcoal-secondary
- Hide links on mobile: `hidden md:block`
- CTA: Small button variant

---

## Stats/Metrics Display

### Standard Stats Grid

```tsx
<div className="grid md:grid-cols-4 gap-12 text-center">
  <div>
    <div className="text-4xl md:text-5xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-rose)', fontWeight: 900 }}>
      15K+
    </div>
    <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
      Primary Label
    </p>
    <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-tertiary)' }}>
      Supporting context
    </p>
  </div>
</div>
```

**Stats Rules:**
- Number: `text-4xl md:text-5xl` • Serif • Weight: 900 • Accent color
- Label: `text-sm` • Sans • charcoal-secondary
- Supporting: `text-xs` • Sans • charcoal-tertiary
- Grid gap: `gap-12` (48px)
- Text-align: center

---

## Form Elements

### Email Input
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

**Form Rules:**
- Padding: `px-6 py-4`
- Border: `1px solid var(--border)`
- Border-radius: `2px`
- Font-size: `14px`
- Background: `var(--canvas)`

---

## Motion & Animation

### Approved Transitions

**Hover Effects:**
```css
transition-all duration-300 hover:opacity-80        /* Buttons */
transition-all duration-300 hover:scale-[1.02]      /* Cards */
transition-opacity duration-200 hover:opacity-70    /* Links */
```

**Rules:**
- Duration: 200-300ms (restrained, not flashy)
- Hover opacity: 0.7-0.8 (subtle)
- Hover scale: 1.02 (tactile, not bouncy)
- **NO** spinning, bouncing, or aggressive animations
- Motion should be **barely perceptible** but felt

---

## Border Radius Standards

- **Buttons:** `2px` (subtle, modern)
- **Cards:** `4px` (gentle corners)
- **Badges:** `2px` (matching buttons)
- **Icon containers (circular):** `50%`
- **Icon containers (square):** `4px`
- **Input fields:** `2px`

**Rule:** NEVER use large border-radius (>8px) — conflicts with editorial aesthetic

---

## Image Treatment

### Standard Image Styling
```tsx
<ImageWithFallback
  src="..."
  alt="..."
  className="w-full h-full object-cover"
  style={{ 
    aspectRatio: '16/9',
    filter: 'saturate(0.85) contrast(1.1)' 
  }}
/>
```

**Image Rules:**
- Filter: `saturate(0.85) contrast(1.1)` (muted, nostalgic)
- Aspect ratios: 16/9 (standard), 16/10 (hero), 4/3 (portraits)
- Border-radius: `4px` for contained images
- Object-fit: `cover` (always fill container)

---

## Asymmetric Balance

**Principle:** Avoid perfect symmetry. Use offset grids and varied column spans.

### Approved Layouts

**Two-Column Offset:**
```tsx
<div className="grid md:grid-cols-12 gap-8">
  <div className="md:col-span-7">{/* Larger content */}</div>
  <div className="md:col-span-5">{/* Smaller content */}</div>
</div>
```

**Three-Column Varied:**
```tsx
<div className="grid md:grid-cols-3 gap-8">
  {/* Items can span 1-2 columns for variety */}
</div>
```

**Rule:** Embrace 60/40 or 70/30 splits over 50/50

---

## Film Grain Texture

### Implementation

```css
.film-grain {
  position: relative;
}

.film-grain::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,...");
  opacity: 0.03;
  pointer-events: none;
}
```

**Usage:** Apply to hero sections with gradients only

---

## Forbidden Patterns

❌ **DO NOT:**
- Use bright, saturated colors (conflicts with muted palette)
- Add drop shadows (too modern/corporate)
- Use rounded buttons (>4px border-radius)
- Center everything (breaks asymmetric balance)
- Use decorative fonts beyond Playfair Display and Inter
- Add multiple gradients per page
- Use animations >300ms duration
- Override typography sizes without designer approval
- Use emojis in professional content
- Add texture overlays beyond subtle film grain

---

## Responsive Breakpoints

### Tailwind Breakpoints Used

```css
sm:  640px  /* Small tablets */
md:  768px  /* Tablets, most common breakpoint */
lg:  1024px /* Desktops */
xl:  1280px /* Large desktops */
```

**Rule:** Most responsive changes happen at `md:` (768px)

### Mobile-First Patterns

```tsx
/* Mobile base, desktop override */
className="text-5xl md:text-7xl"
className="py-20 md:py-32"
className="px-6 md:px-20"
className="grid md:grid-cols-3"
className="hidden md:block"
```

---

## Accessibility Requirements

1. **Color Contrast:** All text must meet WCAG AA standards
   - Body text (charcoal-secondary #4A4A4A) on canvas (#F5F5F3): 7.5:1 ✓
   - Headlines (charcoal-primary #2A2A2A) on canvas: 11:1 ✓

2. **Focus States:** All interactive elements must have visible focus states
   
3. **Semantic HTML:** Use proper heading hierarchy (h1 → h2 → h3)

4. **Alt Text:** All images require descriptive alt text

5. **Link Indicators:** Links must be distinguishable from body text

---

## CSS Custom Properties Reference

```css
/* Typography */
--font-serif: 'Playfair Display', serif;
--font-sans: 'Inter', sans-serif;

/* Colors - Background */
--canvas: #F5F5F3;

/* Colors - Accents */
--accent-rose: #C4968A;
--accent-terracotta: #B88A7D;
--accent-sage: #9CAA98;
--accent-denim: #7B8B9E;
--accent-sand: #D4C5B0;

/* Colors - Text */
--charcoal-primary: #2A2A2A;
--charcoal-secondary: #4A4A4A;
--charcoal-tertiary: #6A6A6A;

/* Colors - Structural */
--border: #E0DED9;
```

**Rule:** ALWAYS use CSS variables, never hardcode hex values

---

## Quality Checklist

Before shipping any design, verify:

- [ ] Generous whitespace (80-120px vertical)
- [ ] Maximum one gradient per page
- [ ] Film grain only on hero sections
- [ ] All images have muted filter applied
- [ ] Typography follows hierarchy
- [ ] Border-radius: 2px (buttons), 4px (cards)
- [ ] Hover states are subtle (200-300ms)
- [ ] Color contrast meets WCAG AA
- [ ] Responsive design works at md: breakpoint
- [ ] No drop shadows or modern effects
- [ ] Brand colors used correctly
- [ ] Asymmetric layout (not perfectly centered)

---

**Last Updated:** January 2025  
**Maintained By:** Origin Creative Group Design Team  
**For Questions:** Refer to `/components/DesignPatternLibrary.tsx` for live examples
