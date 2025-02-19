import { render } from '@testing-library/react'

import StockPriceCard from './StockPriceCard'

test('should render StockPriceCard component', () => {
	const view = render(
		<StockPriceCard
			title={'Title 1'}
			value={'173,07'}
			currency={'USD'}
			pricing={'+0.88 (0.51%)'}
		/>
	)

	expect(view).toMatchSnapshot()
})