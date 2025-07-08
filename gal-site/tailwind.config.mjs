/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'gal-pink': '#FF69B4',
        'gal-purple': '#DA70D6',
        'gal-gold': '#FFD700',
        'gal-silver': '#C0C0C0',
        'gal-neon': '#00FFFF',
      },
      fontFamily: {
        'gal': ['Arial Black', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-fast': 'pulse 1s infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'rainbow': 'rainbow 3s linear infinite',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.1)' },
        },
        rainbow: {
          '0%': { color: '#FF69B4' },
          '16.66%': { color: '#DA70D6' },
          '33.33%': { color: '#FFD700' },
          '50%': { color: '#00FFFF' },
          '66.66%': { color: '#32CD32' },
          '83.33%': { color: '#FF4500' },
          '100%': { color: '#FF69B4' },
        },
      },
    },
  },
  plugins: [],
};