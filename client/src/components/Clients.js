import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AddClient from "./AddClient";

function Clients(props) {
  const [clients, setClients] = useState([]);

  return (

    <div>
      <div>
        {clients.map(client => (
          <div className="clientContainer">
            <Card className="clientCards" style={{ width: '20rem' }}>
              <Card.Header className="clientHeader">{client.firstName} {client.lastName}</Card.Header>
              <Card.Body className="clientData">{client.email}</Card.Body>
              <Card.Body className="clientData">{client.phone}</Card.Body>
            </Card>
          </div>
        ))}
      </div>
      {props.formIsOpen ? <AddClient setClients={setClients}
        onCancel={props.closeClientForm} /> : <button className="addClientBtn" onClick={props.openClientForm}>Add New Client</button>}
    </div>
  );
}

export default Clients;
