/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
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
