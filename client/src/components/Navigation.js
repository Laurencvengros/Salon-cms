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
  
    <Navbar sticky="top" collapseOnSelect expand="xl">
      <Container>
        <NavLink to="/home" className="navBrand">
          {userData.salonName}
        </NavLink>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  className="justify-content-end">
        
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

                  
                    <Navbar.Text className="navLinks" id='navText'>
                      Signed in as: {userData.name}
                        
                    </Navbar.Text>  
                  
                    <NavLink onClick={logout} style={{marginLeft: '80px', textDecoration: 'none', color: '#FCF9F4'}} id='logout'>
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
