import { render } from '@testing-library/react'

import DataOverviewSection from './DataOverviewSection'

test('should render component', () => {
    const container = render(<DataOverviewSection types={['azure', 'csv']} />)

    expect(container).toMatchSnapshot()
})