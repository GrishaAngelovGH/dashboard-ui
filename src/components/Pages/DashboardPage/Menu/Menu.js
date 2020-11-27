import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { Navbar, Nav } from 'react-bootstrap'
import DropdownButton from 'react-bootstrap/DropdownButton'

import './Menu.scss'

export const SearchIcon = () => (
    <svg width='1em' height='1em' viewBox='0 0 16 16' className='bi bi-search' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
        <path fillRule='evenodd' d='M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z' />
        <path fillRule='evenodd' d='M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z' />
    </svg>
)

export const FolderIcon = () => (
    <svg width='1em' height='1em' viewBox='0 0 16 16' className='bi bi-folder' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
        <path d='M9.828 4a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 6.173 2H2.5a1 1 0 0 0-1 .981L1.546 4h-1L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3v1z' />
        <path fillRule='evenodd' d='M13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zM2.19 3A2 2 0 0 0 .198 5.181l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H2.19z' />
    </svg>
)

export const CalendarDateIcon = () => (
    <svg width='2em' height='2em' viewBox='0 0 16 16' className='bi bi-calendar-date' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
        <path fillRule='evenodd' d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z' />
        <path d='M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z' />
    </svg>
)

export const BellIcon = () => (
    <svg width='2em' height='2em' viewBox='0 0 16 16' className='bi bi-bell' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
        <path d='M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z' />
        <path fillRule='evenodd' d='M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z' />
    </svg>
)

export const GraphUpIcon = () => (
    <svg width='2em' height='2em' viewBox='0 0 16 16' className='bi bi-graph-up' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
        <path fillRule='evenodd' d='M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z' />
    </svg>
)

export const DisplayIcon = () => (
    <svg width='2em' height='2em' viewBox='0 0 16 16' className='bi bi-display' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
        <path d='M5.75 13.5c.167-.333.25-.833.25-1.5h4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75z' />
        <path fillRule='evenodd' d='M13.991 3H2c-.325 0-.502.078-.602.145a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z' />
    </svg>
)

const Menu = () => (
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
)

export default Menu