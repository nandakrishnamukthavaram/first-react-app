import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";


import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/Footer.scss";
import "./styles/Contact.scss";
import "./styles/mediaq.scss";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router >
  );
}

export default App;
