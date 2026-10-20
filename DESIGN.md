---
name: Unwall
description: Paper, ink and one highlighter. The sg-x family world, extended with keys nobody presses and an ink voice that reports what it did.
colors:
  green: "#526600"
  lime: "#d5ed75"
  unpressed: "#868b73"
  unpressed-line: "#b9bdaa"
  paper: "#f6f5ef"
  ink: "#20231d"
  muted: "#5c6353"
  line: "#d5d8ca"
  tint: "#e8eddb"
  ink-line: "#3a3e35"
  ink-muted: "#b4b9a6"
  selection: "rgb(168 199 11 / 30%)"
typography:
  display:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "min(116px, 8vw)"
    fontWeight: 750
    lineHeight: 1
    letterSpacing: "-0.045em"
  headline:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "clamp(36px, 4.3vw, 54px)"
    fontWeight: 700
    lineHeight: 1.14
    letterSpacing: "-0.035em"
  title:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "clamp(28px, 3vw, 36px)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  statement:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "clamp(21px, 2vw, 26px)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  subtitle:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "21px"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "-0.02em"
  lead:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "15px"
    fontWeight: 650
  nav:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "14px"
    fontWeight: 600
  meta:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  data:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.45
    fontFeature: '"tnum"'
rounded:
  code: "3px"
  control: "8px"
  panel: "12px"
  pill: "17px"
  key: "0.17em"
spacing:
  content-width: "1120px"
  reading-width: "720px"
  section: "clamp(40px, 5vw, 64px)"
  gutter: "64px"
  page-margin: "32px"
  page-margin-mobile: "20px"
  block: "32px"
  stack: "24px"
  tight: "12px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.green}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 22px"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.tint}"
  text-button:
    textColor: "{colors.green}"
    typography: "{typography.label}"
    height: "44px"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.nav}"
    height: "44px"
  nav-link-current:
    textColor: "{colors.ink}"
  unpressed-key:
    textColor: "{colors.unpressed}"
    typography: "{typography.display}"
    rounded: "{rounded.key}"
    padding: "0.05em 0.38em 0.13em"
  switch-track:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    width: "64px"
    height: "34px"
  switch-track-on:
    backgroundColor: "{colors.ink}"
  switch-thumb:
    backgroundColor: "{colors.ink}"
    size: "24px"
  switch-thumb-on:
    backgroundColor: "{colors.lime}"
  readout:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.panel}"
    padding: "18px 20px 8px"
    width: "340px"
  readout-verb:
    textColor: "{colors.lime}"
  readout-detail:
    textColor: "{colors.ink-muted}"
  privacy-panel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.panel}"
    padding: "40px"
  contact-card:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "24px 28px"
  register:
    textColor: "{colors.ink}"
    typography: "{typography.data}"
  code-inline:
    backgroundColor: "{colors.tint}"
    rounded: "{rounded.code}"
    padding: "2px 5px"
  demo-frame:
    rounded: "{rounded.panel}"
    height: "560px"
---

# Design System: Unwall

## Overview

**Creative North Star: "The Unpressed Page"**

A reader's page in paper and ink. Whatever a site demands of the reader shows up as a key nobody presses: a pale, dashed outline at display size, drawn but inert. Unwall's own voice speaks only from ink panels with lime type, and one lime highlighter marks the answer. Everything else is quiet: warm off-white paper, olive-black ink, hairline rules, generous 17px/1.7 reading text, no shadows, no imagery beyond the mark.

