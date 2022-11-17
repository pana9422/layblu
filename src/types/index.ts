export interface Props {
	children: JSX.Element | JSX.Element[]
}
export interface ILanguage {
	key: string
	lang: string
	country: string
	icon: string
}
export interface IPreferences {
	theme: string
	language: string
}
