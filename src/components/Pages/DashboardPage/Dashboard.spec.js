import Layout from 'components/Layout'

import Menu from './Menu'
import DashboardPage from './DashboardPage'

describe('(Component) DashboardPage', () => {
    it('should render component', () => {
        const wrapper = shallow(<DashboardPage />)

        expect(wrapper.equals(
            <Layout header={<Menu />} body={<span>body</span>} />
        )).to.equal(true)
    })
})