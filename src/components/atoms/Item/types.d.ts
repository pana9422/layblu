export interface Props {
	icon?: JSX.Element
	label: string
	before?: string | number
	horizontalHoverLine?: boolean

	active?: boolean
	path?: string
	color?: string
	activeColor?: string
	beforeColor?: string
	borderColor?: string
	onClick?: () => void
}
