import { IButtonProps } from './types'

export const Button = ({
	onClick,
	outline = false,
	flat = false,
	children,
	rounded = true,
	bgColor = 'emerald-600',
	color = 'emerald-50',
	hover = 'hover:bg-emerald-600/[0.8]',
	dense = false,
	size = 0,
}: IButtonProps) => {
	const borderRadius = rounded ? 'rounded' : 'rounded-full'
	const dimensions = size !== 0 ? `w-${size} h-${size}` : 'w-auto'
	const justifyContent = size !== 0 ? 'justify-center' : 'justify-between'
	let padding = dense ? 'px-1.5 py-0.5' : 'py-1.5 px-3'

	if (size !== 0) padding = 'p-0'

	let variant = `bg-${bgColor}` // => Variant default is Solid
	if (outline) variant = `border-${color} border`
	if (flat) variant = ''

	return (
		<button
			className={`capitalize flex transition-colors duration-200 items-center gap-x-3 text-${color} ${hover} ${padding} ${justifyContent} ${dimensions} ${borderRadius} ${variant}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
