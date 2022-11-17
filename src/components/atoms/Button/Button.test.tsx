import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import Button from './Button'

describe('Button', () => {
	it('should render prop text', () => {
		const label = 'MyButton'

		const component = render(<Button label={label} />)
		// component.find... Para consultas asincronas
		// component.get... Para consultas sincronas
		// component.query...Para consultar elementos que pueden o no estar en el DOM

		component.getByText(label)
	})
})
