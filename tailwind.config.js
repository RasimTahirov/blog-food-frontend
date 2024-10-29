/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        headerDesktop:
          "url('./public/assets/header-backrorund/foodiesfeed.com_grapefruit-slices-pattern.jpg')",
      },
      colors: {
        buttonColorRed: '#4c1d1d',
        buttonColorWhite: '#fff',
      },
    },
  },
  plugins: [],
};
