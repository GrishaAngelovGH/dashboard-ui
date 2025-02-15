import Card from 'antd/lib/card'
import './StockPriceCard.scss'

const StockPriceCard = ({ title, value, currency, pricing }) => (
    <Card
        className='stock-price-card'
        title={<span className='text-muted'>NASDAQ</span>}
    >
        <h2>{title}</h2>
        <div><span className='h2 font-weight-bold'>{value}</span> {currency}</div>
        <h5 className='text-success font-weight-bold'>{pricing}</h5>
    </Card>
)

export default StockPriceCard