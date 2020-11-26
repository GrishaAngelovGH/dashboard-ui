import DashboardComponentsOverview from './DashboardComponentsOverview'

describe('(Component) DashboardComponentsOverview', () => {
    it('should render component', () => {
        const wrapper = shallow(<DashboardComponentsOverview />)

        expect(wrapper.equals(<div>test</div>)).to.equal(true)
    })
})