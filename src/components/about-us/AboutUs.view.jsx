import React from "react";
import './AboutUs.style.scss';
import HandStars from '../../assets/icons/HandStars.svg';
import Dollar from '../../assets/icons/Dollar.svg';
import MedicalKit from '../../assets/icons/MedicalKit.svg';
import UserCheck from '../../assets/icons/UserCheck.svg';


const AboutUsView = () => {
    return (
        <div className="aboutUs">
            <div className="aboutUs_text">
                <h2>Наши преимущества</h2>
            </div>
            <div className="aboutUs_wrapper">
                <div className="aboutUs_card">
                    <img className="aboutUs_icon" src={HandStars} alt=""/>
                    <p>
                        Высокий уровень сервиса
                        Лучшее соответствие цены и
                        качества туров
                    </p>
                </div>
                <div className="aboutUs_card">
                    <img className="aboutUs_icon" src={UserCheck} alt=""/>
                    <p>
                        Бесплатная консультация
                        Бесплатное бронирование
                        Гарантия конфиденциальности
                    </p>
                </div>
                <div className="aboutUs_card">
                    <img className="aboutUs_icon" src={Dollar} alt=""/>
                    <p>
                        Удобные платежные системы
                        Онлайн и оффлайн покупка
                        авиабилетов
                    </p>
                </div>
                <div className="aboutUs_card">
                    <img className="aboutUs_icon" src={MedicalKit} alt=""/>
                    <p>
                        Медицинское страхование
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsView;
