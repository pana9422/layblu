import { createRoot } from 'react-dom/client'
import App from '@/App'
import '@/styles/index.css'
import { PreferenceProvider } from '@/context/Preferences'

createRoot(document.getElementById('root') as HTMLElement).render(
	<PreferenceProvider>
		<App />
	</PreferenceProvider>
)
