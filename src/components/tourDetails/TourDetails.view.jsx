import i18n from 'i18next'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import AlaArchNational from '../../assets/ala-archa-national.png'
import GreenSvg from '../../assets/svg.png'
import FooterView from '../../layout/footer/Footer.view.jsx'
import { cardsInfo, cardsInfoEn } from '../../utils/CardsInfo.js'
import ModalWinView from '../modalWin/ModalWin.view.jsx'
import './TourDetails.style.scss'

const TourDetailsView = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const { t } = useTranslation('translation', {
		keyPrefix: 'tourDetails',
	})
	const { id } = useParams()

	const card =
		i18n.language == 'en'
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
					{t('book')}
				</button>
			</div>
			<div className='tour-details__info'>
				<img className='tour-details__info-img' src={AlaArchNational} alt='' />
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
			<div className='tour-details__gallery'>
				{card.pictures.map((picture, index) => (
					<img
						className='tour-details__gallery_img'
						key={index}
						src={picture}
						alt={`Picture ${index + 1}`}
					/>
				))}
			</div>
			<div className='tour-details__plan'>
				{card.tourPlan && card.tourPlan.length > 0 && (
					<h2 className='tour-details__plan-title'>
						<span className='tour-details__plan-title-text'>План</span>
					</h2>
				)}

				{card.tourPlan && card.tourPlan.length > 0 && (
					<ul className='tour-details__plan-list'>
						{card.tourPlan.map((item, index) => (
							<li key={index} className='tour-details__plan-item'>
								<span className='tour-details__plan-item-label'>
									{item.label}
								</span>{' '}
								{item.text}
							</li>
						))}
					</ul>
				)}
			</div>

			<div className='tour-details__additional-info'>
				<span style={{ fontSize: '30px', margin: '20px auto' }}>
					{i18n.language === 'en' ? (
						<span>
							Additional <span style={{ color: '#EFB809' }}>information</span>
						</span>
					) : (
						<span>
							Дополнительная{' '}
							<span style={{ color: '#EFB809' }}>информация</span>
						</span>
					)}
				</span>
				{card.tourSchedule.map((item, index) => (
					<div key={index} className='tour-details__additional-info_text'>
						<p>{item.title}</p>
						<p>{item.price}</p>
						<p>{item.price1}</p>
					</div>
				))}
			</div>
			<img src={GreenSvg} alt='' className='footerBg' />
			<FooterView greenBackground />
			<div className='footerBg_absolute'></div>
		</>
	)
}

export default TourDetailsView
