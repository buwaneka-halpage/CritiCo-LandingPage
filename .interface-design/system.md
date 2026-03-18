# CritiCo — Interface Design System

## Product Context

**Product:** CritiCo — bespoke software agency landing page
**Visitor:** Technical founder, CTO, or engineering lead evaluating a software partner
**Their job:** Decide if this team can handle serious, high-stakes engineering work
**Emotional register:** Cold confidence — a trading floor at night. Dense, precise, no fluff.

---

## Color System

### Foundation
| Token | Value | Role |
|---|---|---|
| `--color--dark` | `#0a0d14` | Page background, deepest surface |
| `--color--gray-1` | `#161920` | Card fill, elevated surface |
| `--color--gray-2` | `#1c1f26` | Border, hover state, subtle divider |
| `--color--gray-6` | `#1c2331` | Section dividers, hairlines |

### Text
| Token | Value | Role |
|---|---|---|
| White | `#ffffff` | Primary headings |
| `--color--gray-3` | `#858b94` | Body copy, labels, secondary text |
| `--color--gray-4` | `#bdbbbb` | Tertiary text |
| `--color--gray-5` | `#edf0f5` | Light emphasis text |

### Accent Gradient
Single gradient across all interactive/branded elements:
```css
linear-gradient(90deg, #60a5fa, #a855f7 35%, #ec4899 70%, #ec4899)
```
- `#60a5fa` — Electric blue (start)
- `#a855f7` — Purple (mid)
- `#ec4899` — Hot pink/rose (end)

Used as: button border wrapper, logo ring, blur glows, selection highlight, horizontal divider accents.

**Never** use these colors flat — always as gradient stops or with blur/glow treatment.

### Heading Gradient
```css
background: linear-gradient(to bottom, #ffffff, #858b94);
```
Section headings fade white-to-gray vertically, adding depth without color noise.

---

## Typography

### Typefaces
| Face | Use |
|---|---|
| **Inter** | All body copy, nav links, descriptions, card text |
| **JetBrains Mono** | Pre-titles, mono labels, button text (uppercase), subtext chrome |

### Scale & Patterns
| Pattern | Size | Treatment |
|---|---|---|
| Hero heading | 42px / 62px (responsive) | `font-medium`, `tracking-[-0.02em]` |
| Section heading | 36px / 48px | `font-medium`, gradient text |
| Body large | 18px / 20px | `text-[#858b94]`, `leading-[1.4]` |
| Body base | 14–16px | `text-[#858b94]` |
| Pre-title | 10–11px | Mono, uppercase, `tracking-[0.3em]`, `#858b94` |
| Subtext chrome | 9px | Mono, uppercase, `tracking-widest`, `opacity-60` |

### Pre-title Pattern
```tsx
<div className="flex items-center gap-4">
  <div className="w-12 h-[1px] bg-[#1c1f26]"></div>
  <span className="font-mono text-[11px] tracking-[0.3em] text-[#858b94] uppercase">SECTION LABEL</span>
  <div className="w-12 h-[1px] bg-[#1c1f26]"></div>
</div>
```

---

## Depth & Surfaces

### Elevation Scale
1. **Page** — `#0a0d14` (base)
2. **Card fill** — `linear-gradient(180deg, #1c1f26, #0a0d14)` or `#161920`
3. **Stacked ring** — `shadow-[0_0_0_6px_#161920]` creates layered depth without shadows
4. **Floating glass** — `backdrop-blur-xl` + `border border-white/10` + `bg-[#11141b]/95`

### Border Treatment
- Standard: `1px solid #1c1f26` or `border border-white/10`
- Cards use `border-white/5` to `border-white/10` depending on prominence
- No hard shadows — use stacked rings or gradient fills for depth

---

## Component Patterns

### Button Primary (Gradient Border)
```tsx
<a className="p-[2px] rounded-[10px] bg-gradient-to-r from-[#60a5fa] via-[#a855f7] to-[#ec4899]">
  <div className="bg-[#0a0d14] rounded-[8px] px-8 py-4 flex items-center gap-3">
    {/* content */}
  </div>
</a>
```
1px gradient wrapper + dark fill. The gradient *is* the border.

### Button Small (Mono)
```tsx
<button className="button-primary button-small button-small-2">
  <div className="button-primary-inner">
    <span className="button-text font-mono uppercase tracking-[0.05em]">Label</span>
  </div>
</button>
```

### Tech/Tag Pill
```tsx
<div className="tech-stack-item">
  {/* gradient(180deg, #1c1f26, #0a0d14), border #1c1f26, rounded-[30px] */}
</div>
```

### Card with Glow Overlay
For centered CTA over blurred background:
```tsx
<div className="relative">
  <div className="absolute inset-0 bg-gradient-to-r from-[#60a5fa] via-[#a855f7] to-[#ec4899] blur-[25px]"></div>
  <div className="relative z-10">{/* content */}</div>
</div>
```

---

## Spacing

| Token | Value |
|---|---|
| `--gap--gap-3` | 10px |
| `--gap--gap-5` | 20px |
| `--gap--gap-8` | 40px |
| `--gap--gap-11` | 80px |
| `--gap--gap-14` | 120px |

- Container: `max-w-[1260px]`, `px-6` (mobile: `px-5`)
- Section top: `padding-top: 120px`
- Section title spacing: `padding-bottom: 40px` (default), `80px` (prominent)

---

## Border Radius

| Use | Value |
|---|---|
| Cards, large containers | `1.875rem` (30px) |
| Buttons | `0.625rem` (10px) |
| Nav inner | `0.625rem` (10px) |
| Pill/tag | `100px` (full) |
| Mobile menu | `20px` |

---

## Animation

**Library:** Framer Motion

**Standard ease:** `[0.22, 1, 0.36, 1]` — spring-like, feels physical

**Enter patterns:**
```tsx
// Fade + rise (most common)
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}

// Scale in (hero logo)
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
```

**Hover micro-interactions:**
- Scale: `hover:scale-105 active:scale-95`
- Logo ring: `translateY(-10px)` on hover, 0.5s cubic-bezier(.455,.03,.515,.955)
- Nav links: `bg-[#1c1f26]` fill + white text

**Marquee (tech stack):**
```css
animation: marquee 30s linear infinite;
/* translateX(0) → translateX(-50%) */
```

---

## Navbar (Unique Pattern)

Fixed at **bottom** of viewport — spatial inversion that keeps nav visible without blocking hero. The logo floats above the nav bar via `position: absolute; bottom: 10%; left: 50%; transform: translateX(-50%)` with a gradient ring that hovers upward on interact.

---

## Background Treatment

- **Page glow:** `radial-gradient(circle at 50% -10%, rgba(96,165,250,0.08), transparent 80%)` — fixed, subtle blue corona at top
- **Hero video:** 60% opacity, overlaid with `gradient-to-b from-[#0a0d14] via-transparent to-[#0a0d14]` + `bg-[#0a0d14]/40`
- **Pattern SVG:** `./assets/bg_pattern.svg` at 30% opacity for section texture

---

## Framework & Stack

- **Preact** (React-compatible, `preact/hooks`)
- **Tailwind CSS v4** (`@import "tailwindcss"`, `@theme` block)
- **Framer Motion** for animation
- **Lucide React** for icons
- **Vite** build tool
- **TypeScript**
