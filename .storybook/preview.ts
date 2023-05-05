import type { Preview } from '@storybook/react'
import '../src/styles/index.css'

const preview: Preview = {
	parameters: {
		controls: {
			expanded: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
}

export default preview
