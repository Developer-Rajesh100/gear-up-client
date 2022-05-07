import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase.Init";
import { signOut } from "firebase/auth";

const Navebar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Gear Up
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/home#products">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/home#bikes">
                Bikes
              </Nav.Link>
              <Nav.Link as={Link} to="/home#places">
                Places
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
            </Nav>
            {user ? (
              <Nav>
                <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link as={Link} to="/login">
                  Sign In
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navebar;
