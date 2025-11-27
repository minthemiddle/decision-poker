/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: { display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'] },
      colors: {
        ink: '#0f172a',
        mist: '#cbd5f5',
        accent: '#7c3aed',
        glow: '#22d3ee'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.35)'
      }
    }
  },
  plugins: []
};
