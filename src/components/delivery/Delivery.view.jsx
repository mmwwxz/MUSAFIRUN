import React from "react";
import './Delivery.style.scss';
import Kalpak from '../../assets/kalpak.png';
import Kalpak2 from '../../assets/kalpak2.png';
import Shoes from '../../assets/kazakhShoes.png';
import Bags from '../../assets/kazakhBags.png';
import WhatsappBtn from '../../assets/ButtonWhatsapp.svg'
import {Link} from "react-router-dom";


const DeliveryView = () => {
    return (
        <div className="delivery">
            <div className="delivery_text">
                <h2>Доставка Сувениров</h2>
            </div>
            <div className="delivery_wrapper">
                <div className="delivery_subWrapper">
                    <div className="delivery_card">
                        <img className="delivery_img" src={Shoes} alt=""/>
                        <img className="delivery_img" src={Kalpak2} alt=""/>
                    </div>
                    <div className="delivery_card">

                        <img className="delivery_img" src={Bags} alt=""/>
                        <img className="delivery_img" src={Kalpak} alt=""/>
                    </div>
                </div>

                <div className="delivery_textCard">
                    <p>
                        Наша компания так же осуществляет доставку сувенироов в отель. Если у вас нет времени чтобы пойти на базар или для похода по магазинам, просто отправьте сообщение со словом “Сувенир” на наш
                    </p>
                    <button>
                        <a href="https://wa.me/+996501252353">
                            <img src={WhatsappBtn} alt=""/>
                        </a>
                    </button>
                    <p>
                        Мы вышлем вам каталог с товарами, вы можете выбрать всё, что захотите. Мы оформим доставку в отель или другое удобное место для вас.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default DeliveryView;
