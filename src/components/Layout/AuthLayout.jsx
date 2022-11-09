import React , {Fragment} from "react";
import { Button, Container, Card, Navbar } from "react-bootstrap";
import { routes, authRoutes } from "../../Utilities/Routes";
import { Outlet, useNavigate } from "react-router-dom";
import IMAGES from "../../assets/img/images";
import '../../App.css';

const AuthLayout = () => {
  const navigate = useNavigate();

  if (authRoutes.indexOf(window.location.pathname) !== -1) {
    return (
      <Fragment>
        <Navbar className="nav-bar">
          <Container>
            <Navbar.Brand href="#home">
              <img src={IMAGES.logo} alt="cyberlogo" />
            </Navbar.Brand>
            <div className="d-flex gap-3 h6 align-items-center">
              Already have an account?{" "}
              <Button onClick={() => navigate(`${routes.Signin}`)} className="nav-button px-3" size="sm">Sign in</Button>
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
