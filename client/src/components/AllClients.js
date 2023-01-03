import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import  Container from 'react-bootstrap/Container';


import { useQuery } from '@apollo/client';
import {GET_CLIENTS} from '../utils/queries'
import EditClient from "./EditClient";

const AllClients=() =>{


const {data} = useQuery(GET_CLIENTS);

const userData = data?.me || []

const [modalShow, setModalShow] = React.useState(false);




return(
    <Container>
      <h1> Current Clients</h1>
        
      <div>
      <Row>
    
          {userData.clients?.map(clients => (
            
              <Col xs={12} md={6} lg={4}>
                  <Card className="clientCards" style={{ width: '20rem', marginTop: '30px'}}>
                    <Card.Header className="clientHeader">{clients.firstName} {clients.lastName}</Card.Header>
                    <Card.Body className="clientData">Email: {clients.email}</Card.Body>
                    <Card.Body className="clientData">Phone: {clients.phone}</Card.Body>
                    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Edit Client
      </Button>

      <EditClient 
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
                  </Card>
              </Col>
            
          ))}
      </Row>
      </div>
  
  </Container>
)
};

export default AllClients;