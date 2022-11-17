import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { t } from '@/i18n'
import { IHome } from '@/i18n/types'
import { useContext } from 'react'
import { PreferenceContext } from '@/context/Preferences'

const HomePage = () => {
	const { title } = t<IHome>('home')
	const { state } = useContext(PreferenceContext)
	return (
		<div
			className={
				'flex flex-col items-start gap-1 ' +
				(state.theme === 'dark' ? 'text-gray-50	' : 'text-gray-800	')
			}
		>
			<h1 className='text-4xl'>{title}</h1>
			<div>
				<FontAwesomeIcon icon={faGlobe} />
			</div>
		</div>
	)
}

export default HomePage
