import React from "react";
import { Button, Col, Row, Container, Card } from "react-bootstrap";
import { authRoutes } from "../../Utilities/Routes";
import { Outlet } from "react-router-dom";
import IMAGES from "../../assets/img/images";
import '../../App.css';

const AuthLayout = () => {
  if (authRoutes.indexOf(window.location.pathname) !== -1) {
    return (
      <Container fluid>
        <Row className="justify-content-between nav-bar">
          <Col lg={9} md={6} sm={6}>
            {" "}
            <img className="ps-5" src={IMAGES.logo} alt="cyberlogo" />
          </Col>

          <Col lg={3} md={6} sm={6}>
            <div>
              Don't have an account?{" "}
              <Button className="navbutton">Sign in</Button>
            </div>
          </Col>
        </Row>
        <Container fluid className="h-100 d-flex align-items-center justify-content-center mt-5">
          <Card className="cards">
            {" "}
            <Outlet/>
          </Card>
        </Container>
      </Container>
    );
  }
  return <React.Fragment><Outlet/></React.Fragment>;
};

export default AuthLayout;
