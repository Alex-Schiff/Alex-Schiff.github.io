/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          base:    '#0f1117',
          surface: '#1a1d27',
          card:    '#20232f',
        },
        border: '#2e3140',
        text: {
          muted: '#9ca3af',
          head:  '#f3f4f6',
        },
        accent: {
          DEFAULT: '#7c3aed',
          light:   '#a78bfa',
          glow:    'rgba(124,58,237,0.25)',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.5)',
        glow: '0 0 0 3px rgba(124,58,237,0.25)',
      },
    },
  },
  plugins: [],
}
