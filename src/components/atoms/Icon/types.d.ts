import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'

import { EIcon } from '@/types'

export type Props = {
	icon?: IconProp
	svg?: EIcon
	color?: string
	size?: SizeProp | string
}
