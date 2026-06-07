/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        almanac: {
          ink: '#211b17',
          plum: '#7d5863',
          rose: '#b98987',
          champagne: '#f5eee5',
          parchment: '#fff9f0',
          gold: '#b38a45',
          wood: '#5b3524',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Inter', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(33, 27, 23, 0.14)',
      },
    },
  },
  plugins: [],
};
