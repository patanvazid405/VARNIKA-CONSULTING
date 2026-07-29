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

## Logos and illustrations
These are currently inline SVG placeholders, so swapping them means editing
markup rather than dropping a file in:

- **Company logo** — `logoMark()` in `js/main.js`. Replace the inline SVG with
  `<img src="images/logo-varnika.svg" class="logo__mark" alt="">`.
- **Partner logos** (Zoho, Microsoft, AWS, Google Cloud, OpenAI, EDIFACT, X12,
  Power BI) — the `.logo-strip__items` lists in `index.html` and `about.html`.
- **Port illustration** — the inline `.panel__art` SVG in `industries.html`.
- **Google Map** — the `.map-embed` placeholder in `contact.html`; paste your
  Maps embed `<iframe>` inside it.

Every one of these locations is marked with a `REPLACE:` comment in the source.
