# kimai-discount-bundle-site

Static landing page for Kimai DiscountBundle, in English (`index.html`) and Czech (`cs/index.html`).

Screenshots in `images/` come from `DiscountBundle/build/store/shots/` (resized to 1600 px).

## Local development

1. Install dependencies with pnpm.
2. Build the production stylesheet.
3. Open the HTML file in a browser.

### Commands

pnpm install
pnpm run build:css

For live CSS rebuilding while editing:

pnpm run watch:css

Both language versions share `styles/tailwind.css`, so rebuild after editing either of them.
