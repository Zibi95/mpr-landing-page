/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      keyframes: {
        rocketLaunch: {
          '0%': { transform: 'rotate(-3deg)' },
          '5%': { transform: 'rotate(3deg)' },
          '10%': { transform: 'rotate(-3deg)' },
          '15%': { transform: 'rotate(3deg)' },
          '19%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'translate(-10% , 0)' },
          '100%': {
            transform: 'translate(-350% , -220%) ',
          },
        },
      },
      animation: {
        rocketLaunch: 'rocketLaunch 2s cubic-bezier(.85,.94,1,-0.28)',
      },
    },
  },
  plugins: [],
};
