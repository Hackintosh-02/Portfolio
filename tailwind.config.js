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
					DEFAULT: '#E1FF01', // Neon yellow (primary highlight color)
					foreground: '#000000' // Black (text color on primary background)
				},
				secondary: {
					DEFAULT: '#777778', // Dark gray (secondary background color)
					foreground: '#E1FF01' // Neon yellow (text color on secondary background)
				},
				third:{
					DEFAULT: '#151515', // Dark gray (secondary background color)
					foreground: '#FFFFFF' // White (text color on accent background)
				},
				background: '#1C1C1C', // Dark gray (overall page background)
				foreground: '#FFFFFF', // White (default text color)
				card: {
					DEFAULT: '#1E1E1E', // Slightly lighter dark gray (card background color)
					foreground: '#FFFFFF' // White (text color on cards)
				},
				border: '#2C2C2C', // Medium gray (border color for containers/cards)
				input: '#2C2C2C', // Medium gray (input field background color)
				ring: '#E1FF01', // Neon yellow (focus ring color)
				muted: {
					DEFAULT: '#3A3A3A', // Dark muted gray (muted background color)
					foreground: '#B3B3B3' // Light gray (text color on muted background)
				},
				accent: {
					DEFAULT: '#FFAA00', // Orange (accent color for buttons/links)
					foreground: '#FFFFFF' // White (text color on accent background)
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))', // Sidebar background (dynamic based on theme)
					foreground: 'hsl(var(--sidebar-foreground))', // Sidebar text color (dynamic based on theme)
					primary: 'hsl(var(--sidebar-primary))', // Sidebar primary highlight
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))', // Text color on primary highlight
					accent: 'hsl(var(--sidebar-accent))', // Sidebar accent color
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))', // Text color on accent
					border: 'hsl(var(--sidebar-border))', // Sidebar border color
					ring: 'hsl(var(--sidebar-ring))' // Sidebar focus ring
				}
			},
			fontFamily: {
				sans: [
					'Poppins', // Modern sans-serif font
					'sans-serif'
				]
			},
			spacing: {
				'72': '18rem', // Large spacing (e.g., for containers)
				'84': '21rem' // Extra-large spacing
			},
			borderRadius: {
				lg: 'var(--radius)', // Large border radius
				md: 'calc(var(--radius) - 2px)', // Medium border radius
				sm: 'calc(var(--radius) - 4px)' // Small border radius
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
