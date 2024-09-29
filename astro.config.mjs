import { defineConfig, passthroughImageService } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  // ...
  integrations: [tailwind()],
  vite: {
    resolve: {},
  },
})
