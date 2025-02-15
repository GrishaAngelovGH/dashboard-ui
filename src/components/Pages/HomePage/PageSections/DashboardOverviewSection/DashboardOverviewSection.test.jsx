import { render } from '@testing-library/react'

import DashboardOverviewSection from './DashboardOverviewSection'

test('should render DashboardOverviewSection component', () => {
    const view = render(<DashboardOverviewSection />)

    expect(view).toMatchSnapshot()
})