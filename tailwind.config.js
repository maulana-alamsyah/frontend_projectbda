module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "340px",
      // => @media (min-width: 640px) { ... }
    },
    fontFamily: {
      sans: ["Poppins"],
      header: ["Playfair Display"],
    },
    extend: {
      colors: {
        buttonCart: "#FF9432",
        nav: "#F58F56",
        menuActive: "#FA4A0C",
        menuPasive: "#9A9A9D",
        hargaMenu: "#785757",
        labelTerlaris: "#F58F56",
        merahKeranjang: "#C8161D",
        secondary: "#667C8A",
      },
    },
  },
  plugins: [],
};
