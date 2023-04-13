import { Chip } from './Chip'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Chip> = {
	component: Chip,
}

export default meta
type Story = StoryObj<typeof Chip>

export const Default: Story = { args: { text: 'default', before: '1' } }

export const WithoutIcon: Story = { args: { text: 'Without icon' } }

export const WithIcon: Story = {
	args: { text: 'With icon', before: '2', onClose: undefined },
}

export const Simple: Story = { args: { text: 'Simple', onClose: undefined } }
