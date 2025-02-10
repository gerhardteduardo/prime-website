import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";
import { Sponsors } from "./components/Sponsors";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Hero />
              <Sponsors />
              <About />
              <Services />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
