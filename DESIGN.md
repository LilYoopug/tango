---
name: Tamago
description: Belajar bahasa Jepang dari nol — halaman arahan untuk pemula Indonesia.
colors:
  carbon: "#000000"
  paper-white: "#ffffff"
  sky-wash: "#dceeff"
  concrete-gray: "#cccccc"
  soft-mist: "#e9e9e9"
  electric-blue: "#4da2ff"
  mint-pop: "#55db9c"
  lavender: "#e9ccff"
  ember: "#fb4903"
  ember-ink: "#c23700"
  sunburst: "#ffd731"
  voltage-violet: "#5c4ade"
  blue-deep: "#2c6fc4"
  blue-light: "#9ecbff"
typography:
  display:
    fontFamily: "Bowlby, NotoJP, Arial Black, sans-serif"
    fontSize: "clamp(38px, 8.4vw, 104px)"
    fontWeight: 400
    lineHeight: 0.78
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "Bowlby, NotoJP, Arial Black, sans-serif"
    fontSize: "clamp(44px, 6vw, 64px)"
    fontWeight: 400
    lineHeight: 0.78
    letterSpacing: "-0.02em"
  kana:
    fontFamily: "Dela, NotoJP, Bowlby, sans-serif"
    fontSize: "clamp(30px, 7.6vw, 104px)"
    fontWeight: 400
    lineHeight: 0.76
  subheading:
    fontFamily: "InterV, NotoJP, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  body:
    fontFamily: "InterV, NotoJP, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  label:
    fontFamily: "InterV, NotoJP, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.56
    letterSpacing: "0.14em"
rounded:
  chip: "16px"
  card: "20px"
  body: "30px"
  card-elevated: "40px"
  pill: "1600px"
spacing:
  "4": "4px"
  "8": "8px"
  "12": "12px"
  "16": "16px"
  "20": "20px"
  "24": "24px"
  "32": "32px"
  "40": "40px"
  "48": "48px"
  "64": "64px"
  "80": "80px"
  "128": "128px"
components:
  button-primary:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.voltage-violet}"
    textColor: "{colors.paper-white}"
  button-ghost:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.pill}"
    padding: "11px 20px"
  nav-link:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
  nav-link-hover:
    backgroundColor: "{colors.sunburst}"
    textColor: "{colors.carbon}"
  card:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.card}"
    padding: "{spacing.24}"
  kana-chip:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.card}"
    size: "clamp(58px, 12.4vw, 168px)"
  band-sky:
    backgroundColor: "{colors.sky-wash}"
    textColor: "{colors.carbon}"
  band-paper:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.carbon}"
  band-concrete:
    backgroundColor: "{colors.concrete-gray}"
    textColor: "{colors.carbon}"
---

# Design System: Tamago

## Overview

**Creative North Star: "Dinding Catatan" (the wall of notes)**

Tamago's landing page is a wall you stick things to. Its world is the Slush brief the client pinned: pastel paper grounds, hand-cut stickers with black outlines, and one grainy electric-blue inflatable ribbon arcing behind everything. Nothing is photographed, nothing is glassy, nothing floats on a shadow. The page reads as a physical collage pinned to a pale wall, and the subject — a beginner accumulating Japanese characters — arrives as notes, chips, and bars that fill in.

The system's engine is **contrast by band, not by elevation**. Whole regions own their ground color and alternate down the scroll: pale sky blue, then paper white, then concrete gray. There are no shadows anywhere; depth comes from the black hairline outline and from the ribbon's concentric flat strokes. Type is sculptural: the display face is set enormous with near-zero leading so headings behave like objects rather than sentences, while Japanese script appears in its own face at whatever scale the content deserves.

**Key Characteristics:**
- Pastel paper bands that alternate `#dceeff` → `#ffffff` → `#cccccc`
- Hand-cut stickers: flat fills, 1px `#000000` outlines, 16–40px radii, pills at 1600px
- Zero gradients, zero box-shadows; the blue tube carries all dimensional weight
- Display type crushed to 0.76–0.80 leading, set as blocks
- Every number pinned to the element it describes, in tabular figures

## Colors

Six saturated sticker colors share the page as one palette, plus the paper grounds they sit on. No color is "the" accent.

