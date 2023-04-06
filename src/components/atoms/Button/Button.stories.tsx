import { Button } from './Button'
import { Close } from '../Icon'

import { ComponentMeta, ComponentStory } from '@storybook/react'

const main: ComponentMeta<typeof Button> = {
	title: 'Button',
	component: Button,
	args: {
		children: 'Button',
	},
}

export default main

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = { square: true }

export const Outline = Template.bind({})
Outline.args = { outline: true }

export const Text = Template.bind({})
Text.args = { flat: true }

export const Dense = Template.bind({})
Dense.args = {
	dense: true,
	children: (
		<>
			Dense
			<Close width={20} height={20} fill='white' />
		</>
	),
}
