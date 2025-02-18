import { Link } from 'react-router-dom'
import './LinkButton.scss'

const LinkButton = ({ href, children }) => (
	<Link to={href} className='d-block text-center text-uppercase link-button'>
		{children}
	</Link>
)

export default LinkButton