import React from 'react';
import './LngSwitchBtn.style.scss';


const LanguageSwitchButton = () => {

    return (
        <div className="language-switch">
            <label className="switch">
                <input type="checkbox"/>
                <div className="slider round">
                    <div className="ru">RU</div>
                    <div className="en">EN</div>
                </div>
            </label>
        </div>
    );
};

export default LanguageSwitchButton;
