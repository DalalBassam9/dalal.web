# Dalal Web — Personal Portfolio

Built with **Nuxt 4** + **Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build for production

```bash
npm run build
node .output/server/index.mjs
```

## Structure

- `app/components/` - each section is its own component (Header, Hero, About, TechStack, Projects, Experience, Contact, Footer)
- `app/assets/css/main.css` - Tailwind entry + base styles
- `tailwind.config.js` - colors (navy / accent), fonts (Plus Jakarta Sans + Caveat)
- `app/app.vue` - page composition

## To customize

- Replace the CV file: add your PDF at `public/cv-dalal.pdf`
- Update contact info, projects, and timeline directly in the matching component under `app/components/`
- Swap the workspace photo in `AboutSection.vue`
- Wire the contact form in `ContactSection.vue` to your email service (e.g. Formspree, EmailJS, or your own API route)
