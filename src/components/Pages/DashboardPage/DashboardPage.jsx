import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Layout from 'components/Layout'

import Menu from './Menu'

import ProgressWidget from './ProgressWidget'
import LineChart from './LineChart'
import StatisticCards from './StatisticCards'
import ActiveUsers from './ActiveUsers'
import TableReport from './TableReport'
import TasksTimeline from './TasksTimeline'
import MarketSummary from './MarketSummary'

const progressWidgets = [
	{ title: 'Total Orders', subtitle: 'Last year expenses', value: '1896', progress: 65, label: 'YoY Growth' },
	{ title: 'Products Sold', subtitle: 'Revenue streams', value: '$3M', progress: 85, label: 'Sales' },
	{ title: 'Followers', subtitle: 'People interested', value: '45,9%', progress: 46, label: 'Twitter Progress' }
]

const lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const lineChartDatasets = [
	{ label: 'Income', data: [784, -215, -638, 457, -324, 762, 804] },
	{ label: 'Product Orders', data: [544, -879, 612, 442, -871, -252, 116] }
]

const stockPrices = [
	{ id: 1, title: 'AAPL (Apple)', value: '173,07', currency: 'USD', pricing: '+0.88 (0.51%)' },
	{ id: 2, title: 'GOOGL (Google)', value: '2,789.61', currency: 'USD', pricing: '+17.87 (0.64%)' },
	{ id: 3, title: 'FB (Facebook)', value: '331,90', currency: 'USD', pricing: '+5.42 (1.66%)' },
	{ id: 4, title: 'AMZN (Amazon)', value: '3,242.76', currency: 'USD', pricing: '+18.48 (0.57%)' }
]

const Body = () => (
	<>
		<div className='row g-0 container mx-md-auto'>
			{
				progressWidgets.map(v => (
					<div key={v.title} className='col-md-4 offset-md-3 offset-lg-0 mt-3'>
						<ProgressWidget
							title={v.title}
							subtitle={v.subtitle}
							value={v.value}
							progress={v.progress}
							label={v.label}
						/>
					</div>
				))
			}
		</div>

		<div className='row g-0 justify-content-center mt-3'>
			<div className='col-md-8'>
				<LineChart labels={lineChartLabels} datasets={lineChartDatasets} />
			</div>
		</div>

		<div className='row g-0 bg-primary mt-3'>
			<div className='col-md-12'>
				<StatisticCards />
			</div>
		</div>

		<div className='row g-0'>
			<div className='col-md-12'>
				<ActiveUsers />
			</div>
		</div>

		<div className='row g-0 justify-content-center'>
			<div className='col-md-10'>
				<TableReport />
			</div>
		</div>

		<div className='row g-0 justify-content-center'>
			<div className='col-md-10'>
				<h2 className='text-center'>Tasks Timeline</h2>
				<TasksTimeline />
			</div>
		</div>

		<div className='row g-0 justify-content-center mt-3 mb-3'>
			<div className='col-md-7'>
				<MarketSummary stockPrices={stockPrices} />
			</div>
		</div>
	</>
)

const DashboardPage = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname])

	return (
		<Layout header={<Menu />} body={<Body />} />
	)
}

export default DashboardPage