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
        'light-periwinkle': '#eef2ff',
        'vibrant-blue': '#3c59fc',
        'royal-blue': '#1d4eff',
        'deep-charcoal': '#161616',
        'neutral-gray': '#616161',
        'soft-silver': '#dfdfdf',
        'royal-purple': '#531889',
        'muted-gray': '#aaa',
        'soft-alabaster': '#f6f7fb',
        'dark-smoke': '#313131',
        'lavender-blue': '#6366f1'
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
