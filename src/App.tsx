
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./routes/Homepage";

function App() {
  return (
    <Router>
        <main className="bg-appGreen">
      <Nav />
        <Routes>
          <Route path="/" element={<Homepage/>}/>
      </Routes>
      </main>
    </Router>
  );
}

export default App;