### Primary
- **Electric Blue** (`#4da2ff`): the brand's decorative engine. It fills the ribbon, washes card surfaces, and marks the kana chips. **It is never a CTA fill and never a link color** — the pinned brief forbids it, so action lives in carbon black.
- **Carbon** (`#000000`): primary text, every border, and the filled CTA. The black hairline is what makes the collage read as hand-cut.

### Secondary
- **Mint Pop** (`#55db9c`): a sticker wash for decorative bands and the marked-kana state. **Never a success state** — the brief reserves it as an accent, not a semantic.
- **Lavender** (`#e9ccff`): the gentlest wash; accent cards and paid-tier tags.
- **Ember** (`#fb4903`): the hottest hit, for stickers and the `お` chip. Text use must darken to **Ember Ink** (`#c23700`), because the pinned ember only reaches 3.5:1 on white.
- **Sunburst** (`#ffd731`): highlight fills, hover on nav pills, and the kanji-frequency marks. Never a text background.
- **Voltage Violet** (`#5c4ade`): deep accent for the primary button's hover, episode numbers, and the N1 bar.

### Neutral
- **Paper White** (`#ffffff`): page canvas, card surfaces, outlined button fills.
- **Sky Wash** (`#dceeff`): hero ground, JLPT band, closing band.
- **Concrete Gray** (`#cccccc`): the neutral interlude band.
- **Soft Mist** (`#e9e9e9`): track fills and disabled tints.

### Named Rules
**The Decorative Blue Rule.** `#4da2ff` may fill, wash, and stroke — it may never be a CTA fill or a link color. Actions are carbon black or outlined black.

**The Ember Text Rule.** `#fb4903` is for fills and stickers only. Any text on a light ground uses Ember Ink `#c23700` to clear 4.5:1.

## Typography

**Display Font:** Bowlby (with NotoJP, then Arial Black)
**Body Font:** Inter (self-hosted as InterV) with NotoJP for Japanese runs
**Japanese Fonts:** Dela Gothic One for kana and kanji display; Noto Sans JP (instanced 500/700, subset) for Japanese inside body copy

**Character:** A heavy, rounded, slightly cartoonish display face crushed into blocks, set against a clean workhorse UI face. Japanese script gets its own heavy gothic voice so the language looks like the subject, not an afterthought.

### Hierarchy
- **Display** (400, `clamp(38px, 8.4vw, 104px)`, 0.78): hero headline and section banners, always uppercase, always as stacked blocks.
- **Heading** (400, `clamp(44px, 6vw, 64px)`, 0.78): section titles.
- **Kana** (400, `clamp(30px, 7.6vw, 104px)`, 0.76): the kana chips and any large Japanese glyph.
- **Subheading** (500, 24px, 1.35): the one-line hook under display type.
- **Body** (500, 15px, 1.5, measure 46–62ch): explanation copy.
- **Label** (700, 12px, `0.14em`, uppercase): marquee, chips, stat labels, metadata.

### Named Rules
**The Crushed Display Rule.** Display and heading type never exceeds 0.80 line-height. The tight leading is what makes the words sculptural; loosening it turns the page back into a template.

**The Own-Script Rule.** Japanese is never rendered in a Latin fallback. Kana and kanji load from a self-hosted Japanese face; a tofu box is a build failure, not a graceful degradation.

## Layout

A single centered column capped at `--page-max: 1440px`, with `clamp(20px, 4vw, 48px)` gutters. Sections are full-bleed color bands with `clamp(48px, 7vw, 128px)` vertical padding, so the rhythm is set by the band change rather than by dividers. A sticky nav sits under a flush full-bleed marquee strip.

Content inside a band uses one of three shapes: a centered stack (hero, closing), a two-column split with the copy sticky on the left (kana, kanji payoff, podcast), or a stacked list of full-width rows (the JLPT ladder). Section internals sit on a 4px base scale with a 48px section pitch; the asymmetric sticker placement is deliberate and stays on that pitch.

At 900px the two-column splits collapse to one and the sticky column releases. At 620px the kana row tightens, two floating stickers drop out, and the footer stacks.

## Elevation & Depth

