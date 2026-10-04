# Notes: Gulmohar Spaces website

## Reference inventory

- `GS website design 2.pdf`: newer Adobe Illustrator export dated 2026-09-28; one 1920px-wide, long desktop homepage artboard.
- `GS website design first draft.svg`: older 8758.58 x 11506.31 Illustrator artboard with editable text and 15 embedded raster images.
- The PDF shows: header/hero, intro statement, four-project grid, testimonial, process narrative with five stages, and a video preview. Its long white tail appears to be an export/artboard artifact.
- The current Next.js scaffold already contains an unrelated polished concept and will need to be replaced if “from scratch” means the supplied reference is authoritative.

## Visual system

- PDF palette: white, warm cream, sage/grey-green process panel, black text, and red hand-drawn annotations; small pieces of gold tape appear as collage accents.
- Overall direction: editorial/collage, spacious, delicate typography, asymmetrical project grid, small handwritten markup.
- The SVG declares related colors including `#f6f2e9`, `#aab09b`, `#a2b09b`, `#98b497`, `#c69c6d`, `#333`, and red accents.
- The boldness should remain concentrated in the red markup/collage language; the surrounding layout is quiet and disciplined.

### Proposed tokens

- Paper: `#ffffff`
- Warm canvas: `#f6f2e9`
- Process sage: `#aab09b`
- Ink: `#1e1e1c`
- Annotation red: `#ed1c24`
- Tape gold: `#c69c6d`
- Desktop content width: approximately 1560px inside the 1920px reference artboard.
- Mobile gutters: 20-24px; desktop gutters: 56-72px.
- Body copy should stay below roughly 70 characters per line.

### Proposed responsive structure

```text
Desktop                              Mobile
┌ logo ───── nav ─ start ┐          ┌ logo ─ menu ┐
│      full-width hero    │          │ tall hero   │
└─────────────────────────┘          └─────────────┘
       centered intro                  intro
┌────────┐      ┌────────┐           ┌───────────┐
│ project│      │ project│           │ project 1 │
└────────┘      └────────┘           └───────────┘
   ┌────────┐ ┌────────┐             ┌───────────┐
   │ project│ │ project│             │ project 2 │
   └────────┘ └────────┘             └───────────┘
 portrait + testimonial              portrait + quote
┌─────────────────────────┐          ┌───────────┐
│ process copy + 5 stages │          │ process   │
│       video card        │          │ stages    │
└─────────────────────────┘          │ video     │
                                     └───────────┘
```

- Desktop keeps the deliberately uneven project collage; mobile converts it to a calm single-column sequence while preserving alternating image widths.
- Red annotations remain static SVG/collage marks rather than generic scroll animations.
- Motion, if used, should be limited to the mobile menu and direct interaction feedback.

## Content and interactions

- Navigation in the PDF: About, Projects, Process, Start a project.
- The supplied design represents one long homepage; no separate interior page designs are present.
- Project cards still use `PROJECT NAMW` and `BANGALORE` placeholders.
- The testimonial contains intentionally rough/profane placeholder copy attributed to “priya c, founder.”
- A video block is visually represented, but no playable video URL or file is supplied.
- Recommended temporary behavior: render the video card as a non-playing preview with an accessible “Video coming soon” label unless a URL is provided.

## Fonts

- Exact families identified from the source files: Questrial, Public Sans Thin, and Hermaiona.
- Questrial and Public Sans are available as web fonts and can be used exactly without asking for local font files.
- Hermaiona is named as `Hermaiona.otf` in Illustrator metadata but is not embedded as a reusable font file. It appears tied to decorative/handwritten treatments in the draft; exact live-text reproduction would require the licensed `.otf`, otherwise the marks can be recreated as SVG strokes or approximated.

### Recommended font implementation

- Questrial: primary display and navigation family, loaded as a real web font.
- Public Sans Thin: editorial body/process copy where the PDF uses the very light grotesk; use variable Public Sans at weight 100 where browser rendering allows it.
- Hermaiona: avoid as live website text for now. Preserve the visual idea through extracted/drawn SVG marks so the missing font does not block the build.

## Asset mapping

- SVG image 02: exact PDF hero bedroom.
- SVG image 01: exact green bedroom used throughout the PDF project grid.
- SVG image 13: testimonial portrait.
- SVG image 03: living-room video preview.
- SVG images 04 and 12: gold tape collage elements.
- SVG image 15: YouTube play mark; better replaced by an accessible CSS/SVG play control.
- The remaining embedded images belong mainly to the earlier draft and should not override the newer PDF composition without user confirmation.

## Open questions

- Resolved: the contents of `data/` are authoritative. Implement the single long page shown, preserve its reference copy, and use the SVG's embedded assets where possible.

## Recommended answers

- Use the newer PDF as the source of truth and the SVG only for assets/metadata.
- Deliver one responsive scrolling homepage first because no secondary-page references exist.
- Replace obvious placeholder names and the profane testimonial with clearly temporary, polished copy while retaining the same approximate line lengths.

## Figma process revision

- Source: `data/Convert Illustrator Design to Figma/src/App.tsx` and `src/index.css`.
- Palette: sage `#aeb6a2`, ink `#293126`, copy `#464d42`, coral `#e84c48`.
- Type: DM Sans for the large editorial lead; Manrope for labels, steps, and supporting copy.
- Layout: centered section marker and oversized lead, then five ruled rows with the stage title on the left and explanation on the right; rows stack on mobile.
- Interaction: the process film is a real button that opens an accessible modal and closes with its button, backdrop, or Escape key.
- Deliberate constraint: only the process section is being ported; the rest of the established Gulmohar page remains unchanged.
