/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
    "./app/**/*",
    "./components/**/*",
  ],
  theme: {
    extend: {
      fontFamily: {
        Alata: ["Alata-Regular"],
      },
    },
  },
  plugins: [],
};
