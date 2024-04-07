import i18n from 'i18next'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { tourIntDetailsURL } from '../../utils/tourDetailsURL'
import './Tour-cardInt.style.scss'

const TourCardIntView = ({id,img, alt, title, text, tourVariant, fireImg}) => {


	const navigate = useNavigate()
	const scrollToTop = (id) => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		navigate(`/internal-tour-details/${id}`)
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
			<div onClick={() => scrollToTop(id)} >
				<button>{i18n.language === 'en' ? 'More details' : 'Подробнее'}</button>
			</div>
		</div>
	)
}

export default TourCardIntView
