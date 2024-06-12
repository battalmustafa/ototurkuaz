/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // Define the gradient background
        'background': 'linear-gradient(to top, #eeeeee, #ffffff)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        magnify: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }, // Magnify to 105%
          '100%': { transform: 'scale(1)' }, // Demagnify to original size
        },
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(90deg)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        // Extend the animation duration for the 'fade-in-slow' animation
        'fade-in-slow': 'fadeIn 3s ease-in-out', // Example: 3 seconds duration
        'fade-out-slow': 'fadeOut 3s ease-in-out', // Example: 3 seconds duration
        'magnify-slow': 'magnify 1s ease-in-out', // Example: 3 seconds duration
        'slide-in-right': 'slideInRight 2s ease-in-out',
        'slide-in-up': 'slideInUp 1s ease-in-out',

        'card-flip': 'flip 1s ease-in-out',
      },
      colors: {
        // Background Color
        background: 'gradient-to-r from-teal-700 via-teal-900 to-blue-900',

        // Button Color
        button: '#0166b1',
        buttonPurchase: '#131834',
        // Text Color
        text: '#333333',
        textGold: '#9c8b58',
        textNavy: '#44566f',


        // Header Background Color
        headerBackground: '#0c0e0e',

        // Footer Background Color
        footerBackground: '#0c0e0e',
      },
    },
  },
  plugins: [],
};
 