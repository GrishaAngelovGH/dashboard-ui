import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import HomePage, { Body } from './HomePage'

test('should render HomePage component', () => {
	const view = render(<HomePage />, { wrapper: MemoryRouter })

	expect(view).toMatchSnapshot()
})

test('should render Body component', () => {
	const view = render(<Body />, { wrapper: MemoryRouter })

	expect(view).toMatchSnapshot()
})