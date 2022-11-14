import React from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

function Theme(props) {
  const primary = "#000";
  const secondary = "#7DF";
  const background = "#FAFAFA";

  const theme = createTheme({
    palette: {
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
      background: {
        default: background,
      },
    },
    mixins: {
      toolbar: {
        minHeight: 72,
      },
    },
    shape: {
      borderRadius: 0,
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
        borderBottom: `3px solid ${secondary}`,
      },
      h3: {
        fontWeight: 500,
        fontSize: "2.5rem",
        borderBottom: `2px solid ${secondary}`,
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
  });

  const finalTheme = createTheme(theme);

  return (
    <ThemeProvider theme={finalTheme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}

export default Theme;
