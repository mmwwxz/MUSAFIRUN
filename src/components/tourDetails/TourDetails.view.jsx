import i18n from 'i18next'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import AlaArchNational from '../../assets/kyrgyzstan-map-2.png'
import GreenSvg from '../../assets/svg.png'
import FooterView from '../../layout/footer/Footer.view.jsx'
import { cardsInfo, cardsInfoEn } from '../../utils/CardsInfo.js'
import ModalWinView from '../modalWin/ModalWin.view.jsx'
import './TourDetails.style.scss'

const TourDetailsView = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const { id } = useParams()

	const card =
		i18n.language === 'en'
			? cardsInfoEn.find(card => card.id === parseInt(id))
			: cardsInfo.find(card => card.id === parseInt(id))

	if (!card) {
		return <div className='tour-details'>Tour not found</div>
	}

	const { title } = card
	const words = title.split(' ')
	const lastIndex = words.length - 1

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<>
			<ModalWinView isOpen={isModalOpen} onClose={closeModal} />

			<div className='tour-details__main'>
				<img className='tour-details__main-img' src={card.img} alt={card.alt} />
				<h2 className='tour-details__main-title'>{card.title}</h2>
				<p className='tour-details__main-text'>{card.text}</p>
				<button onClick={openModal} className='tour-details__main-btn'>
					{i18n.language === 'en' ? 'Book' : 'Забронировать'}
				</button>
			</div>
			<div className='tour-details__info'>
				<img
					className='tour-details__info-img'
					src={AlaArchNational}
					alt=''
					style={{ objectFit: 'contain' }}
				/>
				<div className='tour-details__info_box'>
					{words.length === 2 ? (
						<h2 className='tour-details__info_box-title'>
							{words[0]} <span>{words[1]}</span>
						</h2>
					) : (
						<h2 className='tour-details__info_box-title'>
							{words.slice(0, lastIndex - 1).join(' ')}{' '}
							<span>{words.slice(lastIndex - 1).join(' ')}</span>
						</h2>
					)}
					<p className='tour-details__info_box-text'>{card.additionalText}</p>
				</div>
			</div>
			<img src={GreenSvg} alt='' className='footerBg' />
			<FooterView greenBackground />
			<div className='footerBg_absolute'></div>
		</>
	)
}

export default TourDetailsView
