import React, { Fragment } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {routes} from '../Utilities/Routes';
import '../App.css';

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
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
                  <Form.Check style={{color: '#5F6063'}} type="checkbox" label="Remember Me" />
                </Form.Group>
              </Col>
              <Col className="text-end">
                <Card.Link href={`${routes.ForgotPassword}`} className="text-decoration-none minorText">Forgot pin?</Card.Link>
              </Col>
            </Row>
            <Button onClick={() => navigate(routes.Onboarding)} className="w-100 p-3 mt-5 h6 mainBtn text-center text-white" size="lg">
              Sign In
            </Button>
          </Form>
        </Card.Body>
    </Fragment>
  );
};

export default SignIn;
