export interface IButtonProps {
	children: React.ReactNode

	onClick?: () => void

	bgColor?: string
	color?: string
	hover?: string
	dense?: boolean
	ratio?: boolean
	square?: boolean

	flat?: boolean
	outline?: boolean

	width?: number | string
}
