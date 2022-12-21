import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AddClient from "./AddClient";

function Clients() {
  return (
    <div>
      <button className="addClientBtn">Add New Client</button>
      <AddClient />
    </div>
  );
}

export default Clients;
