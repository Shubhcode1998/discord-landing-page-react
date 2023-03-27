import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SiDiscord } from 'react-icons/si';
import './AppNavBar.css';

function AppNavBar() {
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand Link to="#home"><SiDiscord /> Discord</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link to="#">Download</Nav.Link>
          <Nav.Link to="#">Nitro</Nav.Link>
          <Nav.Link to="#">Discover</Nav.Link>
          <Nav.Link to="#">Safety</Nav.Link>
          <Nav.Link to="#">Support</Nav.Link>
          <Nav.Link to="#">Blog</Nav.Link>
          <Nav.Link to="#">Careers</Nav.Link>
          <Nav.Link to="#"><button  className='open-disc'> Open Discord </button></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default AppNavBar