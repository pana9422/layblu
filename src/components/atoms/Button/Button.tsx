import { IButtonProps } from './types'

export const Button = ({
	label,
	labelPosition = 'center',
	onClick,
	design = 'solid',
	square = false,
	bgColor = 'emerald-600',
	color = 'emerald-50',
	borderColor = 'emerald-700',
	leftIcon,
	rightIcon,
	typeDense = false,
}: IButtonProps) => {
	const borderRadius = square ? 'rounded' : 'rounded-full'
	const padding = typeDense ? 'px-1.5 py-0.5' : 'py-1.5 px-3'
	const width = typeDense || typeof label === 'object' ? 'min-w-max' : 'w-48'

	let style = `text-${color}`

	switch (design) {
		case 'solid':
			style += ` bg-${bgColor}`
			break
		case 'outline':
			style += ` border-${borderColor} border hover:bg-${borderColor}/[0.2]`
			break
		case 'flat':
			style += ` hover:bg-${bgColor}/[0.2]`
			break
	}

	return (
		<button
			className={`capitalize flex items-center gap-x-3 ${width} ${padding} ${borderRadius} ${style}`}
			onClick={onClick}
		>
			{leftIcon ?? null}
			<span className={`grow text-${labelPosition}`}>{label}</span>
			{rightIcon ?? null}
		</button>
	)
}
