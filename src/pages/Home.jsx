import React from "react";
import { Container, Row, Col, Navbar, Button } from "react-bootstrap";
import IMAGES from "../assets/img/images";
import '../styles/Home.css';

const Home = () => {
  return (
    <Container fluid className="body">
      <Navbar className="nav-bar">
        <Container>
          <Navbar.Brand href="#home">
            <img src={IMAGES.logo} alt="cyberlogo" />
          </Navbar.Brand>
          <div className="d-flex gap-3 h6 align-items-center">
            Don't have an account?{" "}
            <Button className="nav-button px-3" size="sm">Sign up</Button>
          </div>
        </Container>
      </Navbar>
      <Row className="mx-5 morePadding"> 
        <Col className={'text-center text-md-start'} xs={12} md={6}>
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
