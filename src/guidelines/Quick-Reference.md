# Origin Design System - Quick Reference Card

**Version:** 2.0 | **Last Updated:** January 2025

---

## 🎨 Brand Essence

**Aesthetic:** Muted, nostalgic, confident  
**Inspiration:** 1980s editorial design, film photography, mid-century restraint  
**Philosophy:** Generous whitespace, asymmetric balance, restrained motion

---

## 📐 Core Measurements

| Element | Mobile | Desktop |
|---------|--------|---------|
| Section Padding (Vertical) | `py-20` (80px) | `py-32` (128px) |
| Hero Padding (Vertical) | `py-32` (128px) | `py-48` (192px) |
| Page Margins (Horizontal) | `px-6` (24px) | `px-20` (80px) |
| Card Padding | `p-8` (32px) | `p-8` (32px) |
| Section Title Margin | `mb-16` (64px) | `mb-16` (64px) |
| Grid Gap | `gap-8` (32px) | `gap-8` (32px) |

---

## 🔤 Typography Quick Guide

| Element | Tailwind Class | Style Properties |
|---------|---------------|------------------|
| Hero Headline | `text-5xl md:text-7xl` | Serif • Weight: 900 • Letter-spacing: -0.02em |
| Section Headline | `text-3xl md:text-5xl` | Serif • Weight: 700 • Letter-spacing: -0.01em |
| Card Headline | `text-2xl` | Serif • Weight: 700 |
| Large Body | `text-lg md:text-xl` | Sans • Line-height: 1.7 • Max-width: 65ch |
| Standard Body | `text-base` | Sans • Line-height: 1.7 |
| Supporting Text | `text-sm` | Sans • Line-height: 1.7 |
| Labels/Metadata | `text-xs` | Sans • Line-height: 1.6 |

**⚠️ NEVER override font-size, font-weight, or line-height unless explicitly requested**

---

## 🎨 Color Palette

### Primary Colors

```tsx
// Background
--canvas: #F5F5F3

// Accents
--accent-rose: #C4968A        (Origin Creative Group, Media Group, Music)
--accent-denim: #7B8B9E       (Origin Stack, Studio)
--accent-sage: #9CAA98        (Origin Creative Media)
--accent-terracotta: #B88A7D  (Moments by Origin)
--accent-sand: #D4C5B0        (Subtle backgrounds)

// Text
--charcoal-primary: #2A2A2A   (Headlines)
--charcoal-secondary: #4A4A4A (Body copy)
--charcoal-tertiary: #6A6A6A  (Supporting text)

// Structural
--border: #E0DED9             (Borders, dividers)
```

### Background Tints

```tsx
Sand:        rgba(212, 197, 176, 0.15)
Rose:        rgba(196, 150, 138, 0.08)
Sage:        rgba(156, 170, 152, 0.08)
Denim:       rgba(123, 139, 158, 0.08)
Icon BG:     rgba([accent], 0.15)  // 15% opacity for icon containers
```

---

## 🧩 Component Quick Copy

### Primary Button

```tsx
<button className="px-8 py-4 transition-all duration-300 hover:opacity-80"
  style={{ backgroundColor: 'var(--accent-rose)', color: 'var(--canvas)', 
           fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
  Button Text
</button>
```

### Outlined Button

```tsx
<button className="px-8 py-4 border transition-all duration-300 hover:bg-[var(--charcoal-primary)] hover:text-[var(--canvas)]"
  style={{ borderColor: 'var(--charcoal-primary)', borderWidth: '1.5px', 
           backgroundColor: 'transparent', color: 'var(--charcoal-primary)', 
           fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
  Secondary
</button>
```

### Badge

```tsx
<span className="inline-block px-3 py-1 text-xs uppercase tracking-wider" 
  style={{ backgroundColor: 'rgba(196, 150, 138, 0.15)', color: 'var(--accent-rose)', 
           fontFamily: 'var(--font-sans)', fontWeight: 500, borderRadius: '2px' }}>
  CATEGORY
</span>
```

### Card

```tsx
<div className="p-8" style={{ backgroundColor: 'var(--canvas)', border: '1px solid var(--border)', 
     borderRadius: '4px' }}>
  {/* Content */}
</div>
```

### Icon Container (Circular)

```tsx
<div className="w-16 h-16 flex items-center justify-center"
  style={{ backgroundColor: 'rgba(196, 150, 138, 0.15)', borderRadius: '50%' }}>
  <Icon size={28} style={{ color: 'var(--accent-rose)' }} />
</div>
```

### Stat

