/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-red": "#E50914",
        "brand-dark": "#141414",
      },
    },
  },
  plugins: [],
};
