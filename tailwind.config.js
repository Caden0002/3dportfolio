/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {



      screens: {
        'sm': '768px',
        'md': '1024px',
        'lg': '1280px',
        'xl': '1400px',
        '2xl': '1900px',
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'sans-serif'],

      },

      colors: {
        // Define your color variables here
        textColorPrimary: '#ffffff',
        textColorSecondary: '#8892af',
        textColorTertiary:  '#62FAD7',
        backgroundColorPrimary: '#000000',
        backgroundColorSecondary: '#0a1930',
        backgroundColorTertiary: '#151030',
        // backgroundColorQuaternary: '#F6F6EB',

      },

    },
  },
  plugins: [],
};
