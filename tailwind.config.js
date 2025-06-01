/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "bedar-sc1": "1167px",
        "bedar-sc2": "967px",
        "bedar-sm": "467px",
        // 'bedar-xl' : "1667px",
      },
      backgroundColor: {
        'mainColor': "#212835",
        'mainHover': "#323c50",
        'highlight': '#fff3c4',
      },
      textColor: {
        'textColor': "#212835",
        'textHover': "#323c50",
      },
      fontFamily: {
        'satoshi': ['Satoshi', 'Inter', 'sans-serif'],
        'inter-tight': ['"Inter Tight"', 'Inter', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        'accent-yellow': '#fff3c4',
        'accent-blue': '#2563eb',
        'gray-1': '#222227',
        'gray-2': '#494949',
        'gray-3': '#FDFCFF',
        'gray-4': '#9b9b9b',
        'black': '#000000',
      },
      lineHeight: {
        'super-loose': '3.5',
      },
      animation: {
        'gradient': 'gradient 30s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 14%' },
          '50%': { backgroundPosition: '100% 87%' },
          '100%': { backgroundPosition: '0% 14%' },
        },
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(270deg, #ff5f6d, #ffc371, #c34dbf, #ff4b1f, #ff9068, #16bffd, #a84dc3, #cb3066, #4ca1af, #c4e0e5)',
      },
    },
  },
  plugins: [],
};