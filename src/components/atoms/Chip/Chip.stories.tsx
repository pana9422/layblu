import { Chip } from './Chip'
import { ComponentMeta, ComponentStory } from '@storybook/react'

const main: ComponentMeta<typeof Chip> = {
	component: Chip,
	argTypes: {
		before: { control: 'select', options: ['1', '2', '3'] },
	},
}

export default main

const Template: ComponentStory<typeof Chip> = args => <Chip {...args} />

export const Default = Template.bind({})
Default.args = { text: 'default', before: '1' }

export const WithoutIcon = Template.bind({})
WithoutIcon.args = { text: 'Without icon' }

export const WithIcon = Template.bind({})
WithIcon.args = { text: 'With Icon', before: '2', onClose: undefined }

export const Simple = Template.bind({})
Simple.args = { text: 'simple', onClose: undefined }
