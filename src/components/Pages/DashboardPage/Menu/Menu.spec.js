import Menu from './Menu'
import { Nav, Navbar } from 'react-bootstrap'

describe('(Component) Menu', () => {
    it('should render component', () => {
        const wrapper = shallow(<Menu />)

        expect(wrapper.equals(
            <Navbar bg='nav-color' expand='lg'>
                <Navbar.Brand href='#'>Dashboard UI</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>

                    <Nav className='navbar-nav ml-auto'>
                        <Nav.Link href='#'>Dashboard</Nav.Link>
                        <Nav.Link href='#'>Overview</Nav.Link>
                        <Nav.Link href='#'>Chat</Nav.Link>
                        <Nav.Link href='#'>Team</Nav.Link>
                        <Nav.Link href='#'>Tasks</Nav.Link>
                        <Nav.Link href='#'>Reports</Nav.Link>
                        <Nav.Link href='#'>Settings</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )).to.equal(true)
    })
})