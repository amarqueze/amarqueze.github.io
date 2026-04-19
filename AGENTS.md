# AGENTS.md

## Project Overview

This repository is a personal website and blog built with React and Vite.
The site is currently a static, route-based frontend with hand-authored
content inside React components.

The site includes:

- Home page
- About page
- Portfolio index
- Blog index
- Individual blog post routes
- Individual portfolio project routes

Deployment appears to target GitHub Pages. Routing is handled with
`HashRouter` in `src/main.jsx`.

## Language Rule

- All site content must be written in English only.
- Do not add Spanish copy, mixed-language UI, or bilingual text unless the
  user explicitly asks for it.
- When editing existing text, normalize it to clear natural English if needed.

## Content Rule

- Do not describe on-site content as "sample", "example", or "placeholder"
  in user-facing copy.
- The user intends to replace existing posts and projects, so keep structure
  reusable and avoid hardcoding language that suggests the current entries are
  final or representative.

## Stack

- React 18
- Vite 4
- React Router DOM 6
- Plain CSS in `src/App.css`

## Commands

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build production bundle: `npm run build`
- Preview production build: `npm run preview`
- Deploy build output: `npm run deploy`

## Repository Structure

- `src/main.jsx`: app entrypoint, wraps the app in `HashRouter`
- `src/App.jsx`: top-level layout and route definitions
- `src/App.css`: global styles and page/component styling
- `src/components/`: shared UI building blocks
- `src/pages/`: route-level pages
- `src/pages/blog/`: individual blog post pages
- `src/pages/portfolio/`: individual portfolio project pages
- `src/assets/`: static assets such as the avatar image
- `index.html`: root HTML shell and metadata
- `vite.config.js`: Vite config

## Architectural Notes

- Routing is static and declared directly in `src/App.jsx`.
- Blog posts and portfolio entries are currently hardcoded arrays inside
  components and pages.
- Long-form pages use reusable wrappers:
  - `ArticleLayout.jsx` for blog posts
  - `ProjectLayout.jsx` for portfolio projects
- Styling is centralized in a single CSS file rather than CSS modules or a
  design system.

## Working Conventions

- Keep the implementation aligned with the current stack.
- Prefer extending the existing static React structure unless a larger content
  model refactor is explicitly requested.
- Reuse `ArticleLayout` and `ProjectLayout` for new detail pages.
- Add new top-level routes in `src/App.jsx`.
- Keep styling changes in `src/App.css` unless there is a clear reason to split
  styles.
- Preserve compatibility with GitHub Pages routing. Do not replace
  `HashRouter` with `BrowserRouter` unless deployment strategy changes too.

## Content Conventions

- Prefer personal, technical, and specific copy over generic marketing text.
- Replace generic headlines, excerpts, and descriptions with content relevant
  to the user's engineering background and blog goals.
- Several links still point to placeholders such as `#` or `/username` style
  profile URLs. Replace them only when real destinations are known.

## Known Issues

- Multiple files show character encoding problems, especially accented
  characters and arrow symbols.
- Some routes and cards still point to incomplete destinations.
- The blog is not backed by Markdown, JSON, or a CMS.
- Metadata in `index.html` contains encoding artifacts.
- `vite.config.js` currently uses `base: '/'`; if the site is deployed to a
  GitHub Pages project subpath, that may need to be revisited.

## Preferred Change Style

- Make focused edits.
- Do not introduce new frameworks, state libraries, or styling systems unless
  the task requires it.
- Favor readable JSX and straightforward state handling.
- Keep components small and composable.
- When adding or revising content, make sure route links and CTAs are valid.

## Validation

After meaningful changes, prefer:

1. `npm run build`
2. Check that routes still resolve under `HashRouter`
3. Review affected pages for layout regressions on desktop and mobile

## Guidance For Future Agents

- Start by reading `src/App.jsx`, `src/main.jsx`, and `src/App.css`.
- If the task concerns blog content, inspect both `src/pages/Blog.jsx` and
  `src/components/LatestWriting.jsx` because they duplicate post data.
- If the task concerns portfolio content, inspect both `src/pages/Portfolio.jsx`
  and `src/components/SelectedWork.jsx` because they duplicate project data.
- Be careful not to overwrite user-provided personal copy, links, or branding.
- If you fix encoding issues, do it deliberately and consistently across all
  affected files rather than partially.
