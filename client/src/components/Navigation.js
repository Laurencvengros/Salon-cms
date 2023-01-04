import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useQuery } from '@apollo/client';
import {GET_CLIENTS} from '../utils/queries'


import Auth from '../utils/auth';

function Navigation() {

  const {data} = useQuery(GET_CLIENTS);

  const userData = data?.me || []

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

                  
                    <Navbar.Text className="navText">
                      Signed in as: {userData.name}
                        
                    </Navbar.Text>  
                  
                    <NavLink onClick={logout} className="navLinks">
                            LogOut
                    </NavLink>
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
