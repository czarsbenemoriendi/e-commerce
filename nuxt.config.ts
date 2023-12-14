import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader'

import { alias } from './alias.config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias,
  colorMode: {
    preference: 'light',
  },
  css: ['~/assets/css/main.css'],
  imports: {
    autoImport: false,
  },
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
  srcDir: 'src/',
  ssr: false,
  tailwindcss: {
    configPath: 'tailwind.config',
  },
  typescript: {
    shim: false,
  },
  vite: {
    plugins: [svgLoader()],
  },
  vue: {
    propsDestructure: true,
  },
})
