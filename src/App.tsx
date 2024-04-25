import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BeerProfile from "./Components/BeerProfile/BeerProfile";
import { useState } from "react";
import Home from "./Components/Home/Home";
import { Beer } from "./assets/Data/types";
import "./App.css";
import BeerList from "./Components/BeerList/BeerList";
import beers from "./assets/Data/beers";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showBeerList, setShowBeerList] = useState<boolean>(true);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredBeers = (beers: Beer[], searchTerm: string): Beer[] => {
    return beers.filter((beer) =>
      beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleBeerProfileDisplay = (display: boolean) => {
    setShowBeerList(display);
  };

  return (
    <Router>
      <div className="App">
        {showBeerList && (
          <div>
            <input
              type="text"
              placeholder="Search beers..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <BeerList beers={filteredBeers(beers, searchTerm)} />
          </div>
        )}
      </div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route
          path="/beer/:id"
          element={<BeerProfile handleDisplay={handleBeerProfileDisplay} />}
        />
      </Routes>
    </Router>
  );
}

export default App;