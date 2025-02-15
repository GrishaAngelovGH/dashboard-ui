import ProgressBar from 'react-bootstrap/ProgressBar'
import './ProgressWidget.scss'

const ProgressWidget = ({ title, subtitle, value, progress, label }) => (
	<div className='bg-white rounded progress-widget p-2'>
		<div className='row'>
			<div className='col-6 col-md-6'>
				<h5>{title}</h5>
				<p className='content-color'>{subtitle}</p>
			</div>
			<div className='col-6 col-md-6 d-flex justify-content-end'>
				<div className='content-value'>{value}</div>
			</div>
		</div>
		<div className='row'>
			<div className='col-md-12'>
				<ProgressBar animated now={progress} />
			</div>
		</div>

		<div className='d-flex justify-content-between content-color'>
			<div>{label}</div>
			<div>100%</div>
		</div>
	</div>
)

export default ProgressWidget