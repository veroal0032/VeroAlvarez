import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FAFAF7',
        main: '#333333',
        accent: {
          yellow: '#F5E642',
          green: '#B8F0B0',
          blue: '#C2E0FF',
        },
      },
      fontFamily: {
        grotesque: ['var(--font-darker-grotesque)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
