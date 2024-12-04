import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

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

  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        ".text-stroke-1": {
          "-webkit-text-stroke-width": "1px",
        },
        ".text-stroke-2": {
          "-webkit-text-stroke-width": "2px",
        },
        ".text-stroke-black": {
          "-webkit-text-stroke-color": "#0037EB",
        },
        ".text-stroke-white": {
          "-webkit-text-stroke-color": "#fff",
        },
      };

      addUtilities(newUtilities, {
        respectPrefix: true,
        respectImportant: true, // Optional, enables !important where needed
      });
    },
  ],
} satisfies Config;
