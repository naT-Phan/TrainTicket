module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyx: ["DM Sans", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#0d6efd",
        zprimary: "#FF0000",
        border_opacity: "#fff",
        secondary: "#2e5979",
        primaryBg: "#F5F5F5",
        primaryBxg: "#F5F5F5",
        hong: "#000",

        // color for dark mode
        dark_primary_bg: "#121212",
        dark_primary_pnl: "#202124",
        dark_secondary_pnl: "#ccc",
        dark_input: "#282D32",
      },
    },
    screens: {
      "2xl": { max: "2235px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      ssm: { max: "450px" },
    },
    // fontSize: {
    //   base: "1.6rem",
    //   lg: "1.8rem",
    //   xl: "2rem",
    //   "2xl": "2.4rem",
    //   "3xl": "3rem",
    // },
  },
  plugins: [],
};
