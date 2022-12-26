import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { t } from '@/i18n'
import { IHome } from '@/i18n/types'
import { useContext, useState } from 'react'
import { PreferenceContext } from '@/context/Preferences'
import { useFecth } from '@/hooks/useFetch'
import { Icon, Avatar, Chip } from '@/components/atoms'
import { EIcon } from '@/types'

interface IUser {
	id: string
	name: string
}
const HomePage = () => {
	const { title } = t<IHome>('home')
	const { state } = useContext(PreferenceContext)
	const { data, loading } = useFecth<IUser[]>({ path: 'users' })
	const users = data ?? []

	const [visible, setVisible] = useState(true)

	return (
		<div
			className={
				'flex flex-col items-start gap-1 ' +
				(state.theme === 'dark' ? 'text-gray-50	' : 'text-gray-800	')
			}
		>
			<h1 className='text-4xl'>{title}</h1>
			<div>
				<div>
					{visible && (
						<Chip
							text='react'
							before='100000'
							close={() => setVisible(!visible)}
						/>
					)}
					<Chip text='react' />
					<Chip square text='preact' />
					<Chip text='Idk' before='1' />
					<Chip text='important tag' />
					<Chip
						text='weird'
						before={
							<Avatar
								type='rounded-full'
								content={{
									type: 'icon',
									data: <Icon icon={faGlobe} size='xl' color='green' />,
								}}
								bgColor='blue-100'
								size={6}
							/>
						}
					/>
				</div>
				<Icon icon={faGlobe} size='4x' color='red' />
				<Icon svg={EIcon.IosShare} color='blue' size='30' />

				<Avatar
					type='rounded'
					size={14}
					bgColor='teal-500'
					content={{
						type: 'icon',
						data: <Icon icon={faGlobe} size='xl' color='green' />,
					}}
				/>

				<Avatar
					type='rounded-full'
					content={{
						type: 'text',
						data: 'this is a long name',
					}}
					numberOfLetters={3}
					bgColor='red-500'
					size={14}
					fontSize='xl'
				/>
				<Avatar
					type='rounded'
					content={{
						type: 'img',
						data: 'https://gravatar.com/avatar/d82a570e652035daf948801b94eb0140?s=200&d=robohash&r=g',
					}}
					bgColor='green-600'
					size={14}
				/>

				<Avatar
					type='rounded-none'
					content={{
						type: 'img',
						data: 'https://picsum.photos/200',
					}}
					bgColor='blue-100'
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