The world is inherited, not invented. It belongs to the sg-x family (the user's sibling extension, `sg-x/docs/styles.css`), chosen explicitly as "same family as sg-x". The shared family layer is identical value for value: paper, ink, muted, line, green, lime, tint, the selection colour, the system UI stack, the 1120px content and 720px reading widths, the section rhythm, header, footer, links, buttons, Read-page layouts and disclosures. Unwall adds four tokens and the devices built on them: the unpressed key colours (text and dashed line), the ink-panel rule and muted tokens, the switch, the readout, the ruled register, the lime highlighter under the answer, and the wash motion. Unwall extends the family without retuning any of its values.

Two things sit in the repository but outside this world. The made-up newspaper inside the homepage demo (`docs/demo/demo.css`, `en.html`, `fr.html`) imitates a generic news site on purpose, with a white ground, Georgia serif, a drop-shadowed consent box and uppercase tracked datelines. It is a contained exception that lives only inside the demo frame. The extension's toolbar popup (`src/popup/`) predates this world and is not part of it.

**Key Characteristics:**

- Paper ground (#f6f5ef) everywhere; depth comes from tone (tint card, ink panel), never from shadow.
- One type family at weights 400 to 750; display character comes from weight 750 and tracking down to -0.045em.
- Hairline-ruled structure: sections, lists, the register and disclosures are separated by 1px rules, not boxes.
- Unpressed keys: the site's demands rendered as dashed, inert outlines at display size.
- Ink panels with lime type are where Unwall itself speaks.
- One motion grammar: a status changes in place under a brief lime wash.
- Every string exists in English and French; layouts are sized for the longer French.

## Colors

A warm, low-chroma olive family on unbleached paper, with one saturated lime used sparingly.

### Primary

- **Olive Mark** (#526600): the family's working accent on paper. Body links (1px underline at 4px offset, 2px on hover), list markers, the current-page underline in the nav, the focus ring, the primary button's hover fill, the "Show all pages" text button, the live change count beside the switch, and disclosure summaries on hover. Holds 5.9:1 on paper and 5.4:1 on tint.

### Secondary

- **Highlighter Lime** (#d5ed75): Unwall's own voice. On ink it is type and marks: the privacy panel's heading and link, the readout's verbs ("Hidden", "Unlocked", "Repaired") and change count, the switch thumb when on, the focus ring inside ink panels (12.3:1 on ink). On paper it appears only as the highlighter underline beneath the answer, and transiently as the 22% wash of the motion grammar.

### Tertiary

- **Faded Key Olive** (#868b73, Unwall addition): the text of unpressed keys. 3.2:1 on paper, so it is legal only at display size, where it always sits.
- **Dashed Key Line** (#b9bdaa, Unwall addition): the 3px dashed outline of unpressed keys (2px under 650px). Pure decoration at 1.8:1; it carries no information.

### Neutral

- **Unbleached Paper** (#f6f5ef): the page ground and the text colour inside ink panels and on the primary button.
- **Olive-Black Ink** (#20231d): all headings and body text (14.6:1 on paper), the primary button, ink panels, the register's header rule, the switch track outline and its "on" fill. Also the browser `theme-color`.
- **Moss Grey** (#5c6353): secondary text, including leads, feature and list descriptions, captions, the store status, metadata, footer, inactive nav links and disclosure answers (5.7:1 on paper).
- **Pencil Hairline** (#d5d8ca): every 1px rule. Header and footer edges, section tops, register rows, list separators, disclosure edges, the demo frame's border, the nav's language divider.
- **Pale Sage Tint** (#e8eddb): the quiet card (support's "Report a problem"), inline code, and the secondary button's hover fill.
- **Ink Panel Rule** (#3a3e35, Unwall addition): hairlines between readout entries on ink.
- **Ink Panel Grey** (#b4b9a6, Unwall addition): secondary text on ink, including the readout's status sentence and per-entry details (7.9:1 on ink).
- **Lime Selection** (rgb(168 199 11 / 30%)): text selection on paper, inherited from the family.

### Named Rules

**The Family Rule.** The family tokens are sg-x's, value for value. Unwall adds tokens next to them and never retunes one.

**The Lime Has Two Places Rule.** Lime is type and marks on ink, where Unwall speaks, and a highlighter underline on paper, once per page. It is never text on paper and never the fill of a button or card. Its only other appearance is the transient wash.

**The Unpressed Rule.** The two unpressed colours belong only to keys nobody presses. Faded Key Olive holds 3.2:1, so it never appears below display size.

## Typography

**Display Font:** system-ui (with -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)
**Body Font:** the same stack
**Label/Mono Font:** none distinct; inline code uses the browser's monospace at 0.85em on tint

**Character:** One family, inherited from sg-x by the user's choice of that family. Hierarchy is built from weight (400 body, 600 to 650 UI, 700 headings, 750 display and brand) and from tracking that tightens as size grows, from -0.02em at 21px to -0.045em at 116px. Headings use `text-wrap: balance`; the display headline uses `pretty`.

### Hierarchy

- **Display** (750, min(116px, 8vw), line-height 1, -0.045em): the homepage headline only. The first line is the unpressed keys and the second line is the answer, both at the same size. French drops to min(100px, 6.9vw). Under 650px both languages use min(15vw, 64px) at -0.04em.
- **Headline** (700, clamp(36px, 4.3vw, 54px), 1.14, -0.035em): the h1 of Read pages (privacy, support).
- **Title** (700, clamp(28px, 3vw, 36px), 1.2, -0.03em): section h2s on the homepage. Inside Read-page articles h2 steps down to 26px (24px on mobile).
- **Statement** (700, clamp(21px, 2vw, 26px), 1.2, -0.03em): the short declarative lines of the "never" list, each followed by a muted paragraph.
- **Subtitle** (700, 21px, 1.35, -0.02em): h3s (the names in the "what Unwall clears away" list); the contact card's h2 is set to the same 21px.
- **Lead** (400, 20px, 1.65, Moss Grey): the paragraph under a headline or section title, max 65ch; 18px under 650px.
- **Body** (400, 17px, 1.7): all reading text. Descriptive paragraphs cap at 62ch and Read pages at the 720px measure.
- **Label** (650, 15px): buttons, the switch label and state, the text button, the live count. Disclosure summaries use 650 at body size.
- **Nav** (600, 14px): header links.
- **Meta** (400, 14px, 1.5): captions, the store status, the update date, the policy index. Footer runs at 13px/1.65; readout details at 12.5px.
- **Data** (400, 15px, 1.45, tabular numerals): the register. Column heads are 700 at 13px, sentence case.
- **Brand** (750, 23px, -0.03em; 21px on mobile): the "Unwall" wordmark beside the 36px icon.

### Named Rules

**The Folded Question Rule.** No eyebrow, kicker or small label above a heading. When a section has a question to ask, the question goes into the heading itself, as the homepage folds "Accept all / Refuse" into its h1.

**The Ledger Figures Rule.** Every figure that changes or is compared uses tabular numerals. This covers register times, change counts and readout timings.

**The French Runs Longer Rule.** Sizes are set so the French fits rather than trimmed to the English. The French headline is smaller (min(100px, 6.9vw)), and below 480px French keys shrink to min(1em, 10.5vw) so "Tout accepter" stays one key while the answer keeps its size.

## Layout

A single centred column of content at 1120px (`min(1120px, 100% − 64px)`, so 32px page margins; 20px under 650px), set on paper with no background bands. Sections are separated by a 1px hairline at the top and clamp(40px, 5vw, 64px) of padding. Density is generous. Reading pages sit at a 720px measure, and running text never exceeds about 65ch.

Where two columns meet, the gap is 64px. The homepage offer pairs a 600px lead with the install actions. The "clears away" list sets a 260px name column against its description. The close pairs two equal columns, with text above, then links and install. The privacy page puts a sticky 260px section index (top 32px) beside the 720px article. The demo is the exception, with a fluid frame and a 340px sticky readout 28px apart. The support page is a single 720px column.

Responsive behaviour:

- **900px:** every two-column layout becomes one column. The readout and the policy index stop being sticky, and the index becomes a two-column grid between two hairlines.
- **650px:** mobile. Margins drop to 20px, the headline drops to min(15vw, 64px) and key dashes thin to 2px. Install buttons stack, the demo frame drops to 520px and the footer stacks. Each register row becomes a three-line block: site and time, then page · consent tool, then what Unwall did. ARIA roles keep it a table.
- **480px:** French keys shrink (see Typography).
- **380px:** the nav spreads across the full width; the policy index becomes one column.

Touch targets are 44px minimum for links in the nav, footer, close links and policy index (on mobile), and 48px for buttons and the switch.

## Elevation & Depth

The system is flat and casts no shadows. Depth is tonal and comes in three steps. Paper is the ground. Pale Sage Tint marks a quiet aside. An ink panel marks Unwall speaking. Structure comes from hairlines rather than raised surfaces. The one `box-shadow` in the system is an inset 1.5px ink line that draws an outline, used on the secondary button and the switch track. It is a border drawn without layout cost, not elevation.

### Named Rules

**The No-Shadow Rule.** Nothing on the site floats. If something needs more weight, it moves from paper to tint, or from tint to an ink panel.

## Shapes

Soft, small corners on a ruled page. Controls use 8px corners, and panels (the ink privacy panel, the readout, the tint card, the demo frame) use 12px. Inline code uses 3px. The switch track is a full pill (17px on a 34px track) with a circular 24px thumb. An unpressed key's corner scales with its type (0.17em), so it reads as the same key at every size.

Lines come in three kinds. Pencil Hairline at 1px divides everything. A heavier 1.5px ink line marks headers and outlines: the register's column heads, the secondary button, the switch track. The 3px dashed line (2px on mobile) belongs only to unpressed keys, so a dashed edge always means "not pressed". The disclosure chevron is drawn from two 1.5px borders rotated 45°, not a glyph.

The mark (`assets/icon.svg`) is an ink rounded square (28 on a 128 grid). Six lime bricks with 4px corners frame a doorway, and three paper text lines with round caps sit in the doorway: a wall with the page readable through it.

## Components

### Buttons

Plain and solid, with no gradients, icons or uppercase.

- **Shape:** gently rounded (8px), 48px minimum height, 12px 22px padding, 650 weight at 15px.
- **Primary:** ink fill, paper text ("Install in Firefox").
- **Hover / Active / Focus:** hover fills with Olive Mark. Active returns to ink. Focus is a 3px olive outline at 4px offset. Colour changes are instant, with no transition.
- **Secondary:** transparent with a 1.5px inset ink outline and ink text ("Install in Chrome"). Hover fills with Pale Sage Tint.
- **Pairing:** primary and secondary always appear together with a Moss Grey status line under them at 14px.

### Links and the text button

- **Links:** Olive Mark with a 1px underline at 4px offset, 2px on hover, wrapping anywhere. Inside ink panels links turn lime, and so does their focus ring.
- **Text button:** a real `<button>` styled as a link (olive, underlined, 650 at 15px, 44px tall). It is used for "Show all 47 pages / Show fewer pages" under the register.

### Navigation

- **Header:** the brand (36px icon plus the 23px 750 wordmark) on the left and the nav on the right, above a hairline, with 18px vertical padding.
- **Links:** 14px 600 Moss Grey, 44px tall, with no underline at rest. Hover and the current page turn ink with a 2px olive underline at 7px offset.
- **Language switch:** "Français" / "English" comes last, set off by a hairline divider and 24px of padding. It carries its own `lang`.
- **Mobile:** the header wraps, the brand shrinks to 32px and 21px, and at 380px the nav spreads across the full width.

### Unpressed keys and the answer (signature)

The site's two consent buttons are set as part of the h1: each label sits in a 3px dashed Dashed Key Line outline with 0.17em corners, Faded Key Olive text, and padding 0.05em 0.38em 0.13em. Keys wrap with a 0.24em gap. They are inert spans inside a heading, not buttons. They have no hover, no cursor and no focus. Visually hidden punctuation (", or", "?") keeps the heading a sentence for screen readers. The answer follows at the same size in ink, with the final words in a `<mark>` drawn as a lime underline 0.3em thick at -0.2em offset with skip-ink off, so it reads as a highlighter stroke behind the letters.

### The Unwall switch (signature)

A real `role="switch"` button, hidden until the script runs: the word "Unwall", a track, then the state ("Off" / "On"; "Désactivé" / "Activé"), 650 at 15px, 48px tall. Off, the track is paper with a 1.5px inset ink outline and an ink thumb. On, the track fills with ink and the lime thumb slides 30px. The thumb moves over 220ms on cubic-bezier(0.16, 1, 0.3, 1), and colours change over 160ms ease-out. These are the only transitions besides the wash, and reduced motion turns both off. While the demo page reloads, the switch is disabled with a progress cursor. An olive live count ("3 changes") sits beside it in tabular numerals.

### The readout (signature)

Unwall's voice in the demo: a 340px ink panel (12px corners, 18px 20px 8px padding), sticky beside the frame on desktop. The top row is "Unwall" in paper at 16px 750 with the lime count at 13px. Under it an Ink Panel Grey status sentence (`role="status"`) explains what is happening and, once done, summarises what Unwall did and how to undo it. Each entry sits above an Ink Panel Rule hairline: a lime verb ("Hidden", "Unlocked", "Repaired"), the thing changed in paper, and a 12.5px Ink Panel Grey detail with the evidence and the time in tabular numerals. New entries arrive under the wash.

### The register (signature)

A ruled table of measured pages that never moves. The column heads are 13px 700 above a 1.5px ink rule. Rows have 11px vertical padding above 1px hairlines, with the site name in 650 and "What Unwall did" in Moss Grey. Times are right-aligned in tabular numerals. Each row starts in a waiting state ("Wall up" and an em dash, in Moss Grey, on top of the real text, which is hidden only visually). As the row scrolls into view, it turns to the real result under the wash, rows entering together staggered 70ms apart. The grid, row heights and order never change. Ten rows show by default and the text button reveals the rest. On mobile each row becomes a three-line block.

### Ink panel (privacy note)

The family's closing statement, used where Unwall states its privacy promise: an ink panel with 12px corners and 40px padding (28px 24px on mobile). A lime h2 sits on the left with a deliberate line break, and paper body text sits on the right in a 1 : 1.4 grid. Its link is lime.

### Cards / Containers

- **Corner Style:** 12px.
- **Background:** Pale Sage Tint for the one quiet card (support's "Report a problem"); ink for Unwall's voice. No other card types exist.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** none; tone does the work.
- **Internal Padding:** 24px 28px (22px on mobile) for the tint card.

### Disclosures

Support's quick checks are `<details>` separated by hairlines above and below. The summary is 650 at body size, padded 20px top and bottom, with a drawn chevron on the right that flips when open, and it turns olive on hover. The answer is in Moss Grey. The first one is open by default.

### Read-page furniture

The privacy page's index is titled "On this page" in 14px 700, with 14px Moss Grey links that turn olive and underlined on hover. Inline code sits on tint with 3px corners. List markers are olive, and the metadata line ("Privacy policy · Updated …") sits under the lead in 14px Moss Grey.

### The demo frame (contained exception)

The made-up page runs in an iframe with a 1px hairline border, 12px corners, a white background and a height of 560px (520px on mobile), with a 14px Moss Grey caption that says it is invented. Everything inside the frame, including the newspaper's serif, its white ground, the shadowed consent box and the uppercase datelines, imitates a generic news site and belongs to no part of this system.

### Motion

**The One Motion Rule.** A status changes in place under a brief lime wash: the background goes from rgb(213 237 117 / 22%) to transparent over 900ms on cubic-bezier(0.16, 1, 0.3, 1). New readout entries and turning register rows use it, and nothing else animates apart from the switch's own knob. Under `prefers-reduced-motion` the wash, the switch transitions and smooth anchor scrolling are all off, and the register shows its final state from the start.

## Do's and Don'ts

### Do:

- **Do** keep paper (#f6f5ef) as the only page ground, and give Unwall's own voice an ink (#20231d) panel with 12px corners and lime type.
- **Do** divide sections with a 1px Pencil Hairline (#d5d8ca) and clamp(40px, 5vw, 64px) of space, not with background bands or boxes.
- **Do** draw any question the site puts to the reader as unpressed keys (3px dashed #b9bdaa, 2px under 650px, text #868b73, 0.17em corners), only at display size.
- **Do** mark at most one answer per page with the lime highlighter: an underline 0.3em thick at -0.2em offset, skip-ink off.
- **Do** set every changing or compared figure in tabular numerals.
- **Do** announce every demo change in the readout (`role="status"`) and keep it reversible by the same switch.
- **Do** change a status in place under the 900ms lime wash, and turn it off under `prefers-reduced-motion`.
- **Do** write every string in English and French, and size headlines and keys for the French.
- **Do** keep touch targets at 44px minimum and buttons and the switch at 48px.
- **Do** focus with a 3px Olive Mark (#526600) outline at 4px offset; inside ink panels, lime.

### Don't:

- **Don't** put an eyebrow, kicker or small label above a heading; fold the question into the heading.
- **Don't** make an unpressed key clickable, hoverable or focusable, and don't style a real control with a dashed outline.
- **Don't** set lime as text on paper, or use it to fill buttons or cards.
- **Don't** add other motion: no fades, slides, scroll reveals, parallax or animated counters.
- **Don't** use drop shadows or gradients for depth; move from paper to tint to ink instead.
- **Don't** retune a family token (paper, ink, muted, line, green, lime, tint); add a named token beside it instead.
- **Don't** show site or consent-tool logos; their names stay plain text.
- **Don't** carry the demo newspaper's styles (Georgia serif, white ground, shadowed box, uppercase tracked datelines) out of the demo frame.
