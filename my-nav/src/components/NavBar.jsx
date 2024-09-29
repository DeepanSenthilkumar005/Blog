
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar({ onShowNotification }) {
  return (
    <>
      <Navbar expand="lg md" className="bg-body-secondary">
        <Container>
          <Navbar.Brand href="home">NAVBAR</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav links">
            <Nav className="ms-auto">
              <Nav.Link className="linkBar" href="home" defaultActiveKey="home">
                Home
              </Nav.Link>
              <Nav.Link className="linkBar" onClick={onShowNotification}>
                Notifications
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
