import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark:{
          1:'#1c1f2e',
          2:"#161925",
        },
        blue:{
          2:'#0e78f9',
        },
        backgroundImage:{
          hero:"url('/images/hero-background.png')"
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config