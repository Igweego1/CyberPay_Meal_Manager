import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../styles/ContactAdminPage.css';

const ContactAdminPage = () => {
  return (
    <Container fluid className="body h-100">
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

export default ContactAdminPage;
