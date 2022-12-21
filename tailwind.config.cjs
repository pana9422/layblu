/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
	safelist: [
		{ pattern: /bg-\w+-\d+/ },
		{ pattern: /w-\d+/ },
		{ pattern: /h-\d+/ },
		{ pattern: /text-\w+/ },
		{ pattern: /fill-\w+/ },
	],
}
