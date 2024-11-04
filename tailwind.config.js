/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins_400Regular"],
        semibold: ["Poppins_600SemiBold"],
        medium: ["Poppins_500Medium"],
      },
    },
  },
  plugins: [],
};
