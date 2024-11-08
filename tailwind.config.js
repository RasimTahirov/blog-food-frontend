/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        headerDesktop:
          "url('./public/assets/header-background/foodiesfeed.com_grapefruit-slices-pattern.jpg')",
        headerPhone:
          "url('./public/assets/header-background/foodiesfeed.com_nourishing-seeds.jpg')",
        authorization:
          "url('./assets/background/foodiesfeed.com_grapefruit-water-splash.jpg')",
        registration:
          "url('./assets/background/foodiesfeed.com_lemon-macro.jpg')",
      },
      colors: {
        buttonColorRed: '#4c1d1d',
        buttonColorWhite: '#fff',
        hoverButton: '#7391e6',
      },
      backgroundColor: {
        tests: '#e9f8eb',
      },
      screens: {
        xs: '380px',
      },
    },
  },
  plugins: [],
};
