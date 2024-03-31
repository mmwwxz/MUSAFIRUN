import React from "react";
import './Reviews.style.scss';
import Carousel from "../carousel/Carousel.view";
import ava1 from '../../assets/ava1.png';
import ava2 from '../../assets/ava2.png';
import ava3 from '../../assets/ava3.png';


const items = [
    {
        id: 1,
        name: 'Азат Керимбеков',
        content: 'Fat new smallness few supposing suspicion two. Course sir people worthy horses add entire suffer. How one dull get busy dare far.',
        img: ava1,
        alt: 'Азат Керимбеков',
    },
    {
        id: 2,
        name: 'Кадыр Жумалов',
        content: 'Fat new smallness few supposing suspicion two. Course sir people worthy horses add entire suffer. How one dull get busy dare far.',
        img: ava2,
        alt: 'Кадыр Жумалов',
    },
    {
        id: 4,
        name: 'Эсен Касенов',
        content: 'Fat new smallness few supposing suspicion two. Course sir people worthy horses add entire suffer. How one dull get busy dare far.',
        img: ava3,
        alt: 'Эсен Касенов',
    },
    {
        id: 5,
        name: 'Кадыр Жумалов',
        content: 'Fat new smallness few supposing suspicion two. Course sir people worthy horses add entire suffer. How one dull get busy dare far.',
        img: ava2,
        alt: 'Кадыр Жумалов',
    },
    {
        id: 6,
        name: 'Эсен Касенов',
        content: 'Fat new smallness few supposing suspicion two. Course sir people worthy horses add entire suffer. How one dull get busy dare far.',
        img: ava3,
        alt: 'Эсен Касенов',
    }
];


const ReviewsView = () => {

    return (
        <div className="reviews">
            <div className="reviews_text">
                <h2>Отзывы клиентов</h2>
            </div>
            <Carousel items={items}/>
        </div>
    );
};

export default ReviewsView;
