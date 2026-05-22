# NANDEEKO Website

Static product website for `https://nandeeko.com`.

## Files

- `index.html` - public website content and metadata.
- `styles.css` - responsive layout and NANDEEKO brand styling.
- `script.js` - image gallery behavior and the FBA-002 unavailable message.
- `assets/` - logo, favicon, Amazon listing photos for FBA-001, and the FBA-002 render.
- `renders.html` - unlinked staging page for future render images.
- `assets/future-renders/` - folder reserved for future render exports.

## Product Links

- FBA-001 opens the Amazon listing: `https://www.amazon.com/dp/B0DG7K2MKN`.
- FBA-002 is marked as in development and shows `Not available yet` when the Amazon button is clicked.
- Contact buttons use `mailto:info@nandeeko.com`.

## Deployment Notes

Upload the contents of this folder to any static host, for example Netlify, Vercel static output, Cloudflare Pages, GitHub Pages, or a normal web hosting `public_html` directory.

For `nandeeko.com`, point the domain DNS to the chosen host and make sure the host serves `index.html` from the web root. The canonical URL and social metadata already use `https://nandeeko.com/`.

No build step is required.

## 301 Redirects

The site includes common permanent redirect configs:

- `_redirects` - Netlify and Cloudflare Pages style redirects.
- `.htaccess` - Apache or cPanel hosting redirects.
- `vercel.json` - Vercel redirects.

Configured redirects:

- `https://www.nandeeko.com/*` -> `https://nandeeko.com/*`
- `http://www.nandeeko.com/*` -> `https://nandeeko.com/*`
- `http://nandeeko.com/*` -> `https://nandeeko.com/*`
- `/index.html` -> `/`

Only the file supported by the chosen hosting provider will be used.
