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
        obsidian: "#101214",
        surface: {
          DEFAULT: "#121416",
          dim: "#121416",
          bright: "#38393c",
          lowest: "#0c0e10",
          low: "#1a1c1e",
          container: "#1e2022",
          high: "#282a2c",
          highest: "#333537",
        },
        graphite: "#1C2022",
        elevated: "#25292B",
        sage: {
          DEFAULT: "#C4D6C6",
          light: "#E0F2E2",
          radiance: "#DCE8DD",
          dark: "#4D5D51",
        },
        ivory: "#F5F3ED",
        silver: "#A3AAA9",
        editorial: {
          bg: "#ECECE6",
          text: "#171A19",
          border: "rgba(20, 25, 22, 0.12)",
        },
        outline: {
          DEFAULT: "#8d928c",
          variant: "#434843",
        },
        "on-surface": "#e2e2e5",
        "on-surface-variant": "#c3c8c1",
        "primary-container": "#c4d6c6",
        "on-primary-fixed": "#101f15",
      },
      fontFamily: {
        geist: ["Geist", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.18em",
        tighter: "-0.04em",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
