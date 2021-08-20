module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: "#ff7a7a",
        green: "#38cc8c",
        blue: { DEFAULT: "#6055a5", dark: "#3e3c49", grayish: "#b9b6d3" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
