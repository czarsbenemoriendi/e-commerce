import { defineConfig } from 'vite'

import { cypressAliases } from '../../alias.config'

export default defineConfig({
  resolve: {
    alias: cypressAliases,
  },
})
