import React from "react";
import header from "../../assets/header.png";
import './Main.style.scss'
import AboutUsView from "../../components/about-us/AboutUs.view.jsx";
import PopularDestinations from "../../components/popularDestinations/PopularDestinations.view.jsx";
import HotDeals from "../../components/hotDeals/HotDeals.view";
import GreenSvg from "../../assets/svg.png"
import DeliveryView from "../../components/delivery/Delivery.view.jsx";
import TouristsView from "../../components/tourists/Tourists.view.jsx";
import ReviewsView from "../../components/reviews/Reviews.view.jsx";
import reviews from "../../components/reviews/ReviewsData.js"
import FooterView from "../../layout/footer/Footer.view.jsx";

const MainView = () => {
    return (
        <>
            <div style={{minHeight: '864px'}}>
                <div className="about_img">
                    <img className="about_img__img" src={header} alt="something gone wrong..."/>
                </div>
                <div className="about_text">
                    <h1>MUSAFIRUN</h1>
                    <h2>Путешествуй с нами ! </h2>
                    <button>Подробнее</button>
                </div>
            </div>

            <div>
                <AboutUsView/>
            </div>
            <div>
                <PopularDestinations/>
            </div>
            <div>
                <img src={GreenSvg} alt="" className="rotate"/>
                <HotDeals/>
                <img src={GreenSvg} alt=""/>
            </div>
            <div>
                <DeliveryView/>
            </div>
            <div>
                <TouristsView/>
            </div>
            <div>
                <img src={GreenSvg} alt="" className="rotate"/>
                <ReviewsView data={reviews}/>
                <img src={GreenSvg} alt=""/>
            </div>
            <div>
                <FooterView/>
            </div>
        </>
    );
};

export default MainView;
