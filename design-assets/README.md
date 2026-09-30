# Design assets (not deployed)

Only `public/` is copied into the build. This folder keeps full-size source
files out of the deployed site.

`portfolio-originals/` holds the original PNG/JPG portfolio images. The site
uses WebP copies in `public/images/portfolio/` (max 1600 px wide; line
drawings are lossless WebP, renders are quality 85). To add a new portfolio
image, convert it to WebP the same way and reference the `.webp` path.

`public/images/portfolio/trailerFrame.png` stays in `public/` because it is
the Open Graph share image (`src/config/site.js`), and some link-preview
crawlers do not support WebP.
