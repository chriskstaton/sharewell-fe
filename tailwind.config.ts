import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
	content: [
		// "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			web: { max: "1799px" },
			tablet: { max: "1023px" },
			mobile: { max: "639px" },
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
				//TODO add roboto
			},
			colors: {
				whiteNeutral: "#FFF",
				purpleNeutral: "#687CEB",
				blackNeutral: "#292B2E",
				charcoalNeutral: "#4A4A52",
				greyAshNeutral: "#E5E7EB",
				buttonBackground: "rgba(50, 167, 173, 0.10)",
				buttonDisabled: "rgba(41, 43, 46, 0.20)",
			},
			lineHeight: {
				"140": "140%",
				"100": "100%",
			},
			letterSpacing: {
				mobileButtonSpacing: "0.5px",
				webButtonSpacing: "0.472px",
			},
			boxShadow: {
				custom: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", // Custom box shadow Desktop Modal 1
			},
		},
	},
	plugins: [],
};

export default config;
