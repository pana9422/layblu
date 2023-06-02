import { Checkbox } from '@/atoms/index'
import { Item } from './Item'

import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
	component: Item,
	argTypes: {
		icon: {
			description: 'Jsx Element that returns an svg',
			table: {
				category: 'React node',
			},
		},
		label: {
			description: 'Text that describes the item',
			table: { category: 'Text' },
		},
		before: {
			control: 'text',
			description: 'String or number to indicate a visual state',
			table: {
				category: 'Text',
				type: {
					summary: 'string | number',
				},
			},
		},
		path: {
			control: 'text',
			description:
				'String defining the location in the url it points to, this is compared with the useLocation hook and the result defines the active state',
			table: { category: 'Text' },
		},

		active: {
			control: 'boolean',
			description: 'Defines the a visual active state',
			table: { category: 'Design' },
		},

		activeColor: {
			description: 'Set the Tailwind color string when the Item is active',
			table: { category: 'Color' },
			control: 'color',
		},

		onClick: {
			description: 'On click event',
			table: { category: 'Events' },
			control: 'event',
		},

		horizontalHoverLine: {
			description: 'Stablish the look on hover',
			table: { category: 'Design' },
		},
		color: {
			description: 'Tailwind color string',
			table: { category: 'Color' },
		},
		beforeColor: {
			description: 'Tailwind hover background color string class',
			table: { category: 'Color' },
		},
		borderColor: {
			description:
				'Tailwind color string class to define the color of the border that appears in hover',
			table: { category: 'Color' },
		},
	},
}

type Story = StoryObj<typeof Item>

export const Default: Story = {
	args: {
		label: 'Label item',
	},
}

export const WithBefore: Story = {
	args: {
		label: 'With before',
		before: '1',
	},
}

export const WithIcon: Story = {
	args: {
		label: 'With icon',
		icon: <Checkbox fill='#1C558B' width={30} height={30} />,
	},
}

export const Full: Story = {
	args: {
		label: 'Full label',
		before: '2',
		icon: <Checkbox fill='#1C558B' width={30} height={30} />,
	},
}

export const HorizontalLineOnHover: Story = {
	args: {
		label: 'Hover me',
		before: '3',
		horizontalHoverLine: true,
	},
}

export const Active: Story = {
	args: {
		label: 'Active',
		before: 'new',
		active: true,
	},
}

export default meta
