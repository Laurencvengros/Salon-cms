import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Clients() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Client Name</Card.Title>
              <Card.Text>
                Email: <a href="#clientEmail">client@email.com</a>
              </Card.Text>
              <Card.Text>
                Phone: <a href="#clientPhone">123-456-7890</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Clients;
