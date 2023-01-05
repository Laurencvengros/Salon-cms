import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from 'react-bootstrap/Container';
import AddClient from "./AddClient";



function Clients(props) {
  const [clients, setClients] = useState([]);




  return (


    <Container>

      <div class="text-center">
        <div>
          <Row>
            {clients.map(client => (
              <Col xs={12} md={6} lg={4}>
                <div className="clientContainer">
                  <Card className="clientCards" style={{ width: '20rem' }}>
                    <Card.Header className="clientHeader">{client.firstName} {client.lastName}</Card.Header>
                    <Card.Body className="clientData">{client.email}</Card.Body>
                    <Card.Body className="clientData">{client.phone}</Card.Body>
                  </Card>

                </div>
              </Col>

            ))}
          </Row>
        </div>
        {props.formIsOpen ? <AddClient setClients={setClients}
          onCancel={props.closeClientForm} /> : <button className="addClientBtn" onClick={props.openClientForm}  style={{ marginBottom: '300px', marginTop: '200px', backgroundColor: '#706E51', color: 'white', border: 'none', borderRadius: '.2rem', fontSize: '30px'}} class="btn  btn-lg">Add New Client</button>}
      </div>
    </Container>

  );
}

export default Clients;
