import React from 'react'
import './Reviews.style.scss'
import Carousel from '../carousel/Carousel.view'
import ava1 from '../../assets/ava1.png'
import ava2 from '../../assets/ava2.png'
import ava3 from '../../assets/ava3.png'
import CardSlider from '../carousel2/Carousel2.view'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

const items = [
	{
		id: 1,
		name: 'Азат Керимбеков',
		content:
			'Спасибо за незабываемые впечатления от Бухары и Самарканда. Потрясающие памятники культуры, прекрасные гиды, отличная организация программы. ',
		img: ava1,
		alt: 'Азат Керимбеков',
	},
	{
		id: 2,
		name: 'Кадыр Жумалов',
		content:
			'Это было незабываемо. То, насколько качественно и тщательно вы организовали все моменты путешествия, стало для меня большим и приятным дополнением к всему тому, что я увидел в ходе поездки.',
		img: ava2,
		alt: 'Кадыр Жумалов',
	},
	{
		id: 4,
		name: 'Эсен Касенов',
		content:
			'Спасибо большое за организацию всех экскурсий. Очень понравились все гиды. Спасибо за организацию, все четко, везде встречали, провожали, Интересно рассказывали. Мы остались довольны.',
		img: ava3,
		alt: 'Эсен Касенов',
	},
	{
		id: 5,
		name: 'Антон Рубцов',
		content:
			'Ещё долго перед глазами было лицо гида, знающего до мелочей историю. Он провёл с нами незабываемый день, полный удивительных моментов тех времён.',
		img: ava2,
		alt: 'Кадыр Жумалов',
	},
	{
		id: 6,
		name: 'Батыр Асаналиев',
		content:
			'Концентрация природных и культурных красот очень высокая, но в принципе остается время для осмысления увиденного и для отдыха тоже.',
		img: ava3,
		alt: 'Эсен Касенов',
	},
]
const itemsEN = [
	{
		id: 1,
		name: 'Azat Kerimbekov',
		content:
			'Thank you for the unforgettable impressions of Bukhara and Samarkand. Amazing cultural monuments, excellent guides, and great program organization.',
		img: ava1,
		alt: 'Azat Kerimbekov',
	},
	{
		id: 2,
		name: 'Kadyr Zhumalov',
		content:
			'It was unforgettable. The quality and thoroughness with which you organized all aspects of the trip were a great and pleasant addition to everything I saw during the journey.',
		img: ava2,
		alt: 'Kadyr Zhumalov',
	},
	{
		id: 4,
		name: 'Esen Kasenov',
		content:
			'Thank you very much for organizing all the excursions. We really liked all the guides. Thank you for the organization, everything was clear, they met us everywhere, escorted us, and told interesting stories. We were satisfied.',
		img: ava3,
		alt: 'Esen Kasenov',
	},
	{
		id: 5,
		name: 'Anton Rubtsov',
		content:
			'For a long time, there was the face of a guide who knew the history down to the smallest detail before my eyes. He spent an unforgettable day with us, full of amazing moments from those times.',
		img: ava2,
		alt: 'Kadyr Zhumalov',
	},
	{
		id: 6,
		name: 'Batyr Asanaliev',
		content:
			'The concentration of natural and cultural beauties is very high, but in principle, there is time to reflect on what you have seen and also for rest.',
		img: ava3,
		alt: 'Esen Kasenov',
	},
]

const ReviewsView = () => {
	const { t } = useTranslation('translation', {
		keyPrefix: 'home.tourists',
	})
	return (
		<div className='reviews'>
			<div className='reviews_text'>
				<h2>{t('title')}</h2>
			</div>
			{/*<Carousel items={items}/>*/}
			<CardSlider items={i18n.language === 'en' ? itemsEN : items} />
		</div>
	)
}

export default ReviewsView
