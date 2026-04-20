import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1f1307ff',
        primary: '#F5F0E0',
        muted: '#71717A',
        accent: {
          DEFAULT: '#D4A017',
          shadow1: '#FF9A00',
          shadow2: '#DE7A00',
          shadow3: '#BE6400',
        },
        sky: {
          high: '#87CEEB',
          noon: '#B8E0FF',
          mid: '#FFB84D',
          low: '#FF6B35',
        },
        ground: '#2D1A0A',
        underground: '#0D0805',
      },
      animation: {
        'cloud-xl': 'drift-left 48s linear infinite',
        'cloud-lg': 'drift-left 36s linear infinite',
        'cloud-md': 'drift-left 26s linear infinite',
        'cloud-rev': 'drift-right 42s linear infinite',
        'cloud-rev-sm': 'drift-right 30s linear infinite',
        'bob': 'bob 4s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
      },
      keyframes: {
        'drift-left': {
          from: { transform: 'translateX(110vw)' },
          to: { transform: 'translateX(-35vw)' },
        },
        'drift-right': {
          from: { transform: 'translateX(-35vw)' },
          to: { transform: 'translateX(110vw)' },
        },
        'bob': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0px)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(-8px)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
      },
      fontFamily: {
        greeting: ['var(--font-greeting)', '"Caveat"', 'cursive'],
        hero: ['var(--font-hero-3d)', '"Lilita One"', 'sans-serif'],
        body: ['var(--font-body)', '"DM Sans"', 'sans-serif'],
        display: ['var(--font-display)', '"Outfit"', 'sans-serif'],
      },
      fontSize: {
        'fluid-greeting': 'clamp(2.5rem, 4.5vw, 4rem)',
        'fluid-name': 'clamp(3.5rem, 6.5vw, 7.5rem)',
      },
      letterSpacing: {
        'hero': '0.02em',
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities, theme }) {
      addUtilities({
        '.text-shadow-3d': {
          textShadow: [
            `-2px -2px 0 ${theme('colors.accent.shadow1')}`,
            ` 2px -2px 0 ${theme('colors.accent.shadow1')}`,
            `-2px  2px 0 ${theme('colors.accent.shadow1')}`,
            ` 2px  2px 0 ${theme('colors.accent.shadow1')}`,
            `-3px  0px 0 ${theme('colors.accent.shadow1')}`,
            ` 3px  0px 0 ${theme('colors.accent.shadow1')}`,
            ` 0px -3px 0 ${theme('colors.accent.shadow1')}`,
            ` 0px  3px 0 ${theme('colors.accent.shadow1')}`,
            ` 0px  4px 0 ${theme('colors.accent.shadow2')}`,
            ` 0px  5px 0 ${theme('colors.accent.shadow2')}`,
            ` 0px  6px 0 ${theme('colors.accent.shadow2')}`,
            ` 0px  7px 0 ${theme('colors.accent.shadow2')}`,
            ` 0px  8px 0 ${theme('colors.accent.shadow2')}`,
            ` 0px  9px 0 ${theme('colors.accent.shadow2')}`,
            ` 0px 10px 0 ${theme('colors.accent.shadow3')}`,
            ` 0px 11px 0 ${theme('colors.accent.shadow3')}`,
            ` 0px 12px 0 ${theme('colors.accent.shadow3')}`,
            ` 0px 13px 0 ${theme('colors.accent.shadow3')}`,
            ` 0px 14px 0 ${theme('colors.accent.shadow3')}`,
            ` 0px 20px 20px rgba(0,0,0,0.45)`,
          ].join(', ')
        },
        /* Comic-style card: thick border + hard drop shadow */
        '.comic-card': {
          border: '3px solid #1f1307',
          borderRadius: '1rem',
          boxShadow: '5px 6px 0px #1f1307',
          transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        },
        '.comic-card:hover': {
          transform: 'translate(-2px, -2px)',
          boxShadow: '7px 8px 0px #1f1307',
        },
        /* Hero split — sky background */
        '.bg-sky-hero': {
          background: 'linear-gradient(180deg, #6EC6EA 0%, #87CEEB 40%, #9DD4EE 100%)',
        },
      })
    })
  ],
}
