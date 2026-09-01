# Jeevan Biju — Portfolio Website

This is an editable React portfolio website for **Jeevan Biju**, an AI / Computer Vision Engineer specializing in real-time video analytics, GPU inference, multi-camera systems, and edge deployment. Its visual direction is **Instrumented Editorial**: an off-white editorial surface, oversized condensed typography, signal-umber system markers, sanitized technical visuals, and purposeful motion.

## Local setup

The downloadable ZIP intentionally **does not include `node_modules`**. You should not download node modules manually. After extracting the ZIP, run the package manager command below once; it will download the correct dependencies automatically from the lockfile.

### Simplest option — run the supplied Bash launcher

On macOS, Linux, or Windows with Git Bash/WSL, open a terminal inside the extracted project folder and run:

```bash
chmod +x run-portfolio.sh
./run-portfolio.sh
```

The launcher checks your Node.js version, automatically runs `npm install` if the dependencies are absent, and starts the local site. It will show a helpful message if Node.js is missing or not recent enough.

| Requirement | Recommended version |
| --- | --- |
| Node.js | 20 or later |
| Package manager | pnpm 10 (included via Corepack with modern Node.js) |

```bash
# Move into the extracted project folder
cd Jeevan-Biju-Portfolio

# Enable pnpm if it is not already available
corepack enable

# Download project dependencies (creates node_modules automatically)
pnpm install

# Start the local development server
pnpm dev
```

Open the local URL printed by the command, normally `http://localhost:3000`. Press `Ctrl + C` in the terminal to stop it.

## Production build

Use the following commands to validate or create a production-ready build.

```bash
# Type-check the project
pnpm check

# Create a production build
pnpm build

# Serve the production build locally
pnpm start
```

## Where to edit

| What you want to change | File |
| --- | --- |
| Name, contact links, projects, experience, technical stack, publications, achievements | `client/src/data/portfolio.ts` |
| Homepage sections and layout | `client/src/pages/Home.tsx` |
| Individual work / case-study layout | `client/src/pages/CaseStudy.tsx` |
| Navigation, cursor, project visual systems, pipeline components | `client/src/components/` |
| Colors, responsive layout, fonts, motion behavior | `client/src/index.css` |
| Browser title, search description, favicon, font loading | `client/index.html` |

All homepage and project content is centralized in `client/src/data/portfolio.ts` so it can be updated without hunting through page markup. The design document prohibits sharing sensitive operational material, so the case studies use deliberately high-level public descriptions and sanitized conceptual graphics.

## Visual assets in direct source downloads

The project references stable public CDN URLs for its original visual assets and resume. This is intentional: whether you download the project ZIP or use the Code editor’s download option, the same image files will render when the local site starts. An active internet connection is required for those externally hosted images to load.

## Technical notes

The website uses React 19, TypeScript, Vite, Tailwind CSS 4, Wouter routing, Framer Motion, Lucide icons, and self-contained CSS/SVG-based system diagrams. It does not require a database, API keys, a backend server, or cloud-specific services. The active motion system respects `prefers-reduced-motion` and the navigation, keyboard focus states, semantic landmarks, and responsive menu have been implemented for accessibility.

## Useful commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start development mode with live reload. |
| `pnpm check` | Run TypeScript checks. |
| `pnpm build` | Generate the production build in `dist/`. |
| `pnpm start` | Serve the production build. |
| `pnpm format` | Format the source files. |

> If you use `npm` instead of `pnpm`, run `npm install --legacy-peer-deps` and then `npm run dev`. The compatibility option is required because one development-only package has a peer range that predates Vite 7. However, `pnpm` is recommended because this project includes a `pnpm-lock.yaml` file for reproducible dependency installation.
