/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'logo-purple': '#5D41CA',
        'logo-dark-blue': '#0D1F71',
        'logo-medium-blue-1': '#0D2075',
        'logo-medium-blue-2': '#0D2074',
        'theme-white': '#f2f2f2',
        'light-theme': '#f6fbff',
        'neon-blue': '#00e8ff',
        'dark-blue': '#00031f',
        'light-blue': '#3b82f6',
        'light-blue-ver2': '#1e3075',
        'logo-light-blue-white': '#F1F5FE',
        'primary': '#1E3A8A', // blue-900
        'secondary': '#06B6D4', // cyan-500
        'background': '#F3F4F6', // gray-100
        'accent': '#6366F1', // indigo-500
        'text': '#111827', // gray-900
      },
      textShadow: {
        sm: '0 1px 2px white',
        DEFAULT: '0 2px 4px white',
        lg: '0 8px 16px white',
      },
      backgroundImage: {
        'gradient-logo': 'linear-gradient(90deg, #5D41CA 10%, #0d2075d9 50%, #0D2074)',
        'home-gradient': 'linear-gradient(90deg, #5D41CA 10%, #0d207547 50%, #0D2074)',
      },
      animation: {
        gradientMove: "gradientMove 5s linear infinite",
      },
      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 0%" },
        },
      },
      backgroundSize: {
        "200%": "200% 100%",
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ]
}

