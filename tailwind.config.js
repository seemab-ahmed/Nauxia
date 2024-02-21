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
        zero: '0px',
        xs: "300px",
        xmd: '400px',
        mds: "450px",
        sm: "660px",
        smd: "768px",
        md: "1024px",
        desktop: '1024px',
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
          "linear-gradient(to bottom, #ffffff 8%, #151515 100%)",
        highlightAnime:
          "linear-gradient(88.16deg, #FF003D -32.4%, #0085FF 73.16%)",
      },
      letterSpacing: {
        144: "1.2em", // Custom letter spacing value
      },
      boxShadow: {
        custom:
          "0px -6.308411598205566px 37.850467681884766px 0px rgba(255, 255, 255, 0.4)",
        white: "0px 4px 30px 0px rgba(255, 255, 255, 0.9)",
        'white-glow': '0 -30px 40px 15px rgba(255, 255, 255, 0.2);',
        
      },
    },
  },
  plugins: [],
};
