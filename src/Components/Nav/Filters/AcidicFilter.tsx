import React from "react";
import "./FilterBox.css";
// Define props interface for acidCheckBox component
interface AcidicCheckboxProps {
  isChecked: boolean; // Boolean indicating whether the checkbox is checked or not
  onChange: (isChecked: boolean) => void; // Function called when checkbox state changes
}
// Define acidCheckBox component as a functional component
const AcidicCheckbox: React.FC<AcidicCheckboxProps> = ({
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
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label className="filter-box-text">Acidic (Below pH4)</label>
    </div>
  );
};

export default AcidicCheckbox;
