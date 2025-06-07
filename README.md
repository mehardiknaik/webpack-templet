# webpack-templet

A modern, customizable React + TypeScript starter template powered by Webpack 5. This template is designed for rapid development and production-ready builds, featuring CSS Modules, environment variable support, error boundaries, and more.

---

## Features

- **React 19 + TypeScript**: Latest React with full TypeScript support.
- **Webpack 5**: Optimized configuration for both development and production.
- **CSS Modules**: Scoped CSS with modular styles.
- **Environment Variables**: `.env` support with safe defaults and runtime config injection.
- **Error Boundaries**: Robust error handling for React components.
- **Code Splitting & Lazy Loading**: Efficient bundle sizes and fast load times.
- **Asset Handling**: Import images, fonts, and SVGs directly in your code.
- **Pre-configured ESLint & Prettier**: Consistent code style and linting.
- **Polyfills**: Out-of-the-box support for older browsers.
- **GitHub Actions**: CI/CD workflow for deploying to GitHub Pages.
- **Bundle Analyzer**: Visualize bundle content in production builds.

---

## Folder Structure

```
.
├── .babelrc
├── .env.defaults
├── .env.example
├── .gitignore
├── .prettierrc.json
├── eslint.config.mjs
├── package.json
├── README.md
├── tsconfig.json
├── webpack.config.common.ts
├── webpack.config.dev.ts
├── webpack.config.prod.ts
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .vscode/
│   └── settings.json
├── public/
│   ├── config.js
│   └── react.svg
├── src/
│   ├── App.module.css
│   ├── App.tsx
│   ├── declarations.d.ts
│   ├── index.css
│   ├── index.html
│   ├── index.tsx
│   ├── polyfills.ts
│   ├── assets/
│   │   ├── Sohne.woff2
│   │   └── webpack.png
│   └── components/
│       ├── Counter.module.css
│       ├── Counter.tsx
│       ├── DemoError.tsx
│       └── ErrorBoundary.tsx
```

---

## Getting Started

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Start development server:**

   ```sh
   npm start
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

---

## Environment Variables

- Copy `.env.example` to `.env` and adjust as needed.
- Runtime config can be set in `public/config.js`.

---

## Scripts

- `npm start` – Start the dev server with hot reload.
- `npm run build` – Build for production.
- `npm run lint` – Run ESLint.
- `npm run lint:fix` – Fix lint errors.

---

## License

[ISC](LICENSE)
