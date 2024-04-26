import SearchBar from "./SearchBar/SearchBar";
import HighABVCheckbox from "./Filters/HighABVFilter";
import ClassicCheckbox from "./Filters/ClassicRangeFilter";
import AcidicCheckbox from "./Filters/AcidicFilter";
import "./Nav.css"

// Define props interface for Nav component
interface NavProps {
    searchTerm: string; // Current search term
    onSearchChange: (value: string) => void; // Function called when search term changes
    highABVFilter: boolean; // Boolean indicating whether high ABV filter is enabled
    onHighABVFilterChange: (isChecked: boolean) => void; // Function called when high ABV filter changes
    classicFilter: boolean; // Boolean indicating whether classic filter is enabled
    onClassicFilterChange: (isChecked: boolean) => void; // Function called when classic filter changes
    acidicFilter: boolean; // Boolean indicating whether acidic filter is enabled
    onAcidicFilterChange: (isChecked: boolean) => void; // Function called when acidic filter changes
}
// Nav component
function Nav({
    searchTerm,
    onSearchChange,
    highABVFilter,
    onHighABVFilterChange,
    classicFilter,
    onClassicFilterChange,
    acidicFilter,
    onAcidicFilterChange
}: NavProps) {
    // Render Nav component with SearchBar, HighABVCheckbox, AcidicCheckbox, and ClassicCheckbox
    return (
        <div className="nav">
            <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
            <HighABVCheckbox isChecked={highABVFilter} onChange={onHighABVFilterChange}/>
            <AcidicCheckbox isChecked={acidicFilter} onChange={onAcidicFilterChange}/>
            <ClassicCheckbox isChecked={classicFilter} onChange={onClassicFilterChange}/>
        </div>
    );
}

export default Nav;