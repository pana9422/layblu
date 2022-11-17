import { Link, Route } from 'wouter'
import Home from '@/components/pages/Home'
import i18n, { t } from '@/i18n'
import { LANGUAGES } from '@/config/constanst'
import { IAbout, IHome, TExample } from '@/i18n/types'
import { PreferenceContext } from '@/context/Preferences'
import { useContext } from 'react'
import Button from '@/atoms/Button/Button'

const App = () => {
	const { state, toggleLanguage, toggleTheme } = useContext(PreferenceContext)

	const changeLanguage = (lang: string) => {
		void i18n.changeLanguage(lang)
		toggleLanguage(lang)
	}

	const isDark = state.theme === 'dark'
	const newTheme = isDark ? 'light' : 'dark'

	return (
		<div
			className={
				'flex-col items-center justify-center w-screen h-screen ' +
				(isDark ? 'bg-gray-900	' : 'bg-gray-50	')
			}
		>
			<div className='flex p-2 justify-between'>
				<div className='flex gap-2'>
					<Link to='/'>
						<Button label={t<IHome>('home').title} />
					</Link>
					<Link to='/about'>
						<Button label={t<IAbout>('about').title} />
					</Link>
					<Button label={state.theme} onClick={() => toggleTheme(newTheme)} />
				</div>
				<div className='flex gap-2'>
					{LANGUAGES.map(item => (
						<Button
							key={item.key}
							label={`${item.lang} (${item.country})`}
							active={state.language === item.key}
							onClick={() => changeLanguage(item.key)}
							imgSrc={`/icons/${item.icon}.svg`}
						/>
					))}
				</div>
			</div>
			<Route path='/' component={Home} />
			<Route path='/about'>
				<div className={isDark ? 'text-gray-50	' : 'text-gray-800	'}>
					<h1 className='text-4xl'>{t<IAbout>('about').title}</h1>
					{t<TExample>('example')}
				</div>
			</Route>
		</div>
	)
}

export default App
