import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SiDiscord } from 'react-icons/si';

function AppNavBar() {
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home"><SiDiscord /> Discord</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Download</Nav.Link>
          <Nav.Link href="#">Nitro</Nav.Link>
          <Nav.Link href="#">Discover</Nav.Link>
          <Nav.Link href="#">Safety</Nav.Link>
          <Nav.Link href="#">Support</Nav.Link>
          <Nav.Link href="#">Blog</Nav.Link>
          <Nav.Link href="#">Careers</Nav.Link>
          <Nav.Link href="#"><button  className='open-disc'> Open Discord </button></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default AppNavBar