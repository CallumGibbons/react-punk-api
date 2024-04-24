import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import beerProfile from "./Components/BeerProfile/BeerProfile";
import { useState } from "react";
import Home from "./Components/Home/Home";
import { Beer } from "./assets/Data/types";
import "./App.css";
import BeerList from "./Components/BeerList/BeerList";
import beers from "./assets/Data/beers";



function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredBeers = (beers: Beer[], searchTerm: string): Beer[] => {
    return beers.filter((beer) =>
      beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  return (
    <Router>
          <div className="App">
      <input
        type="text"
        placeholder="Search beers..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <BeerList beers={filteredBeers(beers, searchTerm)} />
    </div>
      <Routes>
        <Route path="/Home" Component={Home} />
        <Route path="/beer/:id" Component={beerProfile} />
      </Routes>
    </Router>
  );
}

export default App;
