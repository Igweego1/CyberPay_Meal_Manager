import React, { Fragment } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { routes } from "../Utilities/Routes";

const ChangePassword = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Card.Title className="text-center ">Change Password</Card.Title>
      <Card.Subtitle className="text-center minorText">
        Secure your account for personal access
      </Card.Subtitle>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Old Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>
        </Form>

        <Button onClick={() => navigate(routes.SignIn)} className="d-block w-100 mt-5 h6 mainBtn text-white">
          Change Password
        </Button>
      </Card.Body>
    </Fragment>
  );
};

export default ChangePassword;
