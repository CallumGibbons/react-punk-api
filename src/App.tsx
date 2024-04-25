import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BeerProfile from "./Components/BeerProfile/BeerProfile";
import Home from "./Components/Home/Home";
import { Beer } from "./assets/Data/types";
import "./App.css";
import BeerList from "./Components/BeerList/BeerList";
import Nav from "./Components/Nav/Nav";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showBeerList, setShowBeerList] = useState<boolean>(true);
  const [highABVFilter, setHighABVFilter] = useState<boolean>(false);
  const [classicFilter, setClassicFilter] = useState<boolean>(false);
  const [acidicFilter, setAcidicFilter] = useState<boolean>(false);
  const [beers, setBeers] = useState<Beer[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    fetchBeers();
  }, [currentPage, highABVFilter, classicFilter, searchTerm]);

  const fetchBeers = async () => {
    try {
      let url = `http://localhost:3333/v2/beers/?page=${currentPage}&per_page=20`;
      if (highABVFilter) {
        url += "&abv_gt=6";
      }
      if (classicFilter) {
        url += "&brewed_before=01-2010"
      }
      if (searchTerm) {
        url += `&beer_name=${(searchTerm)}`;
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch beers");
      }
      const data = await response.json();
      setBeers(data);
    } catch (error) {
      console.error("Error fetching beers:", error);
    }
  };


  const filteredBeers = (
    beers: Beer[],
    acidic: boolean,
  ): Beer[] => {
   
    if (acidic) {
      beers = beers.filter((beer) => beer.ph < 4);
    }

    return beers;
  };
  

  const handleBeerProfileDisplay = (display: boolean) => {
    setShowBeerList(display);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1)
  };

  const handleHighABVFilterChange = (isChecked: boolean) => {
    setHighABVFilter(isChecked);
    setCurrentPage(1);
  };

  const handleAcidicFilterChange = (isChecked: boolean) => {
    setAcidicFilter(isChecked);
  };

  const handleClassicFilterChange = (isChecked: boolean) => {
    setClassicFilter(isChecked);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1) {
    setCurrentPage(pageNumber);
    }
  };

  return (
    <Router>
      <div className="App">
        {showBeerList && (
          <Nav
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            highABVFilter={highABVFilter}
            onHighABVFilterChange={handleHighABVFilterChange}
            classicFilter={classicFilter}
            onClassicFilterChange={handleClassicFilterChange}
            acidicFilter={acidicFilter}
            onAcidicFilterChange={handleAcidicFilterChange}
          />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/beer/:id"
            element={<BeerProfile handleDisplay={handleBeerProfileDisplay} />}
          />
        </Routes>
        {showBeerList && (
          <div className="beers">
            <BeerList
              beers={filteredBeers(
                beers,
                acidicFilter,
              )}
            />
            <div className="pagination">
              <button
                className="Back-Button"
                onClick={() => handlePageChange(currentPage - 1)}
              ></button>
              <button className="Return-Button"onClick={() => setCurrentPage(1)}>Return</button>
              <button
                className="Forward-Button"
                onClick={() => handlePageChange(currentPage + 1)}
                ></button>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;