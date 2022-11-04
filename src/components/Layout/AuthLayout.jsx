import React, { Fragment } from "react";
import { Button, Col, Row, Card, Container } from "react-bootstrap";
import { authRoutes } from "../../Utilities/Routes";
import cyberPaylogo from "../../assets/img/cyberpaylogo.svg";

const AuthLayout = ({ children }) => {
  if (authRoutes.indexOf(window.location.pathname) !== -1) {
    return (
      <Fragment>
        <Row className="justify-content-between my-auto p-3 nav-bar">
          <Col lg={9} md={6} sm={6}>
            {" "}
            <img className="ps-5" src={cyberPaylogo} alt="cyberlogo" />
          </Col>

          <Col lg={3} md={6} sm={6}>
            <div className="mt-2">
              <a className="nav-txt me-3" href="/">
                {" "}
                Don't have an account?
              </a>
              <Button className="navbutton btn-sm">Sign in</Button>
            </div>
          </Col>
        </Row>
        <div className="bg">
          {" "}
          <Container
            fluid
            className="h-100 d-flex align-items-center justify-content-center"
          >
            <Card className="cards px-4"> {children}</Card>
          </Container>
        </div>
      </Fragment>
    );
  }
  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthLayout;
