import Img from './Img'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Img> = {
	component: Img,
	argTypes: {
		src: {
			description: 'Path to image',
			table: {
				category: 'Content',
			},
		},
		placeholderSrc: {
			description:
				'While waiting for your image to load, you can use a placeholder image',
			table: {
				category: 'Content',
			},
		},
		alt: {
			description:
				'Specifies an alternate text for the image, if the image cannot be displayed',
			table: {
				category: 'Content',
			},
		},
		borderRadius: {
			description: 'Class of tailwind for border radius, start with rounded-',
			table: {
				category: 'Style',
			},
		},
		bgColor: {
			description: 'Class of tailwind for background color, start with bg-',
			table: {
				category: 'Style',
			},
		},
		fit: {
			description: 'Class of tailwind for position image , start with object-',
			table: {
				category: 'Style',
			},
		},
		maxWidth: {
			description: 'Class of tailwind for max width, start with max-w-',
			table: {
				category: 'Style',
			},
		},
		width: {
			description: 'Class of tailwind for width, start with w-',
			table: {
				category: 'Style',
			},
		},
		aspecRatio: {
			description:
				'Class of tailwind for aspect ratio, has content aspect-[number/number]',
			table: {
				category: 'Style',
			},
		},
	},
}

type Story = StoryObj<typeof Img>

export const Default: Story = {
	args: {
		src: 'https://picsum.photos/400/300',
	},
}
export const ImgWidth: Story = {
	args: {
		...Default.args,
		maxWidth: 'max-w-[500px]',
	},
}

export const ImgBorderRadius: Story = {
	args: {
		...Default.args,
		borderRadius: 'rounded-3xl',
	},
}
export const ImgAspectRatio: Story = {
	args: {
		...Default.args,
		maxWidth: 'max-w-[500px]',
		aspecRatio: 'aspect-[4/4]',
		fit: 'object-cover',
	},
}
export const ImgBgColor: Story = {
	args: {
		...Default.args,
		aspecRatio: 'aspect-[4/4]',
		maxWidth: 'max-w-[500px]',
		bgColor: 'bg-blue-500',
	},
}
export default meta
