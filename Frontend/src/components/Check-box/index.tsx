import React, { useState } from 'react';
import './check-box.css';

interface CheckBoxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ checked, onChange }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleClick = () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        onChange(newCheckedState);
    };

    return (
        <div
            className={`checkbox-container ${isChecked ? 'checked' : ''}`}
            onClick={handleClick}
        >
            <div className="checkbox-icon"></div>
        </div>
    );
}
