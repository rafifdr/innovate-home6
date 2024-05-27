/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      primary: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        brand: "#1BBF00",
        primary: "#141135",
        secendary: "#726E9E",
      },
    },
  },
  plugins: [],
};
