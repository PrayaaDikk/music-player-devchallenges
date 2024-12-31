/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
			colors: {
				primary: "#C93B76",
				secondary: "#2A2335",
				whiteTheme: "#E5E7EB",
				grayTheme: "#4D5562",
			},
		},
	},
	plugins: [],
};
