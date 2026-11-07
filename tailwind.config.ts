import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "strawberry-red": "#C62828",
        "deep-crimson": "#45080E",
        "glow-gold": "#F5C77E",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 42px rgba(239, 58, 82, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
