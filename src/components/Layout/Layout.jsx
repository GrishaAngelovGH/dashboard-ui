import { Container } from 'react-bootstrap'

const Layout = ({ header, body }) => (
	<Container fluid className='p-0'>
		<Layout.Header content={header} />
		<Layout.Body content={body} />
	</Container>
)

Layout.Header = ({ content }) => (
	<div className='row g-0'>
		<div className='col-md-12'>
			{content}
		</div>
	</div>
)

Layout.Body = ({ content }) => (
	<div className='row g-0'>
		<div className='col-md-12'>
			{content}
		</div>
	</div>
)

export default Layout 
