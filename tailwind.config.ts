import { type Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: ["./src/**/*.tsx"],
  safelist: [],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        xxs: ["0.5rem", "0.75rem"],
      },

      animation: {
        wave: "wave 5s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "nav-line-expand": "nav-line-expand 1.3s ease-in-out",
      },
      keyframes: {
        wave: {
          "0%": { transform: "translate(-50px, 50px) rotate(-45deg)" },
          "100%": { transform: "translate(105vw, -105vh) rotate(-45deg)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "nav-line-expand": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(100%)" },
        },
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(ellipse at center, transparent 0%, #000 100%)",
        wave: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0))",
        "lines-inverted":
          'url("../../public/images/lines-diagonal-transparent.png")',
        "nier-border": 'url("../../public/design/border-nier.svg")',
      },
      colors: {
        nier: {
          200: "#DCD8C0",
          300: "#D1CDB7",
          350: "#CCC8B1",
          400: "#BAB5A1",
          700: "#454138",
        },
      },
      fontFamily: {
        helvetica: ["Helvetica", "Arial", ...defaultTheme.fontFamily.sans],
        "exodus-regular": [
          "var(--font-exodus-regular)",
          ...defaultTheme.fontFamily.serif,
        ],
        "exodus-sharpen": [
          "var(--font-exodus-sharpen)",
          ...defaultTheme.fontFamily.serif,
        ],
        "exodus-stencil": [
          "var(--font-exodus-stencil)",
          ...defaultTheme.fontFamily.serif,
        ],
        "exodus-striped": [
          "var(--font-exodus-striped)",
          ...defaultTheme.fontFamily.serif,
        ],
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    require("tailwindcss-animated"),
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config
