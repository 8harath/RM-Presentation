/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brutal-white': '#FFFFFF',
        'brutal-black': '#000000',
        'brutal-gray-light': '#F5F5F5',
        'brutal-gray-medium': '#CCCCCC',
      },
      fontFamily: {
        'sans': ['Inter', 'Space Grotesk', 'Arial Black', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'slide-title': ['48px', { lineHeight: '1.2', fontWeight: '900' }],
        'slide-subtitle': ['32px', { lineHeight: '1.3', fontWeight: '700' }],
        'slide-body': ['24px', { lineHeight: '1.5', fontWeight: '400' }],
        'slide-small': ['20px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      boxShadow: {
        'brutal': '8px 8px 0px #000000',
        'brutal-sm': '4px 4px 0px #000000',
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
      },
    },
  },
  plugins: [],
}
