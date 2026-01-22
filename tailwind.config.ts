import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // Bright blue
          dark: '#1E40AF',
        },
        secondary: {
          DEFAULT: '#F59E0B', // Bright orange/gold
          dark: '#D97706',
        },
        success: {
          DEFAULT: '#22C55E', // Bright green
          dark: '#16A34A',
        },
        navy: {
          DEFAULT: '#1E293B',
          light: '#475569',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
