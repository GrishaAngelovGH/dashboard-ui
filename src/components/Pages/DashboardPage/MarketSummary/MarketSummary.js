import { Carousel } from 'antd'
import StockPriceCard from './StockPriceCard'
import './StockPriceCard.scss'

const MarketSummary = ({ stockPrices }) => (
    <div className='row no-gutters'>
        <div className="col-md-12">
            <h2 className='text-center'>Market Summary</h2>

            <Carousel autoplay>
                {
                    stockPrices.map(v => (
                        <div key={v.id}>
                            <div className='stock-price-card-container'>
                                <StockPriceCard
                                    title={v.title}
                                    value={v.value}
                                    currency={v.currency}
                                    pricing={v.pricing}
                                />
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    </div>
)

export default MarketSummary