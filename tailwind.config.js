/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          200: '#ADD8E6',
          500: '#1876D1',
          900: '#214559',
        },
      },
    },
  },
  plugins: [],
};
