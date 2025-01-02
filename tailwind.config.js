/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',  // Include all pages
    './components/**/*.{js,ts,jsx,tsx}', 
    './pages/**/*.{js,ts,jsx,tsx}',
    "./src/**/*.{js,jsx,ts,tsx}", // Include all components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
