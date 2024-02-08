import React from 'react';
import './check-box.css';

interface CheckBoxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ checked, onChange }) => {
    const handleClick = () => {
        onChange(!checked);
    };

    return (
        <div
            className={`checkbox-container ${checked ? 'checked' : ''}`}
            onClick={handleClick}
        >
            <div className="checkbox-icon"></div>
        </div>
    );
}
