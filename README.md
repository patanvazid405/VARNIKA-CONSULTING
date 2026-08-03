# Varnika Consulting

Marketing site for Varnika Consulting — React + Vite, deployed to GitHub Pages.

## Structure

- `src/pages/` — one component per route (Home, Services, Industries, Solutions, About, Insights, Contact, Privacy Policy, Terms of Use)
- `src/components/` — shared Header, Footer, Logo, Icon
- `src/hooks/` — scroll-reveal animations, animated stat counters, per-page document title/description
- `src/nav-data.js` — single source of truth for the header nav and footer link columns
- `src/icons.js` — the icon set used throughout via `<Icon name="..."/>`
- `src/lib/validation.js` — shared form-field validation rules (contact form + newsletter signup)
- `public/images/` — all photography, logos and generated artwork
- `public/404.html` — GitHub Pages SPA-routing workaround so deep links (e.g. `/contact`) survive a direct visit or refresh

## Local development

```
npm install
npm run dev       # dev server with hot reload
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
app and publishes `dist/` to GitHub Pages. The repo's **Settings → Pages →
Source** must be set to "GitHub Actions" for this to take effect.
