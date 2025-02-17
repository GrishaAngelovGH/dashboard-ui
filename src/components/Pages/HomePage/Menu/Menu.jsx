import { Container, Navbar, Nav } from 'react-bootstrap'

export const SearchIcon = ({ width, height }) => (
	<svg width={`${width}em`} height={`${height}em`} viewBox='0 0 16 16' className='bi bi-search' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
		<path fillRule='evenodd' d='M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z' />
		<path fillRule='evenodd' d='M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z' />
	</svg>
)

export const UserIcon = ({ width, height }) => (
	<svg width={`${width}em`} height={`${height}em`} viewBox='0 0 16 16' className='bi bi-person' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
		<path fillRule='evenodd' d='M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z' />
	</svg>
)

const Menu = () => (
	<Navbar expand='lg' bg='primary' data-bs-theme='dark'>
		<Container fluid>
			<Navbar.Brand>Dashboard UI</Navbar.Brand>
			<div className='d-flex justify-content-around align-items-center'>
				<span className='d-block d-md-none mr-2'>
					<SearchIcon width={'2'} height={'1.8'} />
				</span>

				<span className='d-block d-md-none'>
					<UserIcon width={'2'} height={'2'} />
				</span>
			</div>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto w-100 text-uppercase'>
					<Nav.Link href='#/' className='ml-lg-auto'>Products</Nav.Link>
					<Nav.Link href='#/'>Downloads</Nav.Link>
					<Nav.Link href='#/'>Pricing</Nav.Link>
					<Nav.Link href='#/'>Company</Nav.Link>
				</Nav>
			</Navbar.Collapse>

			<Navbar.Collapse className='flex-grow-0 gap-4 ml-3 text-uppercase'>
				<Nav.Link href='#/' className='text-white mt-4 mb-2 m-md-0'>Log In</Nav.Link>
				<Nav.Link href='#/' className='text-white'>Sign Up</Nav.Link>
			</Navbar.Collapse>
		</Container>
	</Navbar>
)

export default Menu