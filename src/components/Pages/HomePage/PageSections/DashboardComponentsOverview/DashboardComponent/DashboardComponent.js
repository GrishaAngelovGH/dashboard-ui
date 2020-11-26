import PropTypes from 'prop-types'

import './DashboardComponent.scss'
import { dashboardComponents } from 'images'

const DashboardComponent = ({ image, title, description }) => (
    <div className='dashboard-component text-center'>
        <img src={dashboardComponents[image]} width={310} height={300} />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
)

DashboardComponent.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default DashboardComponent