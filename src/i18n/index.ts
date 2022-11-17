import { IPreferences } from '@/types'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { KEY_LOCAL_STORAGE, LANGUAGE_DEFAULT } from '@/config/constanst'
import enUS from './en-us'
import es419 from './es-419'

const local = localStorage.getItem(`${KEY_LOCAL_STORAGE}_preferences`) ?? '{}'
const { language } = JSON.parse(local) as IPreferences

export const t = <T>(value: string): T => {
	return i18n.t(value, { returnObjects: true }) as T
}

void i18n.use(initReactI18next).init({
	resources: {
		'en-US': { translation: enUS },
		'es-419': { translation: es419 },
	},
	lng: language ?? LANGUAGE_DEFAULT,
	keySeparator: false,
	interpolation: {
		escapeValue: false,
	},
})

export default i18n
