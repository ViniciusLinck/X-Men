/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oxanium: ["Oxanium", "sans-serif"]
      },
      colors: {
        xmen: {
          cyan: "#47f4ff",
          blue: "#0271f7"
        }
      },
      boxShadow: {
        glow: "0 0 24px 5px #0271f7"
      }
    }
  },
  plugins: []
};
