import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Chat from "./components/Chat";
import Contact from "./pages/contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="pt-32 flex items-center justify-center ">
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
               <Route path="/chat" element={<Chat />} />
                <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
