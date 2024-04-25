import SearchBar from "./SearchBar/SearchBar";
import HighABVCheckbox from "./Filters/HighABVFilter";
import ClassicCheckbox from "./Filters/ClassicRangeFilter";
import AcidicCheckbox from "./Filters/AcidicFilter";

interface NavProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    highABVFilter: boolean;
    onHighABVFilterChange: (isChecked: boolean) => void;
    classicFilter: boolean;
    onClassicFilterChange: (isChecked: boolean) => void;
    acidicFilter: boolean;
    onAcidicFilterChange: (isChecked: boolean) => void;
}

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