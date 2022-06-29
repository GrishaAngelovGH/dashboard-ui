import { render } from '@testing-library/react'

import Menu, { SearchIcon, UserIcon } from './Menu'

test('should render component', () => {
    const container = render(<Menu />)

    expect(container).toMatchSnapshot()
})

test('should render SearchIcon', () => {
    const container = render(<SearchIcon width={'1'} height={'2'} />)

    expect(container).toMatchSnapshot()
})

test('should render UserIcon', () => {
    const container = render(<UserIcon width={'1'} height={'2'} />)

    expect(container).toMatchSnapshot()
})