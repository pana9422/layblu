export interface Props {
	text: string
	fontWeight?: string
	before?: JSX.Element | string
	hideCloseBtn?: boolean
	square?: boolean
	color?: string
	bgColor?: string
	checked?: boolean
	close?: () => void
}
