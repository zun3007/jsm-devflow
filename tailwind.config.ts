import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '100': '#FFF1E6',
          '500': '#FF7000',
        },
        dark: {
          '100': '#000000',
          '200': '#0F1117',
          '300': '#151821',
          '400': '#212734',
          '500': '#101012',
        },
        light: {
          '400': '#858EAD',
          '500': '#7B8EC8',
          '700': '#DCE3F1',
          '800': '#F4F6F8',
          '850': '#FDFDFD',
          '900': '#FFFFFF',
        },
      },
      borderRadius: {
        '2': '8px',
        '1.5': '6px',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'light-100':
          '0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)',
        'light-200': '10px 10px 20px 0px rgba(218, 213, 213, 0.10)',
        'light-300': '-10px 10px 20px 0px rgba(218, 213, 213, 0.10)',
        'dark-100': '0px 2px 10px 0px rgba(46, 52, 56, 0.10)',
        'dark-200': '2px 0px 20px 0px rgba(39, 36, 36, 0.04)',
      },
      backgroundImage: {
        'auth-dark': 'url("/images/auth-dark.png")',
        'auth-light': 'url("/images/auth-light.png")',
      },
      screens: {
        xs: '420px',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        'space-grotesk': ['var(--font-space-grotesk)'],
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};

export default config;
