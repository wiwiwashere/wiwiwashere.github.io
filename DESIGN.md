---
name: "Winnie Lin Personal Portfolio"
description: "A celestial scrapbook archive for software, AI, growth, music, and life fragments."
colors:
  ink: "#1f2230"
  navy: "#2f445a"
  paper: "#f9f3e9"
  paper-strong: "#fffdf8"
  beige: "#f5efeb"
  pale-pink: "#ffe1e6"
  azalea: "#f7c9d4"
  blush: "#b85f7c"
  sky-blue: "#c8d9e6"
  soft-line: "rgba(47, 68, 90, 0.16)"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(3.5rem, 7vw, 7.8rem)"
    fontWeight: 500
    lineHeight: 0.96
    letterSpacing: "0.02em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(1.9rem, 3.4vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.06
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "1.8rem"
    fontWeight: 500
    lineHeight: 1.1
  body:
    fontFamily: "Lato, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 300
    lineHeight: 1.6
  label:
    fontFamily: "Lato, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.14em"
rounded:
  none: "0"
  soft: "0"
  pill: "999px"
spacing:
  xs: "0.45rem"
  sm: "0.72rem"
  md: "1rem"
  lg: "1.25rem"
  xl: "1.7rem"
  section: "clamp(3.2rem, 8vw, 6.8rem)"
components:
  button-primary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.72rem 0.9rem"
  button-secondary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.72rem 0.9rem"
  card-vellum:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.35rem"
  chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy}"
    rounded: "{rounded.none}"
    padding: "0.28rem 0.62rem"
---

# Design System: Winnie Lin Personal Portfolio

## Overview

**Creative North Star: "The Celestial Scrapbook Archive"**

The portfolio should feel like a personal archive made from paper, starlight, soft blue ink, and small collected fragments. It is not a corporate resume shell. It is a calm, tactile, slightly dreamy interface where software projects, experience, life notes, music, and visitor footprints all belong to the same handmade system.

The design mode is **Experience**: the visitor is meant to enter Winnie's world, then browse the artifacts. The UI should support the work without becoming sterile. The paper texture, translucent cards, botanical/celestial overlays, butterfly cursor, music tab, and guestbook constellation are signature elements, but they must stay quiet enough that the project content remains readable.

**Key Characteristics:**
- Soft paper base with blue, pale pink, beige, and ink accents.
- Editorial serif display type paired with light sans-serif body text.
- Thin ruled borders, rectangular cards, and translucent vellum surfaces.
- Archive language: counters, section markers, tiny labels, and paper-note side cards.
- Celestial motion used sparingly: stars, particles, butterfly cursor, meteor-like details.

## Colors

The palette is a muted scrapbook system: navy ink grounds the interface, pale paper keeps it open, and pink/sky-blue accents bring softness and memory.

### Primary
- **Ink Navy**: Used for headings, body copy, nav text, card titles, and selected controls. It gives the site enough seriousness to hold technical work.
- **Archive Blush**: Used for links, stamps, small stars, status accents, selected stamp states, and emotional emphasis.

### Secondary
- **Sky Blue Wash**: Used in paper gradients, media placeholders, particle details, and cool atmospheric backgrounds.
- **Azalea Pink**: Used in soft card gradients, hover borders, paper overlays, and scrapbook collage fragments.

### Neutral
- **Warm Paper**: The main page atmosphere and card material.
- **Bright Paper**: Used for cleaner hero and page backgrounds.
- **Beige Vellum**: Used for side-note cards, fields, chips, and translucent surfaces.
- **Soft Line**: Thin borders and dividers. Lines should feel drawn, not heavy.

### Named Rules

**The Ink First Rule.** Text stays ink/navy before it becomes decorative. Pink and blue support the archive; they do not carry primary readability.

**The Soft Accent Rule.** Pink should appear as a signal, not a flood. It is strongest on links, stamps, selected states, and small marks.

## Typography

**Display Font:** Playfair Display with Georgia fallback.  
**Body Font:** Lato with generic sans-serif fallback.  
**Label Font:** Lato by default, with `--font-label` available for quick switching.

**Character:** The type pairing should feel editorial but approachable: large serif headlines provide ceremony, while light sans-serif body text keeps project details readable. Labels use extra spacing and small sizes to preserve the archive/catalog feeling.

### Hierarchy
- **Display** (500, `clamp(3.5rem, 7vw, 7.8rem)`, tight line-height): Page heroes and the homepage name.
- **Headline** (500, `clamp(1.9rem, 3.4vw, 3rem)`): Major archive cards and experience titles.
- **Title** (500, `1.8rem`): Project cards, contact cards, footprint previews, and section-level cards.
- **Body** (300, `0.88rem`, `1.6` line-height): Descriptions, project body copy, diary notes, and form helper text.
- **Label** (700, `0.68rem-0.78rem`, wide tracking): Nav, counters, archive kickers, chips, metadata, and small controls.

### Named Rules

**The Label Is Evidence Rule.** Small uppercase labels should feel like catalog metadata, not button shouting. Keep them tiny, spaced, and restrained.

**The Serif Ceremony Rule.** Use display serif for names, titles, and emotional moments. Avoid using it for dense technical paragraphs.

## Layout

The site uses full-width page containers with responsive side padding: `clamp(1.25rem, 4.2vw, 5rem)`, tightening to `0.9rem` on mobile. Page heroes are unframed and spacious, matching the homepage rather than boxed marketing sections.

