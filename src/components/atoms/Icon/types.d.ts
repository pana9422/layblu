import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'

import { EIcon } from '@/types'

export interface Props {
	icon?: IconProp
	svg?: EIcon
	color?: string
	size?: SizeProp | string
}
