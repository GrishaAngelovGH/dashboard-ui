import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { Navbar, Nav } from 'react-bootstrap'
import DropdownButton from 'react-bootstrap/DropdownButton'

import Menu, {
    SearchIcon,
    FolderIcon,
    CalendarDateIcon,
    BellIcon,
    GraphUpIcon,
    DisplayIcon
} from './Menu'

describe('(Component) Menu', () => {
    it('should render component', () => {
        const wrapper = shallow(<Menu />)

        expect(wrapper.equals(
            <Navbar bg='nav-color' expand='lg' className='shadow p-3 mb-5 bg-white rounded'>
                <Navbar.Brand>Dashboard UI</Navbar.Brand>

                <Navbar.Toggle aria-controls='basic-navbar-nav' />

                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto w-100 d-flex justify-content-around'>
                        <Button variant='primary'>
                            <SearchIcon />  Search
                </Button>

                        <DropdownButton id='id1' variant='outline-primary' title='Categories' />
                        <DropdownButton id='id2' variant='outline-primary' title={<span><FolderIcon /><span className='ml-1'>Files</span></span>} />
                        <DropdownButton id='id3' variant='outline-primary' title={<span><Badge pill variant='primary'>3</Badge> Projects</span>} />

                        <Button variant='outline-primary'>
                            <CalendarDateIcon />
                        </Button>

                        <Button variant='outline-primary'>
                            <BellIcon />
                        </Button>

                        <Button variant='outline-primary'>
                            <GraphUpIcon />
                        </Button>

                        <Button variant='outline-primary'>
                            <DisplayIcon />
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )).to.equal(true)
    })
})