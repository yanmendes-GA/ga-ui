/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.stories.{js,ts,jsx,tsx}",
    "./src/**/*.mdx",
  ],
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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(31 77% 47%)",
          400: "hsl(31 69% 58%)",
          300: "hsl(31 69% 68%)",
          200: "hsl(31 68% 79%)",
          100: "hsl(32 67% 89%)",
        },

        dark: {
          DEFAULT: "hsl(210 33% 9%)",
          500: "hsl(212 18% 17%)",
          400: "hsl(208 9% 27%)",
          300: "hsl(210 4% 45%)",
          200: "hsl(210 3% 64%)",
          100: "hsl(220 3% 82%)",
        },

        success: {
          DEFAULT: "hsl(130 77% 47%)",
          dark: "hsl(134 35% 17%)",
        },

        error: {
          DEFAULT: "hsl(0 69% 58%)",
          dark: "hsl(0 29% 18%)",
        },

        warning: {
          DEFAULT: "hsl(60 69% 68%)",
          dark: "hsl(60 34% 17%)",
        },

        info: {
          DEFAULT: "hsl(223 68% 79%)",
          dark: "hsl(222 37% 19%)",
        },
      },

      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}
