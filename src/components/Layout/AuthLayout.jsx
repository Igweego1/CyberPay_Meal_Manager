import React , {Fragment} from "react";
import { Button, Col, Row, Container, Card, Navbar } from "react-bootstrap";
import { authRoutes } from "../../Utilities/Routes";
import { Outlet } from "react-router-dom";
import IMAGES from "../../assets/img/images";
import '../../App.css';

const AuthLayout = () => {
  if (authRoutes.indexOf(window.location.pathname) !== -1) {
    return (
      <Fragment>
        <Navbar className="nav-bar">
          <Container>
            <Navbar.Brand href="#home">
              <img src={IMAGES.logo} alt="cyberlogo" />
            </Navbar.Brand>
            <div className="d-flex gap-3">
              Don't have an account?{" "}
              <Button className="nav-button px-3" size="sm">Sign in</Button>
            </div>
          </Container>
        </Navbar>
        <div className="bg">
          <Container fluid className="h-100 d-flex align-items-center justify-content-center p-0">
            <Card className="cards bg-white px-4">
              {" "}
              <Outlet/>
            </Card>
          </Container>
        </div>
      </Fragment>
    );
  }
  return <React.Fragment><Outlet/></React.Fragment>;
};

export default AuthLayout;
