import { Sidebar } from './Sidebar'
import { Item } from '@/atoms/Item/Item'
import { IosShare } from '@/atoms/index'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
	component: Sidebar,
}

type Story = StoryObj<typeof Sidebar>

const sidebarItems = ['Dashboard', 'Components', 'Collaborators']

export const Simple: Story = {
	args: {
		children: sidebarItems.map((i, index) => (
			<Item
				label={i}
				color='zinc-700'
				key={index}
				icon={<IosShare fill='#3F3F46' width={24} height={24} />}
			/>
		)),
	},
}

export default meta
