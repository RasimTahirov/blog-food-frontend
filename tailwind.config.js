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
      textColor: {
        textWhite: '#f8f9fa',
        textBlack: '#333333',
      },
      backgroundColor: {
        containerWhite: '#f3f3f3',
        containerNotification: '#e9f8eb',
        inputWhite: '#f3f3f3',
      },
      borderColor: {
        borderBlack: '#495057',
      },
      screens: {
        xs: '380px',
      },
      boxShadow: {
        posts: '1px 5px 11px 2px rgba(34, 60, 80, 0.25)',
      },
    },
  },
  plugins: [],
};
