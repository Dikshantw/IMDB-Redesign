/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Tprimary: "#c3c3c3",
        Tsecondary: "#797979",
        Bgsecondary: "#1a1a1a",
        Bgprimary: "#0e0e0e",
        Bgnav: "#080808",
      },
    },
  },
  plugins: [],
};
