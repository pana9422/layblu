import { Props, Content } from './types'
import { EAvatarTypes } from '@/types'
import { useState, useEffect } from 'react'

/* UTILITIES */

const getNameInitials = (data: string) => {
	if (typeof data !== 'string') {
		console.error("Only pass text to Avatars of type 'text'!!")
		return
	}
	// Divide by words and returns the first letter of each word
	const dividedString = data.split(' ').map(s => s[0])
	// Joins each value in a string and returns it in uppercase
	return dividedString.join('').toUpperCase()
}

/* --------- */

export const Avatar = ({
	type,
	size = 14,
	content,
	color = 'transparent',
	fontSize,
}: Props) => {
	const [classNames, setClassNames] = useState('')
	const [avatarType, setAvatarType] = useState('rounded-full')

	useEffect(() => {
		// Evaluating what kind of Avatar is
		switch (type) {
			case EAvatarTypes.circle:
				setAvatarType(`rounded-full`)
				break
			case EAvatarTypes.rounded:
				setAvatarType(`rounded`)
				break
			case EAvatarTypes.square:
				setAvatarType(`rounded-none`)
				break
			default:
				setAvatarType(avatarType)
				break
		}

		setClassNames(
			`${avatarType} w-${size} h-${size} bg-${color} ${
				fontSize ? `text-${fontSize}` : ''
			}`
		)
	}, [avatarType])

	const contenToShow = (content: Content) => {
		switch (content.type) {
			case 'img':
				if (typeof content.data !== 'string') {
					console.error('Pass a valid URL to the image Avatar')
					return
				}
				return <img src={content.data } />
			case 'text':
				return getNameInitials(content.data as string)
			case 'icon':
				if (typeof content.data !== 'object') {
					console.error('Pass a valid JSX Element to the icon Avatar')
					return
				}

				return content.data
		}
	}

	return (
		<div
			className={`flex justify-center items-center overflow-hidden ${classNames}`}
		>
			{contenToShow(content)}
		</div>
	)
}
