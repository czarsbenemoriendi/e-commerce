import defaultTheme from 'tailwindcss/defaultTheme'

import type { Config } from 'tailwindcss'

const sansSerif = 'sans-serif'

export default {
  content: ['./src/**/*.vue'],
  theme: {
    extend: {
      colors: {
        buttonType: '#FE724C',
      },
      fontFamily: {
        Roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        NunitoSans: ['NunitoSans', sansSerif],
        NunitoSansBold: ['NunitoSansBold', sansSerif],
        NunitoSansSemiBold: ['NunitoSansSemiBold', sansSerif],
      },
    },
  },
} satisfies Config
