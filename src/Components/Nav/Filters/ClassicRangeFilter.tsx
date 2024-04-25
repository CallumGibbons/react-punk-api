import React from "react";

interface ClassicCheckboxProps {
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
}

const ClassicCheckbox: React.FC<ClassicCheckboxProps> = ({
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
      <label className="filter-box-text">Classic Range </label>
    </div>
  );
};

export default ClassicCheckbox;
