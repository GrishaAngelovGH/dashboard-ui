import Layout from 'components/Layout'
import Menu from './Menu'

import HomePage from './HomePage'

describe('(Component) HomePage', () => {
    it('should render component', () => {
        const wrapper = shallow(<HomePage />)

        expect(wrapper.equals(
            <Layout header={<Menu />} body={<span></span>} />
        )).to.equal(true)
    })
})