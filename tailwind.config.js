module.exports = {
  content: ['./index.html', './cs/index.html'],
  theme: {
    extend: {
      colors: {
        cream: '#f8f1e9',
        paper: '#fffdfa',
        ink: '#2f1d12',
        muted: '#76604f',
        line: '#eadccd',
        copper: {
          50: '#fbeee4',
          100: '#f6dcc8',
          500: '#c0622a',
          600: '#a9521f',
          700: '#8a4219'
        }
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      boxShadow: {
        soft: '0 24px 60px -24px rgba(74, 42, 20, 0.28)',
        card: '0 1px 2px rgba(74, 42, 20, 0.06), 0 10px 30px -18px rgba(74, 42, 20, 0.25)'
      }
    }
  },
  plugins: []
};
