import Img from './Img'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Img> = {
	component: Img,

	argTypes: {},
}

type Story = StoryObj<typeof Img>

export const Default: Story = {
	args: {
		aspecRatio: 'aspect-[4/3]',
		src: 'https://layblu-ui.vercel.app/assets/image/user-10.jpg',
		maxWidth: 'max-w-[500px]',
		fit: 'object-contain',
		borderRadius: 'rounded-2xl',
	},
}

export default meta
