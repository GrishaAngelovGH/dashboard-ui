import { render } from '@testing-library/react'

import DataOverviewSection from './DataOverviewSection'

test('should render DataOverviewSection component', () => {
    const view = render(<DataOverviewSection types={['azure', 'csv']} />)

    expect(view).toMatchSnapshot()
})