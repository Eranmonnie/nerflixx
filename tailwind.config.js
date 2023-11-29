/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily:{
        'nsans-light': ['Nsans Light'],
        'nsans-medium': ['Nsans Medium'],
        'nsans-bold': ['Nsans Bold'],
        'nsans-regular': ['Nsans Regular'],
      }
    },
  },
  
  plugins: [require('tailwind-scrollbar-hide')],
} 