import { Timeline } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'

import TasksTimeline from './TasksTimeline'

describe('(Component) TasksTimeline', () => {
    it('should render component', () => {
        const wrapper = shallow(<TasksTimeline />)

        expect(wrapper.equals(
            <Timeline mode='alternate'>
                <Timeline.Item>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nisi?</Timeline.Item>
                <Timeline.Item color='green'>Lorem ipsum dolor sit amet.</Timeline.Item>
                <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eaque quam, aperiam iste vel ipsum laudantium debitis ratione maxime voluptates sequi reprehenderit repellendus rerum nihil distinctio exercitationem vero inventore magni non. Ipsam ipsum maiores consequatur cupiditate excepturi, neque quam dolor facere quos magnam ea sed maxime expedita vitae nobis aliquam?
                </Timeline.Item>
                <Timeline.Item color='red'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vel!</Timeline.Item>
                <Timeline.Item>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At assumenda id eius. Cupiditate natus reprehenderit sint corrupti dolore provident molestias.</Timeline.Item>
                <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                    Lorem ipsum dolor sit amet.
                </Timeline.Item>
            </Timeline>
        )).to.equal(true)
    })
})