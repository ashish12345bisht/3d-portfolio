import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['bitmoji.jpg'],
      manifest: {
        name: '3d-Portfolio',
        short_name: '3d-Portfolio',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        lang: 'en',
        scope: '/',
        icons: [
          {
            src: '/bitmoji.jpg',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          }
        ],
        theme_color: '#ffffff',
      },
    }),
  ],
  server: {
    host: true
  }
})
