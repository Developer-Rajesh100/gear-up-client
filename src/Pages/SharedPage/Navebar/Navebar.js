import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navebar = () => {
  return (
    <div>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Gear Up</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="/blogs">Blogs</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/signin">Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navebar;
