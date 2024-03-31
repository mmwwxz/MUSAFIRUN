import React, { useState } from 'react';
import './LngSwitchBtn.style.scss';

const LanguageSwitchButton = () => {
    const [isRussian, setIsRussian] = useState(true);

    const toggleLanguage = () => {
        setIsRussian(prevState => !prevState);
    };

    return (
        <div className="language-switch">
            <label className="switch">
                <input type="checkbox" checked={isRussian} onChange={toggleLanguage} />
                <div className="slider round"><div className="ru">RU</div> <div className='en'>EN</div></div>
            </label>
        </div>
    );
};

export default LanguageSwitchButton;
