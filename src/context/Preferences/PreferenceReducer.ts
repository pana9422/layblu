import { IPreferences } from '@/types'
import { TPreferenceAction } from './types'

export const PreferenceReducer = (
	state: IPreferences,
	{ type, payload }: TPreferenceAction
): IPreferences => {
	const TYPES = {
		setTheme: { ...state, theme: payload },
		setLanguage: { ...state, language: payload },
	}

	return TYPES[type]
}
