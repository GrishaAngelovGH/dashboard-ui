import Statistic from 'antd/lib/statistic'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import { LikeOutlined } from '@ant-design/icons'

const ActiveUsers = () => (
	<div className='row g-0 justify-content-center text-center p-3'>
		<div className='col-md-9 ml-auto'>
			<Row gutter={5}>
				<Col span={4} xs={12} sm={9} lg={4}>
					<Statistic title='Active Users' value={112893} />
				</Col>
				<Col span={4} xs={12} sm={9} lg={4}>
					<Statistic title='Generated Revenue' value={112893} precision={2} />
				</Col>
				<Col span={4} xs={12} sm={9} lg={4}>
					<Statistic title='Feedback' value={1128} prefix={<LikeOutlined />} />
				</Col>
				<Col span={4} xs={12} sm={9} lg={4}>
					<Statistic title='Completed Tasks' value={93} suffix='/ 100' />
				</Col>
			</Row>
		</div>
	</div>
)

export default ActiveUsers