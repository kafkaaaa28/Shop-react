/**  @type {import('tailwindcss').Config} */
const flowbite = require('flowbite-react/tailwind');
module.exports = {
  content: [flowbite.content(), './index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    darkMode: 'class',
    extend: {
      colors: {},
    },
  },
  plugins: [flowbite.plugin()],
};
