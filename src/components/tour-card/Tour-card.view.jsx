import i18n from 'i18next'
import React from 'react'
import { Link } from 'react-router-dom'
import { tourDetailsURL } from '../../utils/tourDetailsURL.js'
import './Tour-card.style.scss'

const TourCardView = ({ id, img, fireImg, alt, title, text, tourVariant }) => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth', // Smooth scrolling animation
		})
	}

	return (
		<div className='tourCard'>
			<div className='tourImg'>
				<img className='tourImage' src={img} alt={alt} />
				<div className='tourVariant'>{tourVariant}</div>
				<div className='tourSales'>
					<img src={fireImg} alt='' />
				</div>
			</div>
			<h2>{title}</h2>
			<p>{text}</p>
			<Link onClick={scrollToTop} to={tourDetailsURL(id)}>
				<button>{i18n.language === 'en' ? 'More details' : 'Подробнее'}</button>
			</Link>
		</div>
	)
}

export default TourCardView
