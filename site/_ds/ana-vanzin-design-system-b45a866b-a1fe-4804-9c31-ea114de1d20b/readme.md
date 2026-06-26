# Ana Vanzin — Design System

Identity and design system for **anavanzin.com** — the personal site of Ana Vanzin,
attorney and PhD candidate in legal history and iconography (PPGD/UFSC).
Her doctoral thesis **ICONOCRACY** studies feminine allegories of law: Justitia,
the Republic-as-woman. The site is a scholar's site: thesis, publications, research
group (Ius Gentium), legal practice, contact.

## Concept

The identity descends from the 1494 *Narrenschiff* woodcut in which a fool blindfolds
Justitia — the earliest blindfolded Justice, born as satire. The woodcut is **never
reproduced**; its material logic is translated instead: **incunabulum ink on laid
paper, with a single rubric-red accent** (the red of rubrication in early printed
books). The whole site reads like a beautifully set early printed page on a modern
screen: generous margins, one strong text column, hairline column rules.

**Hard constraints (never break):** no cards, no shadows, no gradients, no rounded
corners, no stock imagery, no AI-illustration look, no marble columns, no gavels,
no justice clichés beyond the inherited marks.

## Sources

- `uploads/` — original identity SVGs and `preview.html` (identity sketch sheet),
  provided by the client. Canonical copies live in `assets/`.
- Brief: pasted project description (June 2026). No Figma or codebase exists; this
  system is the source of truth.

## Tokens (exact)

| token  | value     | use |
|--------|-----------|-----|
| ink    | `#211B16` | text, rules, primary marks |
| paper  | `#F2EAD9` | background |
| rubric | `#9B2C1C` | the ONE accent: links, blindfold/balance elements, small-caps labels — never large fills |
| gold   | `#9C7C3D` | secondary accent (`--accent-2`): ornament, frames, retro-OS chrome — from the pixel-academic / desktop variant |

Type: **Cormorant Garamond** (500/600) for display and headings; **Hanken Grotesk**
(400/600) for body and UI; tracked-out uppercase Garamond at small sizes for eyebrows
and labels. No other families.

## Marks (inherited — do not redesign)

| file | mark | use |
|------|------|-----|
| `assets/monogram-av.svg` | A+V sharing middle stroke, standing on a balance beam with red pans | general mark on paper |
| `assets/monogram-av-inverse.svg` | same, paper-on-ink | dark contexts |
| `assets/sun-seal.svg` | **primary avatar/favicon** — AV balance as a sun, gold rays, double ring; joyful, scales to 20px | menu-bar avatar, favicon |
| `assets/seal.svg` | original monogram in double ring with woodcut radial ticks | alternate / print device |
| `assets/justitia-mark.svg` | crowned head, red blindfold tied at right, scales for body | sparing section device |
| `assets/lockup.svg` | monogram · thin rule · "ana vanzin" + ANAVANZIN.COM in rubric | site header |
| `assets/pixel-justitia.png` | 16-bit Justitia, blindfold + scales + sword, keyed onto transparency | pixel-academic variant: emblem, icons, wallpaper |
| `assets/pixel-justitia-sky.png` | the same sprite on its original pixel sky | full "plate" / image-viewer |
| `assets/laurel.svg` | gold laurel sprig (generated) | pixel-academic emblem ornament |

## Signature element

One memorable moment only: **the hero**. The name set very large in Garamond, with a
single thin rubric line crossing the page at blindfold height over the letters —
quiet, almost typographic, never illustrated. Everything else stays disciplined.
Its page-load reveal (line draws in once, left to right) is the only animation
permitted; it must respect `prefers-reduced-motion`.

## CONTENT FUNDAMENTALS

- **Languages:** bilingual-ready. PT primary, EN secondary. Section labels in PT:
  `TESE · PUBLICAÇÕES · IUS GENTIUM · ADVOCACIA · CONTATO`.
- **Voice:** precise, unadorned, scholarly. Third person or first person singular,
  never "we". No marketing superlatives, no exclamation marks, no emoji — ever.
- **Casing:** display text lowercase ("ana vanzin"); eyebrows/labels tracked-out
  UPPERCASE Garamond; body in sentence case. Titles of works in italic Garamond
  (*Iconocracia*), never quotation marks for titles.
- **References:** footnote style — author, year, page (`Brant, 1494, fol. 22v`) —
  never decorative pull-quotes. Citations may sit in marginalia or as superscript
  footnote links in rubric.
- **Examples of register:**
  - "Tese de doutoramento · PPGD/UFSC."
  - "A primeira Justitia vendada não nasceu como virtude — nasceu como sátira."
  - Contact: "ana@anavanzin.com" plainly, no "Get in touch!".

## VISUAL FOUNDATIONS

- **Color:** three values only (ink/paper/rubric). Tints of ink (70/50/30/15%) are
  derived via `color-mix` for muted text and hairlines; no new hues, no opacity layers.
  Rubric is never used as a large fill — only lines, links, labels, the blindfold.
  Dark surfaces (inverse footer) are solid ink with paper text.
- **Type:** Cormorant Garamond 500/600 display; Hanken Grotesk 400/600 body/UI.
  Eyebrows: Garamond 600, uppercase, `letter-spacing: 0.22em`, 13px, usually rubric.
  Hero scale `clamp(4rem, 11vw, 9rem)`. Body measure ≤ 62ch, line-height 1.62.
