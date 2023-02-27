import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import SummaryOverviewSection from './SummaryOverviewSection'

test('should render SummaryOverviewSection component', () => {
    const summary = [
        { value: '7+', label: 'supported platforms', inverted: false },
        { value: '17+', label: 'customizable elements', inverted: true }
    ]

    const view = render(<SummaryOverviewSection summary={summary} />, { wrapper: MemoryRouter })

    expect(view).toMatchSnapshot()
})