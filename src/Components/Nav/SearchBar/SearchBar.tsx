import React from "react";
import "./SearchBar.css"
// Define props interface for SearchBar component
interface SearchBarProps {
  searchTerm: string; // Current search term
  onSearchChange: (value: string) => void; // Function called when search term changes
}
// SearchBar component
const SearchBar: React.FC<SearchBarProps> = ({ // Destructure props from SearchBarProps interface
  searchTerm,
  onSearchChange,
}) => {
  // Event handler for search input change event
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Call the onSearchChange function with the new search term value
    onSearchChange(e.target.value);
  };

  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search beers..."
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
