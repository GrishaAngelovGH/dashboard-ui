import { Carousel } from 'antd'

import StockPriceCard from './StockPriceCard'
import MarketSummary from './MarketSummary'

describe('(Component) MarketSummary', () => {
    it('should render component', () => {
        const stockPrices = [
            { id: 1, title: 'Title 1', value: '173,07', currency: 'USD', pricing: '+0.88 (0.51%)' },
            { id: 2, title: 'Title 2', value: '2,789.61', currency: 'USD', pricing: '+17.87 (0.64%)' },
        ]

        const wrapper = shallow(<MarketSummary stockPrices={stockPrices} />)

        expect(wrapper.equals(
            <div className='row no-gutters'>
                <div className="col-md-12">
                    <h2 className='text-center'>Market Summary</h2>

                    <Carousel autoplay>
                        <div>
                            <div className='stock-price-card-container'>
                                <StockPriceCard
                                    title={stockPrices[0].title}
                                    value={stockPrices[0].value}
                                    currency={stockPrices[0].currency}
                                    pricing={stockPrices[0].pricing}
                                />
                            </div>
                        </div>
                        <div>
                            <div className='stock-price-card-container'>
                                <StockPriceCard
                                    title={stockPrices[1].title}
                                    value={stockPrices[1].value}
                                    currency={stockPrices[1].currency}
                                    pricing={stockPrices[1].pricing}
                                />
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        )).to.equal(true)
    })
})