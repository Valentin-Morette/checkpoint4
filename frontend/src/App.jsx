import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Admin from "./pages/Admin";
import "./App.css";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Project />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
