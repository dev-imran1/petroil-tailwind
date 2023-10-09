tailwind.config = {
    theme: {
      extend: {
        colors: {
          'pri-color': '#da373d',
          'pera-color':'#6C6C6C',
          'black-color':'#282828',
        },
        fontSize: {
          'big-font':'64px',
          'mid-font':'48px',
          'title-font':'36px',
          'sub-font':'24px',
          'small-font':'16px',
          'pera-font':'16px',
        },
        spacing: {
          '5px': '5px',
        },
        backgroundImage: {
          'banner': "url('./images/banner.jpg')",
          'overlay': "linear-gradient(#000, #000)",
        },
        maxWidth: {
          'container': '1144px',
        },
        fontFamily: {
          'popins': "'Poppins', sans-serif",
        },
      }
    }
  }