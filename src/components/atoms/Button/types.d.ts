export interface IButtonProps {
	children: React.ReactNode

	onClick?: () => void

	bgColor?: string
	color?: string
	hover?: string
	dense?: boolean
	square?: boolean
	rounded?: boolean

	flat?: boolean
	outline?: boolean

	width?: number | string
}
