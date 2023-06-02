import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export const Sidebar: React.FC<Props> = ({ children }) => {
	return <ul className='p-3 gap-y-2 flex flex-col'>{children}</ul>
}
