# Blog task

This repository contains the source code for a blog task"

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

## Style Guide

The code is formatted using [Prettier](https://github.com/prettier/prettier).
[TypeScript](https://www.typescript.org/) is used for type checking.
[ESLint](https://eslint.org/) is used for linting.

Formating, types and linting are checked pre-commit by using [lint-staged](https://github.com/lint-staged/lint-staged) in pair with [Husky](https://github.com/typicode/husky).
