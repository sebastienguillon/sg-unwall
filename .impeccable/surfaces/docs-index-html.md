---
version: 1
slug: "docs-index-html"
primary_target: "docs/index.html"
related_targets:
  [
    "docs/fr/index.html",
    "docs/privacy.html",
    "docs/support.html",
    "docs/fr/confidentialite.html",
    "docs/fr/aide.html",
  ]
---

# Unwall site (docs/, GitHub Pages)

Scope: homepage (Persuade), privacy and support pages (Read), each in English (docs/) and French (docs/fr/). Static files, no build step; a small script runs the demo, the tested-pages register and nothing else.

Audience and job: readers tired of consent walls, arriving from a store listing, GitHub or word of mouth, wary of an extension that runs on every page. They must grasp the offer, see it work, and install.

Action: Install in Firefox / Install in Chrome. Until a store approves Unwall, the button explains how to load it from source on GitHub, with a plain "store release in preparation" status; never a fake store link.

Proof: the real `src/content/unwall.js` running on a made-up newspaper with a made-up consent wall (labelled as made up); the measured register of walled pages from the 20 October 2026 probe run; public MIT code; no data collected. Site and consent-tool names as plain text, never logos.

Constraints: sg-x family world (inherited from ../sg-x/docs); no fear-mongering, no SaaS template, no militancy vocabulary; no invented users, ratings or numbers.

## Direction contract

THESIS: The homepage owns the reader's unanswered question. The two consent buttons every site shows become the headline, set as huge dashed, never-pressed buttons, and the answer under them is Unwall's position: it presses neither. It refuses the extension-landing default of headline, icon and a grid of feature cards.

OWN-WORLD: sg-x family: paper #f6f5ef ground, ink #20231d, olive #526600 for links and marks, lime #d5ed75 on ink, hairlines #d5d8ca, tint #e8eddb. System UI at 700-750 with tight tracking for display. Unpressed buttons are pale olive dashed outlines (#b9bdaa). Unwall's own voice (its readout, the privacy panel) speaks from ink panels with lime type. A lime highlighter bar marks the answer.

STORY: The visitor recognises the question, learns that Unwall answers neither and that this keeps consent-gated trackers off, flips the switch and watches the real script free a made-up page while its readout says what it did, checks the measured pages and the privacy promise, and installs.

FIRST VIEWPORT: At 1440x900: header; the headline's first line is the two dashed buttons at about 116px across nearly the full 1120px measure; its second line, the same size in ink, "Unwall presses neither." with lime under "neither."; then the lead (600px) on the left and the install actions with store status on the right; the fold row carries "Try it on a made-up page." and the Unwall switch; the demo frame's top edge closes the viewport.

FORM: "The unanswered question", position 4 of 7 on the ranked list, seed key 52cd50fe. Raises: the tested-pages register changes each row in place inside a ruled grid that never moves (from the split-flap board); the demo is direct manipulation with a live readout driven by the real script (from the variable-font specimen); every demo change is reversible and announced (from the Rietveld sliding house). Signature interaction: the Unwall switch on the demo. Motion grammar: a status changes in place under a brief lime wash, nothing else moves.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Open decisions

- Store URLs once Chrome Web Store and addons.mozilla.org approve Unwall.
- The GitHub repository is assumed at github.com/sebastienguillon/sg-unwall and the site at sebastienguillon.github.io/sg-unwall/.
