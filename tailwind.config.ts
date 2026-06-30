import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        blush: { 50: "#fff7fa", 100: "#ffe8f0", 200: "#ffc9dc", 300: "#ff9fc0", 500: "#ec5f94", 700: "#b92d64" },
        ink: "#1f1f2b"
      },
      boxShadow: { soft: "0 18px 45px rgba(31, 31, 43, 0.08)" }
    }
  },
  plugins: []
};
export default config;
