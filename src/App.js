import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Theme from "./Theme";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Footer from "./Components/Footer";

function App() {
  const theme = createTheme(Theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
