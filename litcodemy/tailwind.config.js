/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      animation: {
        'pulse-slow': 'pulse 5s ease-in-out infinite',
      },
      colors: {
        primary: '#1E90FF',
        secondary: '#32CD32',
        lightBlue: '#E0F7FF',
        darkGreen: '#228B22',
        accent: '#FFD700'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
    
  },
  plugins: [require("tailwindcss-animate")]

}