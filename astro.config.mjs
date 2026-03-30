import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://tigerandrune.dev',
  vite: {
    server: {
      allowedHosts: ['tigerandrune.dev'],
    },
  },
});
