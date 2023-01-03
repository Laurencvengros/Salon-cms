import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';


import { useQuery } from '@apollo/client';
import { GET_CLIENTS } from '../utils/queries'
import EditClient from "./EditClient";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../utils/mutations";

const AllClients = () => {
  const [deleteClient, { error }] = useMutation(DELETE_CLIENT);

  const { data } = useQuery(GET_CLIENTS);

  const userData = data?.me || []

  const [modalShow, setModalShow] = React.useState(false);

  const [client, deletedClient] = useState("");


  const handleDelete = async (e) => {
    const { data } = await deleteClient({
      variables: { clientId: e.target.dataset.id }
    })
  }

  return (
    <Container>
      <h1> Current Clients</h1>

      <div>
        <Row>

          {userData.clients?.map(client => (

            <Col xs={12} md={6} lg={4}>
              <Card className="clientCards" style={{ width: '20rem', marginTop: '30px' }}>
                <Card.Header className="clientHeader">{client.firstName} {client.lastName}</Card.Header>
                <Card.Body className="clientData">Email: {client.email}</Card.Body>
                <Card.Body className="clientData">Phone: {client.phone}</Card.Body>
                <>
                  <div className="d-flex justify-content-around">
                    <Button className="editClientBtn" onClick={() => setModalShow(true)}>
                      Edit Client
                    </Button>
                    <Button onClick={handleDelete} data-id={client._id} className="deleteClientBtn">Delete</Button>
                  </div>
                  <EditClient
                    show={modalShow}
                    client={client}
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