Archive pages follow a repeatable rhythm: fixed top nav, large unboxed hero, optional side-note count card, section heading with a star marker, then grid-based content. Cards use consistent gaps around `1rem-1.25rem`, with responsive grids collapsing from multi-column desktop layouts to single-column mobile layouts.

Home is a poster-like composition: oversized left identity, selected project cards, a music note card, a life fragment card, and footer metadata. Detail pages use a bottom media carousel so the written case-study structure remains calm and archival.

## Elevation & Depth

Depth is created mostly through translucency, borders, layered gradients, and paper texture. Shadows are subtle and ambient, used for hover lift, floating music, and vellum surfaces rather than heavy physical cards.

### Shadow Vocabulary
- **Soft Ambient Lift** (`0 12px 28px rgba(30,43,69,0.12)`): Small fixed controls and button surfaces.
- **Card Hover Lift** (`0 16px 34px rgba(47, 68, 90, 0.08)`): Interactive footprint notes and hover states.
- **Inset Vellum Edge** (`inset 0 0 0 1px rgba(255,255,255,0.26)`): Paper cards, panels, and archive containers.
- **Particle Glow** (`0 0 18px rgba(245,169,199,0.48)`): Decorative particles and celestial effects only.

### Named Rules

**The Vellum Before Shadow Rule.** Prefer transparent paper, fine borders, overlays, and inset edges before adding drop shadows.

## Shapes

The dominant shape language is rectangular, lightly editorial, and paper-like. Cards, panels, fields, filters, and buttons use thin straight borders rather than soft rounded app pills. True pills are reserved for particle dots or tiny circular decorative details.

Borders are typically `1px solid rgba(30, 43, 69, 0.18-0.28)`. The visual system should avoid overly rounded cards; the scrapbook feeling comes from paper edges, not app-store roundness.

## Components

### Buttons
- **Shape:** Rectangular, thin-bordered, no visible radius.
- **Primary:** Pale vellum gradient with ink text and subtle ambient shadow.
- **Secondary:** Dark ink or stronger accent when contrast is needed.
- **Hover / Focus:** Border shifts toward blush; movement should be small (`translateY(-2px/-3px)`).

### Chips
- **Style:** Small rectangular tags with pale paper background, thin ink border, and label typography.
- **Use:** Tech stack, filters, statuses, and compact metadata.
- **State:** Selected filters may invert into ink/navy; inactive chips stay pale.

### Cards / Containers
- **Corner Style:** Rectangular paper panels.
- **Background:** Vellum gradient mixing paper, pale pink, and sky blue.
- **Border:** Thin ink-blue border at low opacity.
- **Internal Padding:** Around `1rem-1.35rem`; larger hero/media cards may use responsive clamp padding.
- **Overlay:** Optional botanical, butterfly, constellation, or line-art overlay at very low opacity.

### Inputs / Fields
- **Style:** Thin rectangular border, translucent paper fill, label above the field.
- **Focus:** Border shifts to blush. Avoid loud focus glow unless accessibility requires it.
- **Text:** Keep user input readable; form labels remain small and spaced.

### Navigation
- **Style:** Fixed top paper strip with thin bottom rule, lowercase label navigation, and a compact `WL` wordmark.
- **Desktop:** Center nav links with right-side contact/resume cluster.
- **Mobile:** Collapse to a menu button and single-column list.
- **Behavior:** Nav background should not be fully transparent over content.

### Archive Hero
- **Style:** Large unboxed serif headline with side-note paper count card.
- **Use:** Projects, growth, life, footprints, contact, and resume pages.
- **Rule:** Do not put the main hero headline inside a yellow/card block. Only the small count note receives the paper treatment.

### Project Media Carousel
- **Style:** Full-width vellum card at the bottom of detail pages.
- **Media:** Images and videos should auto-size without cropping when possible; YouTube/Drive embeds use a responsive frame.
- **Controls:** Minimal `prev` / `next` text controls plus dot indicators.

### Footprint Guestbook
- **Style:** Interactive constellation plus paper-note archive.
- **Stamps:** Star, heart, butterfly, and swirl glyphs are valid identity marks.
- **Behavior:** Hover/focus reveals active notes; newest footprint gets a brief glow.

### Floating Music Player
- **Style:** Small fixed paper tab that expands into a Spotify panel.
- **Behavior:** It stays mounted across pages so music can continue after a user starts playback.

### Butterfly Cursor
- **Style:** A small `ʚїɞ` glyph follows the pointer with soft delay.
- **Behavior:** It must never block clicks and must hide on coarse pointers/mobile.

## Do's and Don'ts

### Do:
- **Do** keep the site feeling like an archive: numbered labels, small section stars, paper cards, and restrained metadata.
- **Do** use real project media when available; fallback placeholders should look intentional, not empty.
- **Do** keep major page headers unboxed and spacious.
- **Do** use overlays at low opacity so they add atmosphere without hurting readability.
- **Do** preserve mobile simplification: hide heavy particles, collapse nav, and avoid crowded grids.

### Don't:
- **Don't** make cards heavily rounded or glossy.
- **Don't** turn the palette into one dominant hue; keep navy, paper, pink, and blue in balance.
- **Don't** use decorative particles or overlays where they compete with text.
- **Don't** put visible how-to explanations in the UI. The interface should feel discoverable, not instructional.
- **Don't** add heavy animation on mobile; motion should be graceful and lightweight.
