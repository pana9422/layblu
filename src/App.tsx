import { Link, Route, useLocation } from 'wouter'
import Home from '@/components/pages/Home'
import i18n, { t } from '@/i18n'
import { LANGUAGES } from '@/config/constanst'
import { IAbout, IHome, TExample } from '@/i18n/types'
import { PreferenceContext } from '@/context/Preferences'
import { useContext } from 'react'
import { Button, Item } from '@/components/atoms'
import { Sidebar } from './components/molecules'
const App = () => {
	const { state, toggleLanguage, toggleTheme } = useContext(PreferenceContext)

	const changeLanguage = (lang: string) => {
		void i18n.changeLanguage(lang)
		toggleLanguage(lang)
	}

	const isDark = state.theme === 'dark'
	const newTheme = isDark ? 'light' : 'dark'

	const [location] = useLocation()

	return (
		<div
			className={
				'flex-col items-center justify-center w-screen h-screen ' +
				(isDark ? 'bg-gray-900	' : 'bg-gray-50	')
			}
		>
			<div className='flex p-2 justify-between flex-col'>
				<div className='flex gap-2'>
					<Button onClick={() => toggleTheme(newTheme)}>{state.theme}</Button>
					{LANGUAGES.map(item => (
						<Button
							key={item.key}
							onClick={() => changeLanguage(item.key)}
							bgColor={
								state.language === item.key ? 'indigo-700' : 'emerald-600'
							}
						>{`${item.lang} (${item.country})`}</Button>
					))}
				</div>

				<Sidebar>
					<Link href='/'>
						<Item label={t<IHome>('home').title} path='/' />
					</Link>
					<Link href='/about'>
						<Item label={t<IAbout>('about').title} path='/about' />
					</Link>
					<Link href='/dashboard'>
						<Item label='Dashboard' path='/dashboard' />
					</Link>
					<Link href='/components'>
						<Item label='Components' path='/components' />
					</Link>
				</Sidebar>
			</div>
			<Route path='/' component={Home} />
			<Route path='/about'>
				<div className={isDark ? 'text-gray-50	' : 'text-gray-800	'}>
					<h1 className='text-4xl'>{t<IAbout>('about').title}</h1>
					{t<TExample>('example')}
				</div>
			</Route>

			<Route path='/dashboard'>
				<div className={isDark ? 'text-gray-50	' : 'text-gray-800	'}>
					<h1 className='text-4xl'>Dashboard</h1>
				</div>
			</Route>
			<Route path='/components'>
				<div className={isDark ? 'text-gray-50	' : 'text-gray-800	'}>
					<h1 className='text-4xl'>Components</h1>
				</div>
			</Route>
		</div>
	)
}

export default App
