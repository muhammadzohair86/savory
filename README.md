# Savory

A responsive, frontend-only portfolio website for **Savory**, a sample food photography and styling studio. All copy, services and contact details are illustrative content created for demonstration; there is no real address, phone number, client or social account.

## What the original project was

The downloaded project (a compiled "Mashup Template" bundle named Savory) contained only Lorem ipsum text and twelve bright, overhead food photographs: brunch tables, pancakes, berry tarts, roasted fruit, coffee and salad, several with hands in the frame. Its structure (a grid of photo tiles, About me, Services with three photo-led offerings, a Project page and a Contact page) pointed to a **personal food photography and styling portfolio** rather than a restaurant, so that is what this site is.

## Features

- **Home**: hero, a short statement of approach, a masonry gallery of eight selected photographs, services and a featured sample project
- **Work**: all twelve photographs in a masonry grid with theme filters (breakfast and brunch, fruit and berries, baking and roasting, coffee and savory); the chosen theme is kept in the URL
- **Lightbox**: opens any photograph larger with a caption, previous and next buttons, arrow keys, and Escape to close (built on the native dialog element)
- **Services**: food photography, food styling and props, recipe and content development, plus a four-step process
- **Sample project**: a short case study of a brunch shoot
- **About**: approach, guiding principles and favourite subjects that link into the gallery filters
- **Contact**: validated enquiry form with a loading state and a clear "nothing was sent" confirmation
- **Credits** and a 404 page; responsive layout, visible focus states and reduced-motion support

## Technologies

React 18, React Router 6, Vite 5, Tailwind CSS 4, daisyUI 5 (custom theme), Lucide icons, Fontsource fonts. No backend, database or API.

## Getting started

Requires Node.js 18 or newer.

```bash
npm install
npm run dev      # development server at http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build locally
```

## Project structure

```
src/
  components/   Header, Footer, Gallery (masonry and lightbox), ScrollToTop, shared UI
  pages/        Home, Work, Project, Services, About, Contact, Credits, NotFound
  data/         gallery.js (photo captions and themes), site.js (services, steps, navigation), images.js
  index.css     Tailwind setup and the daisyUI theme
```

## Images

Each photograph is stored in two sizes in `src/assets/images`: `<id>-md.jpg` for grids and `<id>-lg.jpg` for the hero and lightbox. To add a photo, create both files, add its dimensions to `src/data/images.js` and an entry (with a caption describing what is visible) to `src/data/gallery.js`.

## Deploy to Netlify

The site uses clean URLs (for example `/work`), so Netlify needs to serve `index.html` for every route. This is already configured in both `netlify.toml` and `public/_redirects`, which means direct visits and refreshes work.

1. Push the project to a GitHub repository.
2. In Netlify choose **Add new site, Import an existing project**, then connect the repository.
3. Confirm the build command `npm run build` and publish directory `dist`, then deploy.

## Credits and licences

Third-party attributions are listed in [ATTRIBUTION.md](ATTRIBUTION.md) and on the website's Credits page.
