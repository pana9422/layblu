import { ILanguage, IPreferences } from '@/types'

export const KEY_LOCAL_STORAGE: string = 'layblu'

export const LANGUAGES: ILanguage[] = [
	{
		key: 'es-419',
		lang: 'Español',
		country: 'Perú',
		icon: 'flag-peru',
	},
	{
		key: 'en-US',
		lang: 'English',
		country: 'United State',
		icon: 'flag-us',
	},
]

export const LANGUAGE_DEFAULT: string = LANGUAGES[0].key

export const IS_DARK: boolean = matchMedia(
	'(prefers-color-scheme: dark)'
).matches

export const PREFERENCES_DEFAULT = (): IPreferences => {
	const local = localStorage.getItem(`${KEY_LOCAL_STORAGE}_preferences`) ?? ''
	const preference = JSON.parse(local) as IPreferences
	return {
		theme: preference?.theme ?? (IS_DARK ? 'dark' : 'light'),
		language: preference?.language ?? navigator.language,
	}
}
