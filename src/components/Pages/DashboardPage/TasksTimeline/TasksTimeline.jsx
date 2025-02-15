import Timeline from 'antd/lib/timeline'
import { ClockCircleOutlined } from '@ant-design/icons'

const TasksTimeline = () => (
	<Timeline mode='alternate' items={[
		{ label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nisi?' },
		{ label: 'Lorem ipsum dolor sit amet.', color: 'green' },
		{
			label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eaque quam, aperiam iste vel ipsum laudantium debitis ratione maxime voluptates sequi reprehenderit repellendus rerum nihil distinctio exercitationem vero inventore magni non. Ipsam ipsum maiores consequatur cupiditate excepturi, neque quam dolor facere quos magnam ea sed maxime expedita vitae nobis aliquam?',
			dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />
		},
		{ label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vel!', color: 'red' },
		{ label: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At assumenda id eius. Cupiditate natus reprehenderit sint corrupti dolore provident molestias.' },
		{
			label: 'Lorem ipsum dolor sit amet.',
			dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />
		}
	]} />
)

export default TasksTimeline