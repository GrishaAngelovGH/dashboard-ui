import { render } from '@testing-library/react'

import StatisticCards from './StatisticCards'

window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    }
}

test('should render component', () => {
    const container = render(<StatisticCards />)

    expect(container).toMatchSnapshot()
})