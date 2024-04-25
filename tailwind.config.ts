import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        }
      },
      animation: {
        lines: "line 1s ease-in-out forwards"
      }
    },
  },
  plugins: [],
};
export default config;
