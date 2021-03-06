// module.exports = {
// 	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [],
// }


//https://themes.ionevolve.com/

module.exports = {
	content: [
	  './public/**/*.html',
	  './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
	  // "tailwind.config.cjs",
	],
	theme: {
	  extend: {
		backdropBrightness: {
		  25: '.25',
		},
		colors: require('daisyui/src/colors'),
	  },
	},
	plugins: [
	  require('@tailwindcss/typography'),
	  require('daisyui'),
	  // ...
	],
	daisyui: {
	  styled: true,
	  base: true,
	  utils: true,
	  logs: true,
	  rtl: false,
	  themes: [
		'light',
		'dark',
		// "cupcake",
		// "bumblebee",
		// "emerald",
		// "corporate",
		// "synthwave",
		// "retro",
		// "cyberpunk",
		// "valentine",
		// "halloween",
		// "garden",
		// "forest",
		// "aqua",
		// "lofi",
		// "pastel",
		// "fantasy",
		// "wireframe",
		// "black",
		// "luxury",
		// "dracula",
		// "cmyk",
		{
		  bluedwarfdark: {
			body: {
			  fontFamily: 'Inter',
			  // "fontSize": "3rem",
			  // "font-family": "Open Sans",
			  // "fontFamily": "Saira Condensed",
			  // "font-size": "24px",
			},
			'h1, h2, h3, h4, h5, h6': {
			  'font-family': 'Orbitron',
			  'text-shadow': '0 0 10px cyan',
			},
			'h2': {
			  'font-size': '1.2rem',
			  'margin-top': '26px',
			},
			primary: '#00d500',
			'primary-focus': '#33ff33',
			'primary-content': '#1b1c22',
			secondary: '#8e01e2',
			'secondary-focus': '#b030fe',
			'secondary-content': '#1b1c22',
			accent: '#d56a00',
			'accent-focus': '#ff9326',
			'accent-content': '#1b1c22',
			neutral: '#9ab6bb',
			'neutral-focus': '#c0d3ff',
			'neutral-content': '#1b1c22',
			'base-100': '#060820',
			'base-200': '#091030',
			'base-300': '#112040',
			'base-content': '#8df2f2',
			info: '#0000ff',
			success: '#00ff00',
			warning: '#ff8000',
			error: '#ff0000',
			'--border-color': 'var(--b3)',
			'--rounded-box': '0.2rem',
			// "--rounded-btn": "20px 0 20px 0",
			'--rounded-btn': 'mask mask-hexagon',
			// "--rounded-btn": "1px",
			'--rounded-badge': '0.2rem',
			'--animation-btn': '0.25s',
			'--animation-input': '.2s',
			'--btn-text-case': 'uppercase',
			'--btn-focus-scale': '0.95',
			'--navbar-padding': '1.5rem',
			'--border-btn': '1px',
			'--tab-border': '1px',
			'--tab-radius': '0.2rem',
  
			'*': {
			  'border-color': 'var(--border-color) !important',
			  '--tw-border-opacity': '1 !important',
			  '--tw-text-opacity': '1 !important',
			  '--tw-shadow': '0 0 0 1px var(--border-color) !important',
			},
		  },
		},
	  ],
	},
  };
  