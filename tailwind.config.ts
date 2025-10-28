import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
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
          DEFAULT: "hsl(var(--primary))",
          400: "hsl(var(--primary-400))",
          300: "hsl(var(--primary-300))",
          200: "hsl(var(--primary-200))",
          100: "hsl(var(--primary-100))",
        },

        dark: {
          DEFAULT: "hsl(var(--dark))",
          500: "hsl(var(--dark-500))",
          400: "hsl(var(--dark-400))",
          300: "hsl(var(--dark-300))",
          200: "hsl(var(--dark-200))",
          100: "hsl(var(--dark-100))",
        },

        success: {
          DEFAULT: "hsl(var(--success))",
          dark: "hsl(var(--success-dark))",
        },

        error: {
          DEFAULT: "hsl(var(--error))",
          dark: "hsl(var(--error-dark))",
        },

        warning: {
          DEFAULT: "hsl(var(--warning))",
          dark: "hsl(var(--warning-dark))",
        },

        info: {
          DEFAULT: "hsl(var(--info))",
          dark: "hsl(var(--info-dark))",
        },
      },

      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
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
} satisfies Config
