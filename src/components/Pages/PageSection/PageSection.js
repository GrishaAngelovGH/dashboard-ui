import PropTypes from 'prop-types'

const PageSection = ({ color, height, children }) => (
    <div className='row no-gutters' style={{ background: color, height: height }}>
        <div className='col-md-12'>
            {children}
        </div>
    </div>
)

PageSection.propTypes = {
    color: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired
}

export default PageSection