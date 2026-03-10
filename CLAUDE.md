# CLAUDE.md — UniThrift Codebase Guide

This file provides AI assistants with a comprehensive understanding of the UniThrift codebase, its structure, conventions, and development workflows.

---

## Project Overview

UniThrift is a frontend-only React prototype for a college student e-commerce marketplace. Key business rules:

- Only students with a `.edu` email can list items (client-side validated)
- Anyone can browse listings
- Sellers keep 95% of sale proceeds
- Listings are scoped to a 15-mile radius to connect nearby campuses
- Eco-friendly focus: reuse and recycle
- Secondary feature: **Student Movers** program for students to earn income helping others move

**Current state**: Prototype/demo. No backend, no database, no real auth — all data is hardcoded.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React 18.2.0 |
| Routing | React Router DOM 6.22.2 |
| Build Tool | Create React App (react-scripts 5.0.1) |
| Language | JavaScript (ES6+, JSX) — no TypeScript |
| Styling | Vanilla CSS (single global file) |
| State Management | React `useState` only (no Redux/Context) |
| Package Manager | npm |
| Font | Poppins (Google Fonts) |

No backend, no database, no authentication library, no testing framework, no linter, no formatter.

---

## Repository Structure

```
UniThrift/
├── public/
│   └── index.html          # HTML entry point (Create React App default)
├── src/
│   ├── index.js            # React app bootstrap (ReactDOM.createRoot)
│   ├── index.css           # All global styles
│   ├── pages/
│   │   ├── App.js          # Root component: nav, footer, all route definitions
│   │   ├── Home.js         # Landing page with hero section and CTA buttons
│   │   ├── Browse.js       # Product listing grid
│   │   ├── Product.js      # Single product detail view
│   │   ├── SignUp.js       # .edu email verification form
│   │   ├── Movers.js       # Student Movers enrollment form
│   │   └── About.js        # About page
│   └── data/
│       └── products.js     # Hardcoded mock product array (5 items)
├── .gitignore
├── package.json
└── README.md
```

**Total codebase size**: ~354 lines across all JS and CSS files. This is a small project.

---

## Routes

All routes are defined in `src/pages/App.js` using React Router v6:

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` | Hero landing page |
| `/browse` | `Browse` | Product grid |
| `/product/:id` | `Product` | Product detail (`:id` matches `product.id` in products array) |
| `/signup` | `SignUp` | Email signup with `.edu` validation |
| `/movers` | `Student Movers` | Movers program enrollment form |
| `/about` | `About` | About the platform |

No 404 route is defined. No protected routes. All routes are publicly accessible.

---

## Data Layer

All product data lives in `src/data/products.js` as a plain JavaScript array. Each product object has:

```js
{
  id: Number,          // Used in /product/:id route
  name: String,
  price: Number,
  college: String,     // e.g. "USC", "UCLA", "Cal State LA"
  distance: String,    // e.g. "2 miles"
  description: String,
  image: String        // External placeholder image URL
}
```

`Browse.js` imports and maps over this array. `Product.js` finds the item by matching `useParams().id` against `product.id`.

---

## Styling Conventions

All styles are in `src/index.css`. There are no CSS modules, no scoped styles, and no CSS-in-JS.

**Color palette:**
- Primary Blue: `#0277BD` — nav bar, footer
- Success Green: `#00C853` — buttons, hero gradient
- Dark text: `#333`
- Page background: `#f8f9fa` (light gray)
- Nav hover highlight: `#FFEB3B` (yellow)

**Layout**: Product grid uses CSS `auto-fill` with `minmax(200px, 1fr)` for responsiveness.

When adding styles, add them to `src/index.css`. Do not create separate CSS files or introduce CSS modules unless explicitly asked.

---

## State Management

Only React's built-in `useState` is used. Currently, only `SignUp.js` uses local state (for form input and feedback message). There is no global state, no Context API, and no persistence across page navigations.

---

## npm Scripts

```bash
npm start    # Start dev server at http://localhost:3000
npm build    # Create production build in /build
```

No `test`, `lint`, or `format` scripts are configured.

---

## Development Workflow

### Running locally

```bash
npm install   # Install dependencies
npm start     # Start dev server
```

The app runs on `http://localhost:3000`.

### Making changes

1. Page-level components go in `src/pages/`
2. Shared data goes in `src/data/`
3. All styles go in `src/index.css`
4. New routes must be registered in `src/pages/App.js`

### No testing, linting, or formatting tools are configured

If tests are needed, the project uses Create React App so `npm test` (Jest + React Testing Library) works after installing `@testing-library/react`.

---

## Key Conventions

- **File structure**: Flat — all pages in `src/pages/`, no feature folders
- **Component style**: Functional components only, no class components
- **No prop-types**: No runtime type checking
- **No TypeScript**: Plain `.js` files throughout
- **Inline styles used sparingly**: Only in `App.js` nav links; prefer `index.css` for styling
- **No error boundaries**: No error handling wrappers
- **Form handling**: Controlled inputs via `useState` + `onChange`; no form library

---

## What Does NOT Exist Yet

The following are not implemented and would need to be built out for a production version:

- Backend API / server
- Database (PostgreSQL, MongoDB, etc.)
- Real authentication (JWT, sessions, OAuth)
- Email verification (actual `.edu` check is client-side only)
- Payment processing
- Data persistence
- Real product image hosting
- Error handling / loading states
- Testing (unit, integration, e2e)
- Linting (ESLint) and formatting (Prettier)
- CI/CD pipeline
- Docker / deployment configuration
- Environment variable usage

---

## Git

- **Development branch**: `claude/claude-md-mmk0992n21xyi2ni-UlF9W`
- **Remote**: `http://local_proxy@127.0.0.1:37603/git/RobFik/UniThrift`
- The `.env` file is gitignored (no `.env.example` exists yet)
