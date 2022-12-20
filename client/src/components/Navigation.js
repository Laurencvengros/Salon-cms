import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <NavLink to="/home">Salon CMS</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/clients">Clients</NavLink>
            <NavLink to="/calendar">Calendar</NavLink>
          </Nav>
          <Nav>
            <Navbar.Text>
              Signed in as: <a href="#login">Salon Owner</a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
