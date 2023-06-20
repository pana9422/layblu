export interface PropsImg {
	aspecRatio?: `aspect-[${number}/${number}]`
	maxWidth: `max-w-[${number}${'px' | '%'}]`

	alt?: string
	src: string
	placeholderSrc?: string
}
