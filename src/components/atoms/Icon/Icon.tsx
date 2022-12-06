import { lazy, Suspense } from 'react'
import { Props } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'

const iconModules = {
	Checkbox: lazy(async () => await import('./repo/Checkbox')),
	IosShare: lazy(async () => await import('./repo/IosShare')),
}

export function Icon({ icon, svg, size, color = 'inherit' }: Props) {
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
		return <FontAwesomeIcon icon={icon} size={size as SizeProp} color={color} />
	}

	return <svg></svg>
}
