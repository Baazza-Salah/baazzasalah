import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				mono: ['Fira Code', 'Share Tech Mono', 'VT323', 'monospace'],
				sans: ['Source Code Pro', 'monospace'],
				hacker: ['Anonymous Pro', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				cyber: {
					green: '#4b91f1', /* Changed to blue */
					'dark-green': '#0a2342', /* Changed to dark blue */
					'dim-green': '#1e70e8', /* Changed to dimmed blue */
					'bright-green': '#72b1ff', /* Changed to bright blue */
					red: '#ff3e3e',
					dark: '#080808',
					darker: '#050505',
					navy: '#001a33', /* Adjusted to a blue-navy */
					muted: '#131323', /* Added blue tint */
					purple: '#800080',
					'dark-purple': '#330033',
					'bright-purple': '#bb86fc',
					blue: '#4b91f1',
					'dark-blue': '#0a2342',
					'bright-blue': '#72b1ff'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				glow: {
					'0%, 100%': { 
						textShadow: '0 0 5px rgba(75, 145, 241, 0.5), 0 0 10px rgba(75, 145, 241, 0.3)' 
					},
					'50%': { 
						textShadow: '0 0 10px rgba(75, 145, 241, 0.8), 0 0 20px rgba(75, 145, 241, 0.5)' 
					}
				},
				'data-flow': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(-20px)' }
				},
				'scan-line': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100%)' }
				},
				blink: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				},
				terminal: {
					'0%': { opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				typing: {
					from: { width: '0' },
					to: { width: '100%' }
				},
				'package-loading': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'matrix-fall': {
					'0%': { transform: 'translateY(-100%)', opacity: '1' },
					'100%': { transform: 'translateY(100%)', opacity: '0.3' }
				},
				'glitch-horizontal': {
					'0%': { transform: 'translateX(0)' },
					'2%': { transform: 'translateX(3px)' },
					'4%': { transform: 'translateX(-3px)' },
					'6%': { transform: 'translateX(3px)' },
					'8%': { transform: 'translateX(-3px)' },
					'10%': { transform: 'translateX(0)' }
				},
				'glitch-vertical': {
					'0%': { transform: 'translateY(0)' },
					'2%': { transform: 'translateY(2px)' },
					'4%': { transform: 'translateY(-2px)' },
					'6%': { transform: 'translateY(2px)' },
					'8%': { transform: 'translateY(-2px)' },
					'10%': { transform: 'translateY(0)' }
				},
				'noise': {
					'0%': { backgroundPosition: '0 0' },
					'100%': { backgroundPosition: '100% 100%' }
				},
				'radar-beam': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'flicker': {
					'0%, 100%': { opacity: '1' },
					'33%': { opacity: '0.9' },
					'66%': { opacity: '0.94' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				glow: 'glow 2s ease-in-out infinite',
				'data-flow': 'data-flow 20s linear infinite',
				'scan-line': 'scan-line 5s linear infinite',
				blink: 'blink 1s step-start infinite',
				'terminal-blink': 'terminal 1s infinite',
				'terminal-typing': 'typing 3.5s steps(40, end)',
				'package-load': 'package-loading 2s linear infinite',
				'matrix': 'matrix-fall 8s linear infinite',
				'glitch': 'glitch-horizontal 2s infinite, glitch-vertical 3s infinite',
				'noise': 'noise 8s infinite linear',
				'radar': 'radar-beam 4s infinite linear',
				'flicker': 'flicker 0.5s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
