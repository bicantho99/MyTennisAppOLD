/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        textColor: "#CFD5D3",
        textColor1: "#227B94",
        bgTest: "#F3F3E0",
        bgColor: "#10172A",
      },
    },
  },
  plugins: [],
};
