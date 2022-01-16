import Card from 'antd/lib/card'
import StockPriceCard from './StockPriceCard'

describe('(Component) StockPriceCard', () => {
    it('should render component', () => {
        const wrapper = shallow(
            <StockPriceCard
                title={'Title 1'}
                value={'173,07'}
                currency={'USD'}
                pricing={'+0.88 (0.51%)'}
            />
        )

        expect(wrapper.equals(
            <Card
                className='stock-price-card'
                title={<span className='text-muted'>NASDAQ</span>}
            >
                <h2>Title 1</h2>
                <div><span className='h2 font-weight-bold'>173,07</span> USD</div>
                <h5 className='text-success font-weight-bold'>+0.88 (0.51%)</h5>
            </Card>
        )).to.equal(true)
    })
})