**There are no shadows in this system.** Not on cards, not on buttons, not on the nav — the pinned brief forbids box-shadow outright. Depth is conveyed by three things instead: the black 1px outline that lifts any element off its ground, the alternating full-bleed color bands that separate regions, and the electric-blue ribbon, whose tube is drawn as concentric flat strokes of decreasing width and increasing lightness. That concentric geometry is the only "shading" on the page, and it is flat fills rather than a gradient function.

## Shapes

Everything is soft. Cards take 20px, elevated cards and the episode container take 40px, small chips and sticker tags take 16px, and every nav link, button, tag, and progress rail is a 1600px pill. Corners never go below 16px.

The recurring silhouette is the **hand-cut sticker**: a rounded rectangle or blob with a hard black outline and a slight rotation, placed off the grid. The egg sticker is the one organic shape, drawn as an ellipse with a flatter bottom. The ribbon is the one large form, and it is a smooth tube, never a geometric mask.

## Components

### Buttons
- **Shape:** full pill (1600px), 1px `#000000` border on every variant.
- **Primary:** carbon fill, paper-white text, `12px 22px` (large variant `18px 36px` at 18px type). Used for "Mulai Belajar" and "Mulai dari あ".
- **Hover / Focus:** primary shifts to voltage violet; ghost shifts to sky wash. Focus is a 3px carbon outline at 3px offset, visible on every control.
- **Ghost:** paper fill, carbon text, `11px 20px`. The secondary action ("Lihat tangga JLPT").
- **Active:** 1px downward translate.

### Chips
- **Style:** paper or palette fill, 1px carbon border, 1600px pill, 700 weight at 12–13px.
- **State:** the kana chips are square-ish cards (20px radius) that mark themselves mint when clicked; the fact pills are static labels.

### Cards / Containers
- **Corner Style:** 20px, or 40px for the level cards and episode list.
- **Background:** paper white on colored bands; a palette wash where the card is itself a sticker (the kit grid cycles paper, lavender, mint, sunburst, sky).
- **Shadow Strategy:** none — see Elevation & Depth.
- **Border:** 1px solid `#000000` on every card without exception.
- **Internal Padding:** 24px.

### Inputs / Fields
None. The page has no form; the kana grid is the only interactive content surface, and it behaves as a `role="button"` group with `aria-pressed`.

### Navigation
Sticky paper bar under the marquee. Mascot avatar badge in a 46px circle at left, pill links centered, filled carbon CTA at right. Links are 13px/700 with `0.03em` tracking, hover fills sunburst. Below 900px the pill links hide and the CTA stays.

### Kana Grid (signature component)
A 5-column gojūon grid where every cell is a real kana and empty positions are genuinely empty. Cells are 20px-radius paper cards with 1px carbon borders; clicking marks a cell mint and updates a live counter. This is the page's one working interaction and it is the product's own subject matter, not a decorative widget.

### JLPT Ladder (signature component)
Five full-width rungs, each pairing a 40px-radius level card with a bar card. The bar is a pill rail holding a flat fill whose width is the cumulative vocabulary share, with the percentage printed inside. Every number on the rung is a real figure from the verified set, and the "new words" figure is the delta from the level below.

## Do's and Don'ts

### Do:
- **Do** put a 1px solid `#000000` border on every interactive element and every card. The hand-cut outline is the visual language.
- **Do** alternate section grounds `#dceeff` → `#ffffff` → `#cccccc`; the band change is the only divider the page needs.
- **Do** set display and heading type at 0.76–0.80 line-height, uppercase, as blocks.
- **Do** use the six sticker colors as one shared palette across a screen; never crown one as "the" accent.
- **Do** pin every number to the element it describes, in tabular figures.
- **Do** keep the page at 1440px max width and never below 1280px.

### Don't:
- **Don't** use gradients anywhere. The ribbon's concentric strokes carry the dimensional weight.
- **Don't** use box-shadow on any surface; elevation is color bands plus black outlines.
- **Don't** use `#4da2ff` as a CTA fill or a link color — it is decorative only.
- **Don't** use `#55db9c` as a success state; it is a sticker accent.
- **Don't** round cards below 16px or buttons/tags below 1600px.
- **Don't** loosen display leading above 0.85; the crushed leading is the identity.
- **Don't** render Japanese in a Latin fallback — self-host the Japanese faces.
- **Don't** invent commercial claims. No learner counts, testimonials, ratings, or prices exist and none may be added.
