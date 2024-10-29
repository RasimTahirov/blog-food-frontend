/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('./public/assets/header-backrorund/foodiesfeed.com_grapefruit-slices-pattern.jpg')"
      },
      colors: {
        buttonColor: '#4c1d1d',
        buttonColor2: "#fff"
      }
    },
  },
  plugins: [
  ],
};
