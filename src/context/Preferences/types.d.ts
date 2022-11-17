import { IPreferences } from '@/types'

export type TPreferenceAction =
	| { type: 'setLanguage'; payload: string }
	| { type: 'setTheme'; payload: string }

export interface IPreferencesProps {
	state: IPreferences
	toggleTheme: (theme: string) => void
	toggleLanguage: (language: string) => void
}
