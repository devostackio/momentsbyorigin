# Origin Creative Group - Design System Guidelines

**Version:** 2.0  
**Last Updated:** January 2025

---

## 📚 Documentation Structure

This design system is organized across multiple documents for different use cases:

### For Quick Reference
- **[Quick-Reference.md](./Quick-Reference.md)** - Quick lookup card with essential specs, measurements, and code snippets

### For Comprehensive Rules
- **[Design-Rules.md](./Design-Rules.md)** - Complete design system rules with detailed specifications for every component

### For AI Assistants
- **[AI-Build-Instructions.md](./AI-Build-Instructions.md)** - Step-by-step instructions for AI assistants building Origin-branded interfaces

### For Live Examples
- **[Design Pattern Library](../components/DesignPatternLibrary.tsx)** - Interactive component library with live, working examples of every pattern

### For Project Context
- **[Portfolio-Structure.md](./Portfolio-Structure.md)** - Overview of Origin's venture portfolio structure
- **[Future-Ventures-2028.md](./Future-Ventures-2028.md)** - Details on upcoming 2028 ventures
- **[Presentation-Guide.md](./Presentation-Guide.md)** - How the investor presentation suite works

---

## 🎨 Brand Essence (Quick Overview)

**Design Philosophy:** "Muted, nostalgic, confident"

Origin Creative Group's design language is inspired by:
- 1980s editorial design (Vogue, Architectural Digest)
- Film photography aesthetics
- Mid-century modern restraint
- Academic publishing layouts

### Core Principles

1. **Generous Whitespace** - 80-120px vertical spacing between sections
2. **Asymmetric Balance** - Embrace 60/40 splits, avoid perfect centering
3. **Restrained Motion** - 200-300ms transitions maximum, barely perceptible
4. **Editorial Hierarchy** - Large serif headlines, clean sans-serif body copy
5. **Muted Palette** - Washed 80s hues with charcoal foundations
6. **Film Grain Texture** - Subtle texture on hero sections only
7. **One Gradient Rule** - Maximum ONE gradient per page

---

## 🚀 Getting Started

### For Designers
1. Review **[Design-Rules.md](./Design-Rules.md)** for complete specifications
2. Use **[Design Pattern Library](../components/DesignPatternLibrary.tsx)** for visual reference
3. Reference **[Quick-Reference.md](./Quick-Reference.md)** for measurements

### For Developers
1. Start with **[AI-Build-Instructions.md](./AI-Build-Instructions.md)** for templates
2. Copy component patterns from **[Design Pattern Library](../components/DesignPatternLibrary.tsx)**
3. Use **[Quick-Reference.md](./Quick-Reference.md)** for CSS variable names

### For AI Assistants
1. **Primary Reference:** [AI-Build-Instructions.md](./AI-Build-Instructions.md)
2. **Code Examples:** `/components/DesignPatternLibrary.tsx`
3. **Existing Layouts:** `/components/LayoutOption[1-10].tsx`
4. **CSS Variables:** `/styles/globals.css`

---

## 🔤 Typography System

### Font Families
- **Serif:** Playfair Display (Headlines, stats, emphasis)
- **Sans-Serif:** Inter (Body copy, UI, navigation)

### Critical Rule
**⚠️ NEVER override font-size, font-weight, or line-height with Tailwind classes unless explicitly requested**

The typography system in `/styles/globals.css` handles all defaults. Let semantic HTML do the work.

---

## 🎨 Color System

### Always Use CSS Variables

```tsx
// ✅ CORRECT
backgroundColor: 'var(--accent-rose)'
color: 'var(--charcoal-primary)'

// ❌ WRONG
backgroundColor: '#C4968A'
color: '#2A2A2A'
```

