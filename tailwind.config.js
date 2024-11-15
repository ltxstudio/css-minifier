/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Path for your JSX/TSX files
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',  // Custom Primary Blue
        secondary: '#D1D5DB', // Custom Secondary Gray
        accent: '#F59E0B',    // Custom Accent Orange
        success: '#10B981',   // Success Green
        error: '#EF4444',     // Error Red
        background: '#F3F4F6', // Background Gray
      },
      spacing: {
        18: '4.5rem', // Custom spacing value (4.5rem)
        128: '32rem', // Custom spacing value (32rem)
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',  // Light Shadow
        'custom-dark': '0 4px 6px rgba(0, 0, 0, 0.2)',   // Dark Shadow
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out', // Fade-in animation
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
