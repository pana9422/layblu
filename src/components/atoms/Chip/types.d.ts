export interface Props {
	text: string
	fontWeight?: string
	before?: JSX.Element | string
	square?: boolean
	color?: string
	bgColor?: string
	checked?: boolean
	close?: () => void
}
