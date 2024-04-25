import React from "react";

interface HighABVCheckboxProps {
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
}

const HighABVCheckbox: React.FC<HighABVCheckboxProps> = ({
  isChecked,
  onChange,
}) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <div className="filter-box-container">
      <input
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
