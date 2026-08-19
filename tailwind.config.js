/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1E3D',
          deep: '#071429',
          light: '#122A52',
        },
        royal: {
          DEFAULT: '#1B3A6B',
          light: '#254B87',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#E4C55E',
          dim: '#8F7420',
        },
        electric: {
          DEFAULT: '#3D8BFF',
          soft: '#6FA8FF',
        },
        ivory: '#F7F8FA',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'aix-radial': 'radial-gradient(circle at 50% 0%, rgba(61,139,255,0.14), transparent 60%)',
        'aix-grid': 'linear-gradient(rgba(201,162,39,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.06) 1px, transparent 1px)',
      },
      boxShadow: {
        gold: '0 0 0 1px rgba(201,162,39,0.35), 0 8px 30px -10px rgba(201,162,39,0.25)',
        electric: '0 0 30px -8px rgba(61,139,255,0.45)',
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
}
