import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'SF Pro Text', 'Inter', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#e0f2ff',
          100: '#b3dcff',
          200: '#80c4ff',
          300: '#4dabff',
          400: '#1a93ff',
          500: '#0079e6',
          600: '#005eb4',
          700: '#004482',
          800: '#002a51',
          900: '#001221'
        }
      }
    }
  },
  plugins: []
};

export default config;


