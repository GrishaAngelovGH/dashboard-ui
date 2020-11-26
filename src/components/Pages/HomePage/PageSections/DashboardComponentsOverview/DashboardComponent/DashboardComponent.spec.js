import { dashboardComponents } from 'images'

import DashboardComponent from './DashboardComponent'

describe('(Component) DashboardComponent', () => {
    it('should render component', () => {
        const wrapper = shallow(
            <DashboardComponent
                image={'chart'}
                title={'Chart'}
                description={'Add various types of graphs for data analysis'}
            />
        )

        expect(wrapper.equals(
            <div className='dashboard-component text-center'>
                <img src={dashboardComponents['chart']} width={310} height={300} />
                <h2>Chart</h2>
                <p>Add various types of graphs for data analysis</p>
            </div>
        )).to.equal(true)
    })
})