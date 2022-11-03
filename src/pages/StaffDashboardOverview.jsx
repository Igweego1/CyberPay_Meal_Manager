import React, { Fragment } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import cyberPayLogo from '../cyberpaylogo.svg';
import '../App.css';

const StaffDashboardOverview = () => {
  return (
    <Fragment>
      <Container fluid>
          <Row>
            <Col className="sidebar d-flex flex-column p-0" sm={12} md={2}>
              <Navbar className="borderLight w-100 ps-3" bg="white">
                <Navbar.Brand>
                  <img src={cyberPayLogo}/>
                </Navbar.Brand>
              </Navbar>
            </Col>
            <Col sm={12} md={10} className="p-0">
              <Navbar bg="white borderLight ps-3">
                <Navbar.Text>Meal orders breakdown</Navbar.Text>
              </Navbar>
            </Col>
          </Row>
        </Container>
    </Fragment>
    
  );
};

export default StaffDashboardOverview;
