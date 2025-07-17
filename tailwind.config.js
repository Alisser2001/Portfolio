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
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
        blue: {
          400: "#60a5fa",
          500: "#3b82f6",
        },
      },
    },
  },
  plugins: [],
}

