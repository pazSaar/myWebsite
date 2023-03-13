/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{tsx,html}"],
  theme: {
    extend: {
      colors: {
        onNeutralBg: "var(--onNeutralBg)",
        neutralBg: "var(--neutralBg)",
        onPrimaryBg: "var(--onPrimaryBg)",
        primaryBg: "var(--primaryBg)",
        primary: "var(--primary)",
        h1TXT: "var(--h1Text)",
      },
    },
  },
  plugins: [],
};
