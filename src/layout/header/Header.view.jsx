import logoLight from "../../assets/icons/logo.svg";
import logoDark from "../../assets/icons/header_logo.svg";
import './Header.style.scss'
import Phone from "../../assets/icons/Phone.svg"
import {Link, useLocation} from "react-router-dom";
import {MAIN_PAGE, TOURS_PAGE, ABOUT_PAGE} from "../../utils/path.js";
import {useEffect, useState} from "react";
import LanguageSwitchButton from "../../components/lngSwitchBtn/LngSwitchBtn.view.jsx";


const HeaderView = () => {
    const location = useLocation();
    const [logo, setLogo] = useState(logoLight);

    useEffect(() => {
        if (location.pathname === TOURS_PAGE || location.pathname === ABOUT_PAGE) {
            setLogo(logoDark);
        } else {
            setLogo(logoLight);
        }
    }, [location.pathname]);


    return (
        <div>
            <div className="navigation">
                <div className="navLogo">
                    <Link to={MAIN_PAGE} >
                        <img src={logo} alt="something gone wrong..." />
                    </Link>
                    <nav className="nav">
                        <ul className="nav__list">
                            <li>
                                <Link end="true"
                                      to={MAIN_PAGE}
                                      className={location.pathname === MAIN_PAGE ? 'active' : ''}
                                >
                                    Главная
                                </Link>
                            </li>
                            <li>
                                <Link to={TOURS_PAGE}
                                      className={location.pathname === TOURS_PAGE ? 'active' : ''}
                                >
                                    Туры
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={ABOUT_PAGE}
                                    className={location.pathname === ABOUT_PAGE ? 'active' : ''}
                                >
                                    О нас
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="nav-btn">
                        <LanguageSwitchButton/>
                        <button className="phoneBtn"><img src={Phone} alt=""/> Связаться </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderView;
