/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        box: "8px 16px 90px -3px rgba(0,0,0,0.75)",
      },
      backgroundImage: {
        'hero': "url('https://preview.colorlib.com/theme/tralive/assets/img/hero/h1_hero1.png.webp')",
      }
    },
  },
  plugins: [],
};
