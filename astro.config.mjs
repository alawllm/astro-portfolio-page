import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  // ...
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@layouts': '/src/layouts',
        '@components': '/src/components',
        '@pages': '/src/pages',
        '@assets': '/src/assets',
        '@utils': '/src/utils',
      },
    },
  },
})
