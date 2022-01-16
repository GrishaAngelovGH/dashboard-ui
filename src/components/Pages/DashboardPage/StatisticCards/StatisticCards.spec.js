import StatisticCards from './StatisticCards'
import StatisticCard from './StatisticCard'
import { Row } from 'antd'

describe('(Component) StatisticCards', () => {
    it('should render component', () => {
        const wrapper = shallow(<StatisticCards />)

        expect(wrapper.equals(
            <div className='row no-gutters justify-content-center text-center p-3'>
                <div className='col-md-10 ml-auto'>
                    <Row gutter={5}>
                        <StatisticCard
                            title={'Active Products'}
                            value={11.28}
                            increased={true}
                        />
                        <StatisticCard
                            title={'Average Downtime'}
                            value={9.30}
                            increased={false}
                        />
                        <StatisticCard
                            title={'Income'}
                            value={25.48}
                            increased={true}
                        />
                        <StatisticCard
                            title={'Idling'}
                            value={10.36}
                            increased={false}
                        />
                        <StatisticCard
                            title={'Active Users'}
                            value={17.74}
                            increased={true}
                        />
                    </Row>
                </div>
            </div>
        )).to.equal(true)
    })
})