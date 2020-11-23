import DashboardPage from './DashboardPage'

describe('(Component) DashboardPage', () => {
    it('should render component', () => {
        const wrapper = shallow(<DashboardPage />)

        expect(wrapper.equals(
            <div>dashboard page</div>
        )).to.equal(true)
    })
})