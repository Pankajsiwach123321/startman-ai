/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "5xxl": "52px",
        "3xxl": "32px",
      },
      fontFamily: {
        open: '"Open Sans", sans-serif',
        Anek: '"Anek Telugu", sans-serif',
      },
      colors: {
        highwhite: "#FEFEFE",
        midnight: "#00192A",
        towergray: "#B2BABF",
        lochmara: "#0071BC",
        codgray: "#0A0A0A",
        tundora: "#494949",
        emperor: "#505050",
        skylight: "#CFECFF",
        silverchalice: "#A4A4A4",
        seashell: "#F1F1F1",
        alto: "#DADADA",
        gray: "#B3BAC0",
        curiousblue: "#2286C9"
      },
      backgroundImage: {
        "skylightgradiant": "linear-gradient(90deg, #58B9F9 1.82%, #0071BC 104.09%)",
        "skydarkgradiant": "linear-gradient(180deg, #0071BC 0%, #58B9F9 100%)",
      },
      backgroundSize: {
        "full": "100% 100%",
      },
      boxShadow: {
        graphshadow: "2px 4px 8.2px 0px #00000012",
        research: "0px 16px 40px 0px #1A40890F",
        hoverresearch: "0px 32px 80px 0px #1A40891F",
      },
      screens: {
        xxl: "1404px",
        lsg: "1040px",
        xsm: "400px"
      },
      animation: {
        'starbright': 'wiggle 3s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%,100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        }
      },
    },
  },
  plugins: [],
}