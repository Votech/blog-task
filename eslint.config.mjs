import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'prettier',
      'plugin:import/recommended',
      'plugin:import/typescript',
    ],
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      'eol-last': ['error', 'always'],
      'no-console': 'warn',
      eqeqeq: 'error',
      'import/newline-after-import': ['error', { count: 1 }],
    },
  }),
];

export default eslintConfig;
