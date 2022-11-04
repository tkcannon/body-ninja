import "./App.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

function App() {
  const theme = createTheme({
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
        fontSize: "5rem",
      },
      h2: {
        fontWeight: 600,
        fontSize: "3.75rem",
      },
      h3: {
        fontWeight: 500,
        fontSize: "3.25rem",
      },
      h4: {
        fontWeight: 400,
        fontSize: "2.5rem",
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
