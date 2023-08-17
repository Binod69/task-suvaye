import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth: {
      container: '1440px',
      contentContainer: '1140px',
      containerSmall: '1024px',
      containerxs: '768px',
    },
    borderRadius: {
      footerRadius: '4.6875rem',
    },
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
      colors: {
        textDark: '#000',
        footerBg: '#3EBCF7',
        footerBg2: '#F1F4F7',
      },
    },
  },

  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
    darkTheme: 'light',
    base: false,
    utils: true,
  },
};
export default config;
