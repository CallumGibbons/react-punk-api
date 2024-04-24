import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import beerProfile from "./Components/BeerProfile/BeerProfile";
import Home from "./Components/Home/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" Component={Home} />
        <Route path="/beer/:id" Component={beerProfile} />
      </Routes>
    </Router>
  );
}

export default App;
