import { Table } from 'antd'

import TableReport, { data, columns } from './TableReport'

describe('(Component) TableReport', () => {
    it('should render component', () => {
        const wrapper = shallow(<TableReport />)

        expect(wrapper.equals(
            <Table bordered={true} columns={columns} dataSource={data} />
        )).to.equal(true)
    })
})