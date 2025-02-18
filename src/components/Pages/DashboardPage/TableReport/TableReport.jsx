import { Table } from 'antd'

export const columns = [
	{
		title: 'Name',
		dataIndex: 'name'
	},
	{
		title: 'Activations',
		dataIndex: 'activations',
		sorter: {
			compare: (a, b) => a.activations - b.activations,
			multiple: 3
		}
	},
	{
		title: 'Orders',
		dataIndex: 'orders',
		sorter: {
			compare: (a, b) => a.orders - b.orders,
			multiple: 2
		}
	},
	{
		title: 'Active Users',
		dataIndex: 'users',
		sorter: {
			compare: (a, b) => a.users - b.users,
			multiple: 1
		}
	}
]

export const data = [
	{
		key: '1',
		name: 'Product 1',
		activations: 10,
		orders: 50,
		users: 90
	},
	{
		key: '2',
		name: 'Product 2',
		activations: 20,
		orders: 60,
		users: 100
	},
	{
		key: '3',
		name: 'Product 3',
		activations: 30,
		orders: 70,
		users: 110
	},
	{
		key: '4',
		name: 'Product 3',
		activations: 40,
		orders: 80,
		users: 120
	}
]

const TableReport = () => (
	<Table bordered={true} columns={columns} dataSource={data} />
)

export default TableReport