import { render } from '@testing-library/react'

import StatisticCards from './StatisticCards'

window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    }
}

test('should render StatisticCards component', () => {
    const view = render(<StatisticCards />)

    expect(view).toMatchSnapshot()
})