import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f1115",
        foreground: "#d4d4d8",
        card: "#16181d",
        "card-foreground": "#d4d4d8",
        muted: "#1c1e24",
        "muted-foreground": "#71717a",
        border: "rgba(255,255,255,0.06)",
        primary: { DEFAULT: "#e85d04", foreground: "#fff" },
        secondary: { DEFAULT: "#1c1e24", foreground: "#d4d4d8" },
        accent: { DEFAULT: "#f48c06", foreground: "#fff" },
      },
      backgroundImage: {
        "gradient-conic": "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
