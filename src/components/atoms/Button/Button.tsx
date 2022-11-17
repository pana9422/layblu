import { IButtonProps } from './types'

const Button = ({ label, onClick, active = false, imgSrc }: IButtonProps) => {
	return (
		<button
			className={
				'flex gap-2 py-1 px-2 rounded-sm border border-solid border-gray-500 ' +
				(active ? 'bg-gray-300' : 'bg-gray-50')
			}
			onClick={onClick}
		>
			{imgSrc !== undefined && <img src={imgSrc} alt={label} className='w-6' />}

			{label}
		</button>
	)
}

export default Button
