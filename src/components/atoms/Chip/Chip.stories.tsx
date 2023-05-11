import { Chip } from './Chip'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Chip> = {
	component: Chip,

	argTypes: {
		square: {
			description: 'Make a rectangel with rounded borders',
			table: {
				category: 'Style',
			},
		},
		color: {
			control: 'text',
			table: {
				category: 'Color',
			},
		},
		bgColor: {
			control: 'text',
			description: 'tailwind color class',
			table: {
				category: 'Color',
			},
		},
		text: {
			description: 'Text to give a display name for the chip',
			table: {
				category: 'Text',
			},
		},
		fontWeight: {
			description: 'font-weight for the text. (Tailwind class)',
			table: {
				category: 'Font',
			},
		},
		before: {
			control: 'text',
			description: 'Indicates an status to the chip',
			table: {
				category: 'Text',
			},
		},
		onClose: {
			description: 'Callback to hide or remove from the layout the component',
			table: {
				category: 'Events',
			},
		},
		checked: {
			description: 'Changes the opacity',
			table: {
				category: 'Style',
			},
		},
	},
}

type Story = StoryObj<typeof Chip>

export const Default: Story = { args: { text: 'default' } }

export const WithIcon: Story = { args: { text: 'With icon', before: '1' } }

export const WithClose: Story = {
	args: { text: 'With close icon', onClose: () => {} },
}

export const WithIconAndClose: Story = {
	args: { text: 'With icon', before: '2', onClose: () => {} },
}

export default meta
