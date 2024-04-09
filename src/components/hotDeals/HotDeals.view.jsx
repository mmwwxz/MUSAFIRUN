import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Kaz from '../../assets/Kazahstan.webp'
import Dubay from '../../assets/dubay.png'
import Stambul from '../../assets/stambul-card.png'
import Uzb from '../../assets/Uzbekistan.png'
import { TOURS_PAGE } from '../../utils/path.js'
import ModalWinView from '../modalWin/ModalWin.view.jsx'

import './HotDeals.style.scss'

const HotDeals = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	const { t } = useTranslation('translation', {
		keyPrefix: 'home.last_minute_tours',
	})
	return (
		<div className='deals'>
			<ModalWinView isOpen={isModalOpen} onClose={closeModal} />

			<div className='deals_title'>
				<h2>{t('title')}</h2>
			</div>
			<div className='deals_box'>
				<div className='deals_box__wrapper'>
					<div className='deals_card'>
						<img
							className='deals_img'
							src={Dubay}
							alt='something gone wrong...'
						/>
						<h4 className='deals_subtitle'>{t('items.item1.title')}</h4>
						<p className='deals_text'>{t('items.item1.des')}</p>
						<p className='line'></p>
						<div className='deals_list'>
							{t('items.item1.peculiarities.title')}:
							<br />-{t('items.item1.peculiarities.i1')}
							<br />-{t('items.item1.peculiarities.i2')}
							<br />-{t('items.item1.peculiarities.i3')}
							<br />-{t('items.item1.peculiarities.i4')}
							<br />-{t('items.item1.peculiarities.i5')}
							<br />-{t('items.item1.peculiarities.i6')}
							<br />
							{t('items.item1.peculiarities.i7')}
						</div>
						<button onClick={openModal} className='deals_button'>
							{t('items.item1.btn')}
						</button>
					</div>
					<div className='deals_card'>
						<img
							className='deals_img'
							src={Uzb}
							alt='something gone wrong...'
						/>
						<h4 className='deals_subtitle'>{t('items.item2.title')}</h4>
						<p className='deals_text'>{t('items.item1.des')}</p>
						<p className='line'></p>
						<div className='deals_list'>
							{t('items.item2.peculiarities.title')}:
							<br />-{t('items.item2.peculiarities.i1')}
							<br />-{t('items.item2.peculiarities.i2')}
							<br />-{t('items.item2.peculiarities.i3')}
							<br />-{t('items.item2.peculiarities.i4')}
							<br />-{t('items.item2.peculiarities.i5')}
							<br />-{t('items.item2.peculiarities.i6')}
							<br />
							{t('items.item2.peculiarities.i7')}
						</div>
						<button onClick={openModal} className='deals_button'>
							{t('items.item2.btn')}
						</button>
					</div>
				</div>
				<div className='deals_box__wrapper'>
					<div className='deals_card'>
						<img
							className='deals_img'
							src={Stambul}
							alt='something gone wrong...'
						/>
						<h4 className='deals_subtitle'>{t('items.item3.title')}</h4>
						<p className='deals_text'>{t('items.item3.des')}</p>
						<p className='line'></p>
						<div className='deals_list'>
							{t('items.item1.peculiarities.title')}:
							<br />-{t('items.item3.peculiarities.i1')}
							<br />-{t('items.item3.peculiarities.i2')}
							<br />-{t('items.item3.peculiarities.i3')}
							<br />-{t('items.item3.peculiarities.i4')}
							<br />-{t('items.item3.peculiarities.i5')}
							<br />-{t('items.item3.peculiarities.i6')}
							<br />
							{t('items.item3.peculiarities.i7')}
						</div>
						<button onClick={openModal} className='deals_button'>
							{t('items.item3.btn')}
						</button>
					</div>
					<div className='deals_card'>
						<img
							className='deals_img'
							src={Kaz}
							alt='something gone wrong...'
						/>
						<h4 className='deals_subtitle'>{t('items.item4.title')}</h4>
						<p className='deals_text'>{t('items.item4.des')}</p>
						<p className='line'></p>
						<div className='deals_list'>
							{t('items.item4.peculiarities.title')}:
							<br />-{t('items.item4.peculiarities.i1')}
							<br />-{t('items.item4.peculiarities.i2')}
							<br />-{t('items.item4.peculiarities.i3')}
							<br />-{t('items.item4.peculiarities.i4')}
							<br />-{t('items.item4.peculiarities.i5')}
							<br />-{t('items.item4.peculiarities.i6')}
							<br />
							{t('items.item4.peculiarities.i7')}
						</div>
						<button onClick={openModal} className='deals_button'>
							{t('items.item4.btn')}
						</button>
					</div>
				</div>
			</div>
			<Link to={TOURS_PAGE} onClick={scrollToTop}>
				<button className='tours_btn'>{t('All')}</button>
			</Link>
		</div>
	)
}

export default HotDeals
