import { render } from '@testing-library/react'

import DashboardComponentsOverview from './DashboardComponentsOverview'

test('should render DashboardComponentsOverview component', () => {

	const components = [
		[
			{ image: 'chart', title: 'Chart', description: 'Add various types of graphs for data analysis' },
		],
		[
			{ image: 'pivot', title: 'Pivot', description: 'Quickly summarize large amounts of data in pivot tables' },
		]
	]

	const view = render(<DashboardComponentsOverview components={components} />)

	expect(view).toMatchSnapshot()
})