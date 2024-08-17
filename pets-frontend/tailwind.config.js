/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage:{
        "spacebg":"url('/src/imgs/Bg.gif')",
        "starfall":"url('/src/imgs/Starfall.gif')",
        "spaceship":"url('/src/imgs/Ufo.png')",
        "adoption": "url('/src/imgs/Adoption.png')",
        "stars": "url('/src/imgs/stars.jpg')",
        "stary": "url('/src/imgs/stary.avif')"

      },
      fontFamily:{
        alien: ["Alien"],
        stormblade: ["Stormblade"],
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

