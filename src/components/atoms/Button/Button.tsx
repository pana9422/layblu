import { IButtonProps } from './types'

export const Button = ({
	onClick,
	outline,
	flat,
	children,
	square = false,
	bgColor = 'emerald-600',
	color = 'emerald-50',
	borderColor = 'emerald-700',
	dense = false,
}: IButtonProps) => {
	const borderRadius = square ? 'rounded' : 'rounded-full'
	const padding = dense ? 'px-1.5 py-0.5' : 'py-1.5 px-3'

	let style = `text-${color}`

	// if (outline) {
	// 	style += ` border-${borderColor} border hover:bg-${borderColor}/[0.2]`
	// } else if (flat) {
	// 	style += ` hover:bg-${color}/[0.2]`
	// } else style += ` bg-${bgColor}`

	if (outline) {
		style += ` border-${borderColor} border`
	} else if (!flat && !outline) {
		style += ` bg-${bgColor} hover:bg-transparent`
	}

	return (
		<button
			className={`capitalize flex items-center justify-between gap-x-3 hover:bg-gray-500/[0.2] ${padding} ${borderRadius} ${style}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
