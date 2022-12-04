import { lazy, Suspense } from 'react'
import { Props } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconModules = {
	Checkbox: lazy(() => import('./repo/Checkbox')),
	IosShare: lazy(() => import('./repo/IosShare')),
}

export function Icon({ icon, svg, size = '20', color = 'inherit' }: Props) {
	if (svg !== undefined) {
		const IconToRender = iconModules[svg]
		return (
			<Suspense fallback={null}>
				<IconToRender
					fill={color}
					viewBox='0 0 48 48'
					width={size}
					height={size}
				/>
			</Suspense>
		)
	}

	if (icon !== undefined) {
		return (
			<FontAwesomeIcon
				icon={icon}
				size={typeof size !== 'string' ? size : undefined}
				color={color}
			/>
		)
	}

	return <svg></svg>
}
