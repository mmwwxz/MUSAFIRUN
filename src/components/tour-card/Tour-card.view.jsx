import React from 'react';
import './Tour-card.style.scss'
import { Link } from 'react-router-dom';
import tourDetailsURL from '../../utils/tourDetailsURL';

const TourCardView = ({ id, img, fireImg, alt, title, text, tourVariant }) => {
    return (
        <div className="tourCard">
            <div className="tourImg">
                <img className="tourImage" src={img} alt={alt} />
                <div className="tourVariant">
                    {tourVariant}
                </div>
                <div className="tourSales">
                    <img src={fireImg} alt=""/>
                </div>
            </div>
            <h2>{title}</h2>
            <p>{text}</p>
            <Link to={tourDetailsURL(id)}>
                <button>Подробнее</button>
            </Link>
        </div>
    );
};

export default TourCardView;