### Color Assignments by Venture
- **Origin Creative Group:** Rose (#C4968A) • Light background
- **Origin Media Group:** Rose (#C4968A) • Light background
- **Origin Stack:** Denim (#7B8B9E) • **DARK BACKGROUND (Enterprise exception)**
- **Origin Creative Media:** Sage (#9CAA98) • Light background
- **Moments by Origin:** Terracotta (#B88A7D) • Light background
- **Origin Music:** Rose (#C4968A) • Light background
- **Origin Studio:** Denim (#7B8B9E) • Light background

### Origin Stack Dark Theme Exception

**Origin Stack uses a dark, enterprise-grade design** to convey professional credibility and appeal to enterprise users (Salesforce, Slack, Adobe-level organizations).

**Dark Theme Specifications:**
- **Primary Background:** `#0A0A0A` (near black)
- **Secondary Background:** `#121212` (dark gray)
- **Card Background:** `#1A1A1A` (elevated dark)
- **Text Primary:** `#FFFFFF` (white)
- **Text Secondary:** `rgba(255, 255, 255, 0.7)` (70% white)
- **Text Tertiary:** `rgba(255, 255, 255, 0.5)` (50% white)
- **Accent:** `#7B8B9E` (Denim - unchanged)
- **Borders:** `rgba(123, 139, 158, 0.15)` (15% denim)
- **Hover Borders:** `rgba(123, 139, 158, 0.3)` (30% denim)

**Design Principles:**
- Subtle grid overlay on hero section
- Higher contrast for readability
- Hover states lift cards with border glow
- Maintains Origin's restrained motion
- Professional, inviting, solidly enterprise-ready

See **[Quick-Reference.md](./Quick-Reference.md)** for complete color palette.

---

## 📐 Spacing System

### Standard Measurements

```tsx
// Section padding (vertical)
className="py-20 md:py-32"  // 80px mobile / 128px desktop

// Hero section padding
className="py-32 md:py-48"  // 128px mobile / 192px desktop

// Page margins (horizontal)
className="px-6 md:px-20"   // 24px mobile / 80px desktop

// Component padding
className="p-8"             // 32px all sides
```

---

## 🧩 Component Patterns

All component patterns are available in:
- **Live Examples:** `/components/DesignPatternLibrary.tsx`
- **Copy-Paste Templates:** [AI-Build-Instructions.md](./AI-Build-Instructions.md)
- **Complete Specs:** [Design-Rules.md](./Design-Rules.md)

### Quick Access Components
- Primary & Outlined Buttons
- Category Badges
- Content Cards (Standard & Interactive)
- Icon Containers (Circular & Square)
- Stats/Metrics Display
- Form Elements
- Navigation Bars
- Grid Systems

---

## 🖼️ Image Handling

**Critical Rules:**
1. **ALWAYS** use `ImageWithFallback` component (never `<img>` tag)
2. **ALWAYS** apply filter: `saturate(0.85) contrast(1.1)` for muted aesthetic
3. Common aspect ratios: 16/9 (standard), 16/10 (hero), 4/3 (portraits)

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

---

## 🎬 Motion Guidelines

### Approved Transitions

```tsx
// Button hover
transition-all duration-300 hover:opacity-80

// Card hover
transition-all duration-300 hover:scale-[1.02]

// Link hover
transition-opacity duration-200 hover:opacity-70
```

**Rules:**
- Duration: 200-300ms MAXIMUM
- Opacity: 0.7-0.8 for subtle hovers
- Scale: 1.02 (barely perceptible)
- **NO** spinning, bouncing, or aggressive animations

---

## 🚫 Common Mistakes to Avoid

❌ **DON'T:**
- Hardcode hex colors (use CSS variables)
- Override typography with Tailwind classes
- Use large border-radius (>4px for containers)
- Add multiple gradients per page
- Use bright, saturated colors
- Center everything perfectly
- Add drop shadows or modern effects
- Use animations >300ms
- Forget the image filter
- Use `<img>` instead of `ImageWithFallback`

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

## ✅ Pre-Flight Checklist

Before shipping any design:

- [ ] Uses CSS variables (no hardcoded hex)
- [ ] Typography follows hierarchy
- [ ] Line-height: 1.7 for body copy
- [ ] py-20 md:py-32 spacing
- [ ] Border-radius: 2px (buttons), 4px (cards)
- [ ] Max ONE gradient per page
- [ ] Images use ImageWithFallback
- [ ] Images have muted filter
- [ ] Transitions: 200-300ms max
- [ ] Responsive at md: (768px)
- [ ] No drop shadows
- [ ] Asymmetric layout

---

## 📱 Accessing the Design Pattern Library

### In the Application
1. Navigate to any layout in the presentation
2. Look for the footer at the bottom of the navigation panel
3. Click "View Design Pattern Library"
4. Explore live, interactive examples of every component

### In Code
- Component file: `/components/DesignPatternLibrary.tsx`
- View all patterns with working code examples
- Copy-paste component code directly

---

## 🔗 Additional Resources

### In This Repository
- `/styles/globals.css` - CSS custom properties and default styles
- `/components/LayoutOption[1-10].tsx` - Complete layout examples
- `/components/ui/` - ShadCN UI components (use sparingly)

### External References
- Playfair Display: [Google Fonts](https://fonts.google.com/specimen/Playfair+Display)
- Inter: [Google Fonts](https://fonts.google.com/specimen/Inter)
- Lucide React Icons: [lucide.dev](https://lucide.dev)

---

## 📞 Support & Questions

**For Design Questions:**
1. Check [Design-Rules.md](./Design-Rules.md) first
2. Reference [Design Pattern Library](../components/DesignPatternLibrary.tsx) for examples
3. Review existing layouts in `/components/LayoutOption[1-10].tsx`

**For AI Build Questions:**
1. Start with [AI-Build-Instructions.md](./AI-Build-Instructions.md)
2. Use component templates from Design Pattern Library
3. Reference [Quick-Reference.md](./Quick-Reference.md) for specs

**For Quick Lookups:**
- [Quick-Reference.md](./Quick-Reference.md) - Fastest way to find measurements, colors, and code snippets

---

**Last Updated:** January 2025  
**Maintained By:** Origin Creative Group Design Team  
**Version:** 2.0

---

## Document Navigation

- **You Are Here:** Guidelines.md (Overview & Navigation)
- **Next Steps:** Choose based on your needs:
  - Need quick specs? → [Quick-Reference.md](./Quick-Reference.md)
  - Need complete rules? → [Design-Rules.md](./Design-Rules.md)
  - Building with AI? → [AI-Build-Instructions.md](./AI-Build-Instructions.md)
  - Want live examples? → [Design Pattern Library](../components/DesignPatternLibrary.tsx)
