import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import "./NavBar.css";
function NavBar() {
  return (
    <>
      <Navbar expand="lg md" className="bg-body-secondary">
        <Container>
          <Navbar.Brand href="home">NAVBAR</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav  links">
            <Nav className="ms-auto">
              <Nav.Link className="linkBar" href="home" defaultActiveKey="home">
                Home
              </Nav.Link>
              <Nav.Link className="linkBar" href="link">
                Link
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/1">Action1</NavDropdown.Item>

                <NavDropdown.Divider />
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
