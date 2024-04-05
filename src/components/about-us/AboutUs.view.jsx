import React from 'react'
import { useTranslation } from 'react-i18next'
import Dollar from '../../assets/icons/Dollar.svg'
import HandStars from '../../assets/icons/HandStars.svg'
import MedicalKit from '../../assets/icons/MedicalKit.svg'
import UserCheck from '../../assets/icons/UserCheck.svg'
import './AboutUs.style.scss'

const AboutUsView = () => {
	const { t } = useTranslation('translation', {
		keyPrefix: 'home.advantages',
	})

	return ( 
		<div className='aboutUs'>
			<div className='aboutUs_text'>
				<h2>{t('title')}</h2>
			</div>
			<div className='aboutUs_wrapper'>
				<div className='aboutUs_card'>
					<img className='aboutUs_icon' src={HandStars} alt='' />
					<p>{t('items.item1')}</p>
				</div>
				<div className='aboutUs_card'>
					<img className='aboutUs_icon' src={UserCheck} alt='' />
					<p>{t('items.item2')}</p>
				</div>
				<div className='aboutUs_card'>
					<img className='aboutUs_icon' src={Dollar} alt='' />
					<p>{t('items.item3')}</p>
				</div>
				<div className='aboutUs_card'>
					<img className='aboutUs_icon' src={MedicalKit} alt='' />
					<p>{t('items.item4')}</p>
				</div>
			</div>
		</div>
	)
}

export default AboutUsView
