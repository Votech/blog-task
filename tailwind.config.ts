import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'category-blue': 'var(--category-blue)',
        'category-blue-dark': 'var(--category-blue-dark)',
        'category-orange': 'var(--category-orange)',
        'category-orange-dark': 'var(--category-orange-dark)',
        'category-red': 'var(--category-red)',
        'category-red-dark': 'var(--category-red-dark)',
        'category-green': 'var(--category-green)',
        'category-green-dark': 'var(--category-green-dark)',
        'silver-grey': 'var(--silver-grey)',
        'cold-blue': 'var(--cold-blue)',
        'violet-red': 'var(--violet-red)',
      },
      screens: {
        xs: '400px',
        xs2: '500px',
      },
    },
  },
  plugins: [],
} satisfies Config;
