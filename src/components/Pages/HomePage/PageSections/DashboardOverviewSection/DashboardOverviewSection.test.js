import { render } from '@testing-library/react'

import DashboardOverviewSection from './DashboardOverviewSection'

test('should render component', () => {
    const container = render(<DashboardOverviewSection />)

    expect(container).toMatchSnapshot()
})