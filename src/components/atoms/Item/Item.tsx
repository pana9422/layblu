import { Props } from './types'

export const Item = ({
	icon,
	label,
	before,
	horizontalHoverLine = false,
	color = 'indigo-800',
	beforeColor = 'red-600',
	borderColor = 'hover:border-indigo-400',
}: Props) => {
	const hoverLine = horizontalHoverLine ? `border-b-2` : `border-l-2`

	return (
		<li
			className={`border-transparent list-none flex gap-5 py-1.5 px-3 items-center cursor-pointer ${hoverLine} ${borderColor}`}
		>
			{icon}
			<span className={`text-${color}`}>{label}</span>
			{Boolean(before) && (
				<span
					className={`py-0.5 px-1.5 rounded-full text-sm text-gray-50 ml-auto bg-${beforeColor}`}
				>
					{before}
				</span>
			)}
		</li>
	)
}
