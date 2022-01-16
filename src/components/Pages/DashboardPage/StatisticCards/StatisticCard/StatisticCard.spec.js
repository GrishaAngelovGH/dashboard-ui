import { Statistic, Card, Col } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'

import StatisticCard from './StatisticCard'

describe('(Component) StatisticCard', () => {
    it('should render component with increased value', () => {
        const wrapper = shallow(<StatisticCard title={'Products'} value={5.23} increased={true} />)

        expect(wrapper.equals(
            <Col span={4} xs={12} sm={9} lg={4}>
                <Card>
                    <Statistic
                        title={'Products'}
                        value={5.23}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<ArrowUpOutlined />}
                        suffix='%'
                    />
                </Card>
            </Col>
        )).to.equal(true)
    })

    it('should render component with decreased value', () => {
        const wrapper = shallow(<StatisticCard title={'Downtime'} value={7.12} increased={false} />)

        expect(wrapper.equals(
            <Col span={4} xs={12} sm={9} lg={4}>
                <Card>
                    <Statistic
                        title={'Downtime'}
                        value={7.12}
                        precision={2}
                        valueStyle={{ color: '#cf1322' }}
                        prefix={<ArrowDownOutlined />}
                        suffix='%'
                    />
                </Card>
            </Col>
        )).to.equal(true)
    })
})