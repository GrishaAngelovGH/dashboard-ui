import PropTypes from 'prop-types'

const PageSection = ({ style, children }) => (
    <div className='row no-gutters' style={style}>
        <div className='col-md-12'>
            {children}
        </div>
    </div>
)

PageSection.propTypes = {
    style: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired
}

export default PageSection