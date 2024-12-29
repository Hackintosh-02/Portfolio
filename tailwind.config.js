/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"], // Enables class-based dark mode
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
    	extend: {
    		colors: {
    			primary: {
    				DEFAULT: '#E1FF01',
    				foreground: '#000000'
    			},
    			secondary: {
    				DEFAULT: '#1C1C1C',
    				foreground: '#E1FF01'
    			},
    			background: '#1C1C1C',
    			foreground: '#FFFFFF',
    			card: {
    				DEFAULT: '#1E1E1E',
    				foreground: '#FFFFFF'
    			},
    			border: '#2C2C2C',
    			input: '#2C2C2C',
    			ring: '#E1FF01',
    			muted: {
    				DEFAULT: '#3A3A3A',
    				foreground: '#B3B3B3'
    			},
    			accent: {
    				DEFAULT: '#FFAA00',
    				foreground: '#FFFFFF'
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		},
    		fontFamily: {
    			sans: [
    				'Poppins',
    				'sans-serif'
    			]
    		},
    		spacing: {
    			'72': '18rem',
    			'84': '21rem'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
};
