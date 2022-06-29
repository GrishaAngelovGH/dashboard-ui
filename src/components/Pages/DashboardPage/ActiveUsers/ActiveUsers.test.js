import { render } from '@testing-library/react'

import ActiveUsers from './ActiveUsers'

window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    }
}

test('should render component', () => {
    const container = render(<ActiveUsers />)

    expect(container).toMatchSnapshot()
})