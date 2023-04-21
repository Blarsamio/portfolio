/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/views/**/*.{html,html.erb,erb}',
    './app/javascript/components/**/*.js',
    './app/javascript/components/**/*.jsx',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
        blue: '#406aff',
        ocean: '#3bace2',
        purple: '#b936ee',
        pink : '#ff56f6',
      },
      backgroundImage: {
        site: "url('app/assets/images/site-bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
