import './SummaryLabel.scss'

const SummaryLabel = ({ value, label, inverted }) => (
	<div
		className={inverted ? 'd-flex flex-column flex-column-reverse m-2' : 'd-flex flex-column m-2'}
		data-testid='summary-label'
	>
		<div className='summary-value d-flex justify-content-center align-items-center'>{value}</div>
		<div className='summary-label text-center text-white text-uppercase m-1'>{label}</div>
	</div>
)

export default SummaryLabel