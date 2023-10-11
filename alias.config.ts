import { resolve } from 'path'

export const alias = {
  '@blocks': resolve(__dirname, './src/blocks'),
  '@components': resolve(__dirname, './src/components'),
  '@composables': resolve(__dirname, './src/composables'),
  '@config': resolve(__dirname, './src/config'),
  '@core': resolve(__dirname, './src/core'),
  '@cypress': resolve(__dirname, './test/cypress'),
  '@data': resolve(__dirname, './test/cypress/fixtures'),
  '@stores': resolve(__dirname, './src/stores'),
  '@types': resolve(__dirname, './src/types'),
  '@utils': resolve(__dirname, './src/utils'),
}

export const cypressAliases = {
  ...alias,
  '@': resolve(__dirname, './src'),
}
