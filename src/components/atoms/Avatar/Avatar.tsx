import { Props } from './types'

/* UTILITIES */

const getNameInitials = (data: string, numberOfLetters = 2) => {
	if (typeof data !== 'string') {
		console.error("Only pass text to Avatars of type 'text'!!")
		return
	}
	// Divide by words and returns the first letter of each word
	const dividedString = data.split(' ').map(s => s[0])
	// Joins each value in a string and returns it in uppercase
	return dividedString.join('').slice(0, numberOfLetters).toUpperCase()
}

/* --------- */

export const Avatar = ({
	type,
	size = 14,
	content,
	bgColor = 'transparent',
	fontSize,
	numberOfLetters,
}: Props) => {
	return (
		<div
			className={`flex justify-center items-center overflow-hidden ${type} w-${size} h-${size} bg-${bgColor} ${
				fontSize !== undefined ? `text-${fontSize}` : ''
			}`}
		>
			{content.type === 'img' ? (
				<img src={content.data as string} />
			) : content.type === 'text' ? (
				getNameInitials(content.data as string, numberOfLetters)
			) : (
				content.data
			)}
		</div>
	)
}
