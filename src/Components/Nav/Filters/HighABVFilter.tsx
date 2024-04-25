import React from "react";

interface HighABVCheckboxProps {
    isChecked: boolean;
    onChange: (isChecked: boolean) => void;
}

const HighABVCheckbox: React.FC<HighABVCheckboxProps> = ({ isChecked, onChange }) => {
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked);
    };

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                High ABV (Above 6%)
            </label>
        </div>
    );
};

export default HighABVCheckbox;