import About from "./pages/About";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Softwares from "./pages/Softwares";
import "./App.css";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="container bg-light p-0">
      <Navbar />
      <About />
      <Softwares />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
