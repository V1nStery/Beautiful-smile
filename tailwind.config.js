/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/*.html", "./app/**/*.js", "./app/**/*.svg"],
  darkMode: "media",
  theme: {
    screens: {
      xxs: "375px",
      xs: "468px",
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      "2xl": "1280px",
      "3xl": "1550px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "8px",
        xs: "8px",
        sm: "8px",
        md: "12px",
        lg: "20px",
      },
    },
    safelist: [
      {
        pattern: /bg-\[url\(\.\//, // Разрешить произвольные URL
      },
    ],
    fontFamily: {
      "involve-700": "Involve-Bold",
      "involve-600": "Involve-SemiBold",
      "involve-500": "Involve-Medium",
      "involve-400": "Involve-Regular",
      "involve-700-o": "Involve-BoldOblique",
      "involve-600-o": "Involve-SemiBoldOblique",
      "involve-500-o": "Involve-MediumOblique",
      "involve-400-o": "Involve-Oblique",
    },

    extend: {
      colors: {
        accent: "#CC090A",
        primary: "#222222",
        white: "#FFFFFF",
        basic: "#00BDF8",
        body:"#2D2D2D",
        tertiary: "rgba(34, 34, 34, 0.7)",
        "border-divider": "rgba(34, 34, 34, 0.2)",

      },
      boxShadow: {
        "shadow-color": "2px 4px 25px rgba(0, 0, 0, 0.07)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1140px",
          },
          "@screen 2xl": {
            maxWidth: "1280px",
          },
          "@screen 3xl": {
            maxWidth: "1550px",
          },
        },
      });
    },
  ],
};
