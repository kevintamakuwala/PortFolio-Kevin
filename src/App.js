import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects";
import Notfound from "./pages/notfound/Notfound";
import Navbar from "./components/Navbar";
function App() {

  return (
   
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      
  );
}

export default App;
