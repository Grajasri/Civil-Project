import './Nav.css';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navs = () => {
  return (
    <div>
      <Navbar expand='lg' className='position-absolute w-100 z-2'>
            <Container>
                <Navbar.Brand className='text-dark'>
                    <NavLink to='/' className='text-decoration-none  d-flex'>
                        <img className='' src="./logo-img.jpg" alt="logo" />
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' className='text-dark' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto w-100 justify-content-center'>
                        <NavLink href='/' className='text-dark text-decoration-none'>ABOUT US</NavLink>
                        <NavDropdown title="SERVICES" id="basic-nav-dropdown"  style={{"margin-top":" -7px","color":"black"}}>
                            <NavDropdown.Item href="./ServiceEsti">REBAR ESTIMTION</NavDropdown.Item>
                            <NavDropdown.Item href="./ServiceDetail">
                                REBAR DETAILING
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <NavLink href='/holidays' className='text-dark text-decoration-none'>ESTIMATION</NavLink>
                        <NavLink href='/city-breaks' className='text-dark text-capitalize text-decoration-none'>DETAILING</NavLink>
                        <NavLink href='/destinations' className='text-dark text-decoration-none'>CONTACT US</NavLink>
                    </Nav>
                    <Button variant='light'>
                        <NavLink to='/' className='text-decoration-none text-capitalize text-dark text-nowrap'>Sign in</NavLink>
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Navs;
