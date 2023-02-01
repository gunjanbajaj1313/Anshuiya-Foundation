import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './Header.css';
import logo from '../../assets/logo.png'


function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white"  variant="light">
      <Container>
        <Navbar.Brand href="#Home" ><img src={logo} style={{width:"300px"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto items flex-grow-1 justify-content-between" >
          <Nav.Link href="#Home" className='item'>Home</Nav.Link>
            <Nav.Link href="#About" className='item'>About</Nav.Link>
            <Nav.Link href="#Causes" className='item' >Causes</Nav.Link>
            <Nav.Link href="#Partners" className='item' >Partners</Nav.Link>
            <Nav.Link href="#Contact" className='item' >Contact</Nav.Link>
            <Nav.Link href="#Registration" className='item' > 
 <i class="fa-solid fa-arrow-up-right-from-square" style={{marginRight:"5px"}}></i>Registration</Nav.Link>
            <NavDropdown title="Login" id="collasible-nav-dropdown" className='item' >
              <NavDropdown.Item href="#subscriber" className='item'>Subscriber Login</NavDropdown.Item>
              <NavDropdown.Item href="#employee" className='item'>
                Employee Login
              </NavDropdown.Item>
            </NavDropdown >
            <NavDropdown title="En" id="collasible-nav-dropdown" className='item'>
              <NavDropdown.Item href="#english" className='item'>En</NavDropdown.Item>
              <NavDropdown.Item href="hindi" className='item'>
              हि
              </NavDropdown.Item>
            </NavDropdown>
            <Button variant="outline-danger" className="my-btn">Donate now</Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
