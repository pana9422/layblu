export interface IButtonProps {
	children: React.ReactNode

	onClick?: () => void

	bgColor?: string
	color?: string
	borderColor?: string

	dense?: boolean

	square?: boolean

	flat?: boolean
	outline?: boolean
}
