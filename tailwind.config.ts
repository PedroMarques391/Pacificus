import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "BannerHome" : 'url("/banners/BannerHome.png")',
          "BannerArea" : 'url("/banners/BannerArea.png")',
          "BannerTeam" : 'url("/banners/BannerTeam.png")',
          "BannerContact" : 'url("/banners/BannerContact.png")',
          "BannerEthics" : 'url("/banners/BannerEthics.png")',
          "BannerHomeWhite" : 'url("/banners/BannerHomeWhite.png")',
          "BannerAreaWhite" : 'url("/banners/BannerAreaWhite.png")',
          "BannerTeamWhite" : 'url("/banners/BannerTeamWhite.png")',
          "BannerContactWhite" : 'url("/banners/BannerContactWhite.png")',
          "BannerEthicsWhite" : 'url("/banners/BannerEthicsWhite.png")',
      },
      colors: {
        "light-100": "#FFFFFF",
        "light-200": "#808080 ",
        "light-300": "#E0F2F1 ",
        "light-400": "#F9F5E1 ",
        "light-500": "#EBF5E1 ",
        "light-600": "#FFF8DC",
        "light-700": "#F0F8FF ",
        "light-800": "#FFFFF0 ",
      },
      keyframes: {
        line: {
          "0%": {"width": "0"},
          "100%": {"width": "100%"},
        },
        shake: {
          "0%, 100%" : {transform: "translateX(0)"},
          "25%, 75%": {transform: "translateX(-5px)"},
          "50%": {transform: "translateX(5px)"},
        }
      },
      animation: {
        lines: "line 1s ease-in-out forwards",
        shakeInput: "shake 1s ease-in-out"
      }
    },
  },
  plugins: [],
};
export default config;
