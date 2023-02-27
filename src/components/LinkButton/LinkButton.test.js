import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import LinkButton from './LinkButton'

test('should render LinkButton component', () => {
    const view = render(<LinkButton href={'/'} />, { wrapper: MemoryRouter })

    expect(view).toMatchSnapshot()
})