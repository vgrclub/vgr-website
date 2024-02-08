import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '450px',
      },
      fontFamily: {
        sans: ['var(--font-commissioner)'],
        mono: ['var(--font-roboto-mono)'],
        // syne: ['var(--font-syne'],
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/grad-soft.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#f7ede2",
          "secondary": "#84a59d",
          "accent": "#ffcc80",
          "neutral": "#212529",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [daisyui],
}
export default config
