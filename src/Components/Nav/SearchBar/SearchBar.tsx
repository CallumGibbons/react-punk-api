import React from "react";
import "./SearchBar.css"

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
