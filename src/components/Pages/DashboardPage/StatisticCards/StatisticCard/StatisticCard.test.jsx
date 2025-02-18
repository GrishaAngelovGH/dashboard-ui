import { render, screen } from '@testing-library/react'

import StatisticCard from './StatisticCard'

test('should render StatisticCard component with increased value', () => {
	render(<StatisticCard title={'Products'} value={5.23} increased={true} />)

	expect(screen.getAllByRole('img')[0]).toHaveClass('anticon anticon-arrow-up')
})

test('should render StatisticCard component with decreased value', () => {
	render(<StatisticCard title={'Downtime'} value={7.12} increased={false} />)

	expect(screen.getAllByRole('img')[0]).toHaveClass('anticon anticon-arrow-down')
})