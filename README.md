# DeepCode Site

Landing page for [DeepCode](https://github.com/N1ghthill/deepcode) — a terminal-first AI coding agent.

Deployed at [deepcode.ruas.dev.br](https://deepcode.ruas.dev.br/)

## Structure

```
deepcode-site/
├── index.html              # Main landing page
├── styles.css              # Styles (dark theme, responsive)
├── script.js               # Interactions (copy, scroll, animations)
├── package.json            # Project metadata
├── README.md               # This file
├── api/
│   └── package-version.js  # Vercel serverless function — fetches latest npm version
├── assets/
│   ├── brand_mark.png      # Brand icon (11 KB)
│   ├── favicon.ico         # Favicon (15 KB)
│   ├── logo_deepcode_hero.png  # Hero logo (108 KB)
│   └── og-image.png        # Open Graph preview image (180 KB)
└── .vercel/                # Vercel deployment config
```

## Features

- **Dark theme** with purple accent (`#9f55ff`)
- **Responsive** — adapts to mobile, tablet, and desktop
- **SEO** — Open Graph, Twitter Card, canonical URL
- **Live version badge** — fetches latest npm version via serverless function
- **Copy-to-clipboard** with visual feedback
- **Smooth scroll** navigation
- **Fade-in animations** via IntersectionObserver
- **Vercel Insights** analytics

## Development

Open `index.html` in your browser or serve locally:

```bash
npm run dev
# or
npx serve .
```

## Deployment

The site is deployed on [Vercel](https://vercel.com). Push to the main branch to trigger automatic deployment.

## License

MIT — see the [DeepCode repository](https://github.com/N1ghthill/deepcode) for details.
