import { Props } from './types'

/* UTILITIES */

const getNameInitials = (data: string, numberOfLetters = 2) => {
	// Divide by words and returns the first letter of each word
	const dividedString = data.split(' ').map(s => s[0])
	// Joins each value in a string and returns it in uppercase
	return dividedString.join('').slice(0, numberOfLetters).toUpperCase()
}

/* --------- */

export const Avatar = ({
	square = false,
	size = 14,
	username = 'Visitor LayBlu',
	imgSrc,
	bgColor = 'blue-600',
	color = 'blue-100',
	fontSize,
	numberOfLetters,
	fontWeight = false,
}: Props) => {
	const font = fontSize !== undefined ? `text-${fontSize}` : ''
	const text =
		imgSrc === undefined ? getNameInitials(username, numberOfLetters) : null
	const type = square ? 'rounded' : 'rounded-full'
	const fw = fontWeight ? 'font-bold' : 'font-normal'

	return (
		<div
			className={`flex justify-center items-center overflow-hidden ${type} w-${size} h-${size} bg-${bgColor} text-${color} ${font} ${fw}`}
		>
			{text ?? (
				<img src={imgSrc} className={`object-cover w-${size} h-${size}`} />
			)}
		</div>
	)
}
