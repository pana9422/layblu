import { t } from '@/i18n'
import { IHome } from '@/i18n/types'
import { useContext, useState } from 'react'
import { PreferenceContext } from '@/context/Preferences'
import { Avatar, Chip } from '@/components/atoms'
import { Checkbox, IosShare } from '@/components/atoms/Icon'

const HomePage = () => {
	const { title } = t<IHome>('home')
	const { state } = useContext(PreferenceContext)

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

					<IosShare width={48} height={48} fill='blue' />
					<Checkbox width={48} height={48} fill='red' />

					<Chip
						text='weird'
						before={
							<Avatar
								type='rounded-full'
								content={{
									type: 'icon',
									data: <Checkbox width={48} height={48} fill='red' />,
								}}
								bgColor='blue-100'
								size={6}
							/>
						}
					/>
				</div>
			</div>
		</div>
	)
}

export default HomePage
