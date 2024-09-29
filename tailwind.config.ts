import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '3xl': '1700px',
      '2xl': '1500px',
      'laptop': "1400px",
      'xl': '1280px',
      'lg': '1024px',
      'tablet': '850px',
      'md': '768px',
      'sm': '640px',
      'phone': '450px'
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'light-text': '#676464',
      }
    },
    fontFamily: {
      lato: ['var(--font-lato)'],
    },
  },
  plugins: [],
}
export default config
