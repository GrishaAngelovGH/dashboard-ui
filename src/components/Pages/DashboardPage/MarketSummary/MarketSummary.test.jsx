import { render } from '@testing-library/react'

import MarketSummary from './MarketSummary'

test('should render MarketSummary component', () => {
	const stockPrices = [
		{ id: 1, title: 'Title 1', value: '173,07', currency: 'USD', pricing: '+0.88 (0.51%)' },
		{ id: 2, title: 'Title 2', value: '2,789.61', currency: 'USD', pricing: '+17.87 (0.64%)' },
	]

	const view = render(<MarketSummary stockPrices={stockPrices} />)

	expect(view).toMatchSnapshot()
})