import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { t } from '@/i18n'
import { IHome } from '@/i18n/types'
import { useContext } from 'react'
import { PreferenceContext } from '@/context/Preferences'
import { useFecth } from '@/hooks/useFetch'
import { Icon, Avatar } from '@/components/atoms'
import { EIcon, EAvatarTypes } from '@/types'

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
				<Icon icon={faGlobe} size='4x' color='red' />
				<Icon svg={EIcon.IosShare} color='blue' size='30' />

				<Avatar
					type={EAvatarTypes.circle}
					size={14}
					color='teal-500'
					content={{
						type: 'icon',
						data: <Icon icon={faGlobe} size='xl' color='green' />,
					}}
				/>

				<Avatar
					type={EAvatarTypes.rounded}
					content={{ type: 'text', data: 'virtual dOM' }}
					color='red-500'
					size={14}
					fontSize='xl'
				/>
				<Avatar
					type={EAvatarTypes.circle}
					content={{
						type: 'img',
						data: 'https://gravatar.com/avatar/d82a570e652035daf948801b94eb0140?s=200&d=robohash&r=g',
					}}
					color='green-600'
					size={14}
				/>

				<Avatar
					type={EAvatarTypes.square}
					content={{
						type: 'img',
						data: 'https://picsum.photos/200',
					}}
					color='blue-100'
					size={20}
				/>
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
