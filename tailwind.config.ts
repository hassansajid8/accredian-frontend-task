import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        '2xl': '0 0px 40px 0px rgba(0, 0, 0, 0.3)',
      }
    },
    colors: {
      'blue': {
        100: '#EEF5FF',
        300: '#e6f0fc',
        500: '#1A73E8',
        600: '#155cb9'
      },
      'white': '#FFFFFF',
      'black': '#000000',
      'black-100': '#00000041',
      'error': '#c50000',
      'success': '#4BB543',
    },
  },
  plugins: [],
};
export default config;
