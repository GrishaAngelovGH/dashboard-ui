import { render } from '@testing-library/react'

import StockPriceCard from './StockPriceCard'

test('should render component', () => {
    const container = render(
        <StockPriceCard
            title={'Title 1'}
            value={'173,07'}
            currency={'USD'}
            pricing={'+0.88 (0.51%)'}
        />
    )

    expect(container).toMatchSnapshot()
})