import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './LngSwitchBtn.style.scss'

const LanguageSwitchButton = () => {
	const { i18n } = useTranslation()
	const [lang, setLang] = useState(i18n?.resolvedLanguage)

	const handleChangeLanguage = () => {
		const newLanguage = lang === 'ru' ? 'en' : 'ru'
		i18n.changeLanguage(newLanguage)
		setLang(newLanguage)
	}

	return (
		<div className='language-switch'>
			<label className='switch'>
				<input
					type='checkbox'
					onChange={handleChangeLanguage}
					checked={lang === 'en'}
				/>
				<div className='slider round'>
					<div className='ru'>RU</div>
					<div className='en'>EN</div>
				</div>
			</label>
		</div>
	)
}

export default LanguageSwitchButton
