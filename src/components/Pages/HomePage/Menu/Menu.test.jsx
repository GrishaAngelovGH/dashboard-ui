import { render } from '@testing-library/react'

import Menu, { SearchIcon, UserIcon } from './Menu'

test('should render Menu component', () => {
    const view = render(<Menu />)

    expect(view).toMatchSnapshot()
})

test('should render SearchIcon component', () => {
    const view = render(<SearchIcon width={'1'} height={'2'} />)

    expect(view).toMatchSnapshot()
})

test('should render UserIcon component', () => {
    const view = render(<UserIcon width={'1'} height={'2'} />)

    expect(view).toMatchSnapshot()
})