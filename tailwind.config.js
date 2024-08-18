module.exports = {
  darkMode: 'class', // Enable dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // Enable DaisyUI plugin
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};

