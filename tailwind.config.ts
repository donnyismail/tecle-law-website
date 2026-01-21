import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['var(--font-dm-serif)', 'Georgia', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1E40AF',
          dark: '#1E3A8A',
        },
        secondary: {
          DEFAULT: '#D97706',
          dark: '#B45309',
        },
        success: {
          DEFAULT: '#059669',
          dark: '#047857',
        },
        navy: {
          DEFAULT: '#0F172A',
          light: '#334155',
        },
        gray: {
          light: '#F8FAFC',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
