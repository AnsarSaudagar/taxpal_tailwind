/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        "header-bg": "url('/images/line-bg.png')",
        "card-bg": "url('/images/card-marker.png')",
        "foot-bg-mobile": "url('/images/background-mobilefoot.png')",
        "foot-bg-main": 'url("/images/background-main-footerpng.png")',
        "started-bg": 'url("/images/started-bg.png")',
        "started-big": 'url("/images/big-features.png")',
      },
    },
  },
  plugins: [],
};
