import { Button } from './Button'
import { Close } from '../Icon'

import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
	component: Button,
	argTypes: {
		onClick: {
			control: 'event',
			description:
				'Callback function to declare what to do in the onclick event',
			table: {
				category: 'Events',
			},
		},
		outline: {
			description: 'Set the outline style',
			table: {
				category: 'Styles',
			},
		},
		flat: {
			description: 'Set only text button style',
			table: {
				category: 'Styles',
			},
		},
		children: {
			description: 'React node or text',
			table: {
				category: 'React Node',
				type: {
					summary: 'string',
					category: 'Text',
				},
			},
		},
		color: {
			control: { type: 'text' },
			description: 'Tailwind color class',
			table: {
				category: 'Color',
			},
		},
		bgColor: {
			control: { type: 'text' },
			description: 'Tailwind background color class',
			table: {
				category: 'Color',
			},
		},
		hover: {
			description: 'Tailwind hover class',
			table: {
				category: 'Color',
			},
		},
		dense: {
			description: 'Reduces the padding',
			table: {
				category: 'Sizes',
			},
		},

		rounded: {
			description: 'Rounded border to the button',
			table: {
				category: 'Styles',
			},
		},

		width: {
			control: 'number',
			description:
				'Make the size of the button proportional. Use sizes defined in Tailwind',
			table: {
				type: { summary: 'string' },
				category: 'Sizes',
			},
		},
	},
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = { args: { children: 'default' } }

export const Outline: Story = {
	args: {
		outline: true,
		children: 'outline',
		color: 'emerald-500',
		hover: 'hover:bg-emerald-500/[0.1]',
	},
}

export const Text: Story = {
	args: {
		children: 'text',
		flat: true,
		color: 'emerald-500',
		hover: 'hover:bg-emerald-500/[0.1]',
	},
}

export const Dense: Story = {
	args: {
		...Default.args,
		dense: true,
	},
	render: args => (
		<Button {...args}>
			<div className='w-full text-left'>Dense</div>
			<Close width={20} height={20} fill='currentColor' />
		</Button>
	),
}

export const Square: Story = {
	args: {
		...Default.args,
		dense: true,
		square: true,
		width: 12,
	},
	render: args => (
		<Button {...args}>
			<Close width='50%' height='50%' fill='currentColor' />
		</Button>
	),
}
