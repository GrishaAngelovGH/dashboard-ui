import './LinkButton.scss'

const LinkButton = ({ href, children }) => (
    <a href={href} className='link-button'>
        {children}
    </a>
)

export default LinkButton