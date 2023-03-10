/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
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
		{ pattern: /border-\w+/ },
		{ pattern: /hover\:[\S]+/ },
	],
}
