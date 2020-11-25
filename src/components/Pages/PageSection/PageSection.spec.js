import PageSection from './PageSection'

describe('(Component) PageSection', () => {
    it('should render component', () => {
        const wrapper = shallow(
            <PageSection color='#0b3d7f'>
                <div>content</div>
            </PageSection>
        )

        expect(wrapper.equals(
            <div className='row no-gutters' style={{ background: '#0b3d7f', height: 500 }}>
                <div className='col-md-12'>
                    <div>content</div>
                </div>
            </div>
        )).to.equal(true)
    });
});