# Task Plan: Gulmohar Spaces website

## Goal
Rebuild the Gulmohar Spaces website from the supplied reference material, preserving the reference's visual language and content while using replaceable placeholder imagery where exact assets are unavailable.

## Phases
- [x] Phase 1: Inventory the project and reference assets
- [x] Phase 2: Extract the visual system, content, layout, and font information
- [x] Phase 3: Resolve any material ambiguity with the user
- [x] Phase 4: Implement the responsive website
- [x] Phase 5: Run functional and visual QA, then deliver
- [x] Phase 6: Port the Figma-generated process section and re-verify
- [x] Phase 7: Install the supplied annotation SVGs, match their PDF placement, and apply the confirmed type scale

## Key Questions
1. How many distinct pages or states are represented in `data/`?
2. Which images can be reused or extracted, and which need replaceable placeholders?
3. Do the SVG references identify or embed the exact fonts?
4. Does the current scaffold contain anything that must be preserved?

## Decisions Made
- Treat the files in `data/` as the visual source of truth.
- Do not begin implementation until material ambiguities in the references are resolved.
- Placeholder imagery must be easy to replace later.
- The reference SVG contains 15 embedded raster assets; likely-relevant images can be extracted and reused rather than substituted.
- The user confirmed that all files in `data/` are the source of truth. The PDF controls the final composition and copy; the SVG supplies embedded assets and metadata.
- Implemented the exact web-available fonts (Questrial and Public Sans) and recreated handwritten accents as lightweight SVG strokes, so the unavailable Hermaiona font file is not required.
- Reused five embedded SVG assets for the hero, project gallery, founder portrait, process preview, and gold-tape details.
- Use the local Figma Make export in `data/Convert Illustrator Design to Figma` as the source of truth for the revised process section only.
- Use the 12 SVGs in `data/drive-download-20261004T112749Z-1-001/SVG` directly for the logo, gold tape, scalloped dividers, and red annotations.
- Use Questrial at up to 111px for the main desktop heading; use Public Sans at 18/24px with 500 tracking for small caps and 25px for desktop paragraphs, scaling fluidly on smaller screens.

## Errors Encountered
- `create_goal` reported an unfinished goal because the `/goal` request had already created it; continued with that active goal.
- A combined delete/add patch targeting the same files was rejected by the patch engine; split the replacements into separate atomic patches.
- The sandbox rejected direct removal of the generated `tmp/` analysis directory; moved it out of the repository to a specific temporary path instead.
- The development server hit the environment's open-file watcher limit and served the not-found route; switched validation to a fresh production build and server.
- A combined replace operation for `build_summary.md` hit the patch engine's same-file limitation; split it into separate delete/add edits.
- The Next.js typecheck initially included the standalone Vite/Figma reference project under `data/`; excluded that reference-only directory from the app's TypeScript scope.
- `ffmpeg` could not decode the supplied SVG files for the contact sheet; used a temporary SVG renderer instead.
- CairoSVG could not run because the native Cairo library was unavailable; the temporary Resvg renderer succeeded.
- The first temporary Resvg install hit a root-owned npm cache; reran it with an isolated cache under `/private/tmp`.

## Status
**Complete** - The local Figma export drives the process layout and all 12 supplied decoration SVGs are installed in their PDF positions. The confirmed Questrial/Public Sans desktop scale is responsive, the production build passes, and the updated localhost page returns HTTP 200.
