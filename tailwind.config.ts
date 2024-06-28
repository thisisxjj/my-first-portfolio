import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'
import scrollbar from 'tailwind-scrollbar'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: 'var(--font-jetBrainsMono)',
      secondary: 'var(--font-robotoMono)',
    },
    extend: {
      colors: {
        primary: '#1c1c22',
        accent: {
          DEFAULT: '#00ff99',
          hover: '#00e187',
        },
        secondary: {
          DEFAULT: '#22c55e',
          hover: '#16a34a',
        },
      },
    },
  },
  plugins: [animate, scrollbar],
}
export default config
