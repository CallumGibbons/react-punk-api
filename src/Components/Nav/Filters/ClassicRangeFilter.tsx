import React from "react";
import "./FilterBox.css";
// Define props interface for classicCheckBox component
interface ClassicCheckboxProps {
  isChecked: boolean; // Boolean indicating whether the checkbox is checked or not
  onChange: (isChecked: boolean) => void; // Function called when checkbox state changes
}
// Define classicCheckBox component as a functional component
const ClassicCheckbox: React.FC<ClassicCheckboxProps> = ({
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
      data-testid="classic-filter"
        className="filter-box"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label className="filter-box-text">Classic Range </label>
    </div>
  );
};

export default ClassicCheckbox;
