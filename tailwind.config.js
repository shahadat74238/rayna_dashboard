/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [
    require('@heathmont/moon-core-tw/lib/private/presets/ds-moon-preset'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}