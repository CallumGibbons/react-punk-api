import React from "react";

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearchChange(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search beers..."
            value={searchTerm}
            onChange={handleSearchChange}
        />
    );
};

export default SearchBar;