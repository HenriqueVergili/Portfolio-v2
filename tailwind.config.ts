import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require('taos/plugin')
  ],

  theme: {
    safelist: [
      'animate-[fly-in-right_1s_ease-in-out]',
      '!duration-[0ms]',
      '!delay-[0ms]',
      'html.js :where([class*="taos:"]:not(.taos-init))'
    ],
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center:true,
      },
      animation: {
        'spin': 'spin 10s linear infinite ',
        'slidein': "slidein 1s ease var(--slidein-delay, 0) forwards",
      }
    },
  },
};
export default config;
