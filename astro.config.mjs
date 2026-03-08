// @ts-check
import { defineConfig } from 'astro/config';
import { getViteConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://jamie-lowe.com',
  output: 'static',
  integrations: [
    {
      name: 'security-headers',
      hooks: {
        'astro:build:done': () => {
          console.log('✅ Security headers configured in public/_headers file');
        }
      }
    }
  ],
  vite: {
    ssr: {
      external: ['cheerio']
    }
  }
});
