import i18n from 'i18next'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import AlaArchNational from '../../assets/ala-archa-national.png'
import GreenSvg from '../../assets/svg.png'
import FooterView from '../../layout/footer/Footer.view.jsx'
import {
	cardsInfoInternational,
	cardsInfoInternationalEn,
} from '../../utils/CardsInfoInternational.js'
import ModalWinView from '../modalWin/ModalWin.view.jsx'
import './TourDetailsInt.style.scss'

const TourDetailsIntView = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const { id } = useParams()

	const cardInt =
		i18n.language === 'en'
			? cardsInfoInternationalEn.find(cardInt => cardInt.id === parseInt(id))
			: cardsInfoInternational.find(cardInt => cardInt.id === parseInt(id))

	if (!cardInt) {
		return <div className='tour-details'>Tour not found</div>
	}

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	// const additionalInfo = (
	//     <>
	//         <p>Дополнительная информация 1</p>
	//         <p>Дополнительная информация 2</p>
	//     </>
	// );

	const { title } = cardInt
	const words = title.split(' ')
	const lastIndex = words.length - 1

	return (
		<>
			<ModalWinView isOpen={isModalOpen} onClose={closeModal} />

			<div className='tour-details__main'>
				<img
					className='tour-details__main-img'
					src={cardInt.img}
					alt={cardInt.alt}
				/>
				<h2 className='tour-details__main-title'>{cardInt.title}</h2>
				<p className='tour-details__main-text'>{cardInt.text}</p>
				<button onClick={openModal} className='tour-details__main-btn'>
					{i18n.language === 'en' ? 'Book' : 'Забронировать'}
				</button>
			</div>
			<div className='tour-details__info'>
				{/*<img className='tour-details__info-img' src={AlaArchNational} alt='' />*/}
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
					<p className='tour-details__info_box-text'>
						{cardInt.additionalText}
					</p>
				</div>
			</div>
			<div className='tour-details__gallery'>
				{cardInt?.pictures?.map((picture, index) => (
					<img
						className='tour-details__gallery_img'
						key={index}
						src={picture}
						alt={`Picture ${index + 1}`}
					/>
				))}
			</div>

			{/*План тура*/}
			{/*<div className='tour-details__plan'>*/}
			{/*	<h2 className='tour-details__plan-title'>*/}
			{/*		<span className='tour-details__plan-title-text'>План</span>*/}
			{/*	</h2>*/}
			{/*	<ul className='tour-details__plan-list'>*/}
			{/*		{cardInt?.tourPlan?.map((item, index) => (*/}
			{/*			<li key={index} className='tour-details__plan-item'>*/}
			{/*				<span className='tour-details__plan-item-label'>*/}
			{/*					{item.label}*/}
			{/*				</span>{' '}*/}
			{/*				{item.text}*/}
			{/*			</li>*/}
			{/*		))}*/}
			{/*	</ul>*/}
			{/*</div>*/}

			{/*Дополнительная информация*/}
			{/*<div className='tour-details__additional-info'>*/}
			{/*	<span className='tour-details__additional-info_title'>*/}
			{/*		Дополнительная*/}
			{/*	</span>*/}
			{/*	{cardInt?.tourSchedule?.map((item, index) => (*/}
			{/*		<div key={index} className='tour-details__additional-info_text'>*/}
			{/*			<p>{item.title}</p>*/}
			{/*			<p>{item.price}</p>*/}
			{/*			<p>{item.price1}</p>*/}
			{/*		</div>*/}
			{/*	))}*/}
			{/*</div>*/}
			{/*<div className="tour-details__important-info">*/}
			{/*    <h2 className="tour-details__important-info_title">Важно</h2>*/}
			{/*    <DropdownButton buttonText="Что взять с собой ?" dropdownContent={additionalInfo} />*/}
			{/*</div>*/}

			<img src={GreenSvg} alt='' className='footerBg' />
			<FooterView greenBackground />
			<div className='footerBg_absolute'></div>
		</>
	)
}

export default TourDetailsIntView
