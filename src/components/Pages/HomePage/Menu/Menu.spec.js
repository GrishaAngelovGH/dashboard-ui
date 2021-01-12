import { Navbar, Nav } from 'react-bootstrap'
import Menu, { SearchIcon, UserIcon } from './Menu'

describe('(Component) Menu', () => {
    it('should render component', () => {
        const wrapper = shallow(<Menu />)

        expect(wrapper.equals(
            <Navbar bg='nav-color' expand='lg' className='navbar-menu-container'>
                <Navbar.Brand>Dashboard UI</Navbar.Brand>

                <div className='icons-bar d-flex justify-content-around align-items-center'>
                    <span className='mr-2 link-border-right'>
                        <SearchIcon width={'2'} height={'1.8'} />
                    </span>

                    <UserIcon width={'2'} height={'2'} />
                </div>

                <Navbar.Toggle aria-controls='basic-navbar-nav' />

                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto w-100'>
                        <Nav.Link href='#/' className='link-border-right ml-lg-auto'>PRODUCTS</Nav.Link>
                        <Nav.Link href='#/' className='link-border-right'>DOWNLOADS</Nav.Link>
                        <Nav.Link href='#/' className='link-border-right'>PRICING</Nav.Link>
                        <Nav.Link href='#/' className='link-border-right'>COMPANY</Nav.Link>
                        <span className='ml-2 mt-2 icon-search-svg'>
                            <SearchIcon width={'1'} height={'1'} />
                        </span>
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse className='user-action flex-grow-0 ml-3'>
                    <Nav.Link href='#/' className='link-border-right'>LOG IN</Nav.Link>
                    <Nav.Link href='#/' className='sign-up-btn ml-2 mr-2'>SIGN UP</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        )).to.equal(true)
    })

    it('should render SearchIcon', () => {
        const wrapper = shallow(<SearchIcon width={'1'} height={'2'} />)

        expect(wrapper.equals(
            <svg width={'1em'} height={'2em'} viewBox='0 0 16 16' className='bi bi-search' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                <path fillRule='evenodd' d='M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z' />
                <path fillRule='evenodd' d='M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z' />
            </svg>
        )).to.equal(true)
    })

    it('should render UserIcon', () => {
        const wrapper = shallow(<UserIcon width={'1'} height={'2'} />)

        expect(wrapper.equals(
            <svg width={'1em'} height={'2em'} viewBox='0 0 16 16' className='bi bi-person' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                <path fillRule='evenodd' d='M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z' />
            </svg>
        )).to.equal(true)
    })
})