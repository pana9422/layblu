import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { t } from '@/i18n'
import { IHome } from '@/i18n/types'
import { useContext } from 'react'
import { PreferenceContext } from '@/context/Preferences'
import { useFecth } from '@/hooks/useFetch'
import Icon from '../atoms/Icon/Icon'

interface IUser {
	id: string
	name: string
}
const HomePage = () => {
	const { title } = t<IHome>('home')
	const { state } = useContext(PreferenceContext)
	const { data, loading } = useFecth<IUser[]>({ path: 'users' })
	const users = data ?? []
	return (
		<div
			className={
				'flex flex-col items-start gap-1 ' +
				(state.theme === 'dark' ? 'text-gray-50	' : 'text-gray-800	')
			}
		>
			<h1 className='text-4xl'>{title}</h1>
			<div>
				<Icon icon={faGlobe} size='sm' color='red' />
				<Icon svg={true} name='IosShare' color='blue' />
				<ul>
					{loading
						? 'Loading...'
						: users.map(item => <li key={item.id}> {item.name} </li>)}
				</ul>
			</div>
		</div>
	)
}

export default HomePage
