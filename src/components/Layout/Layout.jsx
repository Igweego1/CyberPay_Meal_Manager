import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { authRoutes } from "../../Utilities/Routes";
import IMAGES from "../../assets/img/images";

const Layout = ({ children }) => {
  if (authRoutes.indexOf(window.location.pathname) !== -1) {
    return (
      <section>
        <Row className="justify-content-between nav-bar">
          <Col lg={9} md={6} sm={6}>
            {" "}
            <img className="ps-5" src={IMAGES.cylogo} alt="cyberlogo" />
          </Col>

          <Col lg={3} md={6} sm={6}>
            <div>
              Don't have an account?{" "}
              <Button className="navbutton">Sign in</Button>
            </div>
          </Col>
        </Row>
        <div className="bg">{children}</div>
      </section>
    );
  }
  return <React.Fragment>{children}</React.Fragment>;
};

export default Layout;
