import { Link } from 'react-router-dom'
import './LinkButton.scss'

const LinkButton = ({ href, children }) => (
    <Link to={href} className='link-button'>
        {children}
    </Link>
)

export default LinkButton