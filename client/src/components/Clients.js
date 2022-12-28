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
          <div>
            <p>{client.firstName} {client.lastName} {client.email} </p>
            <p>{client.phone}</p>
          </div>
        ))}
      </div>
      {props.formIsOpen ? <AddClient setClients={setClients}
        onCancel={props.closeClientForm} /> : <button className="addClientBtn" onClick={props.openClientForm}>Add New Client</button>}
    </div>
  );
}

export default Clients;
