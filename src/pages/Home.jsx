import React from "react";
import { Container, Row, Col, Navbar, Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import IMAGES from "../assets/img/images";
import '../App.css';
import { routes } from "../Utilities/Routes";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container fluid className="p-0 home-body">
      <Navbar className="nav-bar">
        <Container>
          <Navbar.Brand href="/">
            <img src={IMAGES.logo} alt="cyberlogo" />
          </Navbar.Brand>
          <div className="d-flex gap-3 h6 align-items-center">
            Already have an account?{" "}
            <Button onClick={() => navigate(routes.Signin)} className="nav-button px-3" size="sm">Sign in</Button>
          </div>
        </Container>
      </Navbar>
      <Row className="mx-5 morePadding"> 
        <Col className={'text-center text-md-start'} xs={12} md={5}>
          <h1>Contact the Admin</h1>
          <p>
            Don’t panic.... quickly reach out to the Human 
            Resource Department for your account registration. 
          </p>
        </Col>
      </Row>
    </Container>
  )
};

export default Home;
