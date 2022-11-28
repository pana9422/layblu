import { IIconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Icon({
	icon,
	svg = false,
	src = '',
	size = 'lg',
	color = 'inherit',
}: IIconProps) {
	return svg ? (
		<img src={src} />
	) : icon ? (
		<FontAwesomeIcon icon={icon} size={size} style={{ color }} />
	) : (
		<span>Icon</span>
	)
}
