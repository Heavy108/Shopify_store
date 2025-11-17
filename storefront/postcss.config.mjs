// postcss.config.mjs
import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";


const config = {
  plugins: {
    "@tailwindcss/postcss": {
      content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      future: {
        hoverOnlyWhenSupported: true,
      },
      plugins: [typography, containerQueries],
    },
    
  },
};

export default config;
