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
        buttonWhite: '#f8f9fa',
        buttonRed: '#943e32',
      },
      textColor: {
        textWhite: '#f8f9fa',
        textBlack: '#333333',
        textRed: '#ff4d42',
      },
      backgroundColor: {
        containerWhite: '#f3f3f3',
        containerNotification: '#e9f8eb',
      },
      borderColor: {
        borderBlack: '#495057',
        borderWhite: '#e5e7eb',
        borderRed: '#b66055',
      },
      borderRadius: {
        mdPlus: '10px',
      },
      boxShadow: {
        custom: '0px 0px 0px 2px rgba(182, 96, 85, 0.2)',
        hoverCard: '0px 0px 7px 5px rgba(182, 96, 85, 0.2)',
      },
    },
  },
  plugins: [],
};
