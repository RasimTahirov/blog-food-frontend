/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        headerDesktop:
          "url('./public/assets/header-background/foodiesfeed.com_grapefruit-slices-pattern.jpg')",
      },
      colors: {
        buttonColorRed: '#4c1d1d',
        buttonColorWhite: '#f3f3f3',
      },
      textColor: {
        textWhite: '#f8f9fa',
        textBlack: '#333333',
      },
      backgroundColor: {
        containerWhite: '#f3f3f3',
        containerNotification: '#e9f8eb',
      },
      borderColor: {
        borderBlack: '#495057',
      },
      borderRadius: {
        mdPlus: '10px',
      },
    },
  },
  plugins: [],
};
