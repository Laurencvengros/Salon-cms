import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { EDIT_CLIENT } from '../utils/mutations';
import { useMutation } from '@apollo/client';





function EditClient(props) {
  const [firstName, editFirstName] = useState(props.client.firstName);
  const [lastName, editLastName] = useState(props.client.lastName);
  const [email, editEmail] = useState(props.client.email);
  const [phone, editPhone] = useState(props.client.phone);
  const [editClient, { error }] = useMutation(EDIT_CLIENT);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedClient = { clientId: props.client._id, firstName, lastName, email, phone };
    console.log(updatedClient);
    const { data } = await editClient({
      variables: updatedClient

    })


    console.log(data);
    // props.updateClients(data.editClient.clients)
    props.onHide();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Client Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="first name"
              value={firstName}
              onChange={(e) => editFirstName(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="last name"
              value={lastName}
              onChange={(e) => editLastName(e.target.value)}
              autoFocus
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => editEmail(e.target.value)}
              autoFocus
            />
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="phone"
              value={phone}
              onChange={(e) => editPhone(e.target.value)}
              autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit} data-id={props.client._id}>Update</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditClient;
