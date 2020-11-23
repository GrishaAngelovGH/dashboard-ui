import { shallow } from 'enzyme';
import Layout from './Layout'

describe('(Component) Layout', () => {
    const header = (<span>header</span>)
    const body = (<span>body</span>)

    it('should render component', () => {
        const wrapper = shallow(<Layout header={header} body={body} />)

        expect(wrapper.equals(
            <div className='row'>
                <div className='col-md-12'>
                    <Layout.Header content={header} />
                    <Layout.Body content={body} />
                </div>
            </div>
        )).to.equal(true)
    });

    it('should render Header', () => {
        const wrapper = shallow(<Layout.Header content={header} />)

        expect(wrapper.equals(
            <div className='row'>
                <div className='col-md-12'>
                    <span>header</span>
                </div>
            </div>
        )).to.equal(true)
    });

    it('should render Body', () => {
        const wrapper = shallow(<Layout.Body content={body} />)

        expect(wrapper.equals(
            <div className='row'>
                <div className='col-md-12'>
                    <span>body</span>
                </div>
            </div>
        )).to.equal(true)
    });
});