import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Kaz from '../../assets/Kazahstan.webp'
import Stambul from '../../assets/stambul-card.png'
import Uzb from '../../assets/Uzbekistan.png'
import { TOURS_PAGE } from '../../utils/path.js'
import './PopularDestinations.style.scss'

const PopularDestinations = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	const { t } = useTranslation('translation', {
		keyPrefix: 'home.popular',
	})
	return (
		<div className='destination'>
			<div className='destination_title'>
				<h2>{t('title')}</h2>
			</div>
			<div className='destination_wrapper'>
				<div className='destination_card'>
					<img
						className='destination_img'
						src={Kaz}
						alt='something gone wrong...'
					/>
					<h4 className='destination_subtitle'>{t('items.item1.title')}</h4>
					<p className='destination_text'>{t('items.item1.des')}</p>
					<p className='line'></p>
					<div className='destination_list'>
						{t('items.item1.peculiarities.title')}:
						<br />-{t('items.item1.peculiarities.i1')}
						<br />-{t('items.item1.peculiarities.i2')}
						<br />-{t('items.item1.peculiarities.i3')}
						<br />-{t('items.item1.peculiarities.i4')}
						<br />-{t('items.item1.peculiarities.i5')}
						<br />
						{t('items.item1.peculiarities.i6')}
					</div>
					<Link to={TOURS_PAGE} onClick={scrollToTop}>
						<button className='destination_button'>
							{t('items.item1.btn')}
						</button>
					</Link>
				</div>
				<div className='destination_card'>
					<img
						className='destination_img'
						src={Stambul}
						alt='something gone wrong...'
					/>
					<h4 className='destination_subtitle'>{t('items.item2.title')}</h4>
					<p className='destination_text'>{t('items.item2.des')}</p>
					<p className='line'></p>
					<div className='destination_list'>
						{t('items.item2.peculiarities.title')}:
						<br />-{t('items.item2.peculiarities.i1')}
						<br />-{t('items.item2.peculiarities.i2')}
						<br />-{t('items.item2.peculiarities.i3')}
						<br />-{t('items.item2.peculiarities.i4')}
						<br />-{t('items.item2.peculiarities.i5')}
						<br />
						{t('items.item2.peculiarities.i6')}
					</div>
					<Link to={TOURS_PAGE} onClick={scrollToTop}>
						<button className='destination_button'>
							{t('items.item2.btn')}
						</button>
					</Link>
				</div>
				<div className='destination_card'>
					<img
						className='destination_img'
						src={Uzb}
						alt='something gone wrong...'
					/>
					<h4 className='destination_subtitle'>{t('items.item3.title')}</h4>
					<p className='destination_text'>{t('items.item3.des')}</p>
					<p className='line'></p>
					<div className='destination_list'>
						{t('items.item2.peculiarities.title')}:
						<br />-{t('items.item3.peculiarities.i1')}
						<br />-{t('items.item3.peculiarities.i2')}
						<br />-{t('items.item3.peculiarities.i3')}
						<br />-{t('items.item3.peculiarities.i4')}
						<br />-{t('items.item3.peculiarities.i5')}
						<br />-{t('items.item3.peculiarities.i6')}
						<br />-{t('items.item3.peculiarities.i7')}
					</div>
					<Link to={TOURS_PAGE} onClick={scrollToTop}>
						<button className='destination_button'>
							{t('items.item3.btn')}
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default PopularDestinations
