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

      boxShadow: {
        "button-primary": "0 6px 20px 0px hsl(var(--primary))",
      },

      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },

      fontSize: {
        h1: "5.050rem",
        h2: "3.850rem",
        h3: "2.950rem",
        h4: "2.250rem",
        h5: "1.700rem",
        h6: "1.300rem",
        body: "1.000rem",
        button: "0.900rem",
        label: "0.750rem",
        small: "0.750rem",
        caption: "0.600rem",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
} satisfies Config
