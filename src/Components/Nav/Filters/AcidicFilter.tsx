import React from "react";

interface AcidicCheckboxProps {
    isChecked: boolean;
    onChange: (isChecked: boolean) => void;
}

const AcidicCheckbox: React.FC<AcidicCheckboxProps> = ({ isChecked, onChange }) => {
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
                Acidic (Below ph4)
            </label>
        </div>
    );
};

export default AcidicCheckbox;