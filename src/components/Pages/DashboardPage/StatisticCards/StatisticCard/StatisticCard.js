import Statistic from 'antd/lib/statistic'
import Card from 'antd/lib/card'
import Col from 'antd/lib/col'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'

const StatisticCard = ({ title, value, increased }) => (
    <Col span={4} xs={12} sm={9} lg={4}>
        <Card>
            <Statistic
                title={title}
                value={value}
                precision={2}
                valueStyle={{ color: increased ? '#3f8600' : '#cf1322' }}
                prefix={increased ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                suffix='%'
            />
        </Card>
    </Col>
)

export default StatisticCard