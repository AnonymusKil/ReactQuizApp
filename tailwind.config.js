/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EDE8E3",
        secondary: "#F2F2F2",
        tertiary: "#FF6B6B",
        background: "#FFFFFF",
        text: "#333333",
      },
    },
  },
  plugins: [],
};
