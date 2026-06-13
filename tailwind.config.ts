import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        void: "#050508",
        ink: "#0C0C14",
        surface: "#12121C",
        border: "#1E1E2E",
        muted: "#2A2A3E",
        electric: "#6C63FF",
        cyan: "#00D4FF",
        ghost: "#8585A4",
        silver: "#C4C4D4",
        snow: "#F0F0FA",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "spin-reverse": "spin-reverse 14s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        blink: "blink 1s ease-in-out infinite",
        scan: "scan 4s linear infinite",
        "ping-slow": "ping 2s cubic-bezier(0,0,0.2,1) infinite",
      },
      keyframes: {
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scan: {
          "0%": { top: "-4px" },
          "100%": { top: "100%" },
        },
      },
      backgroundImage: {
        "electric-gradient": "linear-gradient(135deg, #6C63FF 0%, #00D4FF 100%)",
        "void-gradient": "radial-gradient(ellipse at 50% 0%, rgba(108,99,255,0.15) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
