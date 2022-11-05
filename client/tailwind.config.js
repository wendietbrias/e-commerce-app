/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        title: "#2D2D2D",
        body: "#727272",
        input: "#dfdfdf",
        button: "#197A09",
        wrapper: "rgba(10,10,10,0.4)",
      },
    },
  },
  plugins: [],
};
