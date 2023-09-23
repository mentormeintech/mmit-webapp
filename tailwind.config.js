// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
<<<<<<< HEAD
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: { },
	extend: {
		backgroundImage: {
			"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			"gradient-conic":
				"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
		},
	},
	plugins: [],
=======
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
      screens: {
      'xs': '395px',
      ...defaultTheme.screens,
    },
  },
  extend: {},
  plugins: [],
>>>>>>> master
};