```tsx
<div>
  <div className="text-4xl md:text-5xl mb-2" 
    style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-rose)', fontWeight: 900 }}>
    15K+
  </div>
  <p className="text-sm" style={{ fontFamily: 'var(--font-sans)', color: 'var(--charcoal-secondary)' }}>
    Label
  </p>
</div>
```

---

## 📏 Border Radius Standards

| Element | Border Radius |
|---------|---------------|
| Buttons | `2px` |
| Badges | `2px` |
| Cards | `4px` |
| Input Fields | `2px` |
| Icon Containers (Square) | `4px` |
| Icon Containers (Circle) | `50%` |

**Rule:** Never exceed 8px border-radius

---

## 🎬 Motion Standards

| Effect | Transition |
|--------|-----------|
| Button Hover | `transition-all duration-300 hover:opacity-80` |
| Card Hover | `transition-all duration-300 hover:scale-[1.02]` |
| Link Hover | `transition-opacity duration-200 hover:opacity-70` |

**Rules:**
- Duration: 200-300ms MAX
- Opacity: 0.7-0.8 for hovers
- Scale: 1.02 (barely perceptible)
- NO spinning, bouncing, or aggressive effects

---

## 📱 Responsive Breakpoints

```tsx
sm:  640px   // Small tablets
md:  768px   // Tablets (PRIMARY breakpoint)
lg:  1024px  // Desktops
xl:  1280px  // Large desktops
```

**Most responsive changes happen at `md:`**

---

## 🖼️ Image Treatment

```tsx
import { ImageWithFallback } from './figma/ImageWithFallback';

<ImageWithFallback
  src="..."
  alt="..."
  className="w-full h-full object-cover"
  style={{ 
    aspectRatio: '16/9',
    filter: 'saturate(0.85) contrast(1.1)',
    borderRadius: '4px'
  }}
/>
```

**⚠️ ALWAYS use `ImageWithFallback` (never `<img>`)**  
**⚠️ ALWAYS apply filter: saturate(0.85) contrast(1.1)**

---

## 📐 Grid Systems

```tsx
// 3-column cards
<div className="grid md:grid-cols-3 gap-8">

// 4-column stats
<div className="grid md:grid-cols-4 gap-12 text-center">

// 2-column content
<div className="grid md:grid-cols-2 gap-8 items-center">

// Asymmetric (60/40 split)
<div className="grid md:grid-cols-12 gap-8">
  <div className="md:col-span-7">{/* 7 cols */}</div>
  <div className="md:col-span-5">{/* 5 cols */}</div>
</div>
```

---

## 🚫 Forbidden Patterns

**NEVER:**
- ❌ Hardcode hex colors (use CSS variables)
- ❌ Override typography defaults
- ❌ Use multiple gradients per page
- ❌ Add drop shadows
- ❌ Use border-radius > 8px
- ❌ Create aggressive animations
- ❌ Use `<img>` tag directly
- ❌ Forget image filter
- ❌ Perfect center everything
- ❌ Use bright/saturated colors

---

## ✅ Golden Rules

1. **ONE gradient per page maximum** (hero sections only)
2. **Generous whitespace** (80-120px vertical spacing)
3. **Line-height: 1.7** for all body copy
4. **Max-width: 65ch** for large body text
5. **Asymmetric layouts** (embrace 60/40 splits)
6. **Restrained motion** (200-300ms transitions)
7. **Muted images** (saturate 0.85, contrast 1.1)
8. **Border-radius:** 2px buttons, 4px cards
9. **CSS variables always** (never hardcode)
10. **Subtle hover states** (barely perceptible)

---

## 🔗 Resources

- **Live Examples:** `/components/DesignPatternLibrary.tsx`
- **Complete Rules:** `/guidelines/Design-Rules.md`
- **AI Instructions:** `/guidelines/AI-Build-Instructions.md`
- **Brand Guidelines:** `/guidelines/Guidelines.md`
- **CSS Variables:** `/styles/globals.css`

---

## 🎯 Pre-Flight Checklist

Before shipping any design:

- [ ] Uses CSS variables (no hardcoded hex)
- [ ] Typography follows hierarchy
- [ ] Line-height: 1.7 for body copy
- [ ] py-20 md:py-32 spacing
- [ ] Border-radius: 2px (buttons), 4px (cards)
- [ ] Max ONE gradient
- [ ] Images use ImageWithFallback
- [ ] Images have muted filter
- [ ] Transitions: 200-300ms max
- [ ] Responsive at md: (768px)
- [ ] No drop shadows
- [ ] Asymmetric layout

---

**Quick Access:**  
View live examples: Navigate to `/design-library` from footer  
View in app: Bottom navigation → "View Design Pattern Library"

**Last Updated:** January 2025 | **Origin Creative Group Design Team**
