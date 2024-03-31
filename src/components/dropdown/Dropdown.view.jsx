import React, { useState } from 'react';
import './Dropdown.style.scss';
import downArrowIcon from '../../assets/icons/down-arrow-svgrepo-com.png'; // Путь к изображению

const DropdownButton = ({ buttonText, dropdownContent }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <div className="dropdown-box">
                <button className="dropdown-button" onClick={toggleDropdown}>
                    {buttonText}
                    <img className={`dropdown-icon ${isOpen ? 'flipped' : ''}`} src={downArrowIcon} alt="Arrow" />
                </button>
            </div>
            {isOpen && (
                <div className={`dropdown-content ${isOpen ? 'expanded' : ''}`}>
                    {dropdownContent}
                </div>
            )}
        </div>
    );
};

export default DropdownButton;
