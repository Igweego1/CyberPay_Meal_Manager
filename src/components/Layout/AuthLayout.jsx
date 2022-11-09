import React, { Fragment } from "react";
import { Button, Card, Container, Navbar } from "react-bootstrap";
import { authRoutes } from "../../Utilities/Routes";
import cyberPaylogo from "../../assets/img/cyberpaylogo.svg";
import { Outlet } from "react-router-dom";

const AuthLayout = ({ children }) => {
  if (authRoutes.indexOf(window.location.pathname) !== -1) {
    return (
      <Fragment>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">
              <img src={cyberPaylogo} alt="cyberlogo" />
            </Navbar.Brand>
            <div className="d-flex gap-3">
              <a className="nav-txt " href="/">
                {" "}
                Don't have an account?
              </a>
              <Button className="navbutton btn-sm px-3">Sign in</Button>
            </div>
          </Container>
        </Navbar>
        <div className="bg">
          {" "}
          <Container
            fluid
            className="h-100 d-flex align-items-center justify-content-center"
          >
            <Card className="cards px-4">
              {" "}
              <Outlet />
            </Card>
          </Container>
        </div>
      </Fragment>
    );
  }
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default AuthLayout;
