import React from 'react'
import { useTranslation } from 'react-i18next'
import WhatsappBtn from '../../assets/ButtonWhatsapp.svg'
import Kalpak from '../../assets/kalpak.png'
import Kalpak2 from '../../assets/kalpak2.png'
import Bags from '../../assets/kazakhBags.png'
import Shoes from '../../assets/kazakhShoes.png'

import './Delivery.style.scss'

const DeliveryView = () => {
	const { t } = useTranslation('translation', {
		keyPrefix: 'home.delivery',
	})
	return (
		<div className='delivery'>
			<div className='delivery_text'>
				<h2>{t('title')}</h2>
			</div>
			<div className='delivery_wrapper'>
				<div className='delivery_subWrapper'>
					<div className='delivery_card'>
						<img className='delivery_img' src={Shoes} alt='' />
						<img className='delivery_img' src={Kalpak2} alt='' />
					</div>
					<div className='delivery_card'>
						<img className='delivery_img' src={Bags} alt='' />
						<img className='delivery_img' src={Kalpak} alt='' />
					</div>
				</div>

				<div className='delivery_textCard'>
					<p>{t('text1')}</p>
					<button>
						<a href='https://wa.me/+996501252353'>
							<img src={WhatsappBtn} alt='' />
						</a>
					</button>
					<p>{t('text2')}</p>
				</div>
			</div>
		</div>
	)
}

export default DeliveryView
