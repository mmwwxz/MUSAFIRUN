import React from "react";
import './HotDeals.style.scss';
import Dubay from "../../assets/dubay.png";
import Stambul from "../../assets/stambul-card.png";


const HotDeals = () => {
    return (
        <div className="deals">
            <div className="deals_title">
                <h2>Горящие туры</h2>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', gap: '80px'}}>
                <div className="deals_wrapper">
                    <div className="deals_card">
                        <img className="deals_img" src={Dubay} alt="something gone wrong..."/>
                        <h4 className="deals_subtitle">
                            Тур в Дубай
                        </h4>
                        <p className="deals_text">Маршрут тура: Бишкек - Дубай - Бишкек</p>
                        <p className="line"></p>
                        <div className="deals_list">
                            В стоимость турпакета входит: <br/>
                            - Транспорт Бишкек-Дубай-Бишкек; <br/>
                            - Транспорт на протяжении всего тура; <br/>
                            - Посещение всех локаций; <br/>
                            - Проживание в отеле; <br/>
                            - Завтрак в отеле; <br/>
                            - Сопровождающий турлидер ; <br/>
                            - Бонусы компании
                        </div>
                        <button className="deals_button">
                            Подробнее
                        </button>
                    </div>
                    <div className="deals_card">
                        <img className="deals_img" src={Dubay} alt="something gone wrong..."/>
                        <h4 className="deals_subtitle">
                            Тур в Дубай
                        </h4>
                        <p className="deals_text">Маршрут тура: Бишкек - Дубай - Бишкек</p>
                        <p className="line"></p>
                        <div className="deals_list">
                            В стоимость турпакета входит: <br/>
                            - Транспорт Бишкек-Дубай-Бишкек; <br/>
                            - Транспорт на протяжении всего тура; <br/>
                            - Посещение всех локаций; <br/>
                            - Проживание в отеле; <br/>
                            - Завтрак в отеле; <br/>
                            - Сопровождающий турлидер ; <br/>
                            - Бонусы компании
                        </div>
                        <button className="deals_button">
                            Подробнее
                        </button>
                    </div>
                </div>
                <div className="deals_wrapper">
                    <div className="deals_card">
                        <img className="deals_img" src={Stambul} alt="something gone wrong..."/>
                        <h4 className="deals_subtitle">
                            Наследие Турции «Стамбул 2н. – Анталия 5н.»
                        </h4>
                        <p className="deals_text">Маршрут тура: Стамбул – Анталья.</p>
                        <p className="line"></p>
                        <div className="deals_list">
                            В стоимость турпакета входит: <br/>
                            - Авиаперелёты; <br/>
                            - Трансфер а/п – отель – а/п; <br/>
                            - Питание в Стамбуле по системе HB; <br/>
                            - Питание в Анталии по системе AI; <br/>
                            - Сопровождение гида; <br/>
                            - Переезды по программе; <br/>
                            - Медицинская страховка ;
                        </div>
                        <button className="deals_button">
                            Подробнее
                        </button>
                    </div>
                    <div className="deals_card">
                        <img className="deals_img" src={Stambul} alt="something gone wrong..."/>
                        <h4 className="deals_subtitle">
                            Наследие Турции «Стамбул 2н. – Анталия 5н.»
                        </h4>
                        <p className="deals_text">Маршрут тура: Стамбул – Анталья.</p>
                        <p className="line"></p>
                        <div className="deals_list">
                            В стоимость турпакета входит: <br/>
                            - Авиаперелёты; <br/>
                            - Трансфер а/п – отель – а/п; <br/>
                            - Питание в Стамбуле по системе HB; <br/>
                            - Питание в Анталии по системе AI; <br/>
                            - Сопровождение гида; <br/>
                            - Переезды по программе; <br/>
                            - Медицинская страховка ;
                        </div>
                        <button className="deals_button">
                            Подробнее
                        </button>
                    </div>
                </div>
            </div>
            <button className="tours_btn">
                Все туры
            </button>
        </div>
    );
};

export default HotDeals;
