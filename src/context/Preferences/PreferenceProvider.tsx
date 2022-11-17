import { useReducer, createContext } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { IPreferences, Props } from '@/types'
import { PREFERENCES_DEFAULT } from '@/config/constanst'
import { PreferenceReducer } from './PreferenceReducer'
import { IPreferencesProps } from './types'

export const PreferenceContext = createContext<IPreferencesProps>({
	state: PREFERENCES_DEFAULT(),
	toggleTheme: () => {},
	toggleLanguage: () => {},
})

export const PreferenceProvider = ({ children }: Props) => {
	const [, setPreference] = useLocalStorage<IPreferences>('preferences')
	const [state, dispatch] = useReducer(PreferenceReducer, PREFERENCES_DEFAULT())

	const actions = {
		toggleTheme: (theme: string) => {
			dispatch({ type: 'setTheme', payload: theme })
			setPreference({
				...state,
				theme,
			})
		},
		toggleLanguage: (language: string) => {
			dispatch({ type: 'setLanguage', payload: language })
			setPreference({
				...state,
				language,
			})
		},
	}

	return (
		<PreferenceContext.Provider value={{ state, ...actions }}>
			{children}
		</PreferenceContext.Provider>
	)
}
