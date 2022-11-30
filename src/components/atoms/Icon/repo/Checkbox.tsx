import { SVGProps } from 'react'

const Checkbox = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns='http://www.w3.org/2000/svg' height={48} width={48} {...props}>
		<path d='M9.1 42.3q-1.35 0-2.375-1.025T5.7 38.9V9.1q0-1.4 1.025-2.4t2.375-1h29.8q1.4 0 2.4 1t1 2.4v29.8q0 1.35-1 2.375T38.9 42.3Zm0-3.4h29.8V9.1H9.1v29.8Zm11.85-7.4q.3 0 .6-.125t.55-.425l12.25-12.2q.45-.45.475-1.175.025-.725-.475-1.225-.5-.5-1.2-.5t-1.2.5l-11 11-4.7-4.65q-.45-.45-1.15-.475-.7-.025-1.2.475t-.5 1.2q0 .7.5 1.2l5.85 5.85q.25.3.55.425.3.125.65.125ZM9.1 38.9V9.1v29.8Z' />
	</svg>
)
export default  Checkbox
