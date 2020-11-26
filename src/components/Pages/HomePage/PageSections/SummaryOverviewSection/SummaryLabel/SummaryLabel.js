import PropTypes from 'prop-types'

import './SummaryLabel.scss'

const SummaryLabel = ({ value, label, inverted }) => (
    <div
        className={inverted ? 'd-flex flex-column flex-column-reverse wow fadeInUp m-2' : 'd-flex flex-column wow fadeInUp m-2'}
        data-wow-duration='5s'
        data-wow-delay='0.5s'
    >
        <div className='summary-value d-flex justify-content-center align-items-center'>{value}</div>
        <div className='summary-label text-center text-white text-uppercase m-1'>{label}</div>
    </div>
)

SummaryLabel.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    inverted: PropTypes.bool.isRequired
}

export default SummaryLabel