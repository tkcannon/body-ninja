let theme = {
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#7EFFFF",
    },
    background: {
      default: "#fafafa",
    },
  },
  mixins: {
    toolbar: {
      minHeight: 72,
    },
  },
  typography: {
    fontFamily: "'Poppins'",
    h1: {
      fontWeight: 700,
      fontSize: "4.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "3.25rem",
    },
    h3: {
      fontWeight: 500,
      fontSize: "2.5rem",
    },
    h4: {
      fontWeight: 400,
      fontSize: "2.25rem",
    },
    h5: {
      fontWeight: 400,
      fontSize: "1.75rem",
    },
    h6: {
      fontWeight: 400,
      fontSize: "1.25rem",
    },
  },
  components: {
    Typography: {
      variants: [
        {
          props: { variant: "bottom_border" },
          style: {
            border: `2px solid black`,
          },
        },
      ],
    },
  },
};

export default theme;
