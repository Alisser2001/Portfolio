/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(-25px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        "fade-bottom-y": {
          "0%": { opacity: 0, transform: "translateY(25px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        "fade": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-up-1": "fade-up .3s linear",
        "fade-up-2": "fade-up .4s linear",
        "fade-up-3": "fade-up .5s linear",
        "fade-up-4": "fade-up .6s linear",
        "fade-up-5": "fade-up .7s linear",
        "fade-bottom-y-1": "fade-bottom-y .3s linear forwards",
        "fade-bottom-y-2": "fade-bottom-y .5s linear forwards",
        "fade-bottom-y-3": "fade-bottom-y .7s linear forwards",
        "fade-bottom-y-4": "fade-bottom-y .9s linear forwards",
        "fade-bottom-y-5": "fade-bottom-y 1.1s linear forwards",
        "fade-1": "fade .7s linear forwards"
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "Fira Code", "monospace"],
      },
      colors: {
        background: "#161616",
        gray: {
          900: "#0a0a0a",
          800: "#1a1a1a",
          700: "#2a2a2a",
          600: "#3a3a3a",
          500: "#4a4a4a",
          400: "#6a6a6a",
          300: "#8a8a8a",
          200: "#aaaaaa",
          100: "#cccccc",
        },
      },
    },
  },
  plugins: [],
}
