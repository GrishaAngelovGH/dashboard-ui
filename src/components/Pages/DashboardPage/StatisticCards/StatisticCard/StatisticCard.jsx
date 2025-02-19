import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import { Card, Col, Statistic } from 'antd'

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