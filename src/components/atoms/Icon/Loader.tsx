import { SVGProps } from 'react'

const Loader = ({
	width = '32',
	height = '32',
	strokeWidth = '3',
	...props
}: SVGProps<SVGSVGElement>) => (
	<svg
		className='animate-spin icon icon-tabler icon-tabler-loader-2 absolute'
		width={width}
		height={height}
		viewBox='0 0 24 24'
		strokeWidth={strokeWidth}
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M12 3a9 9 0 1 0 9 9'></path>
	</svg>
)
export default Loader
