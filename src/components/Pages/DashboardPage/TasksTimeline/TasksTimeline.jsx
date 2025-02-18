import { Timeline } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'

const TasksTimeline = () => (
	<Timeline mode='alternate' items={[
		{ children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nisi?' },
		{ children: 'Lorem ipsum dolor sit amet.', color: 'green' },
		{
			children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eaque quam, aperiam iste vel ipsum laudantium debitis ratione maxime voluptates sequi reprehenderit repellendus rerum nihil distinctio exercitationem vero inventore magni non. Ipsam ipsum maiores consequatur cupiditate excepturi, neque quam dolor facere quos magnam ea sed maxime expedita vitae nobis aliquam?',
			dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />
		},
		{ children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vel!', color: 'red' },
		{ children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At assumenda id eius. Cupiditate natus reprehenderit sint corrupti dolore provident molestias.' },
		{
			children: 'Lorem ipsum dolor sit amet.',
			dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />
		}
	]} />
)

export default TasksTimeline