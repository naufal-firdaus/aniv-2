/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "rgb(var(--color-cream-50) / <alpha-value>)",
          100: "rgb(var(--color-cream-100) / <alpha-value>)",
          200: "rgb(var(--color-cream-200) / <alpha-value>)",
          300: "rgb(var(--color-cream-300) / <alpha-value>)",
        },
        burgundy: {
          400: "rgb(var(--color-burgundy-400) / <alpha-value>)",
          600: "rgb(var(--color-burgundy-600) / <alpha-value>)",
          800: "rgb(var(--color-burgundy-800) / <alpha-value>)",
          900: "rgb(var(--color-burgundy-900) / <alpha-value>)",
        },
        gold: {
          400: "rgb(var(--color-gold-400) / <alpha-value>)",
          500: "rgb(var(--color-gold-500) / <alpha-value>)",
          600: "rgb(var(--color-gold-600) / <alpha-value>)",
        },
        rose: {
          200: "rgb(var(--color-rose-200) / <alpha-value>)",
          400: "rgb(var(--color-rose-400) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-italiana)", "serif"],
        serif: ["var(--font-cormorant)", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        "fade-up": "fadeUp 1s ease-out",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
