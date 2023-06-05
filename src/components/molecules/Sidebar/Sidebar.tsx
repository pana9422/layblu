import React from 'react'

interface Props {
	children: React.ReactNode | React.ReactNode[]
}

export const Sidebar: React.FC<Props> = ({ children }) => {
	return <ul className='p-3 gap-y-2 flex flex-col'>{children}</ul>
}
