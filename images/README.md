# Image assets

Drop final artwork here using these exact filenames and the site picks them up
with no code changes. Until then every reference degrades gracefully: hero
photos fall back to the navy gradient, article thumbnails fall back to a navy
panel (the `<img>` removes itself via `onerror`).

## Hero backgrounds
Set on each page via the inline `--hero-img` custom property.
Recommended: 2000x1000px, JPG, ~250KB, dark/night container-terminal imagery
so the white headline text keeps contrast.

| File | Used on |
|---|---|
| `hero-container-ship.jpg` | index.html |
| `hero-port-terminal.jpg`  | industries.html |
| `hero-vessel-night.jpg`   | solutions.html |
| `hero-terminal-cranes.jpg`| services.html |
| `hero-vessel-dusk.jpg`    | insights.html |
| `hero-fleet-night.jpg`    | about.html |
| `hero-harbour.jpg`        | contact.html |

## Article thumbnails (insights.html)
Recommended: 800x450px (16:9), JPG.

`insight-erp.jpg`, `insight-edi.jpg`, `insight-digital.jpg`,
`insight-ai.jpg`, `insight-finance.jpg`, `insight-operations.jpg`

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
The real mark has a more elaborate bird/wing form on the left; this is a
simplified V that reads correctly at 46px. To use the genuine logo, overwrite
both files with the official vector (a white-filled version for the `-light`
one) — no code changes needed. If you only have a raster (PNG/JPG), save it as
`logo-mark.png` and change the two `src` values in `logoMark()` in
`js/main.js`.

The tagline "YOUR PARTNER IN MARITIME EXCELLENCE" is deliberately omitted from
the header lockup — at 35px tall it would be illegible.

## Other illustrations
Still inline SVG in the markup rather than files here:
- **Port illustration** — the inline `.panel__art` SVG in `industries.html`.
- **Google Map** — the `.map-embed` placeholder in `contact.html`; paste your
  Maps embed `<iframe>` inside it.

Every one of these locations is marked with a `REPLACE:` comment in the source.
