import { lazy, Suspense } from 'react'
import { Props } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconModules = {
	Checkbox: lazy(() => import('./repo/Checkbox')),
	IosShare: lazy(() => import('./repo/IosShare')),
}

// const REPO_ICONS: Array<string> = ['Checkbox', 'IosShare']

export default function Icon({
	icon,
	name,
	svg = false,
	src = '',
	size = 'lg',
	color = 'inherit',
}: Props) {
	// const ToRender = iconModules[name]

	function renderIcon(color: string) {
		if (name) {
			const IconToRender = iconModules[name]
			return <IconToRender fill={color} />
		}

		return <svg></svg>
	}

	return svg ? (
		<Suspense fallback={null}>{renderIcon(color)}</Suspense>
	) : icon ? (
		<FontAwesomeIcon
			icon={icon}
			size={typeof size === 'string' ? undefined : size}
			style={{ color }}
		/>
	) : (
		<span>Icon</span>
	)
}
