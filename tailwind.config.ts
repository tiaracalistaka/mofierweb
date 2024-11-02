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
        primary: '#C9635F', 
        secondary: '#424428',
        red: '#892c27',
        dark: '#100909',
        light: '#f9f9f9',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
export default config;
