import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./routes/Homepage";
import Projects from "./routes/Projects";
import Calculator from "./routes/Calculator.tsx";

function App() {
  return (
    <Router>
      <main className="bg-appGreen">
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/calculator" element={<Calculator />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
