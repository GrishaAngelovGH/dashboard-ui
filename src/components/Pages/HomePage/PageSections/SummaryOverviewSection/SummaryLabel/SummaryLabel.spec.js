import SummaryLabel from './SummaryLabel'

describe('(Component) SummaryLabel', () => {
    it('should render SummaryLabel', () => {
        const wrapper = shallow(
            <SummaryLabel
                value={'7+'}
                label={'supported platforms'}
                inverted={false}
            />
        )

        expect(wrapper.equals(
            <div className={'d-flex flex-column'}>
                <div className='summary-value d-flex justify-content-center align-items-center'>7+</div>
                <div className='summary-label text-center text-white text-uppercase m-1'>supported platforms</div>
            </div>
        )).to.equal(true)
    })

    it('should render inverted SummaryLabel', () => {
        const wrapper = shallow(
            <SummaryLabel
                value={'7+'}
                label={'supported platforms'}
                inverted={true}
            />
        )

        expect(wrapper.equals(
            <div className={'d-flex flex-column flex-column-reverse'}>
                <div className='summary-value d-flex justify-content-center align-items-center'>7+</div>
                <div className='summary-label text-center text-white text-uppercase m-1'>supported platforms</div>
            </div>
        )).to.equal(true)
    })
})