# North Code Solutions

North Code Solutions is a service website for practical website builds, custom APIs, and webhook automation for small-business workflows.

## Services

- Website builds for clear offers, lead capture, booking, quotes, and intake flows
- Custom APIs for portals, dashboards, forms, internal tools, and connected data
- Webhook automation for notifications, task creation, record updates, and follow-up workflows

## Tech Stack

- React
- TypeScript
- Vite
- CSS

## Local Development

Install dependencies:

```sh
npm install
```

Start the dev server:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Run lint checks:

```sh
npm run lint
```

## Deployment

This repo includes a GitHub Pages workflow at:

```text
.github/workflows/deploy-pages.yml
```

After the project is pushed to GitHub, enable GitHub Pages for the repository and use GitHub Actions as the Pages source. The workflow builds the site and deploys the `dist` output.

## Project Structure

```text
src/
  App.tsx
  App.css
  index.css
  main.tsx
public/
  favicon.svg
  images/
    ncs-workflow-hero.png
```
