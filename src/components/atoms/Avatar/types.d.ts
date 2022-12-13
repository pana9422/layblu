import { EAvatarTypes } from '@/types'

export interface Content {
	type: 'img' | 'icon' | 'text'
	data: string | JSX.Element
}

export interface Props {
	type: EAvatarTypes
	size?: number
	content: Content
	color?: string
	fontSize?: string
}
