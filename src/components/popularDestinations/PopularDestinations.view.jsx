import React from "react";
import './PopularDestinations.style.scss';
import alamata_card from '../../assets/alamata-card-1.png';
import efes_card from '../../assets/efes-card.png';
import tashkent_card from '../../assets/tashkent-card.png';


const PopularDestinations = () => {
    return (
        <div className="destination">
            <div className="destination_title">
                <h2>Популярные направления</h2>
            </div>
            <div className="destination_wrapper">
                <div className="destination_card">
                    <img className="destination_img" src={alamata_card} alt="something gone wrong..."/>
                    <h4 className="destination_subtitle">
                        Однодневный тyp в Алматы
                    </h4>
                    <p className="destination_text">Маршрут тура: Бишкек - Алматы - Бишкек</p>
                    <p className="line"></p>
                    <div className="destination_list">
                            В стоимость турпакета входит: <br/>
                            - Транспорт Бишкек-Алматы-Бишкек; <br/>
                            - Транспорт на протяжении всего тура; <br/>
                            - Посещение всех локаций; <br/>
                            - Подъем и спуск на панораму Кок-Тобе; <br/>
                            - Входной билет в зоопарк; <br/>
                            - Сопровождающий турлидер ; <br/>
                            - Бонусы компании
                    </div>
                    <button className="destination_button">
                        Подробнее
                    </button>
                </div>
                <div className="destination_card">
                    <img className="destination_img" src={efes_card} alt="something gone wrong..."/>
                    <h4 className="destination_subtitle">
                        Наследие Турции «Великолепный Век»
                    </h4>
                    <p className="destination_text">Маршрут тура: Стамбул – Чанаккале – Троя –
                        Эфэс – Кушадасы – Денизли – Памуккале –
                        Анталья.</p>
                    <p className="line"></p>
                    <div className="destination_list">
                        В стоимость турпакета входит: <br/>
                        - Авиаперелёты; <br/>
                        - Проживание в отелях 4* и 5*; <br/>
                        - Питание на базе завтрака <br/>
                        - Сопровождение гида; <br/>
                        - Переезды по программе; <br/>
                        - Медицинская страховка ;
                    </div>
                    <button className="destination_button">
                        Подробнее
                    </button>
                </div>
                <div className="destination_card">
                    <img className="destination_img" src={tashkent_card} alt="something gone wrong..."/>
                    <h4 className="destination_subtitle">
                        Тур в солнечный Ташкент
                    </h4>
                    <p className="destination_text">Маршрут тура: Бишкек-Ташкент-Бишкек;</p>
                    <p className="line"></p>
                    <div className="destination_list">
                        В стоимость турпакета входит: <br/>
                        - Транспорт Бишкек-Ташкент-Бишкек; <br/>
                        - Транспорт по Ташкенту 2 дня; <br/>
                        - Сопровождающий турлидер ; <br/>
                        - Профессиональный местный гид в Ташкенте; <br/>
                        - Проживание в отеле; <br/>
                        - Завтрак в отеле; <br/>
                        - Бонусы компании
                    </div>
                    <button className="destination_button">
                        Подробнее
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopularDestinations;
