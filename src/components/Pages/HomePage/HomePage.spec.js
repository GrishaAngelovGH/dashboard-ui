import Layout from 'components/Layout'
import Menu from './Menu'
import { DashboardOverviewSection } from './PageSections'

import HomePage, { Body } from './HomePage'

describe('(Component) HomePage', () => {
    it('should render component', () => {
        const wrapper = shallow(<HomePage />)

        expect(wrapper.equals(
            <Layout header={<Menu />} body={<Body />} />
        )).to.equal(true)
    })

    it('should render Body', () => {
        const wrapper = shallow(<Body />)

        expect(wrapper.equals(
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <DashboardOverviewSection />
                </div>
            </div>
        ))
    })
})