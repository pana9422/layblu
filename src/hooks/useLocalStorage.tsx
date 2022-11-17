import { useState } from 'react'

import { KEY_LOCAL_STORAGE } from '@/config/constanst'

type ReturnType<T> = [T | undefined, (value: T) => void]

export const useLocalStorage = <T,>(
	key: string,
	initValue?: T
): ReturnType<T> => {
	const kls = `${KEY_LOCAL_STORAGE}_${key}`

	const [storedValue, setStoredValue] = useState<T | undefined>(() => {
		try {
			return JSON.parse(localStorage.getItem(kls) ?? '') as T
		} catch (error) {
			return initValue
		}
	})

	const setValue = (value: T): void => {
		try {
			setStoredValue(value)
			localStorage.setItem(kls, JSON.stringify(value))
		} catch (error) {
			console.error(error)
		}
	}
	return [storedValue, setValue]
}
