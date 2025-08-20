import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2D7970',
        },
      },
      fontFamily: {
        sans: ['"Franklin Gothic Medium"', '"Franklin Gothic"', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
