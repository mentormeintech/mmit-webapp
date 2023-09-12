// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#F89878",
        },
        secondary: {
          200: "#F1F9FF",
          500: "#0F88D9",
        },
      },
      backgroundImage: {
        "hero-bg": "url('/images/hero-bg.jpg')",
      },
    },
  },

  plugins: [],
};
