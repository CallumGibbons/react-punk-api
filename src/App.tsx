import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BeerProfile from "./Components/BeerProfile/BeerProfile";
import Home from "./Components/Home/Home";
import { Beer } from "./assets/Data/types";
import "./App.css";
import BeerList from "./Components/BeerList/BeerList";
import SearchBar from "./Components/Nav/SearchBar/SearchBar";
import HighABVCheckbox from "./Components/Nav/Filters/HighABVFilter";
import ClassicCheckbox from "./Components/Nav/Filters/ClassicRangeFilter";
import AcidicCheckbox from "./Components/Nav/Filters/AcidicFilter";
import beers from "./assets/Data/beers";

function App() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [showBeerList, setShowBeerList] = useState<boolean>(true);
    const [highABVFilter, setHighABVFilter] = useState<boolean>(false);
    const [ClassicFilter, setClassicFilter] = useState<boolean>(false);
    const [acidicFilter, setAcidicFilter] = useState<boolean>(false);

    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
    };

    const filteredBeers = (beers: Beer[], searchTerm: string, highABV: boolean, classic: boolean, acidic: boolean): Beer[] => {
      let filtered = beers.filter((beer) =>
          beer.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
      if (highABV) {
          filtered = filtered.filter((beer) => beer.abv > 6);
      }
      if (classic) {
          filtered = filtered.filter((beer) => beer.first_brewed);
      }
      if (acidic) {
          filtered = filtered.filter((beer) => beer.ph < 4);
      }
  
      return filtered;
  };
    const handleBeerProfileDisplay = (display: boolean) => {
        setShowBeerList(display);
    };

    const handleHighABVFilterChange = (isChecked: boolean) => {
        setHighABVFilter(isChecked);
    };
    const handleAcidicFilterChange = (isChecked: boolean) => {
      setAcidicFilter(isChecked);
   };
   const handleClassicFilterChange = (isChecked: boolean) => {
    setClassicFilter(isChecked);
    };

    return (
        <Router>
            <div className="App">
                {showBeerList && (
                    <div>
                        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
                        <HighABVCheckbox isChecked={highABVFilter} onChange={handleHighABVFilterChange}/>
                        <AcidicCheckbox isChecked={acidicFilter} onChange={handleAcidicFilterChange}/>
                        <ClassicCheckbox isChecked={ClassicFilter} onChange={handleClassicFilterChange}/>
                        <BeerList beers={filteredBeers(beers, searchTerm, highABVFilter, acidicFilter, ClassicFilter)} />
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