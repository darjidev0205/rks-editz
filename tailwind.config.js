/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0D0E10",
          secondary: "#17191C",
        },
        surface: {
          DEFAULT: "#202226",
          elevated: "#292C30",
        },
        primary: {
          DEFAULT: "#F4F3EF",
          button: "#E8E7E3",
          hover: "#D4D3CF",
          dark: "#111214",
        },
        secondary: {
          DEFAULT: "#A5A7AA",
        },
      },
      borderColor: {
        subtle: "rgba(255, 255, 255, 0.12)",
      },
      fontFamily: {
        geist: ["Geist", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        inter: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.18em",
        tightest: "-0.04em",
      },
      borderRadius: {
        card: "14px",
      },
    },
  },
  plugins: [],
};
