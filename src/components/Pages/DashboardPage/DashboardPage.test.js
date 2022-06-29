import { render } from '@testing-library/react'

import DashboardPage from './DashboardPage'

class ResizeObserver {
    observe() { }
    unobserve() { }
    disconnect() { }
}

window.ResizeObserver = ResizeObserver

window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    }
}

window.scrollTo = jest.fn()

test('should render component', () => {
    const container = render(<DashboardPage />)

    expect(container).toMatchSnapshot()
})