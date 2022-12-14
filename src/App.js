import "./App.css";
import Theme from "./Theme";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import More from "./Pages/More";
import Shop from "./Pages/Shop";
import Footer from "./Components/Footer";
import { useState } from "react";
import Hero from "./Components/Hero";

function App() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <Theme>
      <div className="App">
        <Header />
        {activePage === "Home" && <Hero />}
        <Nav activePage={activePage} setActivePage={setActivePage} />
        {activePage === "Home" && <Home />}
        {activePage === "More" && <More />}
        {activePage === "Shop" && <Shop />}
        <Footer />
      </div>
    </Theme>
  );
}

export default App;
