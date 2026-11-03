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
        cream: {
          DEFAULT: "#F7F6F0",
          secondary: "#EDF2E9",
          tint: "#F0EFE8",
        },
        sage: {
          light: "#EDF2E9",
          DEFAULT: "#DDE9D7",
          dark: "#C3D4BC",
        },
        forest: {
          light: "#2A4337",
          DEFAULT: "#1E3027",
          dark: "#14221B",
          deep: "#0F1914",
        },
        typography: {
          primary: "#222A25",
          secondary: "#69736B",
          muted: "#88948B",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          card: "#FFFFFF",
          elevated: "#EDF2E9",
          dark: "#18191C",
        },
      },
      borderColor: {
        sage: "#DDE9D7",
        subtle: "rgba(30, 48, 39, 0.08)",
        forest: "rgba(30, 48, 39, 0.16)",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        geist: ["Geist", "sans-serif"],
        inter: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.18em",
        tightest: "-0.04em",
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  plugins: [],
};
