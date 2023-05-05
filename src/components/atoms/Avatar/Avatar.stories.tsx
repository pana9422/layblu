import { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'

import { IosShare } from '../../atoms/Icon'
const meta: Meta = {
	component: Avatar,

	argTypes: {
		square: {
			description: 'Square with rounded borders',
			table: {
				category: 'Style',
			},
		},
		size: {
			description:
				'Proportional width and height and is related to Tailwind clasess for sizes',
			table: {
				category: 'Sizes',
			},
		},
		username: {
			description: 'Display Initials in the Name initial type',
			table: {
				category: 'Text',
			},
		},
		imgSrc: {
			description: 'Route to shows an image',
			table: {
				category: 'Text',
			},
		},
		color: {
			control: 'text',
			description: 'Tailwind color class',
			table: {
				category: 'color',
			},
		},
		bgColor: {
			control: 'text',
			description: 'Tailwind background color class',
			table: {
				category: 'color',
			},
		},
		fontSize: {
			description: 'Font size for the text in Name initials type',
			table: {
				category: 'Sizes',
			},
		},
		numberOfLetters: {
			description: 'Number of Initials that You want to display',
			table: {
				category: 'Numbers',
			},
		},
		fontWeight: {
			description: 'Toggles between bold and normal',
			table: {
				category: 'Font',
			},
		},
		icon: {
			description: 'JSX Element that returns an svg',
			table: {
				category: 'React Nodes',
				type: { summary: 'JSX.Element' },
			},
		},
	},
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Image: Story = {
	args: {
		imgSrc: 'https://picsum.photos/100',
	},
}

export const NameInitials: Story = {
	args: { username: 'brider perez' },
}

export const Icon: Story = {
	args: {
		icon: <IosShare fill='#fff' width={30} height={30} />,
	},
}
