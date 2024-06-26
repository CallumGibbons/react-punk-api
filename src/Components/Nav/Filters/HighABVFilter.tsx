import React from "react";
import "./FilterBox.css";
// Define props interface for highABVCheckBox component
interface HighABVCheckboxProps {
  isChecked: boolean; // Boolean indicating whether the checkbox is checked or not
  onChange: (isChecked: boolean) => void; // Function called when checkbox state changes
}
// Define highABVCheckBox component as a functional component
const HighABVCheckbox: React.FC<HighABVCheckboxProps> = ({
  isChecked,
  onChange,
}) => {
  // Event handler for checkbox change event
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Call the onChange function with the new checkbox state
    onChange(e.target.checked);
  };

  return (
    <div className="filter-box-container">
      <input
      data-testid="high-abv-filter"
        className="filter-box"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label className="filter-box-text">High ABV (Above 6%)</label>
    </div>
  );
};

export default HighABVCheckbox;
