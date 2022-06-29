import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import HomePage, { Body } from './HomePage'

test('should render component', () => {
    const container = render(<HomePage />, { wrapper: MemoryRouter })

    expect(container).toMatchSnapshot()
})

test('should render Body', () => {
    const container = render(<Body />, { wrapper: MemoryRouter })

    expect(container).toMatchSnapshot()
})