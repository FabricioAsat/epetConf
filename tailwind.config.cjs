module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				inter: ["Inter", "sans-serif"],
				cursive: ["Dancing Script", "sans-serif"],
			},

			colors: {
				"bg-color": "#07090c",
				"bg-color-2": "#16191b",

				"primary-color": "#0099ff",
				"secondary-color": "#035b96",
				"third-color": "#121f3d",
				"fourth-color": "#fafafa",

				"op-primary-color": "#0f172a93",
				"op-secondary-color": "#7dd3fc93",
				"gray-color": "#d1d5db",
			},
		},
	},
	plugins: [],
};

// "primary-color": "#0099ff",
// "secondary-color": "#035b96",
// "third-color": "#121f3d",
// "fourth-color": "#fafafa",

// "op-primary-color": "#0f172a93",
// "op-secondary-color": "#7dd3fc93",
// "gray-color": "#d1d5db",

// {
//   "primary-color": "var(--primary-color)",
//   "secondary-color": "var(--secondary-color)",
//   "third-color": "var(--third-color)",
//   "fourth-color": "var(--fourth-color)",
//   "op-primary-color": "var(--op-primary-color)",
//   "op-secondary-color": "var(--op-secondary-color)",
//   "gray-color": "var(--gray-color)",
// }
