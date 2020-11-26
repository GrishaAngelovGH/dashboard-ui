import PropTypes from 'prop-types'

const PageSection = ({ color, children }) => (
    <div className='row no-gutters' style={{ background: color, height: 520 }}>
        <div className='col-md-12'>
            {children}
        </div>
    </div>
)

PageSection.propTypes = {
    color: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}

export default PageSection