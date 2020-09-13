const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        purple: {
          '100': '#f5e7fe',
          '200': '#eacefd',
          '300': '#e0b6fc',
          '400': '#d59dfb',
          '500': '#c16cf9',
          '600': '#ac3bf7',
          '700': '#8809dc',
          '800': '#6a07ab',
          '900': '#57068c',  
        },
        ui: {
          background: 'var(--color-ui-background)',
          sidebar: 'var(--color-ui-sidebar)',
          typo: 'var(--color-ui-typo)',
          primary: 'var(--color-ui-primary)',
          border: 'var(--color-ui-border)'
        }
      }
    }
  },
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js', './src/**/*.postcss']
}