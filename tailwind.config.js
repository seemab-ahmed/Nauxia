/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      transparentWhite: "rgba(255, 255, 255, 0.4)",
    },
    fontFamily: {
      jura: ["Jura", "sans-serif"],
      hackathon: ["Hackathon", "sans-serif"],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
    extend: {
      screens: {
        xs: "300px",
        mds: "450px",
        sm: "660px",
        smd: "768px",
        md: "920px",
        lg: "1166px",
        xlg: '1240px',
        xl: "1366px",
      },
      fontFamily: {
        jura: ["Jura", "sans-serif"],
        hackathon: ['Hackathon', 'sans-serif']
      },
      backgroundColor: {
        footerGradient:
          "linear-gradient(180deg, #151515 0%, rgba(0, 0, 0, 0) 100%)",
        highlightAnime:
          "linear-gradient(88.16deg, #FF003D -32.4%, #0085FF 73.16%)",
      },
      letterSpacing: {
        144: "1em", // Custom letter spacing value
      },
      boxShadow: {
        custom:
          "0px -6.308411598205566px 37.850467681884766px 0px rgba(255, 255, 255, 0.4)",
        white: "0px 4px 30px 0px rgba(255, 255, 255, 0.9)",
      },
    },
  },
  plugins: [],
};
