import { API_URL } from '@/utils/config/constanst'
import { useEffect, useState } from 'react'

interface IResponseFecth {
	statusCode: number
	statusText: string
}

interface IReturnFetch<T> {
	data: T | null
	loading: boolean
	response: IResponseFecth | null
}
interface IPropsFetch {
	path: string
}

export const useFecth = <T,>({ path }: IPropsFetch): IReturnFetch<T> => {
	const [state, setState] = useState<IReturnFetch<T>>({
		data: null,
		loading: false,
		response: null,
	})

	useEffect(() => {
		const fetchData = async () => {
			setState(oldValue => ({
				...oldValue,
				loading: true,
			}))

			try {
				const res = await fetch(`${API_URL}/${path}`)
				const response = {
					statusCode: res.status,
					statusText: res.statusText,
				}

				if (!res.ok) {
					setState({
						data: null,
						loading: false,
						response,
					})
					throw new Error(`(${res.status}) => ${res.statusText}`)
				}
				const json = (await res.json()) as T
				setState({
					data: json,
					loading: false,
					response,
				})
			} catch (error) {
				console.error(error)
			}
		}
		void fetchData()
	}, [path])

	return state
}
