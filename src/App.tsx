import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <div className="pt-16 flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
