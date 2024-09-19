// tailwind.config.js
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './views/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'afacad-regular': ['Afacad-Regular'],
        'afacad-medium': ['Afacad-Medium'],
        'afacad-semibold': ['Afacad-SemiBold'],
        'afacad-bold': ['Afacad-Bold'],
      },
    },
  },
  plugins: [],
};
