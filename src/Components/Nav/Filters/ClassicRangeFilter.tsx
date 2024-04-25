import React from "react";

interface ClassicCheckboxProps {
    isChecked: boolean;
    onChange: (isChecked: boolean) => void;
}

const ClassicCheckbox: React.FC<ClassicCheckboxProps> = ({ isChecked, onChange }) => {
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
                Classic Range
            </label>
        </div>
    );
};

export default ClassicCheckbox;