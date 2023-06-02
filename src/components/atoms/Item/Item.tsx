import { Props } from './types'
import { useLocation } from 'wouter'

export const Item = ({
	icon,
	label,
	before,
	horizontalHoverLine = false,
	activeColor = 'blue-100',
	color = 'indigo-800',
	beforeColor = 'red-600',
	borderColor = 'hover:border-indigo-400',
	onClick,
	path,
	active = false,
}: Props) => {
	const [location] = useLocation()

	const activeState = active || location === path ? true : false
	const hoverLine = horizontalHoverLine ? `border-b-2` : `border-l-2`

	const activeBg = activeState ? `bg-${activeColor}` : ''

	return (
		<li
			className={`border-transparent list-none flex gap-5 py-1.5 px-3 items-center cursor-pointer ${hoverLine} ${borderColor} ${activeBg}`}
			onClick={onClick}
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
