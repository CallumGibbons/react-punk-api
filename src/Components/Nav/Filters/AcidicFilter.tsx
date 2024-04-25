import React from "react";
import "./FilterBox.css";

interface AcidicCheckboxProps {
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
}

const AcidicCheckbox: React.FC<AcidicCheckboxProps> = ({
  isChecked,
  onChange,
}) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
