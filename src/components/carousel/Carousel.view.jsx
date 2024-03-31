import React, { useState } from 'react';
import './Carousel.style.scss';
import stars from "../../assets/stars.png";

const Carousel = ({ items }) => {
    const [startIndex, setStartIndex] = useState(0);

    const nextItem = () => {
        if (startIndex < items.length - 3) {
            setStartIndex(startIndex + 1);
        }
    };

    const prevItem = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <div className="carousel">
            <button className="arrow left" onClick={prevItem}>&#10094;</button>
            <div className="cards">
                {items.slice(startIndex, startIndex + 3).map(item => (
                    <div key={item.id} className="card">
                        <img src={item.img} alt={item.alt} />
                        <h2>{item.name}</h2>
                        <img src={stars} alt="Stars" />
                        <p>{item.content}</p>
                        <button>Подробнее</button>
                    </div>
                ))}
            </div>
            <button className="arrow right" onClick={nextItem}>&#10095;</button>
        </div>
    );
};

export default Carousel;
