import { Fragment } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import "../styles/ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <Fragment>
      <Card.Title className="text-center">Forgot Password?</Card.Title>
      <Card.Subtitle className="text-center mt-1 minorText">
        No worries! You can create a new one
      </Card.Subtitle>
      <Card.Body className="mt-4">
        <Form>
          <Row>
            <Col xs={4}>
              {" "}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Prefix</Form.Label>
                <Form.Select className="text-muted">
                  <option selected>CYB</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={8}>
              {" "}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Staff id</Form.Label>
                <Form.Control type="text" placeholder="Enter Staff id" />
              </Form.Group>
            </Col>
          </Row>
          <Button className="w-100 mt-5 mainBtn text-white">
            Reset Password
          </Button>
        </Form>
      </Card.Body>
    </Fragment>
  );
};

export default ForgotPassword;
