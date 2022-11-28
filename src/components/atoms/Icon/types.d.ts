import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'

export interface IIconProps {
	name?: string
	svg?: boolean
	src?: string
	icon?: IconProp
	size?: SizeProp
	color?: string
}
