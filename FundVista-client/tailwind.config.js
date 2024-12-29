import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
    },
    extend: {
      colors: {
        primary: '#f59118',
        secondary: '#2659aa'
      },
      backgroundImage: {
        hero1: "url('/src/assets/banner/hero1.jpg')",
        empower: "url('https://i.ibb.co.com/6gjD4PR/entrepreneur.jpg')",
        impact: "url('https://i.ibb.co.com/sP7LDtP/meeting.jpg')",
        testi: "url('/src/assets/testimonial-bg.jpg')",
        shade: "url('/src/assets/shade-bg.jpg')"
      }
    },
  },
  plugins: [daisyui],
}

