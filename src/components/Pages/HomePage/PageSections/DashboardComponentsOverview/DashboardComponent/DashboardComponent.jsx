import './DashboardComponent.scss'
import { dashboardComponents } from 'images'

const DashboardComponent = ({ image, title, description }) => (
	<div className='dashboard-component text-center'>
		<img src={dashboardComponents[image]} width={310} height={300} />
		<h2>{title}</h2>
		<p>{description}</p>
	</div>
)

export default DashboardComponent