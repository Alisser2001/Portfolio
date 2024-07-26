/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
    },
  },
  plugins: [],
}

