import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";


import Auth from '../utils/auth';

function Navigation() {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
  
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <NavLink to="/home" className="navBrand">
          Salon CMS
        </NavLink>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          

            {Auth.loggedIn() ? (
                <>
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
                        <NavLink style={{fontSize:"10pt"}} onClick={logout}>
                          <button className='btn'>
                            LogOut
                          </button>
                        </NavLink>
                    </Navbar.Text>  
                  </Nav>
                </>
              ) : (
                  <NavLink to="/" className="navLinks justify-content-end"> Login/Sign Up </NavLink>
              )}


          </Navbar.Collapse>
      </Container>
    </Navbar>

    


    
  );
}

export default Navigation;
