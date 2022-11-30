import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'

export interface Props {
	name?: string
	svg?: boolean
	src?: string
	icon?: IconProp
	size?: SizeProp | string
	color?: string
}
