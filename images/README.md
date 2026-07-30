# Image assets

## Generated artwork (present now)

`tools/generate-artwork.py` produces every scene below: a night container
terminal with vessels, gantry cranes, city glow and the cyan digital-network
overlay from the client's reference image. Regenerate with:

    python tools/generate-artwork.py

Output is deterministic, so re-running yields byte-identical files. Tune the
per-variant dials (`ships`, `cranes`, `mesh`, `glyphs`, `horizon`, `warmth`,
`vignette`) in the `HEROES` / `THUMBS` tables at the bottom of that script.

| Scene | Page | Character |
|---|---|---|
| `hero-port.svg`      | index      | full terminal, balanced |
| `hero-terminal.svg`  | services   | crane-forward |
| `hero-fleet.svg`     | industries | vessels at the quay |
| `hero-network.svg`   | solutions  | dense mesh, the integration story |
| `hero-dusk.svg`      | about      | calmer, warmer harbour |
| `hero-analytics.svg` | insights   | data-glyph forward |
| `hero-quay.svg`      | contact    | evening quayside, even wash |

Thumbnails for the six insight cards: `insight-erp.svg`, `insight-edi.svg`,
`insight-digital.svg`, `insight-ai.svg`, `insight-finance.svg`,
`insight-operations.svg`.

**These are stand-ins, not photography.** They exist so the site reads as
designed before real assets land.

## Dropping in real photographs

Each hero has a photo layer sitting above the generated scene. Save a file at
the name below and it takes over automatically - no code change:

| File | Page |
|---|---|
| `hero-container-ship.jpg` | index.html |
| `hero-terminal-cranes.jpg`| services.html |
| `hero-port-terminal.jpg`  | industries.html |
| `hero-vessel-night.jpg`   | solutions.html |
| `hero-fleet-night.jpg`    | about.html |
| `hero-vessel-dusk.jpg`    | insights.html |
| `hero-harbour.jpg`        | contact.html |

Recommended: 2000x1000px, JPG, ~250KB, dark/night imagery so the white
headline keeps contrast. The left third carries the copy, so keep the subject
right of centre.

Article thumbnails work the same way - save `insight-erp.jpg` and friends at
800x450px and they replace the generated versions.

Both layers are wired in `css/styles.css` under "Per-page imagery", keyed off
a `.hero--<page>` class. They are declared there rather than inline because a
`url()` substituted out of a CSS custom property resolves against the
stylesheet, not the page - inline values silently resolved to `/css/images/`.

## Product showcase (solutions.html)
The "Inside the Varnika Freight ERP" tabbed section (`#product-showcase`).
Recommended: 1600x1000px (16:10) PNG/JPG screenshots of the real application,
cropped to the browser viewport (no OS chrome — the mockup frame is added by
CSS). Missing files just leave the navy browser-mock frame empty.

| File | Tab |
|---|---|
| `product-customer-listing.png`  | Customer Listing |
| `product-customer-profile.png`  | 360&deg; Customer Profile |
| `product-onboarding-wizard.png` | Guided Onboarding |

## Partner logos — `images/logos/`
Real brand marks, one standalone SVG each, used by the logo strips in
`index.html` and `about.html`. Drop-in replaceable: overwrite the file and
the strip picks it up.

| File | Rendered as |
|---|---|
| `zoho.svg`         | mark only + "Zoho" text label |
| `microsoft.svg`    | full lockup (squares + wordmark) |
| `aws.svg`          | full lockup (wordmark + smile) |
| `google-cloud.svg` | mark only + "Google Cloud" text label |
| `openai.svg`       | full lockup (knot + wordmark) |
| `edifact.svg`      | wordmark |
| `x12-ansi.svg`     | full lockup (badge + wordmark) |
| `power-bi.svg`     | mark only + "Power BI" text label |

Sizing is by class in the strip markup: no class = 20px tall,
`.ic` = 24px (icon-only marks), `.lg` = 29px (stacked lockups).

**These are SVG reconstructions, not the official press-kit files.** Before
launch, replace them with the vendors' supplied logos and check each brand's
trademark usage guidelines.

Accuracy notes, worst first:

- **`openai.svg`** — the real mark is a six-blade interwoven knot. This is a
  rounded hexagon with three spokes: it reads correctly at 20–28px but is a
  simplification, not the actual mark. Highest priority to replace.
- **`aws.svg`, `microsoft.svg`, `edifact.svg`, `x12-ansi.svg`** — wordmarks are
  set in Arial/Segoe UI rather than each brand's licensed typeface, so the
  letterforms are close but not exact.
- **`zoho.svg`, `google-cloud.svg`, `power-bi.svg`** — geometry and brand
  colours are accurate; these are the closest of the set.

## Company logo — `logo-mark.svg` / `logo-mark-light.svg`
The "V" mark used in the header and footer. Two files because the mark is
mostly navy and the footer sits on navy:

| File | Used on |
|---|---|
| `logo-mark.svg`       | white header (navy + orange mark) |
| `logo-mark-light.svg` | navy footer (white + orange mark) |

The **wordmark is HTML text**, not part of these files — "VARNIKA" in
Poppins 700 and "CONSULTING" letter-spaced in orange, styled by `.logo__name`
and `.logo__sub`. That keeps it crisp at any size and lets it recolour for the
dark footer.

**These are interpretations of the supplied logo, not the original artwork.**
The real mark has a more elaborate bird/wing form; this is a simplified V that
reads correctly at 52px. Hand-tracing from a screenshot will not be exact.

### Use your real logo — the easy way

Save your logo file as **`images/logo-full.png`** and it replaces the whole
composed lockup automatically. No code changes. The site renders the built-in
lockup until that file exists, then swaps to yours the moment it does.

| File | Where it's used | Notes |
|---|---|---|
| `logo-full.png`       | header (white background) | your full-colour logo as supplied |
| `logo-full-light.png` | footer (navy background)  | needs white/light text to be legible |

`.svg` works too — change the extension in `logo()` in `js/main.js`.
If you only supply `logo-full.png`, the header uses it and the footer falls
back to the built-in light lockup, which is fine.

### The tagline
"YOUR PARTNER IN MARITIME EXCELLENCE" is in the lockup, with the hairlines
either side, at 7px — slightly larger than true proportion so it stays legible.
On phones the flanking hairlines are dropped and the type tightens to 6.5px
(6px under 400px) so it still fits a 320px header — it is never hidden on
mobile. It is dropped from the header only between 1101–1160px, where the
horizontal nav and the CTA need the room. It always shows in the footer.

## Other illustrations
Still inline SVG in the markup rather than files here:
- **Port illustration** — the inline `.panel__art` SVG in `industries.html`.
- **Google Map** — the `.map-embed` placeholder in `contact.html`; paste your
  Maps embed `<iframe>` inside it.

Every one of these locations is marked with a `REPLACE:` comment in the source.
