import React from "react";
import './Tourists.style.scss';
import Guest1 from '../../assets/guest1.png'
import Guest2 from '../../assets/guest2.png'
import Guest3 from '../../assets/guest3.png'
import Guest4 from '../../assets/guest4.png'
import Guest5 from '../../assets/guest5.png'
import Guest7 from '../../assets/guest7.png'
import Guest8 from '../../assets/guest8.png'
import Guest9 from '../../assets/guest9.png'
import Guest10 from '../../assets/guest10.png'





const TouristsView = () => {
    return (
        <div className="tourists">
            <div className="tourists_text">
                <h2>Наши туристы</h2>
            </div>
            <div className="tourists_wrapper">
                <img className="images" src={Guest1} alt="something gone wrong!"/>
                <img className="images" src={Guest2} alt="something gone wrong!"/>
                <img className="images" src={Guest3} alt="something gone wrong!"/>
                <img className="images" src={Guest4} alt="something gone wrong!"/>
                <img className="images" src={Guest5} alt="something gone wrong!"/>
                <img className="images" src={Guest7} alt="something gone wrong!"/>
                <img className="images" src={Guest8} alt="something gone wrong!"/>
                <img className="images" src={Guest9} alt="something gone wrong!"/>
                <img className="long_image" src={Guest10} alt="something gone wrong!"/>
            </div>
        </div>
    );
};

export default TouristsView;
