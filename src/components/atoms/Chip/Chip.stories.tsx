import { Chip } from './Chip'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	component: Chip,
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = args => <Chip {...args} />

export const Default = Template.bind({})
Default.args = { text: 'default', before: '1' }

export const Variant1 = Template.bind({})
Variant1.args = { text: 'variant 1' }

export const Variant2 = Template.bind({})
Variant2.args = { text: 'variant 2', before: '2', onClose: undefined }

export const Variant3 = Template.bind({})
Variant3.args = { text: 'variant 3', onClose: undefined }
