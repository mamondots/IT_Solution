import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ["var(--font-rajdhani)"],
        rubik: ["var(--font-rubik)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
