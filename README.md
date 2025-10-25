# Estronics Project — Personal Portfolio (Fullstack)

This repository contains a modern personal portfolio website (frontend) and a small Node/Express backend used to handle the contact form. The project is intended to be run locally for development and deployed (backend on Render, frontend on a static host).

Summary of the current state

- Frontend: responsive single-page portfolio located in `/frontend` (HTML, CSS, JS).
- Backend: Express server in `/backend` exposing POST `/send` which forwards contact messages using Resend (Resend API key required).
- Improvements made: CORS handling for preflight, improved contact UX (loading state, timeout, inline messages + dismiss), defensive JSON parsing, `.gitignore` added.

## 🚀 Features (current)

- Responsive portfolio with hero, about, projects, skills, services and contact sections
- Typewriter effect and optional GSAP animations
- Contact form with:
  - loading state and AbortController timeout (10s)
  - inline success / error messages with dismiss button
  - backend email forwarding (Resend) when configured
- Backend CORS handling and explicit OPTIONS preflight response

## 🛠 Tech stack

- Frontend: plain HTML/CSS/JavaScript (+ optional GSAP)
- Backend: Node.js + Express, body-parser, cors, dotenv, resend (Resend email API)

## Repository structure

```
/.gitignore
README.md
frontend/
  index.html
  script.js
  style.css
  Assets/
backend/
  server.js
  package.json
  .env (local, ignored)
```

## Requirements

- Node.js (v16+ recommended) for running the backend
- (Optional) Live Server or any static web server for the frontend during local dev

## Environment variables (backend)

Create a `.env` file in `/backend` (do not commit it). The server expects:

- RESEND_API_KEY=your_resend_api_key
- RECEIVER_EMAIL=you@example.com
- NODE_ENV=development|production

On Render (production) set the same variables in the service's Environment settings.

## Development — run locally

1. Install backend dependencies and start the server:

```powershell
cd backend
npm install
node server.js
# or: npm run start
```

The backend listens on port 5000 by default.

2. Serve the frontend (two options):

- Open `frontend/index.html` directly in your browser (good for quick checks).
- Use a static server (recommended during development). Example with Live Server extension in VS Code or a quick static server:



When developing locally the frontend uses `http://localhost:5000` as the API base. In production it will use the configured Render URL.

## How the frontend selects the backend URL

`frontend/script.js` defines an `API_BASE` variable that picks `http://localhost:5000` when the app is running on `localhost`/`127.0.0.1`, otherwise it uses the production URL (update this to match your Render service URL if different).




## Security & production recommendations

- Do not commit `.env` or secrets (the repo includes a `.gitignore` to prevent that).
- Set environment variables in the hosting provider (Render) rather than in the repo.
- Tighten CORS whitelist in production to only allow your frontend domain.
- Add security middleware on the backend (helmet, rate limiter, input validation) before public deployment.
- Enable logging/monitoring and health checks on the production host.

## Deployment notes

- Backend: Render (connect the GitHub repository/branch and set the Environment variables). Trigger a deploy after pushing the changes.
- Frontend: host on Netlify, Vercel, GitHub Pages, or serve statically from the same host as the backend for simplest configuration.

## Changes made during development (high level)

- Fixed CORS preflight handling in `backend/server.js`
- Improved contact form UX in `frontend/script.js` (loading state, timeout, inline messages, dismiss)
- Defensive JSON parsing on client
- Added `.gitignore` and removed `node_modules` from the repo index
- Minor CSS for message styling in `frontend/style.css`

## Next steps / TODO

- Harden backend with helmet + rate limiter + input validation
- Add monitoring (Sentry or similar) and logs
- Optimize frontend assets (minify, compress, cache headers)
- Add tests and CI checks

## Contributing

Feel free to open issues or PRs. For small fixes, create a branch, commit, and open a PR against `main`.

## License

MIT — see the `LICENSE` file.

## Contact

- Alimi Azeez Opeyemi — alimiazeez4@gmail.com
- GitHub: https://github.com/HPTech4

---