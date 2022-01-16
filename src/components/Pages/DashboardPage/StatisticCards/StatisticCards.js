import StatisticCard from './StatisticCard'
import { Row } from 'antd'

const StatisticCards = () => {
    const statisticData = [
        { id: 1, title: 'Active Products', value: 11.28, increased: true },
        { id: 2, title: 'Average Downtime', value: 9.30, increased: false },
        { id: 3, title: 'Income', value: 25.48, increased: true },
        { id: 4, title: 'Idling', value: 10.36, increased: false },
        { id: 5, title: 'Active Users', value: 17.74, increased: true }
    ]

    return (
        <div className='row no-gutters justify-content-center text-center p-3'>
            <div className='col-md-10 ml-auto'>
                <Row gutter={5}>
                    {
                        statisticData.map(v => (
                            <StatisticCard
                                key={v.id}
                                title={v.title}
                                value={v.value}
                                increased={v.increased}
                            />
                        ))
                    }
                </Row>
            </div>
        </div>
    )
}

export default StatisticCards