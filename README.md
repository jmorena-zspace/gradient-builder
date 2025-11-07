# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Setup Instructions

1. Push this repository to GitHub
2. Go to your repository settings on GitHub
3. Navigate to **Settings** → **Pages**
4. Under **Source**, select **GitHub Actions**
5. The GitHub Actions workflow will automatically deploy your site when you push to the `main` branch

### Manual Deployment

If you prefer to deploy manually, you can use:

```bash
npm run deploy
```

Note: This requires the `gh-pages` package to be installed. If it's not installed, run:
```bash
npm install --save-dev gh-pages
```

### Custom Domain

If your repository name is different from `zc-sidepeek`, update the `base` path in `vite.config.js` to match your repository name, or set the `VITE_BASE_PATH` environment variable during build.

The site will be available at: `https://[your-username].github.io/[repository-name]/`
