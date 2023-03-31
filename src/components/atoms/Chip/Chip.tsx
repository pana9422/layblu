import { Props } from './types'
import { Close } from '../../atoms/index'

export const Chip = ({
	square = false,
	color = 'indigo-600',
	bgColor = 'indigo-50',
	text,
	fontWeight = 'font-bold',
	before,
	onClose,
	checked = false,
}: Props) => {
	const padding = `${before === undefined ? 'pl-2' : ''} pr-2`
	const design = square ? 'rounded' : 'rounded-full'
	const opacity = checked ? '' : 'opacity-80'

	return (
		<div
			className={`${design} ${padding} bg-${bgColor} ${fontWeight} ${opacity} inline-flex gap-1 capitalize cursor-pointer`}
		>
			{typeof before === 'string' ? (
				<span
					className={`${design} text-${bgColor} bg-${color} w-6 h-6 flex items-center justify-center min-w-min px-1`}
				>
					{before}
				</span>
			) : (
				before
			)}

			<span className={`text-${color}`}>{text}</span>

			{onClose !== undefined && (
				<button className={design} onClick={onClose}>
					<Close
						width={16}
						height={16}
						className={`fill-${bgColor} bg-${color} rounded-full p-0.5`}
					/>
				</button>
			)}
		</div>
	)
}
