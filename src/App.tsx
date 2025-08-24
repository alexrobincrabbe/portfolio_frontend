import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <SvgGradientDefs />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

function SvgGradientDefs() {
  return (
    <svg width="0" height="0" className="absolute">
      <defs>
        <linearGradient id="iconGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ec4899" />   {/* pink-500 */}
          <stop offset="50%" stopColor="#eab308" />  {/* yellow-500 */}
          <stop offset="100%" stopColor="#22c55e" /> {/* green-500 */}
        </linearGradient>
      </defs>
    </svg>
  );
}

export default App;


