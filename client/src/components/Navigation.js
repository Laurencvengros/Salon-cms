import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <NavLink to="/home" className="navBrand">
          Salon CMS
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/clients" className="navLinks">
              Add Clients
            </NavLink>
            <NavLink to="/allclients" className="navLinks">
              View Clients
            </NavLink>
            <NavLink to="/calendar" className="navLinks">
              Calendar
            </NavLink>
          </Nav>
          <Nav>
            <Navbar.Text className="navText">
              Signed in as:{" "}
              <a className="signedIn" href="#login">
                Salon Owner
              </a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
