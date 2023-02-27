import { render } from '@testing-library/react'

import DashboardComponent from './DashboardComponent'

test('should render DashboardComponent component', () => {
    const view = render(
        <DashboardComponent
            image={'chart'}
            title={'Chart'}
            description={'Add various types of graphs for data analysis'}
        />
    )

    expect(view).toMatchSnapshot()
})