export interface IButtonProps {
	children: React.ReactNode

	onClick?: () => void

	bgColor?: string
	color?: string
	borderColor?: string
	hover?: string

	dense?: boolean

	rounded?: boolean

	flat?: boolean
	outline?: boolean

	size?: number | string
}
