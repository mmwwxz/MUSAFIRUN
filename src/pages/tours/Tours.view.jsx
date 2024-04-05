import i18n from 'i18next'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import GreenSvg from '../../assets/svg.png'
import TourCardView from '../../components/tour-card/Tour-card.view.jsx'
import TourCardIntView from '../../components/tour-cardInt/Tour-cardInt.view.jsx'
import FooterView from '../../layout/footer/Footer.view.jsx'
import { cardsInfo, cardsInfoEn } from '../../utils/CardsInfo.js'
import cardsInfoInternational from '../../utils/CardsInfoInternational.js'
import './Tours.style.scss'
const cities = [
	'Бишкек',
	'Ыссык-Көл',
	'Талас',
	'Джалал-Абад',
	'Нарын',
	'Ош',
	'Баткен',
]
const citiesEN = [
	'Bishkek',
	'Issyk-Kol',
	'Talas',
	'Jalal-Abad',
	'Naryn',
	'Osh',
	'Batken',
]

const ToursView = () => {
	const [selectedFilter, setSelectedFilter] = useState(null)

	const handleClick = filterValue => {
		setSelectedFilter(filterValue)
	}

	const filteredCards =
		i18n.language === 'en'
			? selectedFilter
				? cardsInfoEn.filter(card => card.search === selectedFilter)
				: cardsInfoEn
			: selectedFilter
			? cardsInfo.filter(card => card.search === selectedFilter)
			: cardsInfo

	const handleShowAllTours = () => {
		setSelectedFilter(null)
	}
	const { t } = useTranslation('translation', {
		keyPrefix: 'toursView',
	})

	return (
		<>
			<div className='tours_title'>
				<h2>{t('title1')}</h2>
			</div>
			<div className='tours_cities'>
				{i18n.language === 'en'
					? citiesEN.map(city => (
							<button key={city} onClick={() => handleClick(city)}>
								{city}
							</button>
					  ))
					: cities.map(city => (
							<button key={city} onClick={() => handleClick(city)}>
								{city}
							</button>
					  ))}
				<button className='btn' onClick={handleShowAllTours}>
					{t('btn')}
				</button>
			</div>

			<div className='tour_cards'>
				{filteredCards.map(card => (
					<TourCardView
						key={card.id}
						id={card.id}
						img={card.img}
						alt={card.alt}
						title={card.title}
						text={card.text}
						tourVariant={card.variant}
						fireImg={card.fireImg}
					/>
				))}
			</div>
			<div className='tour__cards_int'>
				<div className='tours__title_int'>
					<h2>{t('title2')}</h2>
				</div>
				<img
					src={GreenSvg}
					style={{ width: '100%' }}
					alt=''
					className='rotate'
				/>
				<div className='tour__cards_int-box'>
					{cardsInfoInternational.map(cardInt => (
						<TourCardIntView
							key={cardInt.id}
							id={cardInt.id}
							img={cardInt.img}
							alt={cardInt.alt}
							title={cardInt.title}
							text={cardInt.text}
							tourVariant={cardInt.variant}
							fireImg={cardInt.fireImg}
						/>
					))}
				</div>
				<img src={GreenSvg} style={{ width: '100%' }} alt='' />
			</div>
			<div style={{ marginTop: '100px' }}>
				<FooterView />
			</div>
		</>
	)
}

export default ToursView
