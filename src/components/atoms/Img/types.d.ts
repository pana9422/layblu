export interface PropsImg {
	aspecRatio?: `aspect-[${number}/${number}]`
	width?: `w-${string}`
	maxWidth?: `max-w-${string}`
	fit?: `object-${string}`

	alt?: string
	src: string
	placeholderSrc?: string
}
