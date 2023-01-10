export interface IButtonProps {
	label: string | Jsx.Element
	labelPosition?: 'center' | 'left' | 'right'
	onClick?: () => void
	design?: 'outline' | 'solid' | 'flat'
	square?: boolean
	bgColor?: string
	color?: string
	borderColor?: string
	leftIcon?: Jsx.Element
	rightIcon?: Jsx.Element
	typeDense?: boolean
}
