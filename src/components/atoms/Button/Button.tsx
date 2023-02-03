import { IButtonProps } from './types'

export const Button = ({
	onClick,
	outline = false,
	flat = false,
	children,
	square = false,
	bgColor = 'emerald-600',
	color = 'emerald-50',
	borderColor = 'emerald-700',
	hover = 'hover:bg-emerald-600/[0.2]',
	dense = false,
	size = 0,
}: IButtonProps) => {
	const borderRadius = square ? 'rounded' : 'rounded-full'
	const dimensions = size !== 0 ? `w-${size} h-${size}` : 'w-auto'
	const justifyContent = size !== 0 ? 'justify-center' : 'justify-between'
	let padding = dense ? 'px-1.5 py-0.5' : 'py-1.5 px-3'
	let style = `text-${color}`

	if (size !== 0) padding = 'p-0'

	if (outline) {
		style += ` border-${borderColor} border`
	} else if (!flat) {
		style += ` bg-${bgColor}`
		hover = ''
	}

	return (
		<button
			className={`capitalize flex items-center gap-x-3 ${hover} ${padding} ${justifyContent} ${dimensions} ${borderRadius} ${style}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
