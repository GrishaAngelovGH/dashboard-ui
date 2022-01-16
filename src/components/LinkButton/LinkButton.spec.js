import { Link } from 'react-router-dom'
import LinkButton from './LinkButton'

describe('(Component) LinkButton', () => {
    it('should render component', () => {
        const wrapper = shallow(<LinkButton href='/dashboard'>Dashboard</LinkButton>)

        expect(wrapper.equals(
            <Link to={'/dashboard'} className='link-button'>
                Dashboard
            </Link>
        )).to.equal(true)
    })
})