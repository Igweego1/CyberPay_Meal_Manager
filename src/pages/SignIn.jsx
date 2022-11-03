import React, { Fragment } from "react";
import { Card, Container, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import {AiTwotoneEye} from 'react-icons/ai';
import '../styles/SignIn.css';

const SignIn = () => {
  return (
    <Container fluid className="h-100 d-flex align-items-center justify-content-center">
      <Card className="cards px-4">
        {" "}
        <Card.Title className="text-center">Sign In</Card.Title>
        <Card.Subtitle className="minorText text-center">Fill details to access your account</Card.Subtitle>
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
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
              {/* <i><AiTwotoneEye/></i> */}
            </Form.Group>
            <Row className="justify-content-between">
              <Col>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
              </Col>
              <Col className="text-end">
                <Card.Link href="/" className="text-decoration-none minorText">Forgot pin?</Card.Link>
              </Col>
            </Row>
            <Button className="w-100 mt-5 h6 mainBtn text-center text-white" size="lg">
              Sign In
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SignIn;
