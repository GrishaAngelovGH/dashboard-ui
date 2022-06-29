import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import LinkButton from './LinkButton'

test('should render component', () => {
    const container = render(<LinkButton href={'/'} />, { wrapper: MemoryRouter })

    expect(container).toMatchSnapshot()
})