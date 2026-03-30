# Portfolio Web

Personal portfolio website built with React, Vite, and Tailwind CSS.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```text
portfolio_web/
├─ public/
│  ├─ favicon.svg
│  └─ icons.svg
├─ src/
│  ├─ assets/
│  │  ├─ avatar.jpg
│  │  ├─ hero.png
│  │  ├─ project1.png
│  │  ├─ project2.png
│  │  ├─ react.svg
│  │  └─ vite.svg
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ LandingSection.jsx
│  │  ├─ ProjectsSection.jsx
│  │  ├─ OtherProjectsSection.jsx
│  │  ├─ SkillsSection.jsx
│  │  └─ ContactSection.jsx
│  ├─ layouts/
│  │  └─ AppShell.jsx
│  ├─ pages/
│  │  ├─ HomePage.jsx
│  │  ├─ ProjectsPage.jsx
│  │  ├─ SkillsPage.jsx
│  │  └─ ContactPage.jsx
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package.json
├─ package-lock.json
├─ vercel.json
└─ vite.config.js
```

## Routing

Configured in `src/main.jsx` using `react-router-dom`:

- `/` -> Home page
- `/projects` -> Projects page
- `/skills` -> Skills page
- `/contact` -> Contact page
- `*` -> Redirects to `/`
