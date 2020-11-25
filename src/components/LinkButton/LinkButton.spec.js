import LinkButton from './LinkButton'

describe('(Component) LinkButton', () => {
    it('should render component', () => {
        const wrapper = shallow(<LinkButton href='#/'>content</LinkButton>)

        expect(wrapper.equals(
            <a href={'#/'} className='link-button'>
                content
            </a>
        )).to.equal(true)
    });
});