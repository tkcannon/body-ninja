import "./App.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Theme from "./Theme";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Footer from "./Components/Footer";
import { useState } from "react";
import Contact from "./Pages/Contact";

function App() {
  const theme = createTheme(Theme);
  const [activePage, setActivePage] = useState("Home");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        {activePage === "Home" && (
          <Home activePage={activePage} setActivePage={setActivePage} />
        )}
        {activePage === "About" && (
          <About activePage={activePage} setActivePage={setActivePage} />
        )}
        {activePage === "Contact" && (
          <Contact activePage={activePage} setActivePage={setActivePage} />
        )}
        {activePage === "Shop" && (
          <Shop activePage={activePage} setActivePage={setActivePage} />
        )}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
