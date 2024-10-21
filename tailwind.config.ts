import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'badge-back': '#eef2ff',
        active: '#3c59fc',
        'badge-border': '#1d4eff',
        'nav-back': '#161616',
        submenu: '#616161',
        'submenu-hover': '#dfdfdf',
        homeBg: '#531889',
        'footer-title': '#aaa',
        bg: '#f6f7fb',
        color: '#313131',
        color2: '#6366f1'
      },
      height: {
        0.5: '0.125rem'
      },
      backgroundImage: {
        hero: 'radial-gradient(120% 210% at 95% 0px, #531889 10%, #000 70%)'
      },
      maxWidth: {
        1170: '1170px'
      },
      screens: {
        xs: '445px'
      },
      spacing: {
        18: '4.5rem'
      }
    }
  },
  plugins: []
}
export default config
