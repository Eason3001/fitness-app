import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

import type { Plugin } from 'vite'

function mobileconfigMimePlugin(): Plugin {
  return {
    name: 'mobileconfig-mime',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.endsWith('.mobileconfig')) {
          res.setHeader('Content-Type', 'application/x-apple-aspen-config')
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    mobileconfigMimePlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: '健身饮食助手',
        short_name: '健身助手',
        theme_color: '#4F46E5',
        background_color: '#F9FAFB',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
    }),
  ],
  base: './',
})