- **Layout:** single strong text column (`--column-max: 720px`) inside a page of
  `--page-max: 1080px`; generous margins (`--page-pad`). Marginalia (dates, footnote
  numbers) may sit left of the column on wide screens, collapsing inline on mobile.
  Single-column logic preserved down to mobile.
- **Backgrounds:** flat paper `#F2EAD9` everywhere. No textures, no images, no
  patterns, no gradients. Inverse ink blocks only for the footer or a rare aside.
- **Rules & borders:** the structural vocabulary. 1px hairline `--rule-hairline`
  (30% ink) between entries and as column rules; 1–2px solid ink for structural
  separations (header bottom, table head); 1px rubric only for the blindfold line
  and active states. Square corners everywhere (`--radius: 0`).
- **Cards:** there are none. Lists separate entries with hairline top rules.
- **Shadows:** none (`--shadow: none`). Depth is expressed by rules and spacing.
- **Hover:** links darken toward ink (`--accent-hover`); nav items gain a 1px rubric
  underline; never opacity fades, never background fills.
- **Press/active:** current nav item holds the rubric underline; buttons invert
  (ink fill, paper text) on press. No scale transforms.
- **Focus:** 1px solid rubric outline, 3px offset.
- **Motion:** one restrained page-load reveal of the rubric line (scaleX 0→1,
  900ms, `cubic-bezier(0.22,1,0.36,1)`); UI transitions 150ms color-only.
  Everything gated on `prefers-reduced-motion`.
- **Transparency/blur:** never.
- **Imagery:** none by default. If a publication or archival image is required it is
  shown as-is with a 1px ink border and a footnote-style caption — no filters.
- **Selection:** rubric background, paper text.

## ICONOGRAPHY

- **No icon font, no icon library.** The brand's "icons" are its four inherited
  marks (`assets/`) plus typographic devices.
- **Typographic devices instead of icons:** the interpunct `·` separates label items;
  `→` (U+2192) marks outbound links; superscript numerals mark footnotes; `¶` and `❧`
  may appear as rare printer's flourishes in the footer. No emoji, ever.
- **The Justitia mark** is the only pictorial device used inside content — sparingly,
  one per page at most, as a section device (e.g. beside the thesis section).
- **The seal** is the avatar/favicon. The lockup is the header.
- If a UI affordance truly needs an icon (e.g. external-link, menu), draw nothing:
  use the typographic devices above or a plain word ("Menu").

## Index

- `styles.css` — global entry (imports everything below)
- `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` · `tokens/base.css`
- `assets/` — the five canonical marks (SVG)
- `guidelines/` — foundation specimen cards (Design System tab)
- `components/core/` — Eyebrow, RubricLink, Button
- `components/content/` — SectionRule, PublicationEntry, FootnoteRef + Footnotes
- `components/site/` — NavBar, BlindfoldHero, SiteFooter
- `components/desktop/` — Window (System-7 chrome), DesktopIcon, Dock (reusable
  retro-OS primitives behind the desktop kit). See each `*.prompt.md`
- `ui_kits/desktop/` — **the primary face of anavanzin.com**: "ana vanzin desktop",
  a retro-OS interface (boot/entry splash, menu bar, draggable windows with
  System-7 hairline title bars, close + minimize, a bottom dock of open windows,
  pixel-Justitia wallpaper and icons; touch-friendly via pointer events). Windows:
  sobre, tese, publicações, ius gentium, currículo, contato, justitia.png.
  `index.html` interactive; `Desktop.jsx` + `WindowContents.jsx` + `icons.jsx`.
- `ui_kits/website/` — classic single-column anavanzin.com (alternate / reduced-motion reading)
- `brand/pixel-emblem.html` — pixel-academic identity study (16-bit Justitia,
  oval frame, gold laurel, cream): emblem, lockups, thesis cover, poster, social card, seal.
- `hifi/` — high-fidelity exploration of four chosen directions (real tokens +
  assets): `Janela-Heroi.html` (desktop, hero window) · `Mesa-Espacial.html`
  (desktop, spatial desk + minimap) · `Mural-Lilas.html` (notes, lilac card wall)
  · `README-Repo.html` (dev, repo README). `hifi/index.html` indexes all four.
- `wireframes/Desktop Directions.html` — low-fi wireframe sheet (tabs + Tweaks:
  fidelity / wonkiness / density) the hi-fi screens grew from.
- `SKILL.md` — agent skill entry point

## Variants

The core identity is the incunabulum system (ink / paper / rubric). Two developed
variants share the same tokens and add the **gold** secondary accent:
- **Pixel-academic** (`brand/pixel-emblem.html`) — the 16-bit Justitia on cream
  with gold oval frame + laurel; serif title. For covers, posters, social.
- **Desktop** (`ui_kits/desktop/`) — **the main site**: a retro-OS reading where
  System-7 window chrome is built from the system's hairline rules, so it stays
  on-brand. The classic single-column site remains as an alternate.

## Caveats

- Webfonts load from Google Fonts (`tokens/typography.css` `@import`). No font
  binaries are bundled; if offline use is needed, supply licensed `.woff2` files.
