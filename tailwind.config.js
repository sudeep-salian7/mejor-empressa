/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "500px",
      tablet: "702px",
      md: "800px",
      mdcustom: "992px",
      base: "1064px",
      lg: "1200px",
      xl: "1350px",
      xlmd:"1600px",
      xxlg: "1950px",
    },
    extend: {
      colors: {
        darkblue: "#00003A",
        iconColor: "#4158DD",
        divider: "#E0E7EB",
        textColor: "#495057",
      },
      backgroundImage: {
        "hero-section": "url('/src/images/home-page-hero-section-bg.webp')",
        // "hero-sectionMobile": "url('/src/images/homeMobile.png')",
        "hero-sectionMobile":
          "linear-gradient(182deg,#00003a -154.02%,rgba(25,25,194,0)216.94%),url('/src/images/homeMobile.png')",
        "ranking-page": "url('/src/images/ranking-page-hero-section-bg.webp')",
        "ranking-page-mobile":"linear-gradient(187deg, rgba(0, 0, 58, 0.00) 20.44%, #04045C 48.28%), url('/src/images/ranking-page-mobile.webp')",
        "blog-page": "url('/src/images/about-page-hero-section-bg.webp')",
        "about-page": "url('/src/images/about-us.webp')",
        "about-page-mobile":"url('/src/images/aboutus-mobile.webp')",
        "company-page": "url('/src/images/company-page.webp')",
        rankingbg: "url('/src/images/ranking-bg.png')",
        categorybg: "url('/src/images/newCategory.png')",
        "category-page-mobile": "url('/src/images/category-mobile.webp')"
      },
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      margin: {
        40: "10rem",
      },
      height: {
        cardHeight: "460px",
      },
      minHeight: {
        content: "290px",
        carousel: "416px",
      },
      maxHeight: {
        content: "300px",
        carousel: "550px",
      },
      fontSize: {
        "xs-smaller": "0.75rem",
        1.15: "1.15rem",
        15: "15px",
        38:"38px",
        0.95:"0.95rem"
      },
      width: {
        "w-68": "14rem",
        17: "17rem",
        54: "54%",
        95:"95%"
      },
      boxShadow: {
        shadowCustom: "0px 14px 64px -4px rgba(35, 21, 91, 0.05)",
        card: "0px 0px 9px 2px rgba(0, 0, 0, 0.05)",
        ranking: "0px -1px 18px 1px rgba(0, 0, 0, 0.12)",
        categoryShadow:
          "0px 14px 64px -4px rgba(35, 21, 91, 0.05), 0px 8px 12px -6px rgba(35, 21, 91, 0.05);",
      },
      borderWidth: {
        5: "5px",
      },

      backgroundPosition: {
        custom: "50% 0",
      },
    },
  },
  plugins: [],
};

//box-shadow: 0px -1px 18px 1px rgba(0, 0, 0, 0.12);
