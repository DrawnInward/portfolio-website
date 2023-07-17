
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./routes/Homepage";
import Projects from "./routes/Projects";

function App() {
  return (
    <Router>
        <main className="bg-appGreen">
      <Nav />
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/projects" element={<Projects/>}/>

      </Routes>
      </main>
    </Router>
  );
}

export default App;
