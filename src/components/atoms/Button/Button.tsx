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
	width,
	square = false,
}: IButtonProps) => {
	const borderRadius = rounded ? 'rounded' : 'rounded-full'

	const padding = dense ? 'px-1.5 py-0.5' : 'py-1.5 px-3'
	const dimmensions = square ? `aspect-square p-0` : padding
	const size = typeof width === 'undefined' ? 'w-full' : `w-${width}`

	let variant = `bg-${bgColor}` // => Variant default is Solid
	if (outline) variant = `border-${color} border`
	if (flat) variant = ''

	return (
		<button
			className={`capitalize flex transition-colors duration-200 items-center justify-center gap-x-3 text-${color} ${size} ${hover} ${dimmensions} ${borderRadius} ${variant}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
