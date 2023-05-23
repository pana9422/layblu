import { Props } from './types'

export const Item = ({
	icon,
	txt,
	before,
	horizontalHoverLine = false,
	color = 'indigo-800',
	beforeColor = 'red-600',
	borderColor = 'hover:border-indigo-400',
}: Props) => {
	const listClass = `border-transparent list-none flex gap-5 py-1.5 px-3 items-center cursor-pointer ${
		horizontalHoverLine
			? `border-b-2 ${borderColor}`
			: `border-l-2 ${borderColor}`
	}`
	const textClass = `text-${color}`
	const beforeClass = `bg-${beforeColor} py-0.5 px-1.5 rounded-full text-sm text-gray-50 ml-auto`

	return (
		<li className={listClass}>
			{icon}
			<span className={textClass}>{txt}</span>
			{Boolean(before) && <span className={beforeClass}>{before}</span>}
		</li>
	)
}
