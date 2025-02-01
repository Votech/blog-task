# Blog task

This repository contains the source code for a blog task.

## Demo

A live demo of the site can be viewed at [https://blog-task-weld.vercel.app](https://blog-task-weld.vercel.app).

## Node

This app depends on `node.js`. I recommend using v22, since it was used during the development. Consider using a Node version manager like [fnm](https://github.com/Schniz/fnm) or [NVM](https://github.com/nvm-sh/nvm).

## Installation

Clone this repository and run `npm install` to install JS dependencies.

## How to run it

Start the development server by running:

```bash
npm run dev
```

Once started, the application will be available at: [http://localhost:3000](http://localhost:3000)

## Testing

To execute unit tests, use:

Run all tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

## Style Guide

The code is formatted using [Prettier](https://github.com/prettier/prettier).
[TypeScript](https://www.typescript.org/) is used for type checking.
[ESLint](https://eslint.org/) is used for linting.

Formatting, types and linting are checked pre-commit by using [lint-staged](https://github.com/lint-staged/lint-staged) in pairs with [Husky](https://github.com/typicode/husky).

## Tech stack

- [Next.js](https://nextjs.org/): mainly chosen for speed of spinning up a React app. Although this project doesn't utilize the SSR capabilities, it still benefits from the Next.js router, compiler, and its environment. Additionally, the app is easy to deploy.
- [SWR](https://swr.vercel.app/): officially recommended way of fetching data in a Next.js app. Similar to React Query, but has fewer features.
- [lucide-react](https://lucide.dev/): icon library that is tree-shakeable, so only the icons that are imported are included in the final bundle.
- [Jest](https://jestjs.io/): widely used JavaScript testing library.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/): testing library for React. It renders React components as DOM elements, allowing for writing tests that are more aligned with how users interact with the UI.
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component): library used for handling infinite loading on scroll. It's widely used and very lightweight.
- [Zustand](https://zustand-demo.pmnd.rs/): a simple and minimalistic state management library. Additionally, it has some capabilities to avoid re-renders.
- [Embla Carousel](https://www.embla-carousel.com/): a lightweight and customizable carousel library. It's used as a foundation in some component libraries, like, for example, [shadcn/ui](https://ui.shadcn.com/).
- [Tailwind CSS](https://tailwindcss.com/): utility-first CSS framework. Very popular right now, it provides a very enjoyable development experience.

## Potential upgrades

- Improve performance:
  - Virtualize post list to avoid rendering all the posts at the same time.
  - Post list should be memoized when features are added that re-render the list redundantly.
- Implement CI/CD that run all tests and checks formatting, types and linting.
- Implement MSW for mocking API.
- Implement knip to detect unused code.
- Add ESLint rules that restricts imports to follow current file structure, by utilizing plugins like: eslint-plugin-boundaries.
