// import { defineConfig } from 'astro/config';

// import tailwind from "@astrojs/tailwind";

// // https://astro.build/config
// export default defineConfig({
//   integrations: [tailwind()]
// });



import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// export default /** @type {import('astro').AstroUserConfig} */ ({
  // Enable the Preact renderer to support Preact JSX components.
  // renderers: ['@astrojs/renderer-preact'],

export default defineConfig({

  integrations: [tailwind()],


  build: {
    site: 'https://ashsimmonds.github.io/', // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    // sitemap: true, // Generate sitemap (set to "false" to disable)
    // sitemapFilter: (page) => page !== 'https://ashsimmonds.github.io/homey/sitemap',
    format: 'file',
  },
});
