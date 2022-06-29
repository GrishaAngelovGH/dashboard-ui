import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import SummaryOverviewSection from './SummaryOverviewSection'

test('should render component', () => {
    const summary = [
        { value: '7+', label: 'supported platforms', inverted: false },
        { value: '17+', label: 'customizable elements', inverted: true }
    ]

    const container = render(<SummaryOverviewSection summary={summary} />, { wrapper: MemoryRouter })

    expect(container).toMatchSnapshot()
})