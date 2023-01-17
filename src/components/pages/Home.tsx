import {
	faGlobe,
	faArrowRight,
	faAngleRight,
} from '@fortawesome/free-solid-svg-icons'
import { t } from '@/i18n'
import { IHome } from '@/i18n/types'
import { useContext, useState } from 'react'
import { PreferenceContext } from '@/context/Preferences'
import { useFecth } from '@/hooks/useFetch'
import { Button, Icon, Avatar, Chip } from '@/components/atoms'
import { EIcon } from '@/types'
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
				<Button flat>
					flat
					<Icon icon={faArrowRight} />
				</Button>
				<Button>
					<Icon icon={faGlobe} />
					<span className='text-left'>Bunt</span>
				</Button>
				<Button dense>
					<Icon icon={faGlobe} /> Dense
					<Icon icon={faAngleRight} />
				</Button>
				<Button outline square>
					<Icon icon={faGlobe} />
					<span className='w-16 text-left'>Outline</span>
					<Icon icon={faAngleRight} />
				</Button>
				<Button square>
					<Icon icon={faGlobe} />
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
