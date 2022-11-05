import React from "react";
import { Card, Container, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import '../styles/ForgotPassword.css';

const ForgotPassword = () => {
  return (
    <Container fluid className="h-100 d-flex align-items-center justify-content-center">
      <Card className="cards px-4">
        {" "}
        <Card.Title className="text-center">Forgot Password</Card.Title>
        <Card.Subtitle className="minorText text-center">No worries! You can create a new one.</Card.Subtitle>
        <Card.Body className="mt-4">
          <Form>
            <Row>
              <Col xs={4}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Prefix</Form.Label>
                  <Form.Select className="text-muted">
                    <option selected>CYB</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={8}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Staff id</Form.Label>
                  <Form.Control type="text" placeholder="Staff id" />
                </Form.Group>
              </Col>
            </Row>
            <Button className="w-100 mt-5 p-3 h6 mainBtn text-center text-white" size="lg">
              Reset password
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
};

export default ForgotPassword;
