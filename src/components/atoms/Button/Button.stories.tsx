import { Button } from './Button'
import { Close } from '../Icon'

import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = { args: { children: 'default' } }

export const Outline: Story = { args: { outline: true, children: 'outline' } }

export const Text: Story = { render: () => <Button flat>Text</Button> }

export const Dense: Story = {
	render: () => (
		<Button dense>
			Dense <Close width={20} height={20} fill='white' />
		</Button>
	),
}
