import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from './locale/en.json'
import translationRU from './locale/ru.json'

const resources = {
	ru: {
		translation: translationRU,
	},
	en: {
		translation: translationEN,
	},
}

i18n.use(initReactI18next).init({
	resources,
	lng: 'ru',
	fallbackLng: 'ru',

	interpolation: {
		escapeValue: false,
	},
})


export default i18n
