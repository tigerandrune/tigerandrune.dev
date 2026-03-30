/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rune: {
          bg: '#1a1a1f',
          surface: '#24242b',
          border: '#33333d',
          gold: '#D4A853',
          'gold-dim': '#A8853F',
          frost: '#7EB8DA',
          text: '#E8E4DF',
          muted: '#9A9590',
          warm: '#C4B5A0',
        },
      },
      fontFamily: {
        display: ['"EB Garamond"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
