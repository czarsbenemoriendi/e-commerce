import { resolve } from 'path'

import { defineConfig } from 'cypress'
import vitePreprocessor from 'cypress-vite'

export default defineConfig({
  downloadsFolder: 'test/cypress/downloads',
  e2e: {
    baseUrl: 'http://localhost:3000/',
    setupNodeEvents(on /*, config */) {
      on(
        'file:preprocessor',
        vitePreprocessor({
          configFile: resolve(__dirname, './test/cypress/vite.config.ts'),
          mode: 'development',
        }),
      )
    },
    specPattern: 'test/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'test/cypress/support/e2e.ts',
  },
  fixturesFolder: 'test/cypress/fixtures',
  screenshotsFolder: 'test/cypress/screenshots',
  video: false,
  videosFolder: 'test/cypress/videos',
  watchForFileChanges: false,
})
