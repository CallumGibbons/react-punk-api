// All necessary imports 
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BeerProfile from "./Components/BeerProfile/BeerProfile";
import Home from "./Components/Home/Home";
import { Beer } from "./assets/Data/types";
import "./App.css";
import BeerList from "./Components/BeerList/BeerList";
import Nav from "./Components/Nav/Nav";

function App() {
  // State variables declaration using the useState hook
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showBeerList, setShowBeerList] = useState<boolean>(true);
  const [highABVFilter, setHighABVFilter] = useState<boolean>(false);
  const [classicFilter, setClassicFilter] = useState<boolean>(false);
  const [acidicFilter, setAcidicFilter] = useState<boolean>(false);
  const [beers, setBeers] = useState<Beer[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
// useEffect hook to fetch beers when any of the dependencies change
  useEffect(() => {
    fetchBeers();
  }, [currentPage, highABVFilter, classicFilter, searchTerm]);
// Function to fetch beers from the API
  const fetchBeers = async () => {
    try {
      // Constructing the URL for the API request based on current state
      let url = `http://localhost:3333/v2/beers/?page=${currentPage}&per_page=20`;
      // Adding filters to the URL if selected
      if (highABVFilter) {
        url += "&abv_gt=6";
      }
      if (classicFilter) {
        url += "&brewed_before=01-2010"
      }
      if (searchTerm) {
        url += `&beer_name=${(searchTerm)}`;
      }
      // Fetching data from the constructed URL
      const response = await fetch(url);
      // Checking if the response is successful
      if (!response.ok) {
        throw new Error("Failed to fetch beers");
      }
      const data = await response.json();
       // Setting the fetched beers into the state
      setBeers(data);
    } catch (error) {
      console.error("Error fetching beers:", error); // Logging any errors that occur during fetching
    }
  };

// Function to filter beers based on acidity level
  const filteredBeers = (
    beers: Beer[],
    acidic: boolean,
  ): Beer[] => {
     // If acidic filter is enabled, filter beers with pH less than 4
    if (acidic) {
      beers = beers.filter((beer) => beer.ph < 4);
    }
    return beers;
  };
  
// Function to handle displaying beer profile
  const handleBeerProfileDisplay = (display: boolean) => {
    setShowBeerList(display); // Update state to show/hide beer list based on display value
  };
// Function to handle search input change
  const handleSearchChange = (value: string) => {
    setSearchTerm(value); // Update search term state
    setCurrentPage(1)// Reset current page to 1 when search term changes
  };
// Function to handle high ABV filter change
  const handleHighABVFilterChange = (isChecked: boolean) => {
    setHighABVFilter(isChecked);// Update high ABV filter state
    setCurrentPage(1);// Reset current page to 1 when high ABV filter changes
  };
// Function to handle acidic filter change
  const handleAcidicFilterChange = (isChecked: boolean) => {
    setAcidicFilter(isChecked);// Update acidic filter state
  };
// Function to handle classic filter change
  const handleClassicFilterChange = (isChecked: boolean) => {
    setClassicFilter(isChecked);// Update classic filter state
    setCurrentPage(1);// Reset current page to 1 when classic filter changes
  };
// Function to handle page change
  const handlePageChange = (pageNumber: number) => {
    // Ensure page number is greater than or equal to 1
    if (pageNumber >= 1) {
    setCurrentPage(pageNumber);// Update current page state
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