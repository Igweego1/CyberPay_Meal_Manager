import React, { Fragment } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { routes } from "../Utilities/Routes";
import '../App.css';

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Card.Title className="text-center">Reset password</Card.Title>
        <Card.Subtitle className="minorText text-center">Fill details to reset your password</Card.Subtitle>
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
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Button onClick={() => navigate(routes.EmailVerification)} className="w-100 p-3 mt-5 h6 mainBtn text-center text-white" size="lg">
              Reset Password
            </Button>
          </Form>
        </Card.Body>
    </Fragment>
  );
};

export default ResetPassword;
