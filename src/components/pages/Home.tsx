import { t } from '@/i18n'
import { IHome } from '@/i18n/types'
import { useContext, useState } from 'react'
import { PreferenceContext } from '@/context/Preferences'
import { Button, Avatar, Chip } from '@/components/atoms'
import { Checkbox, IosShare, Close } from '@/components/atoms/Icon'

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
				<Button flat>flat</Button>
				<Button>
					<span className='text-left'>Bunt</span>
					<Checkbox width={20} height={20} fill='white' />
				</Button>
				<Button dense>
					<Checkbox width={20} height={20} fill='white' />
					Dense
					<Close width={20} height={20} fill='white' />
				</Button>
				<Button outline square>
					<Checkbox width={20} height={20} fill='white' />
					<span className='w-16 text-left'>Outline</span>
				</Button>
				<Button square size={10}>
					<Close width={26} height={26} fill='white' />
				</Button>
				<Button square size={11} outline>
					<Checkbox width={26} height={26} fill='white' />
				</Button>

				<div>
					{visible && (
						<Chip
							text='react'
							before='100000'
							onClose={() => setVisible(!visible)}
						/>
					)}

					<IosShare width={48} height={48} fill='blue' />
					<Checkbox width={48} height={48} fill='red' />
					<Avatar
						square
						username='Miguel J Medina'
						fontSize='xl'
						numberOfLetters={3}
					/>
					<Avatar
						imgSrc='https://picsum.photos/seed/picsum/400/300'
						size={20}
					/>
				</div>
			</div>
		</div>
	)
}

export default HomePage
