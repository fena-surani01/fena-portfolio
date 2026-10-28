# Fena Surani – Portfolio

A personal portfolio built with React and Vite.

## Run locally

Requires Node.js 18 or newer (https://nodejs.org).

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Edit content

All text, links, skills, experience, projects and education are in `src/data.js`.
Search that file for `TODO` to find the details still to fill in.

To add a downloadable CV, put `resume.pdf` in the `public/` folder and set
`resumeUrl: '/resume.pdf'` in `src/data.js`.

## Build and deploy

```bash
npm run build
```

This creates a `dist/` folder you can deploy for free on Netlify, Vercel or GitHub Pages.
