type TAvatarTypes = 'rounded-full' | 'rounded-none' | 'rounded'

type Content =
	| {
			type: 'img' | 'text'
			data: string
	  }
	| {
			type: 'icon'
			data: JSX.Element
	  }

export interface Props {
	type: TAvatarTypes
	size?: number
	numberOfLetters?: number
	content: Content
	bgColor?: string
	fontSize?: string
}
