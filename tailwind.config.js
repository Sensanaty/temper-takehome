/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}"
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#00FF86",
          100: "#00EB7C",
          200: "#00D871",
          900: "#6357B5"
        },
        primary: {
          DEFAULT: "#F6F6F6",
          50: "#F5F5F5",
          900: "#45534D"
        }
      },
      flex: {
        half: "1 1 50%",
      }
    },
  },
  plugins: [],
};

