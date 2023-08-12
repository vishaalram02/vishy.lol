/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			'2xl': { max: '1535px' },
			xl: { max: '1279px' },
			lg: { max: '1023px' },
			md: { max: '767px' },
			sm: { max: '639px' }
		},
		extend: {
			fontFamily: {
				overfont: ['overfont'],
				mabry: ['mabry']
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
